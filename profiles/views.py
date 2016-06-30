import logging
import json

from django.core.urlresolvers import reverse
from django.shortcuts import redirect, get_object_or_404
from django.shortcuts import render
from django.http import Http404, HttpResponse, JsonResponse
from django.contrib.auth.models import User
from django.forms import model_to_dict
from django.contrib.auth.decorators import login_required
from userena.decorators import secure_required
from guardian.decorators import permission_required_or_403

from profiles.models import Profile, ProfileSettings, ProfileMore
from profiles.forms import ProfileForm, ProfileIdForm, SettingsForm, ProfileFormCustomer, ProfileMoreForm
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

from followship.models import FollowingManager

from services.models import Service

#paginator
from django.core.paginator import Paginator
from django.core.paginator import EmptyPage
from django.core.paginator import PageNotAnInteger

#register
from django.contrib.auth import authenticate, login as signin, logout as signout, REDIRECT_FIELD_NAME
from accounts.forms import RegistrationForm
import accounts.signals as accounts_signals
from accounts.settings import ACCOUNT_ACTIVATION_REQUIRED
from django.http import JsonResponse

#message
from insite_messages.forms import MessageComposeForm
from insite_messages.managers import MessageMailManager as mailer
from notifications.signals import notify
from notifications.models import Notification
from datetime import datetime
from django.utils.timezone import utc
from django.contrib.contenttypes.models import ContentType

#blacklists
from blacklists.models import BlackLists

from django.db.models import Q

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
        instance = ContentType.objects.get(app_label='insite_messages', model='message')
        context['notifications'] = Notification.objects.filter(recipient=request.user).exclude(action_object_content_type=instance).unread()

    return context

def makeContextForMessages(request, context):

    if request.user.is_authenticated():
        instance = ContentType.objects.get(app_label='insite_messages', model='message')
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

        follow_manager = FollowingManager()
        if request.user and profile.user:
            follows = follow_manager.follows(follower=request.user, followee=profile.user)
            context['follows'] = follows
            shielding_list = BlackLists.objects.filter(user__id=request.user.id)
            for item in shielding_list:
                if item.shielding.id == profile.user.id:
                    context['shielding'] = True
                    break
            shielded_list = BlackLists.objects.filter(user__id=profile.user.id)
            for item in shielded_list:
                if item.shielding.id == request.user.id:
                    context['shielded'] = True
                    break
    return context

def profile(request, username, template_name="profiles/profile.html",
                  success_url=None, extra_context=None, **kwargs):

  if not extra_context: extra_context = dict()

  user = get_object_or_404(User, username__iexact=username)
  extra_context = makeContextForProfile(request, user, extra_context)

  if request.user.is_authenticated():
    rec_user = get_object_or_404(User, username__iexact=username)
    initial_recipient = {'recipient': rec_user.id}
    form = MessageComposeForm(initial = initial_recipient)

  else:
    form = RegistrationForm()
  if request.method == 'POST':
    if request.user.is_authenticated():
      form = MessageComposeForm(request.POST, request.FILES)

      if form.is_valid():
        message = form.save(user)
        message.sent_at = datetime.utcnow().replace(tzinfo=utc)
        message.save()

        # send email about internal message
        m = mailer()
        m.send_email_new_message_to_recipient(message=message)

        # create notification about internal message
        notify.send(message.sender, recipient = message.recipient, action_object = message, verb = u'has sent new message')

        temp = {}
        temp['success'] = 'ok'
        return JsonResponse(temp)
      else:

        extra_context['form'] = form
        return ExtraContextTemplateView.as_view(template_name='insite_messages/__message_part_form.html', extra_context=extra_context)(request)

    else:
      form = RegistrationForm(request.POST, request.FILES)

      if form.is_valid():
        user = form.save()

        accounts_signals.registration_complete.send(sender=None, user=user)

        if success_url:
          redirect_to = success_url
        elif ACCOUNT_ACTIVATION_REQUIRED:
          redirect_to = reverse('accounts:registration_complete', kwargs = {'username': user.username})
        else:
          redirect_to = reverse('profiles:dashboard', kwargs = {'username': user.username})

        if request.user.is_authenticated():
          signout(request)

        if not ACCOUNT_ACTIVATION_REQUIRED:
          user = authenticate(identification=user.email, check_password=False)
          signin(request, user)

        temp = {}
        temp['success'] = 'ok'
        temp['redirect_to'] = redirect_to
        return JsonResponse(temp)
      else:
        extra_context['form'] = form
        return ExtraContextTemplateView.as_view(template_name='accounts/__register_form.html', extra_context=extra_context)(request)

  else:
    provider_service = Service.objects.filter(user = user).first()
    if provider_service:
      extra_context['provider_service'] = provider_service
    extra_context = makeContextForActiveServices(user, extra_context)
    extra_context = makeContextForNotifications(request, extra_context)

    extra_context['form'] = form
    extra_context['service_id'] = 'all'

    return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def dashboard(request, username, template_name='profiles/dashboard.html',
              extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  if not extra_context: extra_context = dict()

  if request.method == 'POST':
    checkbox = request.POST.getlist('checkbox[]')
    extra_context['notifications'] = request.user.notifications.active()
    if len(checkbox) == 1:
      if checkbox[0] == 'unread':
        extra_context['notifications'] = request.user.notifications.unread()
      else:
        extra_context['notifications'] = request.user.notifications.read()

    limit = 10  # 每页显示的记录数
    topics = extra_context['notifications']
    paginator = Paginator(topics, limit)  # 实例化一个分页对象

    page = 1  # 获取页码
    try:
        topics = paginator.page(page)  # 获取某页对应的记录
    except PageNotAnInteger:  # 如果页码不是个整数
        topics = paginator.page(1)  # 取第一页的记录
    except EmptyPage:  # 如果页码太大，没有相应的记录
        topics = paginator.page(paginator.num_pages)  # 取最后一页的记录
    extra_context['notifications'] = topics

    return ExtraContextTemplateView.as_view(template_name='profiles/__notifications_list.html', extra_context=extra_context)(request)

  else:
    # extra_context = makeContextForNotifications(request, extra_context)
    extra_context = makeContextForProfile(request, user, extra_context)
    extra_context = makeContextForDetails(request, extra_context)
    extra_context = makeContextForAllUserServices(user, extra_context)
    extra_context = makeContextForMessages(request, extra_context)

    if request.user.is_authenticated():
      extra_context['notifications'] = request.user.notifications.active()

    limit = 10  # 每页显示的记录数
    topics = extra_context['notifications']
    paginator = Paginator(topics, limit)  # 实例化一个分页对象

    page = request.GET.get('page')  # 获取页码
    try:
        topics = paginator.page(page)  # 获取某页对应的记录
    except PageNotAnInteger:  # 如果页码不是个整数
        topics = paginator.page(1)  # 取第一页的记录
    except EmptyPage:  # 如果页码太大，没有相应的记录
        topics = paginator.page(paginator.num_pages)  # 取最后一页的记录
    extra_context['notifications'] = topics

    return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def mark_read_or_delete(request, username, template_name=None,
              extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  if not extra_context: extra_context = dict()

  checkbox = request.GET.getlist('checkbox[]')
  mark_type = request.GET.get('type')

  check = ''
  if(checkbox):
      for ch in checkbox:
          if(check):
              check = check | Q(id=ch)
          else:
              check = Q(id=ch)
  if(check):
    notification = request.user.notifications.filter(check)
    if(mark_type == 'mark_read'):
      notification.mark_all_as_read()
    else:
      notification.mark_all_as_deleted()

  temp = {}
  temp['success'] = 'ok'
  return JsonResponse(temp)


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


  if request.POST:
    print('>>>>>>>>>>>>>>>>>>>post', request.POST)
    if profile.settings.is_provider:
        form = profile_form(request.POST, request.FILES, instance = profile, initial=user_initial)
    else:
        form = ProfileFormCustomer(request.POST, request.FILES, instance = profile, initial=user_initial)

    contactForm = contact_form (request.POST, request.FILES, instance = contact)

    if form.is_valid() and contactForm.is_valid():

        form.save()
        contactForm.save()

        if success_url:
            redirect_to = success_url
        else:
            redirect_to = reverse('profiles:dashboard', kwargs={'username': username})
        return redirect(redirect_to)
  if not extra_context: extra_context = dict()
  more_form = None
  if profile.settings.is_provider:
      form = profile_form(instance=profile, initial=user_initial)
      more_profile, created = ProfileMore.objects.get_or_create(user=user)
      more_form = ProfileMoreForm(instance=more_profile)
      extra_context['more_form'] = more_form
      extra_context['show_more_form'] = True
  else:
      form = ProfileFormCustomer(instance = profile, initial=user_initial)
      extra_context['show_more_form'] = False

  contactForm = contact_form(instance = contact)

  extra_context['form'] = form
  extra_context['contactForm'] = contactForm
  extra_context['more_form'] = more_form
  extra_context['simple_profile'] = 'true'

  extra_context = makeContextForProfile(request, user, extra_context)
  extra_context = makeContextForNotifications(request, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)


@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def more_profile(request, username):
  if request.POST:
    user = get_object_or_404(User, username__iexact=username)
    profile, created = Profile.objects.get_or_create(user=user)
    if profile.settings.is_provider:
      more_profile, created = ProfileMore.objects.get_or_create(user=user)
      more_form = ProfileMoreForm(request.POST, instance=more_profile)
      form = ProfileForm(request.POST, instance=profile)
      if more_form.is_valid():
        more_form.save()
        return redirect(reverse('profiles:dashboard', kwargs={'username': username}))
      extra_context = {}
      extra_context['more_profile'] = 'true'
      extra_context['more_form'] = more_form
      extra_context['form'] = form
      extra_context['show_more_form'] = True
      extra_context = makeContextForProfile(request, user, extra_context)
      return ExtraContextTemplateView.as_view(template_name='profiles/detail.html', extra_context=extra_context)(request)
    else:
      extra_context['show_more_form'] = False
  return redirect(reverse('profiles:profile', kwargs={'username': username}))


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
def get_notifications_unread_count(request, username):
    unread_notifications = len(makeContextForNotifications(request, {})['notifications'])
    return HttpResponse(unread_notifications)

@secure_required
def get_notifications_unread_info(request, username):
    unread_list = []
    notifications = makeContextForNotifications(request, {})['notifications']
    for noti in notifications:
        struct = model_to_dict(noti)
        if noti.actor:
            struct['actor'] = str(noti.actor)
        if noti.target:
            struct['target'] = str(noti.target)
        if noti.action_object:
            struct['action_object'] = str(noti.action_object)
        unread_list.append(struct)
    result = {
        'unread_count': len(notifications),
        'unread_list': unread_list,
    }
    return JsonResponse(result)

@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def notifications(request, username, template_name='profiles/notifications.html', success_url=None,
                 extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  profile = get_user_profile(user)

  if not extra_context: extra_context = dict()

  extra_context['profile'] = profile
  extra_context = makeContextForNotifications(request, extra_context)
  extra_context['unread_notifications'] = len(extra_context['notifications'])

  limit = 10  # 每页显示的记录数
  topics = extra_context['notifications']
  paginator = Paginator(topics, limit)  # 实例化一个分页对象

  page = request.GET.get('page')  # 获取页码
  try:
      topics = paginator.page(page)  # 获取某页对应的记录
  except PageNotAnInteger:  # 如果页码不是个整数
      topics = paginator.page(1)  # 取第一页的记录
  except EmptyPage:  # 如果页码太大，没有相应的记录
      topics = paginator.page(paginator.num_pages)  # 取最后一页的记录
  extra_context['notifications'] = topics

  content_type_model = ContentType.objects
  content_type = {
    1: content_type_model.get(app_label='bookings', model='booking'),
    2: content_type_model.get(app_label='followship', model='follow'),
    3: content_type_model.get(app_label='album', model='albumImage'),
    4: content_type_model.get(app_label='profiles', model='profile'),
  }
  extra_context['content_type'] = content_type
  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def notification_avatar(request, username, avatar_username, **kwargs):

  user = User.objects.get(username = avatar_username)
  if user:
    return HttpResponse(user.profile.avatar)


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

  extra_context = makeContextForNotifications(request, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)
