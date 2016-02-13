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
                            'placeholder': _('service title')}),
                          label=_('Title'),
                          max_length=150)

  content = forms.CharField(widget=forms.Textarea(attrs={
                             'class': 'form-control',
                             'placeholder': _('service content'),
                             'cols': "20",
                             'rows': "5"}),
                            label=_('Content'),
                            max_length=500)

  price = forms.IntegerField(min_value=1, max_value=1000, required=True, label=_('Price'))

  type = forms.ChoiceField(label=_('Type'),
                           choices = SERVICE_TYPE_CHOICES, initial='', widget=forms.Select(), required=True)

  forms.IntegerField(label=_('Type'),
                              widget=forms.Select(attrs={
                               'class': 'form-control select2',
                               'data-placeholder': _('service type'),
                               'style': 'width: 100%'
                             }),
                            required= True, )

  cities = forms.ModelMultipleChoiceField(label=_('Cities'),
                                     widget=forms.SelectMultiple(attrs={
                                       'class': 'form-control select2',
                                       'data-placeholder': _('service cities'),
                                       'style': 'width: 100%'
                                     }),
                                     queryset=City.objects.all())

  categories = forms.ModelMultipleChoiceField(label=_('Categories'),
                                         widget=forms.SelectMultiple(attrs={
                                           'class': 'form-control select2',
                                           'data-placeholder': _('service categories'),
                                            'style': 'width: 100%'
                                         }),
                                         queryset=ServiceCategory.objects.all())

  languages = forms.ModelMultipleChoiceField(label=_('Languages'),
                                        widget=forms.SelectMultiple(attrs={
                                          'class': 'form-control select2',
                                          'data-placeholder': _('service languages'),
                                          'style': 'width: 100%'
                                        }),
                                        queryset=ServiceLanguage.objects.all())

  tags = forms.ModelMultipleChoiceField(label=_('Tags'),
                                   widget=forms.SelectMultiple(attrs={
                                     'class': 'form-control select2',
                                     'data-placeholder': _('service tags'),
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