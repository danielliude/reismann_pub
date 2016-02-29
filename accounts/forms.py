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
                              widget=forms.TextInput(attrs={'class': 'required form-control', 'required': True, 'placeholder': _('Username')}),
                              label=_("Username"),
                              error_messages={'invalid': _('Username must contain only letters, numbers, dots and underscores.')})
  email = forms.EmailField(widget=forms.TextInput(attrs={'class': 'required form-control', 'required': True, 'placeholder': _('Email')}),
                           label=_("Email"))
  first_name = forms.CharField(widget=forms.TextInput(attrs={'class': 'required form-control', 'required': True, 'placeholder': _('First Name')}),
                               label=_("First name"),
                               max_length=30)
  last_name = forms.CharField(widget=forms.TextInput(attrs={'class': 'required form-control', 'required': True, 'placeholder': _('Last Name')}),
                              label=_("Last name"),
                              max_length=30)
  password1 = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'required form-control', 'required': True, 'placeholder': _('Password')},
                                                         render_value=False),
                              label=_("Create password"))
  password2 = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'required form-control', 'required': True, 'placeholder': _('Repeat password')},
                                                         render_value=False),
                              label=_("Repeat password"))
  tos = forms.BooleanField(widget=forms.CheckboxInput(attrs={'class': 'required', 'required': True}),
                           label= mark_safe('I have read and agree to the <a href="#" data-toggle="modal" data-target="#myModal" target="_blank">terms</a> of service'),
                           error_messages={'required': _('You must agree to the terms to register.')})

  def clean_username(self):
    try:
      user = User.objects.get(username__iexact=self.cleaned_data['username'])
    except User.DoesNotExist:
      pass
    else:
      if len(self.cleaned_data.get('username')) < 3:
        raise forms.ValidationError(_('Username should have at least 3 letters.'))
      if ACCOUNT_ACTIVATION_REQUIRED and Registration.objects.filter(user__username__iexact=self.cleaned_data['username']).exclude(activation_key=ACCOUNT_ACTIVATED):
        raise forms.ValidationError(_('This username is already taken but not confirmed. Please check your email for verification steps.'))
      raise forms.ValidationError(_('This username is already taken.'))
    if self.cleaned_data['username'].lower() in ACCOUNT_FORBIDDEN_USERNAMES:
      raise forms.ValidationError(_('This username is not allowed.'))
    return self.cleaned_data['username']

  def clean_email(self):
    if User.objects.filter(email__iexact=self.cleaned_data['email']):
      if ACCOUNT_ACTIVATION_REQUIRED and Registration.objects.filter(user__email__iexact=self.cleaned_data['email']).exclude(activation_key=ACCOUNT_ACTIVATED):
        raise forms.ValidationError(_('This email is already in use but not confirmed. Please check your email for verification steps.'))
      raise forms.ValidationError(_('This email is already in use. Please supply a different email.'))
    return self.cleaned_data['email']

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
    logger.debug(self, self.cleaned_data)
    first_name, last_name = (self.cleaned_data['first_name'],
                             self.cleaned_data['last_name'])
    logger.debug(self, first_name)
    logger.debug(self, last_name)

    new_user.first_name = first_name
    new_user.last_name = last_name

    # permissions
    # new_user.user_permissions.add(Permission.objects.get(name = 'Can add Message'))
    # new_user.user_permissions.add(Permission.objects.get(name = 'Can change Message'))
    # new_user.user_permissions.add(Permission.objects.get(name = 'Can delete Message'))
    # new_user.user_permissions.add(Permission.objects.get(name = 'Can view Message'))
    #
    # new_user.user_permissions.add(Permission.objects.get(name = 'Can add Service'))
    # new_user.user_permissions.add(Permission.objects.get(name = 'Can change Service'))
    # new_user.user_permissions.add(Permission.objects.get(name = 'Can delete Service'))
    # new_user.user_permissions.add(Permission.objects.get(name = 'Can view Service'))

    new_user.save()

    return new_user

def identification_field_factory(label, error_required):
  return forms.CharField(label=label,
                         widget=forms.TextInput(attrs={'class': 'required form-control', 'required': True, 'placeholder': _('Email or Username')}),
                         max_length=75,
                         error_messages={'required': _("%(error)s") % {'error': error_required}})

class AuthenticationForm(forms.Form):

  identification = identification_field_factory(_("Email or username"),
                                                _("Either supply us with your email or username."))
  password = forms.CharField(label=_("Password"),
                             widget=forms.PasswordInput(attrs={'class': 'required form-control', 'required': True, 'placeholder': _('Password')}, render_value=False))
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