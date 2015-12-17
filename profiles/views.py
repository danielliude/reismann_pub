from django.core.urlresolvers import reverse
from django.shortcuts import redirect, get_object_or_404
from django.contrib.auth import authenticate, login as signin, logout as signout, REDIRECT_FIELD_NAME
from django.contrib.auth.models import User
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.views import logout as Signout
from django.views.generic.list import ListView
from django.contrib import messages
from django.core.exceptions import PermissionDenied
from django.utils.translation import ugettext as _
from django.http import Http404, HttpResponseRedirect

from userena.models import UserenaSignup
from userena.decorators import secure_required
from userena import signals as userena_signals
from userena import settings as userena_settings

from guardian.decorators import permission_required_or_403

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
from services.forms import ServiceForm, ResumeForm
from services.utils import get_user_service, get_user_category_resume, \
  get_user_resumes

from configurations.models import ServiceCategory
from configurations.utils import get_active_service_categories

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
  service = get_user_service(user)
  resumes = get_user_resumes(user)

  if not extra_context: extra_context = dict()
  extra_context['profile'] = profile
  extra_context['contact'] = contact
  extra_context['service'] = service
  extra_context['resumes'] = resumes
  extra_context['view_own_profile'] = view_own_profile(request, username)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def dashboard(request, username, template_name='profiles/dashboard.html',
              extra_context=None, **kwargs):
  user = get_object_or_404(User, username__iexact=username)

  profile = get_user_profile(user)
  contact = get_user_contact(user)
  service = get_user_service(user)

  user_initial = {'first_name': user.first_name,
                  'last_name': user.last_name}

  if not extra_context: extra_context = dict()
  extra_context['service_categories'] = get_active_service_categories()
  extra_context['profile'] = profile
  extra_context['contact'] = contact
  extra_context['service'] = service
  extra_context['view_own_profile'] = view_own_profile(request, username)
  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def detail(request, username, edit_profile_form=ProfileForm,
                 template_name='profiles/detail.html', success_url=None,
                 extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)

  profile = get_user_profile(user)
  contact = get_user_contact(user)
  service = get_user_service(user)

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
  extra_context['service'] = service
  extra_context['view_own_profile'] = view_own_profile(request, username)
  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_contact', (Contact, 'user__username', 'username'))
def contact(request, username, edit_contact_form=ContactForm,
                 template_name='profiles/contact.html', success_url=None,
                 extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  profile = get_user_profile(user)
  contact = get_user_contact(user)
  service = get_user_service(user)

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
  extra_context['service'] = service
  return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_service', (Service, 'user__username', 'username'))
def service(request, username, edit_service_form=ServiceForm,
                 template_name='profiles/service.html', success_url=None,
                 extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  profile = get_user_profile(user)
  contact = get_user_contact(user)
  service = get_user_service(user)

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
  return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('change_service', (Service, 'user__username', 'username'))
def resume(request, username, category_id, edit_resume_form=ResumeForm,
           template_name='profiles/resume.html', success_url=None,
           extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  profile = get_user_profile(user)
  category = get_object_or_404(ServiceCategory, id=category_id)
  resume = get_user_category_resume(user, category)

  form = edit_resume_form(instance=resume)

  if request.method == 'POST':
    form = edit_resume_form(request.POST, request.FILES, instance=resume)

    if form.is_valid():
      resume = form.save()

      if success_url:
        redirect_to = success_url
      else:
        redirect_to = reverse('profiles:resume', kwargs={'username': username, 'category_id': category.id})
      return redirect(redirect_to)

  if not extra_context: extra_context = dict()
  extra_context['form'] = form
  extra_context['profile'] = profile
  extra_context['service_categories'] = get_active_service_categories()
  return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)
