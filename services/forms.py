from django import forms
from django.utils.translation import ugettext_lazy as _

from redactor.widgets import RedactorEditor

from configurations.models import ServiceCategory, ServiceLanguage, ServiceTag

from cities.models import City

from services.models import Service

from core.constants import SERVICE_TYPE_CHOICES

import logging

logger = logging.getLogger('services')

class ServiceForm(forms.ModelForm):

  title = forms.CharField(widget=forms.TextInput(attrs={
                            'class': 'form-control',
                            'placeholder': _('title')}),
                          label=_('title'),
                          max_length=150)

  content = forms.CharField(widget=forms.Textarea(attrs={
                             'class': 'form-control',
                             'placeholder': _('service content'),
                             'cols': "20",
                             'rows': "5"}),
                            label=_('content'),
                            max_length=500)

  price = forms.IntegerField(min_value=1, max_value=1000, required=True, label=_('price'))

  type = forms.ChoiceField(label=_('type'),
                           choices = SERVICE_TYPE_CHOICES, initial='', widget=forms.Select(), required=True)

  forms.IntegerField(label=_('type'),
                              widget=forms.Select(attrs={
                               'class': 'form-control select2',
                               'data-placeholder': _('service type placeholder'),
                               'style': 'width: 100%'
                             }),
                            required= True, )

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
    widgets = {
      'content': RedactorEditor()
        }

  def __init__(self, *args, **kwargs):
    super(ServiceForm, self).__init__(*args, **kwargs)

  def save(self, force_insert=False, force_update=False, commit=True):
    service = super(ServiceForm, self).save(commit=commit)

    return service