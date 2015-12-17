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

from accounts.models import Registration
from accounts.forms import RegistrationForm, AuthenticationForm, ChangeEmailForm
from accounts.utils import login_redirect
import accounts.signals as accounts_signals
from accounts.settings import ACCOUNT_LOGIN_REMEMBER_ME_DAYS, ACCOUNT_ACTIVATION_REQUIRED

from contacts.models import Contact
from contacts.forms import ContactForm
from contacts.utils import get_user_contact

import warnings
import logging

logger = logging.getLogger("accounts")

def login(request, login_form=AuthenticationForm, template_name='accounts/login.html',
          extra_context=None):

  form = login_form()

  if request.method == 'POST':
    form = login_form(request.POST, request.FILES)

    if form.is_valid():
      identification, password, remember_me = (form.cleaned_data['identification'],
                                               form.cleaned_data['password'],
                                               form.cleaned_data['remember_me'])
      user = authenticate(identification=identification, password=password)

      if user.is_active:
        signin(request, user)
        if remember_me:
          request.session.set_expiry(ACCOUNT_LOGIN_REMEMBER_ME_DAYS[1] * 86400)
        else: request.session.set_expiry(0)

        redirect_to = login_redirect(request.REQUEST.get(REDIRECT_FIELD_NAME), user)

        return HttpResponseRedirect(redirect_to)
      else:
        return redirect(reverse('profile_disabled', kwargs={'username': user.username}))

  if not extra_context: extra_context = dict()
  extra_context.update({
    'form': form,
    'next': request.REQUEST.get(REDIRECT_FIELD_NAME),
  })

  return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

def logout(request, template_name='accounts/logout.html', *args, **kwargs):
  next_page = reverse('index')
  return Signout(request, next_page=next_page, template_name=template_name, *args, **kwargs)

def register(request, register_form=RegistrationForm, template_name='accounts/register.html',
             success_url=None, extra_context=None):
  form = register_form()

  if request.method == 'POST':
    form = register_form(request.POST, request.FILES)
    if form.is_valid():
      user = form.save()

      accounts_signals.registration_complete.send(sender=None, user=user)

      if success_url:
        redirect_to = success_url
      elif ACCOUNT_ACTIVATION_REQUIRED:
        redirect_to = reverse('accounts:registration_complete', kwargs={'username: user.username'})
      else:
        redirect_to = reverse('profiles:dashboard', kwargs={'username': user.username})

      if request.user.is_authenticated():
        signout(request)

      if not ACCOUNT_ACTIVATION_REQUIRED:
        user = authenticate(identification=user.email, check_password=False)
        signin(request, user)

      return redirect(redirect_to)

  if not extra_context: extra_context = dict()
  extra_context['form'] = form

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

def action_complete(request, username, template_name, extra_context=None):
  user = get_object_or_404(User, username__iexact=username)

  if not extra_context: extra_context = dict()
  extra_context["viewed_user"] = user
  extra_context["profile"] = get_user_profile(user)

  return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

def activate(request, activation_key, template_name="accounts/activate_fail.html",
             retry_template_name='accounts/activate_retry.html',
             success_url=None, extra_context=None):

  try:
    if not Registration.objects.check_expired_activation(activation_key):
      user = Registration.objects.activate_user(activation_key)
      if user:
        auth_user = authenticate(identification=user.email, check_password=False)
        signin(request, auth_user)

        messages.success(request, _('Your account has been activated and you have been signed in.'),
                         fail_silently=True)

        if success_url: redirect_to = success_url % {'username': user.username}
        else: redirect_to = reverse('profiles:dashboard', kwargs={'username': user.username})

        return redirect(redirect_to)
      else:
        if not extra_context: extra_context = dict()
        return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

    else:
      if not extra_context: extra_context = dict()
      extra_context['acivation_key'] = activation_key
      return ExtraContextTemplateView.as_view(template_name=retry_template_name,
                                              extra_context=extra_context)(request)

  except Registration.DoesNotExist:
    if not extra_context: extra_context = dict()
    return ExtraContextTemplateView.as_view(template_name=template_name,
                                            extra_context=extra_context)(request)

def activate_retry(request, activation_key, template_name='accounts/acivate_retry_success.html',
                   extra_context=None):

  try:
    if Registration.objects.check_expired_activation(activation_key):
      new_key = Registration.objects.reissue_activation(activation_key)
      if new_key:
        if not extra_context: extra_context = dict()
        return ExtraContextTemplateView.as_view(template_name=template_name,
                                                extra_context=extra_context)(request)
      else:
        return redirect(reverse('accounts:activate', args=(activation_key,)))

    else:
      return redirect(reverse('accounts:activate', args=(activation_key,)))

  except Registration.DoesNotExist:
    return redirect(reverse('accounts:activate', args=(activation_key,)))

@permission_required_or_403('change_user', (User, 'username', 'username'))
def change_password(request, username, template_name='accounts/change_password.html',
                    pass_form=PasswordChangeForm, success_url=None, extra_context=None):

  user = get_object_or_404(User, username__iexact=username)

  form = pass_form(user=user)

  if request.method == 'POST':
    form = pass_form(user=user, data=request.POST)
    if form.is_valid():
      form.save()

      accounts_signals.password_complete.send(sender=None, user=user)

      if success_url: redirect_to = success_url
      else: redirect_to = reverse('accounts:change_password_complete', kwargs={'username': user.username})

      return redirect_to(redirect_to)

  if not extra_context: extra_context = dict()
  extra_context['form'] = form
  extra_context['profile'] = get_user_profile(user=user)
  return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

