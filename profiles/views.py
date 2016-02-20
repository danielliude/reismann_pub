from django.core.urlresolvers import reverse
from django.shortcuts import redirect, get_object_or_404
from django.contrib.auth import authenticate, login as signin, logout as signout, REDIRECT_FIELD_NAME
from django.contrib.auth.models import User
from django.contrib.sites.models import Site
from django.http import HttpResponse
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.views import logout as Signout
from django.views.generic.list import ListView
from django.contrib import messages
from django.core.exceptions import PermissionDenied
from django.utils.translation import ugettext as _
from django.http import Http404, HttpResponseRedirect

from datetime import datetime
from django.utils.timezone import utc

from userena.models import UserenaSignup
from userena.decorators import secure_required
from userena import signals as userena_signals
from userena import settings as userena_settings

from guardian.decorators import permission_required_or_403
from guardian.core import ObjectPermissionChecker
from guardian.shortcuts import get_perms

from profiles.models import Profile
from profiles.forms import ProfileForm
from profiles.utils import get_user_profile

from core.utils import ExtraContextTemplateView

from accounts.forms import RegistrationForm, AuthenticationForm, ChangeEmailForm
from accounts.utils import login_redirect

from contacts.models import Contact
from contacts.forms import ContactForm
from contacts.utils import get_user_contact

from services.models import Service
from services.forms import ServiceForm
from services.utils import get_user_services, get_service_by_id
from services.utils import get_distinct_categories, get_distinct_cities,get_distinct_languages,get_distinct_tags

from configurations.models import ServiceCategory
from configurations.utils import get_active_service_categories

from insite_messages.models import Message
from insite_messages.forms import MessageComposeForm

import warnings
import logging

logger = logging.getLogger("profiles")

def view_own_profile(request, username):
  if request.user.is_authenticated():
    return request.user.username == username
  return False

def profile(request, username, template_name="profiles/profile.html",
                   extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  profile = get_user_profile(user)
  contact = get_user_contact(user)
  services = get_user_services(user)
  unread_messages = Message.objects.unread_for(user)

  unique_tags = get_distinct_tags(user)
  unique_cities = get_distinct_cities(user)
  unique_languages = get_distinct_languages(user)
  unique_categories = get_distinct_categories(user)

  if not extra_context: extra_context = dict()
  extra_context['profile'] = profile
  extra_context['contact'] = contact
  extra_context['services'] = services
  extra_context['view_own_profile'] = view_own_profile(request, username)
  extra_context['unread_messages'] = unread_messages

  extra_context['unique_tags'] = unique_tags
  extra_context['unique_cities'] = unique_cities
  extra_context['unique_languages'] = unique_languages
  extra_context['unique_categories'] = unique_categories

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def dashboard(request, username, template_name='profiles/dashboard.html',
              extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)

  # site = Site.objects.get_current()
  # print(get_perms(user, site))
  # print(user.get_all_permissions())

  profile = get_user_profile(user)
  contact = get_user_contact(user)
  services = get_user_services(user)
  unread_messages = Message.objects.unread_for(user)

  unique_tags = get_distinct_tags(user)
  unique_cities = get_distinct_cities(user)
  unique_languages = get_distinct_languages(user)
  unique_categories = get_distinct_categories(user)

  user_initial = {'first_name': user.first_name,
                  'last_name': user.last_name}

  if not extra_context: extra_context = dict()
  extra_context['service_categories'] = get_active_service_categories()
  extra_context['profile'] = profile
  extra_context['contact'] = contact
  extra_context['services'] = services
  extra_context['unread_messages'] = unread_messages
  extra_context['view_own_profile'] = view_own_profile(request, username)

  extra_context['unique_tags'] = unique_tags
  extra_context['unique_cities'] = unique_cities
  extra_context['unique_languages'] = unique_languages
  extra_context['unique_categories'] = unique_categories

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

  unread_messages = Message.objects.unread_for(user)

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
  extra_context['unread_messages'] = unread_messages
  extra_context['view_own_profile'] = view_own_profile(request, username)

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
  unread_messages = Message.objects.unread_for(user)

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
  extra_context['unread_messages'] = unread_messages
  return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)


@secure_required
# @permission_required_or_403('change_service', (Profile, 'user__username', 'username'))
def service_add(request, username, edit_service_form=ServiceForm,
                template_name='profiles/service_add.html', success_url=None,
                extra_context=None, **kwargs):

    user = get_object_or_404(User, username__iexact=username)

    profile = get_user_profile(user)
    contact = get_user_contact(user)
    unread_messages = Message.objects.unread_for(user)

    form = edit_service_form()

    if request.method == 'POST':
        form = edit_service_form(request.POST, request.FILES)

        if form.is_valid():
          service = form.save()
          service.user = user
          service.save()

          if success_url:
            redirect_to = success_url
          else:
            redirect_to = reverse('profiles:services', kwargs={'username': username})
          return redirect(redirect_to)

    if not extra_context: extra_context = dict()
    extra_context['form'] = form
    extra_context['service_categories'] = get_active_service_categories()
    extra_context['profile'] = profile
    extra_context['contact'] = contact
    extra_context['unread_messages'] = unread_messages
    return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

@secure_required
# @permission_required_or_403('change_service', (Profile, 'user__username', 'username'))
def service(request, username, service_id, edit_service_form=ServiceForm,
                 template_name='profiles/service_edit.html', success_url=None,
                 extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  profile = get_user_profile(user)
  contact = get_user_contact(user)
  service = get_service_by_id(service_id)
  unread_messages = Message.objects.unread_for(user)


  form = edit_service_form(instance=service)

  if request.method == 'POST':
    form = edit_service_form(request.POST, request.FILES, instance=service)

    if form.is_valid():
      service = form.save()

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
  extra_context['service'] = service
  extra_context['unread_messages'] = unread_messages

  return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

@secure_required
# @permission_required_or_403('view_service', (Service, 'user__username', 'username'))
def services(request, username,
                template_name='profiles/services.html',
                extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  profile = get_user_profile(user)
  contact = get_user_contact(user)
  services = get_user_services(user)
  unread_messages = Message.objects.unread_for(user)


  if not extra_context: extra_context = dict()
  extra_context['services'] = services
  extra_context['profile'] = profile
  extra_context['contact'] = contact
  extra_context['unread_messages'] = unread_messages
  return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)


@secure_required
# @permission_required_or_403('view_service', (Service, 'user__username', 'username'))
def messages(request, username,
                template_name='profiles/messages.html',
                extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  profile = get_user_profile(user)
  contact = get_user_contact(user)
  messages = Message.objects.all_for(user)
  unread_messages = Message.objects.unread_for(user)

  if not extra_context: extra_context = dict()
  extra_context['messages'] = messages
  extra_context['unread_messages']= unread_messages
  extra_context['profile'] = profile

  return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)


@secure_required
# @permission_required_or_403('change_service', (Profile, 'user__username', 'username'))
def message_write(request, username, write_message_form=MessageComposeForm,
                template_name='profiles/message_write.html', success_url=None,
                extra_context=None, **kwargs):

    user = get_object_or_404(User, username__iexact=username)

    profile = get_user_profile(user)
    contact = get_user_contact(user)

    unread_messages = Message.objects.unread_for(user)

    form = write_message_form()

    if request.method == 'POST':
        form = write_message_form(request.POST, request.FILES)

        if form.is_valid():
          message = form.save(user)
          message.sent_at = datetime.utcnow().replace(tzinfo=utc)
          message.save()

          if success_url:
            redirect_to = success_url
          else:
            redirect_to = reverse('profiles:messages', kwargs={'username': username})
          return redirect(redirect_to)

    if not extra_context: extra_context = dict()
    extra_context['form'] = form
    extra_context['profile'] = profile
    extra_context['contact'] = contact
    extra_context['unread_messages'] = unread_messages
    return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)


@secure_required
# @permission_required_or_403('change_service', (Profile, 'user__username', 'username'))
def message_view(request, username, message_id, write_message_form=MessageComposeForm,
                 template_name='profiles/message_view.html', success_url=None,
                 extra_context=None, **kwargs):

    user = get_object_or_404(User, username__iexact=username)
    profile = get_user_profile(user)
    unread_messages = Message.objects.unread_for(user)

    message = Message.objects.get(pk= message_id)

    if message.recipient == user:
        message.read_at = datetime.now()
        message.save()

    if not extra_context: extra_context = dict()
    extra_context['message'] = message
    extra_context['profile'] = profile
    extra_context['unread_messages'] = unread_messages

    return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)


@secure_required
# @permission_required_or_403('change_service', (Profile, 'user__username', 'username'))
def message_reply(request, username, message_id, write_message_form=MessageComposeForm,
                 template_name='profiles/message_write.html', success_url=None,
                 extra_context=None, **kwargs):

    user = get_object_or_404(User, username__iexact=username)

    profile = get_user_profile(user)
    contact = get_user_contact(user)
    message = Message.objects.get(pk= message_id)
    unread_messages = Message.objects.unread_for(user)

    initial_subject = "Re: " + message.subject
    initial_body = ">" + message.body

    form = write_message_form(initial={'recipient': message.sender,
                                       'subject': initial_subject,
                                       'body': initial_body}
                                )


    if request.method == 'POST':
        form = write_message_form(request.POST, request.FILES)

        if form.is_valid():
          message = form.save(user)
          message.save()

          if success_url:
            redirect_to = success_url
          else:
            redirect_to = reverse('profiles:messages', kwargs={'username': username})
          return redirect(redirect_to)

    if not extra_context: extra_context = dict()
    extra_context['form'] = form
    extra_context['profile'] = profile
    extra_context['contact'] = contact
    extra_context['unread_messages'] = unread_messages
    return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

@secure_required
# @permission_required_or_403('change_service', (Profile, 'user__username', 'username'))
def message_remove(request, username, message_id, template_name='profiles/messages.html', success_url=None,
                 extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  message = Message.objects.get(pk = message_id)

  if(message.sender == user):
      message.delete()

  url = reverse('profiles:messages', kwargs={'username':user.username})
  return HttpResponseRedirect(url)



