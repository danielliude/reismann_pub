#encoding:utf-8
from __future__ import unicode_literals

from django import forms
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from django.utils.safestring import mark_safe

from accounts.models import Registration
from accounts.settings import ACCOUNT_ACTIVATION_REQUIRED, ACCOUNT_ACTIVATED, \
  ACCOUNT_FORBIDDEN_USERNAMES, ACCOUNTS_REGISTRATION_ACTIVATION_DAYS, \
  ACCOUNT_LOGIN_REMEMBER_ME_DAYS

from django.contrib.auth.models import Permission

import logging

# Get an instance of a logger
logger = logging.getLogger('resigration')

USERNAME_RE = r'^[\.\w]+$'

class RegistrationForm(forms.Form):

  username = forms.RegexField(regex=USERNAME_RE,
                              max_length=30,
                              widget=forms.TextInput(attrs={'placeholder': _('Username')}),
                              label=_("Username"),
                              error_messages={'invalid': _('Username must contain only letters, numbers, dots and underscores.')})

  email = forms.EmailField(widget=forms.TextInput(attrs={'placeholder': _('Email')}),
                                                  label=_("Email"))

  password1 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': _('Password')},
                                                         render_value=False),
                                                         label=_("Create password"))

  password2 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': _('Repeat password')},
                                                         render_value=False),
                                                         label=_("Repeat password"))

  tos = forms.BooleanField(widget=forms.CheckboxInput(attrs={'class': 'required'}),
                           label= mark_safe(_('I have read and agree to the <a target="_blank" href="/about/service_term/">terms of service</a>')),
                           error_messages={'required': _('You must agree to the terms to register.')})

  def clean_email(self):
    if User.objects.filter(email__iexact=self.cleaned_data['email']):
      if ACCOUNT_ACTIVATION_REQUIRED and Registration.objects.filter(user__email__iexact=self.cleaned_data['email']).exclude(activation_key=ACCOUNT_ACTIVATED):
        raise forms.ValidationError(_('This email is already in use but not confirmed. Please check your email for verification steps.'))
      raise forms.ValidationError(_('This email is already in use. Please supply a different email.'))
    return self.cleaned_data['email']


  def clean_username(self):
    try:
        User.objects.get(username__iexact=self.cleaned_data['username'])
    except User.DoesNotExist:
        return self.cleaned_data['username']
    raise forms.ValidationError(_("This username has already existed."))

  def clean(self):
    if 'password1' in self.cleaned_data and 'password2' in self.cleaned_data:
        if self.cleaned_data['password1'] != self.cleaned_data['password2']:
            raise forms.ValidationError(_('The two password fields didn\'t match.'))

        if len(self.cleaned_data.get('password1')) < 8:
            raise forms.ValidationError(_('Password should be more then 8 letters.'))

    return self.cleaned_data

  def save(self):
    username, email, password = (self.cleaned_data['username'],
                                 self.cleaned_data['email'],
                                 self.cleaned_data['password1'])

    new_user = Registration.objects.create_user(username,
                                                 email,
                                                 password,
                                                 not ACCOUNT_ACTIVATION_REQUIRED,
                                                 ACCOUNT_ACTIVATION_REQUIRED)

    new_user.save()
    return new_user


class AuthenticationForm(forms.Form):

  identification = forms.CharField(label=_("Email or username"),
                                   widget=forms.TextInput(attrs={'placeholder': _('Email or Username')}))
  password = forms.CharField(label=_("Password"),
                             widget=forms.PasswordInput(attrs={'placeholder': _('Password')}))
  remember_me = forms.BooleanField(widget=forms.CheckboxInput(),
                                   required=False,
                                   label=_('Remember me for %(days)s') % {'days': _(ACCOUNT_LOGIN_REMEMBER_ME_DAYS[0])})

  def __init__(self, *args, **kwargs):
    super(AuthenticationForm, self).__init__(*args, **kwargs)
    self.fields['remember_me'].label = _('Remember me for %(days)s') % {'days': _(ACCOUNT_LOGIN_REMEMBER_ME_DAYS[0])}

  def clean(self):
    identification = self.cleaned_data.get('identification')
    password = self.cleaned_data.get('password')

    if identification and password:
      user = authenticate(identification=identification, password=password)
      if user is None:
        raise forms.ValidationError(_("Please enter a correct username or email and password. Note that both fields are case-sensitive."))
    return self.cleaned_data

class ChangeEmailForm(forms.Form):
  email = forms.EmailField(widget=forms.TextInput(attrs={'class': 'required form-control', 'required': True, 'placeholder': _('Password')}),
                           max_length=75,
                           label=_("New email"))

  def __init__(self, user, *args, **kwargs):
    super(ChangeEmailForm, self).__init__(*args, **kwargs)
    if not isinstance(user, User):
      raise TypeError("user must be an instance of %s" % User.__name__)
    else: self.user = user

  def clean_email(self):
    if self.cleaned_data['email'].lower() == self.user.email:
      raise forms.ValidationError(_('You\'re already known under this email.'))
    if User.objects.filter(email__iexact=self.cleaned_data['email']).exclude(email__iexact=self.user.email):
      raise forms.ValidationError(_('This email is already in use. Please supply a different email.'))
    return self.cleaned_data['email']

  def save(self):
    return self.user.userena_signup.change_email(self.cleaned_data['email'])