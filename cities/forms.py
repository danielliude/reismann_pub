from django import forms
from django.forms import TextInput
from django.utils.translation import ugettext_lazy as _

from core.constants import GENDER_CHOICES
from .models import City
from configurations.models import ServiceCategory, ServiceLanguage, ServiceTag


AGE = (
    ('', 'age'),
    ('0', 'not important'),
    ('18,30', '< 30 years old'),
    ('30,40','30 to 40 years old'),
    ('40,50','40 to 50 years old'),
    ('50,120,',  '> 50 years old')
)

class SearchForm(forms.Form):

    city = forms.ModelMultipleChoiceField(required=False, queryset=City.objects.all(), 
                                          widget=forms. Select(attrs={
                                          'class': 'ui fluid search dropdown',
                                          'multiple' : "",
                                          }),
                                          label= _("All cities"))
    services = forms.ModelMultipleChoiceField(required=False, queryset=ServiceCategory.objects.all(), 
                                          widget=forms. Select(attrs={
                                          'class': 'ui fluid search dropdown',
                                          'multiple' : "",
                                          }),
                                          label= _("All services"))

    # services = forms.ModelMultipleChoiceField(label = _('Services'),
    #                                           required = False,
    #                                           widget=forms.CheckboxSelectMultiple(attrs={
    #                                               'class': "ui checkbox",
    #                                           }),
    #                                           queryset= ServiceCategory.objects.all())

    gender = forms.ChoiceField(required = False,
                                          widget=forms. Select(attrs={
                                          'class': 'ui fluid search dropdown',
                                          # 'multiple' : "",
                                          }),
                                          choices=GENDER_CHOICES)

    age = forms.ChoiceField(required = False,
                                widget=forms. Select(attrs={
                                'class': 'ui fluid dropdown',
                                # 'data-placeholder': _('gender'),
                                }),
                                choices= AGE)

    languages = forms.ModelMultipleChoiceField(required=False, queryset=ServiceLanguage.objects.all(), 
                                          widget=forms. Select(attrs={
                                          'class': 'ui fluid search dropdown',
                                          'multiple' : "",
                                          }),
                                          label= _("All languages"))

    # languages = forms.ModelMultipleChoiceField(required= False,
    #                                           widget=forms.CheckboxSelectMultiple(attrs={
    #                                               'class': "ui checkbox",
    #                                           }),
    #                                           queryset= ServiceLanguage.objects.all())

    tags = forms.ModelMultipleChoiceField(required=False, queryset=ServiceTag.objects.all(), 
                                          widget=forms. Select(attrs={
                                          'class': 'ui fluid search dropdown',
                                          'multiple' : "",
                                          }),
                                          label= _("All tags"))

    # tags = forms.ModelMultipleChoiceField(required= False,
    #                                       widget=forms.CheckboxSelectMultiple(attrs={
    #                                           'class': "ui checkbox",
    #                                       }),
    #                                       queryset=ServiceTag.objects.all())


class SearchIndexForm(forms.Form):

    name = forms.ModelChoiceField(widget=forms.Select(attrs={
                                       'class': 'form-control select2',
                                       'data-placeholder': _('Select city...'),
                                     }),
                                     queryset=City.objects.all())


