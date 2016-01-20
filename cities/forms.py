from django import forms

CITIES = (
    ('hamburg', 'Hamburg'),
    ('lippstadt','Lippstadt'),
    ('frankfurt', 'Frankfurt'),
    ('munich','Munich'),
)


AVAILABLE_SERVICES = (
    ('translator', 'Translator'),
    ('tourguide', 'Tourguide'),
    ('driver', 'Driver'),
    ('booking', 'Booking'),
    ('buying', 'Buying'),
    ('pickup', 'Pickup')
)

GENDER = (
    ('male', 'Male'),
    ('female', 'Female')
)

AGE = (
    ('30', '< 30 years old'),
    ('3040','30 to 40 years old'),
    ('4050','40 to 50 years old'),
    ('50',  '> 50 years old')
)

LANGUAGES = (
    ('english', 'English'),
    ('chineese','Chineese'),
)

TAGS = (
    ('nightlife', 'nighlife'),
    ('poi','POI'),
    ('culture', 'culture'),
    ('photography','photography'),
    ('car','car'),
)


class SearchForm(forms.Form):

    city = forms.ChoiceField(required = True, choices = CITIES)

    services = forms.MultipleChoiceField(required = False,widget=forms.CheckboxSelectMultiple, choices=AVAILABLE_SERVICES)

    gender = forms.MultipleChoiceField(required = False, widget=forms.CheckboxSelectMultiple, choices=GENDER)

    age = forms.ChoiceField(required = False, choices= AGE)

    languages = forms.MultipleChoiceField(required= False,  widget=forms.CheckboxSelectMultiple, choices= LANGUAGES)

    tags = forms.MultipleChoiceField(required= False,  widget=forms.CheckboxSelectMultiple, choices= TAGS)
