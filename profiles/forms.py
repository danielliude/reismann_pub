#encoding:utf-8
from __future__ import unicode_literals
import logging
from collections import OrderedDict

from redactor.widgets import RedactorEditor

from django import forms
from django.utils.translation import ugettext_lazy as _
from easy_thumbnails.widgets import ImageClearableFileInput

from core.constants import *
from cities.models import City, Country, Province
from profiles.models import Profile, ProfileSettings, ProfileMore
from contacts.models import Contact

logger = logging.getLogger('accounts')

class SettingsForm(forms.ModelForm):
    profile_is_active = forms.BooleanField(widget=forms.CheckboxInput(attrs={'placeholder': _('Profile is active')}),
                       required= False,
                       label=_('Profile is active'))
    email_notifications = forms.BooleanField(widget=forms.CheckboxInput(attrs={'placeholder': _('Email notifications')}),
                       required= False,
                       label=_('Email notifications'))
    show_real_name = forms.BooleanField(widget=forms.CheckboxInput(attrs={'placeholder': _('Show real name')}),
                   required= False,
                   label=_('Show real name in Profile'))

    is_provider = forms.BooleanField(widget=forms.CheckboxInput(attrs={'placeholder': _('Provider functionality')}),
                   required= False,
                   label=_('Provider functionality'))

    class Meta:
        model = ProfileSettings
        fields = ['email_notifications', 'show_real_name', 'is_provider']

    def __init__(self, *args, **kwargs):
        super(SettingsForm, self).__init__(*args, **kwargs)
        if self.instance.status == 2:
            self.fields['profile_is_active'].initial = True
        elif self.instance.status == 3:
            self.fields['profile_is_active'].initial = False
        else:
            self.fields['profile_is_active'].widget.attrs['disabled'] = 'disabled'


    def save(self, force_insert=False, force_update=False, commit=True):
        instance = super(SettingsForm, self).save(commit=False)

        active = self.cleaned_data['profile_is_active']

        if not 'disabled' in self.fields['profile_is_active'].widget.attrs:
            if active:
                instance.status = 2
            else:
                instance.status = 3

        if commit:
            instance.save()
        return instance

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


class ProfileFormCustomer(forms.ModelForm):

    first_name = forms.CharField(label=_('First name'),
                                 max_length=30,
                                 widget=forms.TextInput(attrs={'placeholder': _('First name')}), required=False)


    last_name = forms.CharField(label=_('Last name'),
                                max_length=30,
                                widget=forms.TextInput(attrs={'placeholder': _('Last name')}), required=False)
    gender = forms.ChoiceField(label=_('Gender'),
                               widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                               choices=GENDER_CHOICES, required=False)

    class Meta:
        model = Profile
        exclude = ['user', 'privacy', 'settings', 'id_image', 'second_id_image', 'id_status', 'is_moderated', 'profession', 'avatar', 'birthday', 'country', 'location', 'short_description', 'card_image', 'bio']

    def __init__(self, *args, **kw):
        super(ProfileFormCustomer, self).__init__(*args, **kw)
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

        # disable some fields on the second edition
        instance = getattr(self, 'instance', None)
        if instance.gender:
            self.fields['gender'].widget.attrs['disabled'] = 'disabled'
        if instance.user.first_name:
            self.fields['first_name'].widget.attrs['disabled'] = 'disabled'
        if instance.user.last_name:
            self.fields['last_name'].widget.attrs['disabled'] = 'disabled'

    def clean_first_name(self):
        instance = getattr(self, 'instance', None)
        if instance.user.first_name:
            return instance.user.first_name
        else:
            return self.cleaned_data['first_name']

    def clean_last_name(self):
        instance = getattr(self, 'instance', None)
        if instance.user.last_name:
            return instance.user.last_name
        else:
            return self.cleaned_data['last_name']

    def clean_gender(self):
        instance = getattr(self, 'instance', None)
        if instance.gender:
            self.fields['gender'].initial = 1
            return instance.gender
        else:
            return self.cleaned_data['gender']


    def save(self, force_insert=False, force_update=False, commit=True):
        profile = super(ProfileFormCustomer, self).save(commit=commit)

        user = profile.user

        self.fields['gender'].widget.attrs.pop('disabled', None)
        self.fields['first_name'].widget.attrs.pop('disabled', None)
        self.fields['last_name'].widget.attrs.pop('disabled', None)

        if not user.first_name and not user.last_name:
            user.first_name = self.cleaned_data['first_name']
            user.last_name = self.cleaned_data['last_name']
            user.save()

        return profile

class ProfileForm(forms.ModelForm):

  first_name = forms.CharField(label=_('First name'),
                               max_length=30,
                               widget=forms.TextInput(attrs={'placeholder': _('First name')}), required = False)
  last_name = forms.CharField(label=_('Last name'),
                              max_length=30,
                              widget=forms.TextInput(attrs={'placeholder': _('Last name')}), required = False)
  gender = forms.ChoiceField(label=_('Gender'),
                             widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                             choices=GENDER_CHOICES, required = False)
  profession = forms.ChoiceField(label=_('Profession'),
                             widget=forms.Select(attrs={'class': 'ui fluid search dropdown', 'placeholder': _('Gender')}),
                             choices=PROFESSION_CHOICES, required = True)
  avatar = forms.ImageField(label=_('Avatar'),
                             widget=ImageClearableFileInput(attrs={}),
                             required=False)
  birthday = forms.DateField(label=_('Birthday'),
                             widget=forms.DateInput(attrs={'required': True},
                                                    format='%Y-%m-%d'),
                             input_formats=['%Y-%m-%d'], required = False)
  country = forms.ModelChoiceField(label=_('Country'),
                                    widget=forms.Select(attrs={'class': 'ui search dropdown'}),
                                    queryset=Country.objects.all(), required= True)
  province = forms.ModelChoiceField(label=_('Province'),
                                    widget=forms.Select(attrs={'class': 'ui search dropdown'}),
                                    queryset=Province.objects.all(), required= True)
  location = forms.ModelChoiceField(label=_('City'),
                                    widget=forms.Select(attrs={'class': 'ui search dropdown'}),
                                    queryset=City.objects.all(), required= True)
  short_description = forms.CharField(label=_('Short description'), max_length=255,
                                      widget=forms.TextInput(attrs={}),
                                      required=False)
  card_image = forms.ImageField(label=_('Card image'),
                                widget=ImageClearableFileInput(attrs={}),
                                required=False)
  bio = forms.CharField(widget=RedactorEditor(attrs={
                             'placeholder': _('Biography'),
                             'cols': "20",
                             'rows': "5"}),
                            label=_('Biography'),
                            max_length=3000, required= True)

  class Meta:
    model = Profile
    exclude = ['user', 'privacy', 'settings', 'id_image', 'second_id_image', 'id_status', 'is_moderated']
    widgets = {
      'bio': RedactorEditor()
        }

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

    # disable some fields on the second edition
    instance = getattr(self, 'instance', None)
    if instance.gender:
        self.fields['gender'].widget.attrs['disabled'] = 'disabled'
    if instance.birthday:
        self.fields['birthday'].widget.attrs['disabled'] = 'disabled'
    if instance.user.first_name:
        self.fields['first_name'].widget.attrs['disabled'] = 'disabled'
    if instance.user.last_name:
        self.fields['last_name'].widget.attrs['disabled'] = 'disabled'

  def clean_first_name(self):
      instance = getattr(self, 'instance', None)
      if instance.user.first_name:
          return instance.user.first_name
      else:
          return self.cleaned_data['first_name']

  def clean_last_name(self):
      instance = getattr(self, 'instance', None)
      if instance.user.last_name:
          return instance.user.last_name
      else:
          return self.cleaned_data['last_name']

  def clean_gender(self):
      instance = getattr(self, 'instance', None)
      if instance.gender:
          self.fields['gender'].initial = 1
          return instance.gender
      else:
          return self.cleaned_data['gender']

  def clean_birthday(self):
      instance = getattr(self, 'instance', None)
      if instance.birthday:
          return instance.birthday
      else:
          return self.cleaned_data['birthday']

  def save(self, force_insert=False, force_update=False, commit=True):
    profile = super(ProfileForm, self).save(commit=commit)

    user = profile.user

    self.fields['gender'].widget.attrs.pop('disabled', None)
    self.fields['birthday'].widget.attrs.pop('disabled', None)
    self.fields['first_name'].widget.attrs.pop('disabled', None)
    self.fields['last_name'].widget.attrs.pop('disabled', None)

    if not user.first_name and not user.last_name:
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        user.save()

    return profile


class ProfileMoreForm(forms.ModelForm):
  country_of_birth = forms.ChoiceField(choices=COUNTRY_OF_BIRTH,
                               label=_('country of birth'),
                               widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                               required=False)
  marrittal_status = forms.ChoiceField(choices=MARRITTAL_STATUS,
                               label=_('marrittal status'),
                               widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                               required=False)
  children = forms.ChoiceField(choices=CHILDREN,
                               label=_('children'),
                               widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                               required=False)
  ethnicity = forms.ChoiceField(choices=ETHNICITY,
                               label=_('ethnicity'),
                               widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                               required=False)
  religion = forms.ChoiceField(choices=RELIGION,
                               label=_('religion'),
                               widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                               required=False)
  education = forms.ChoiceField(choices=EDUCATION,
                               label=_('education'),
                               widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                               required=False)
  annual_income = forms.ChoiceField(choices=ANNUAL_INCOME,
                               label=_('annual income'),
                               widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                               required=False)
  immigration_status = forms.ChoiceField(choices=IMMIGRATION_STATUS,
                               label=_('immigration status'),
                               widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                               required=False)
  body_form = forms.ChoiceField(choices=BODY_FORM,
                               label=_('body form'),
                               widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                               required=False)
  smoking = forms.ChoiceField(choices=SMOKING,
                               label=_('smoking'),
                               widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                               required=False)
  drinking = forms.ChoiceField(choices=DRINKING,
                               label=_('drinking'),
                               widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                               required=False)
  pets = forms.ChoiceField(choices=PETS,
                           label=_('pets'),
                           widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                           required=False)
  hobby = forms.ChoiceField(choices=HOBBY,
                            label=_('hobby'),
                            widget=forms.Select(attrs={'class': 'ui fluid search dropdown'}),
                            required=False)
  most_cheerful = forms.CharField(label=_('most cheerful'), max_length=400, widget=forms.TextInput(attrs={},), required=False)
  good_at = forms.CharField(label=_('good at'), max_length=400, widget=forms.TextInput(attrs={},), required=False)
  friends_description = forms.CharField(label=_('friends description'), max_length=400, widget=forms.TextInput(attrs={},), required=False)
  must_have = forms.CharField(label=_('must have'), max_length=400, widget=forms.TextInput(attrs={},), required=False)
  favourite_things = forms.CharField(label=_('favourite things'), max_length=400, widget=forms.TextInput(attrs={},), required=False)
  crazy_thing_done = forms.CharField(label=_('crazy thing done'), max_length=400, widget=forms.TextInput(attrs={},), required=False)
  normal_do_weekend = forms.CharField(label=_('normal do weekend'), max_length=400, widget=forms.TextInput(attrs={},), required=False)

  class Meta:
    model = ProfileMore
    exclude = ['user']
