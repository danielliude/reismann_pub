#encoding:utf-8
from __future__ import unicode_literals

from django import forms
from django.utils.translation import ugettext_lazy as _

from core.constants import GENDER_CHOICES

from cities.models import City

from profiles.models import Profile

from easy_thumbnails.widgets import ImageClearableFileInput

import logging

from collections import OrderedDict

logger = logging.getLogger('accounts')

class ProfileForm(forms.ModelForm):
  first_name = forms.CharField(label=_('First name'),
                               max_length=30,
                               widget=forms.TextInput(attrs={'class': 'required form-control', 'required': True, 'placeholder': _('First name')}))
  last_name = forms.CharField(label=_('Last name'),
                              max_length=30,
                              widget=forms.TextInput(attrs={'class': 'required form-control', 'required': True, 'placeholder': _('Last name')}))
  gender = forms.ChoiceField(label=_('gender'),
                             widget=forms.Select(attrs={'class': 'required form-control', 'required': True}),
                             choices=GENDER_CHOICES)
  avatar = forms.ImageField(label=_('avatar'),
                             widget=ImageClearableFileInput(attrs={'class': 'form-control'}),
                             required=False)
  birthday = forms.DateField(label=_('birthday'),
                             widget=forms.DateInput(attrs={'class': 'required form-control', 'required': True},
                                                    format='%Y-%m-%d'),
                             input_formats=['%Y-%m-%d'])
  location = forms.ModelChoiceField(label=_('profile location'),
                                    widget=forms.Select(attrs={'class': 'required form-control', 'required': True}),
                                    queryset=City.objects.all())
  short_description = forms.CharField(label=_('profile short description'), max_length=255,
                                      widget=forms.TextInput(attrs={'class': 'form-control'}),
                                      required=False)
  card_image = forms.ImageField(label=_('profile card image'),
                                widget=ImageClearableFileInput(attrs={'class': 'form-control'}),
                                required=False)
  bio = forms.CharField(label=_('profile bio'),
                        widget=forms.Textarea(attrs={'class': 'form-control'}),
                        required=False)

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
    exclude = ['user', 'privacy']

  def save(self, force_insert=False, force_update=False, commit=True):
    profile = super(ProfileForm, self).save(commit=commit)
    user = profile.user
    user.first_name = self.cleaned_data['first_name']
    user.last_name = self.cleaned_data['last_name']
    user.save()

    return profile
