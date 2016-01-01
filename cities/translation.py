from modeltranslation.translator import translator, TranslationOptions
from .models import Country, City

class TranslatedCountry(TranslationOptions) :
    fields = ('name',)

class TranslatedCity(TranslationOptions):
    fields = ('name',)


translator.register(Country, TranslatedCountry)
translator.register(City, TranslatedCity)
