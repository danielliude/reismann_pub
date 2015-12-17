from django import forms
from django.utils.translation import ugettext_lazy as _

from redactor.widgets import RedactorEditor

from configurations.models import ServiceCategory, ServiceLanguage, \
  ServiceTag

from cities.models import City

from services.models import Service, Resume

import logging

logger = logging.getLogger('services')

class ServiceForm(forms.ModelForm):

  is_active = forms.BooleanField(label=_('service is active'),
                                 widget=forms.CheckboxInput())
  cities = forms.ModelMultipleChoiceField(label=_('service cities'),
                                     widget=forms.SelectMultiple(attrs={
                                       'class': 'form-control select2',
                                       'data-placeholder': _('service cities placeholder'),
                                       'style': 'width: 100%'
                                     }),
                                     queryset=City.objects.all())
  categories = forms.ModelMultipleChoiceField(label=_('service categories'),
                                         widget=forms.SelectMultiple(attrs={
                                           'class': 'form-control select2',
                                           'data-placeholder': _('service categories placeholder'),
                                            'style': 'width: 100%'
                                         }),
                                         queryset=ServiceCategory.objects.all())
  languages = forms.ModelMultipleChoiceField(label=_('service languages'),
                                        widget=forms.SelectMultiple(attrs={
                                          'class': 'form-control select2',
                                          'data-placeholder': _('service languages placeholder'),
                                          'style': 'width: 100%'
                                        }),
                                        queryset=ServiceLanguage.objects.all())
  tags = forms.ModelMultipleChoiceField(label=_('service tags'),
                                   widget=forms.SelectMultiple(attrs={
                                     'class': 'form-control select2',
                                     'data-placeholder': _('service tags placeholder'),
                                      'style': 'width: 100%'
                                   }),
                                   queryset=ServiceTag.objects.all())

  class Meta:
    model = Service
    exclude = ['user', 'created_at', 'updated_at']

  def __init__(self, *args, **kwargs):
    super(ServiceForm, self).__init__(*args, **kwargs)

  def save(self, force_insert=False, force_update=False, commit=True):
    service = super(ServiceForm, self).save(commit=commit)

    return service

class ResumeForm(forms.ModelForm):

  is_active = forms.BooleanField(label=_('service is active'),
                                 widget=forms.CheckboxInput())

  class Meta:
    model = Resume
    exclude = ['user', 'service_category', 'created_at', 'updated_at']
    widgets = {
      'content': RedactorEditor()
    }