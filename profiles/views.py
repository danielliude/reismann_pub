import logging

from django.core.urlresolvers import reverse
from django.shortcuts import redirect, get_object_or_404
from django.contrib.auth.models import User
from userena.decorators import secure_required
from guardian.decorators import permission_required_or_403

from profiles.models import Profile
from profiles.forms import ProfileForm, ProfileIdForm
from profiles.utils import get_user_profile
from core.utils import ExtraContextTemplateView
from contacts.forms import ContactForm
from contacts.utils import get_user_contact
from services.utils import get_user_services
from services.utils import get_distinct_categories, get_distinct_cities,get_distinct_languages,get_distinct_tags, get_services_rating
from followship.utils import get_number_followers, get_number_following
from bookings.utils import get_number_bookings
from configurations.utils import get_active_service_categories
from insite_messages.models import Message


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

def makeContextForMessages(request, context):

    if request.user.is_authenticated():

        unread_messages = Message.objects.unread_for(request.user)
        context['unread_messages'] = unread_messages

    return context

def makeContextForAllServices(request, user, context):

    unique_tags = get_distinct_tags(user)
    unique_cities = get_distinct_cities(user)
    unique_languages = get_distinct_languages(user)
    unique_categories = get_distinct_categories(user)
    services_rating = get_services_rating(user)

    context['unique_tags'] = unique_tags
    context['unique_cities'] = unique_cities
    context['unique_languages'] = unique_languages
    context['unique_categories'] = unique_categories
    context['services_rating'] = services_rating

    return context


def profile(request, username, template_name="profiles/profile.html",
                   extra_context=None, **kwargs):

  if not extra_context: extra_context = dict()

  user = get_object_or_404(User, username__iexact=username)

  profile = get_user_profile(user)
  services = get_user_services(user)

  extra_context['profile'] = profile
  extra_context['services'] = services
  extra_context['view_own_profile'] = view_own_profile(request, username)

  if request.user.is_authenticated:
    contact = get_user_contact(user)
    extra_context['contact'] = contact

  extra_context = makeContextForAllServices(request, user, extra_context)
  extra_context = makeContextForDetails(request, extra_context)
  extra_context = makeContextForMessages(request, extra_context)


  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def dashboard(request, username, template_name='profiles/dashboard.html',
              extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)

  profile = get_user_profile(user)
  contact = get_user_contact(user)
  services = get_user_services(user)

  user_initial = {'first_name': user.first_name,
                  'last_name': user.last_name}

  if not extra_context: extra_context = dict()
  extra_context['service_categories'] = get_active_service_categories()
  extra_context['profile'] = profile
  extra_context['contact'] = contact
  extra_context['services'] = services
  extra_context['view_own_profile'] = view_own_profile(request, username)

  extra_context = makeContextForAllServices(request, user, extra_context)
  extra_context = makeContextForDetails(request, extra_context)
  extra_context = makeContextForMessages(request, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def detail(request, username, edit_profile_form=ProfileForm,
                 template_name='profiles/detail.html', success_url=None,
                 extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)

  profile = get_user_profile(user)
  contact = get_user_contact(user)
  services = get_user_services(user)

  user_initial = {'first_name': user.first_name,
                  'last_name': user.last_name}

  form = edit_profile_form(instance=profile, initial=user_initial)

  if request.method == 'POST':
    form = edit_profile_form(request.POST, request.FILES, instance=profile, initial=user_initial)

    if form.is_valid():
      profile = form.save()

      if success_url:
        redirect_to = success_url
      else: redirect_to = reverse('profiles:dashboard', kwargs={'username': username})

      return redirect(redirect_to)

  if not extra_context: extra_context = dict()
  extra_context['form'] = form
  extra_context['service_categories'] = get_active_service_categories()
  extra_context['profile'] = profile
  extra_context['contact'] = contact
  extra_context['services'] = services
  extra_context['view_own_profile'] = view_own_profile(request, username)

  extra_context = makeContextForDetails(request, extra_context)
  extra_context = makeContextForMessages(request, extra_context)

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

  if request.method == 'POST':
    form = edit_id_form(request.POST, request.FILES, instance=profile)

    if form.is_valid():
        form.save()

        if success_url:
            redirect_to = success_url
        else:
            redirect_to = reverse('profiles:dashboard', kwargs={'username': username})

        return redirect(redirect_to)

  if not extra_context: extra_context = dict()
  extra_context['form'] = form
  extra_context['service_categories'] = get_active_service_categories()
  extra_context['profile'] = profile
  extra_context['contact'] = contact
  extra_context['services'] = services
  extra_context['view_own_profile'] = view_own_profile(request, username)

  extra_context = makeContextForDetails(request, extra_context)
  extra_context = makeContextForMessages(request, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
# @permission_required_or_403('change_contact', (Contact, 'user__username', 'username'))
def contact(request, username, edit_contact_form=ContactForm,
                 template_name='profiles/contact.html', success_url=None,
                 extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  profile = get_user_profile(user)
  contact = get_user_contact(user)
  services = get_user_services(user)

  form = edit_contact_form(instance=contact)

  if request.method == 'POST':
    form = edit_contact_form(request.POST, request.FILES, instance=contact)

    if form.is_valid():
      contact = form.save()

      if success_url:
        redirect_to = success_url
      else:
        redirect_to = reverse('profiles:dashboard', kwargs={'username': username})
      return redirect(redirect_to)

  if not extra_context: extra_context = dict()
  extra_context['form'] = form
  extra_context['service_categories'] = get_active_service_categories()
  extra_context['profile'] = profile
  extra_context['contact'] = contact
  extra_context['services'] = services

  extra_context = makeContextForDetails(request, extra_context)
  extra_context = makeContextForMessages(request, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)