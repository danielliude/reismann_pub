from django import forms
from core.constants import GENDER_CHOICES

CITIES = (
    ('0', 'All cities'),
    ('hamburg', 'Hamburg'),
    ('lippstadt','Lippstadt'),
    ('frankfurt', 'Frankfurt'),
    ('munich','Munich'),
)

AVAILABLE_SERVICES = (
    ('6', 'Translator'),
    ('7', 'Tourguide'),
    ('8', 'Driver'),
    ('9', 'Booking'),
    ('10', 'Buying'),
    ('11', 'Pickup')
)

AGE = (
    ('0', 'not important'),
    ('18,30', '< 30 years old'),
    ('30,40','30 to 40 years old'),
    ('40,50','40 to 50 years old'),
    ('50,120,',  '> 50 years old')
)

LANGUAGES = (
    ('1', 'English'),
    ('2','Chineese'),
    ('3', 'German'),
    ('4','French'),
    ('5', 'Italien'),
    ('6','Spanish'),
)

TAGS = (
    ('5', 'food'),
    ('6', 'culture'),
    ('7','sightseeing'),
    ('8', 'nightlife'),
    ('9','photoshooting'),
    ('10','private car'),
    ('11','translations'),
)


class SearchForm(forms.Form):

    city = forms.ChoiceField(required = True, choices = CITIES)

    services = forms.MultipleChoiceField(required = False,widget=forms.CheckboxSelectMultiple, choices=AVAILABLE_SERVICES)

    gender = forms.MultipleChoiceField(required = False, widget=forms.CheckboxSelectMultiple, choices=GENDER_CHOICES)

    age = forms.ChoiceField(required = False, choices= AGE)

    languages = forms.MultipleChoiceField(required= False,  widget=forms.CheckboxSelectMultiple, choices= LANGUAGES)

    tags = forms.MultipleChoiceField(required= False,  widget=forms.CheckboxSelectMultiple, choices= TAGS)
