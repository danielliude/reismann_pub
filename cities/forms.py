from django import forms
from django.forms import TextInput
from django.utils.translation import ugettext_lazy as _

from core.constants import GENDER_CHOICES
from .models import City
from configurations.models import ServiceCategory, ServiceLanguage, ServiceTag


class SearchForm(forms.Form):

    city = forms.ModelMultipleChoiceField(required=False, queryset=City.objects.all(), 
                                          widget=forms.Select(attrs={
                                          'class': 'ui fluid search dropdown',
                                          'multiple' : "",
                                          }),
                                          label= _("All cities"))
    category = forms.ModelChoiceField(required=False,
                                          widget=forms.Select(attrs={
                                          'class': 'ui fluid search dropdown',
                                          }),
                                          queryset=ServiceCategory.objects.all(),
                                          label= _("All services"))

    gender = forms.ChoiceField(required = False,
                                          widget=forms.Select(attrs={
                                          'class': 'ui fluid search dropdown',
                                          }),
                                          choices=GENDER_CHOICES)


    languages = forms.ModelMultipleChoiceField(required=False, queryset=ServiceLanguage.objects.all(), 
                                          widget=forms.Select(attrs={
                                          'class': 'ui fluid search dropdown',
                                          'multiple' : "",
                                          }),
                                          label= _("All languages"))

    tags = forms.ModelMultipleChoiceField(required=False, queryset=ServiceTag.objects.all(), 
                                          widget=forms.Select(attrs={
                                          'class': 'ui fluid search dropdown',
                                          'multiple' : "",
                                          }),
                                          label= _("All tags"))


class SearchIndexForm(forms.Form):

    name = forms.ModelChoiceField(widget=forms.Select(attrs={
                                       'class': 'form-control select2',
                                       'data-placeholder': _('Select city...'),
                                     }),
                                     queryset=City.objects.all())


