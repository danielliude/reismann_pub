import logging
import json

from django.core.urlresolvers import reverse
from django.shortcuts import redirect, get_object_or_404
from django.shortcuts import render
from django.http import Http404, HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from userena.decorators import secure_required
from guardian.decorators import permission_required_or_403

from profiles.models import Profile, ProfileSettings
from profiles.forms import ProfileForm, ProfileIdForm, SettingsForm
from profiles.utils import get_user_profile
from profiles.managers import ProfileMailManager
from core.utils import ExtraContextTemplateView
from contacts.forms import ContactForm
from contacts.utils import get_user_contact
from services.utils import get_distinct_categories, get_distinct_cities,get_distinct_languages,get_distinct_tags, get_services_rating, get_user_services, get_user_active_services
from followship.utils import get_number_followers, get_number_following
from bookings.utils import get_number_bookings
from configurations.utils import get_active_service_categories
from insite_messages.models import Message

from album.forms import AlbumImageUploadForm
from album.models import AlbumImage, MyAlbum


logger = logging.getLogger("profiles")

def view_own_profile(request, username):

  if request.user.is_authenticated():

    return request.user.username == username

  return False


def makeContextForDetails(request, context):

    if request.user.is_authenticated():

        number_followers = get_number_followers(request.user)
        number_following = get_number_following(request.user)
        number_bookings = get_number_bookings(request.user)

        context['number_followers'] = number_followers
        context['number_following'] = number_following
        context['number_bookings'] = number_bookings

    return context

def makeContextForNotifications(request, context):

    if request.user.is_authenticated():

        context['notifications'] = request.user.notifications.unread()

    return context

def makeContextForMessages(request, context):

    if request.user.is_authenticated():

        unread_messages = Message.objects.unread_for(request.user)
        context['unread_messages'] = unread_messages

    return context

def makeContextForActiveServices(user, context):

    services = get_user_active_services(user=user)
    context['services'] = services

    return context


def makeContextForAllUserServices(user, context):

    services = get_user_services(user = user)
    context['services'] = services

    return context

def makeContextForProfile(request, user, context):

    profile = get_user_profile(user)
    context['profile'] = profile

    context['view_own_profile'] = view_own_profile(request, user.username)

    if request.user.is_authenticated():

        if profile.settings.is_provider:
            provider_rating = get_services_rating(user)
            context['profile_rating'] = provider_rating
        else:
            user_rating = 0
            context['profile_rating'] = user_rating
    return context

def profile(request, username, template_name="profiles/profile.html",
                   extra_context=None, **kwargs):

  if not extra_context: extra_context = dict()

  user = get_object_or_404(User, username__iexact=username)
  extra_context = makeContextForProfile(request, user, extra_context)
  extra_context = makeContextForActiveServices(user, extra_context)
  extra_context = makeContextForNotifications(request, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def dashboard(request, username, template_name='profiles/dashboard.html',
              extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)

  if not extra_context: extra_context = dict()

  extra_context = makeContextForNotifications(request, extra_context)
  extra_context = makeContextForProfile(request, user, extra_context)
  extra_context = makeContextForDetails(request, extra_context)
  extra_context = makeContextForAllUserServices(user, extra_context)
  extra_context = makeContextForMessages(request, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def detail(request, username, profile_form=ProfileForm, contact_form=ContactForm,
                 template_name='profiles/detail.html', success_url=None,
                 extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)

  profile = get_user_profile(user)
  contact = get_user_contact(user)

  user_initial = {'first_name': user.first_name,
                  'last_name': user.last_name}

  form = profile_form(instance=profile, initial=user_initial)
  contactForm = contact_form(instance = contact)

  if request.method == 'POST':
    form = profile_form(request.POST, request.FILES, instance = profile, initial=user_initial)
    contactForm = contact_form (request.POST, request.FILES, instance = contact)

    ok = True
    if form.is_valid():
        form.save()
    else:
        ok = False
    if contactForm.is_valid():
        contactForm.save()
    else:
        ok = False

    if ok:
        if success_url:
            redirect_to = success_url
        else:
            redirect_to = reverse('profiles:dashboard', kwargs={'username': username})

        return redirect(redirect_to)

  if not extra_context: extra_context = dict()

  extra_context['form'] = form
  extra_context['contactForm'] = contactForm

  extra_context['profile'] = profile
  extra_context['contact'] = contact
  extra_context['view_own_profile'] = view_own_profile(request, username)

  extra_context = makeContextForNotifications(request, extra_context)
  extra_context = makeContextForMessages(request, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)


@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def settings(request, username, template_name='profiles/settings.html', success_url=None,
                 extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  profile = get_user_profile(user)

  settings = ProfileSettings.objects.get(profile = profile.id)
  settingsForm = SettingsForm(instance = settings)

  if request.method == 'POST':
    settingsForm = SettingsForm(request.POST, request.FILES, instance = settings)

    if settingsForm.is_valid():
      settingsForm.save()

      if success_url:
        redirect_to = success_url
      else: redirect_to = reverse('profiles:dashboard', kwargs={'username': username})

      return redirect(redirect_to)

  if not extra_context: extra_context = dict()
  extra_context['form'] = settingsForm
  extra_context['profile'] = profile
  extra_context['view_own_profile'] = view_own_profile(request, username)

  extra_context = makeContextForNotifications(request, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def verification(request, username, edit_id_form=ProfileIdForm,
                 template_name='profiles/verification.html', success_url=None,
                 extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)

  profile = get_user_profile(user)
  contact = get_user_contact(user)
  services = get_user_services(user)

  form = edit_id_form(instance=profile)

  if not profile.id_image and not profile.second_id_image:
     profile.id_status = 1
  else:
     if profile.id_status == 1:
        profile.id_status = 2

  profile.save()

  if request.method == 'POST':
    form = edit_id_form(request.POST, request.FILES, instance=profile)

    if form.is_valid():
        form.save()

        m = ProfileMailManager()
        m.send_notification_email_to_administrator(user)

        if success_url:
            redirect_to = success_url
        else:
            redirect_to = reverse('profiles:verification', kwargs={'username': username})

        return redirect(redirect_to)

  if not extra_context: extra_context = dict()
  extra_context['form'] = form
  extra_context['service_categories'] = get_active_service_categories()
  extra_context['verification_state'] = profile.id_status
  extra_context['profile'] = profile
  extra_context['contact'] = contact
  extra_context['services'] = services
  extra_context['view_own_profile'] = view_own_profile(request, username)

  extra_context = makeContextForMessages(request, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def album(request, username):

    user = get_object_or_404(User, username__iexact=username)

    if request.is_ajax():
        images = AlbumImage.objects.active_images(user)
        data = [{'thumb': i.image.url, 'filelink': i.image.url} for i in images]
        return HttpResponse(json.dumps(data), content_type='application/json')

    if request.method == 'POST':
        if request.POST.get('select'):
            selected_image_ids = request.POST.getlist('selected')
            selected_images = AlbumImage.objects.filter(user=user, id__in=selected_image_ids)
            if selected_images.exists():
                my_album, _c = MyAlbum.objects.get_or_create(user=user)
                my_album.images.clear()
                for image in selected_images:
                    my_album.images.add(image)
            return redirect(request.path)
        else:
            form = AlbumImageUploadForm(request.POST, request.FILES)
            form.user = user
            if form.is_valid():
                obj = form.save(commit=False)
                obj.image_size = obj.image.size
                obj.user = user
                obj.status = 1
                obj.save()
                obj.send_notification_email_to_administrator()
                return redirect(request.path)
    else:
        form = AlbumImageUploadForm()

    context = {
        'form': form,
        'images': AlbumImage.objects.filter(user=user),

        'profile': get_user_profile(user),
        'contact': get_user_contact(user),
        'services': get_user_services(user),
        'service_categories': get_active_service_categories(),
    }
    context = makeContextForDetails(request, context)
    context = makeContextForMessages(request, context)
    return render(request, 'profiles/album.html', context)

@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def set_album_image(request, username):
    user = get_object_or_404(User, username__iexact=username)
    profile = get_user_profile(user)

    qs = AlbumImage.objects.filter(user=user, id=request.GET.get('img_id'))
    if qs.exists():
        the_image = qs[0]
        if request.GET.get('is_avatar') == '1':
            profile.avatar = the_image.image
        else:
            profile.card_image = the_image.image
        profile.save()
        return HttpResponse(the_image.image.url)
    raise Http404

