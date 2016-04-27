#encoding:utf-8
from __future__ import unicode_literals
import logging
from collections import OrderedDict

from django import forms
from django.utils.translation import ugettext_lazy as _
from easy_thumbnails.widgets import ImageClearableFileInput

from core.constants import GENDER_CHOICES, PROFESSION_CHOICES
from cities.models import City
from profiles.models import Profile, ProfileSettings
from contacts.models import Contact

logger = logging.getLogger('accounts')

class SettingsForm(forms.ModelForm):
    profile_is_active = forms.BooleanField(widget=forms.CheckboxInput(attrs={'placeholder': _('Profile is active')}),
                       required= False,
                       label=_('Profile is active'))
    email_notifications = forms.BooleanField(widget=forms.CheckboxInput(attrs={'placeholder': _('Email notifications')}),
                       required= False,
                       label=_('Email notifications'))

    class Meta:
        model = ProfileSettings
        fields = ['profile_is_active', 'email_notifications']

class ProfileIdForm(forms.ModelForm):

    id_image = forms.ImageField(label=_('Id image'),
                                widget=ImageClearableFileInput(attrs={}),
                                required=False)
    second_id_image = forms.ImageField(label=_('Another Id'),
                            widget=ImageClearableFileInput(attrs={}),
                            required=False)

    class Meta:
        model = Profile
        fields = ['id_image', 'second_id_image']

class ProfileForm(forms.ModelForm):

  first_name = forms.CharField(label=_('First name'),
                               max_length=30,
                               widget=forms.TextInput(attrs={'placeholder': _('First name')}), required = True)
  last_name = forms.CharField(label=_('Last name'),
                              max_length=30,
                              widget=forms.TextInput(attrs={'placeholder': _('Last name')}), required = True)
  gender = forms.ChoiceField(label=_('Gender'),
                             widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                             choices=GENDER_CHOICES, required = True)
  profession = forms.ChoiceField(label=_('Profession'),
                             widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                             choices=PROFESSION_CHOICES, required = True)
  avatar = forms.ImageField(label=_('Avatar'),
                             widget=ImageClearableFileInput(attrs={}),
                             required=False)
  birthday = forms.DateField(label=_('Birthday'),
                             widget=forms.DateInput(attrs={'required': True},
                                                    format='%Y-%m-%d'),
                             input_formats=['%Y-%m-%d'], required = True)
  location = forms.ModelChoiceField(label=_('Location'),
                                    widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                                    queryset=City.objects.all(), required= True)
  short_description = forms.CharField(label=_('Short description'), max_length=255,
                                      widget=forms.TextInput(attrs={}),
                                      required=False)
  card_image = forms.ImageField(label=_('Card image'),
                                widget=ImageClearableFileInput(attrs={}),
                                required=False)
  bio = forms.CharField(label=_('Biography'),
                        widget=forms.Textarea(attrs={}),
                        required=True)

  def __init__(self, *args, **kw):
    super(ProfileForm, self).__init__(*args, **kw)
    try:
      new_order = self.fields.keyOrder[:-2]
      new_order.insert(0, 'first_name')
      new_order.insert(1, 'last_name')
      self.fields.keyOrder = new_order
    except AttributeError:  # in Django > 1.7
      new_order = [('first_name', self.fields['first_name']),
                   ('last_name', self.fields['last_name'])]
      new_order.extend(list(self.fields.items())[:-2])
      self.fields = OrderedDict(new_order)

  class Meta:
    model = Profile
    exclude = ['user', 'privacy', 'settings', 'id_image', 'second_id_image', 'id_status']

  def save(self, force_insert=False, force_update=False, commit=True):
    profile = super(ProfileForm, self).save(commit=commit)

    user = profile.user
    user.first_name = self.cleaned_data['first_name']
    user.last_name = self.cleaned_data['last_name']
    user.save()

    return profile
