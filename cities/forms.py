from django import forms
from django.forms import TextInput
from django.utils.translation import ugettext_lazy as _

from core.constants import GENDER_CHOICES
from .models import City
from services.models import ServiceCategory, ServiceLanguage, ServiceTag


AGE = (
    ('0', 'not important'),
    ('18,30', '< 30 years old'),
    ('30,40','30 to 40 years old'),
    ('40,50','40 to 50 years old'),
    ('50,120,',  '> 50 years old')
)

class SearchForm(forms.Form):

    city = forms.ModelChoiceField(required=False, queryset=City.objects.all(), label= _("All cities"))

    services = forms.ModelMultipleChoiceField(label = _('Services'),
                                              required = False,
                                              widget=forms.RadioSelect(attrs={
                                                  'class': "ui checkbox",
                                              }),
                                              queryset= ServiceCategory.objects.all())

    gender = forms.MultipleChoiceField(required = False,
                                          widget=forms. SelectMultiple(attrs={
                                          'class': 'form-control',
                                          'data-placeholder': _('gender'),
                                          }),
                                          choices=GENDER_CHOICES)

    age = forms.ChoiceField(required = False, choices= AGE)

    languages = forms.ModelMultipleChoiceField(required= False,
                                                widget=forms. SelectMultiple(attrs={
                                                  'class': 'form-control',
                                                  'data-placeholder': _('languages'),
                                              }),
                                              queryset= ServiceLanguage.objects.all())

    tags = forms.ModelMultipleChoiceField(required= False,
                                          widget=forms. SelectMultiple(attrs={
                                                  'class': 'form-control',
                                                  'data-placeholder': _('tags'),
                                          }),
                                          queryset=ServiceTag.objects.all())


class SearchIndexForm(forms.Form):

    name = forms.ModelChoiceField(widget=forms.Select(attrs={
                                       'class': 'form-control select2',
                                       'data-placeholder': _('Select city...'),
                                     }),
                                     queryset=City.objects.all())


