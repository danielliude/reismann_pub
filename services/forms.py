from django import forms
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User

from redactor.widgets import RedactorEditor

from configurations.models import ServiceCategory, ServiceLanguage, ServiceTag

from cities.models import City

from services.models import Service

from core.constants import SERVICE_TYPE_CHOICES

import logging

from guardian.shortcuts import assign_perm

from core.constants import ASSIGNED_PERMISSIONS

logger = logging.getLogger('services')

class ServiceForm(forms.ModelForm):

  title = forms.CharField(widget=forms.TextInput(attrs={
                            'placeholder': _('service title')}),
                          label=_('Title'),
                          max_length=150)

  content = forms.CharField(widget=RedactorEditor(attrs={
                             'placeholder': _('service content'),
                             'cols': "20",
                             'rows': "5"}),
                            label=_('Content'),
                            max_length=3000)

  price = forms.IntegerField(min_value=1, max_value=1000, required=True, label=_('Price'))

  type = forms.ChoiceField(label=_('Type'),
                           choices = SERVICE_TYPE_CHOICES, initial='', widget=forms.Select(attrs={'class': 'ui fluid search dropdown', 'required': True}), required=True)

  cities = forms.ModelMultipleChoiceField(label=_('Cities'),
                                     widget=forms.SelectMultiple(attrs={
                                       'class': 'ui fluid search dropdown',
                                       'multiple' : "",
                                       'placeholder': _('service cities')
                                     }),
                                     queryset=City.objects.all())

  categories = forms.ModelMultipleChoiceField(label=_('Categories'),
                                         widget=forms.Select(attrs={
                                           'class': 'ui fluid search dropdown',
                                           'placeholder': _('service categories')
                                         }),
                                         queryset=ServiceCategory.objects.all())

  languages = forms.ModelMultipleChoiceField(label=_('Languages'),
                                        widget=forms.SelectMultiple(attrs={
                                          'class': 'ui fluid search dropdown',
                                          'multiple' : "",
                                          'placeholder': _('service languages')
                                        }),
                                        queryset=ServiceLanguage.objects.all())

  tags = forms.ModelMultipleChoiceField(label=_('Tags'),
                                   widget=forms.SelectMultiple(attrs={
                                     'class': 'ui fluid search dropdown',
                                     'multiple' : "",
                                     'placeholder': _('service tags')
                                   }),
                                   queryset=ServiceTag.objects.all())

  class Meta:
    model = Service
    exclude = ['user', 'created_at', 'updated_at']
    widgets = {
      'content': RedactorEditor()
        }

  def __init__(self, *args, **kwargs):
    super(ServiceForm, self).__init__(*args, **kwargs)

  def save(self, username, force_insert=False, force_update=False, commit=True):
    try:
        user = User.objects.get(username = username)
    except User.DoesNotExist:
      raise forms.ValidationError(_('The following username is incorrect: %(username)s') % {
        'username': username
      })

    service = super(ServiceForm, self).save(commit=commit)

    if user:
        for perm in ASSIGNED_PERMISSIONS['service']:
          assign_perm(perm[0], user, service)

    return service


class ServiceRatingForm(forms.Form):
    c=[('1',''),('2',''),('3',''),('4',''),('5','')]
    def __init__(self, *args, **kwargs):
        super(ServiceRatingForm, self).__init__(*args, **kwargs)
        self.fields['stars'].widget.attrs.update({'class': 'star', 'name' : 'rating'})
        self.fields['comment'].widget.attrs.update({'rows' : 10})
    stars = forms.ChoiceField(widget=forms.RadioSelect, choices=c)
    comment = forms.CharField(widget=forms.Textarea)