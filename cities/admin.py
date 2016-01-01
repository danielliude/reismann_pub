from django.contrib import admin

from .models import Country, City
from modeltranslation.admin import TranslationAdmin
from reismann.admin import ImageWidgetAdmin

class CountryAdmin(admin.ModelAdmin):
  list_display = ('name', 'is_active', 'created_at',)
  list_filter = ('is_active',)

class CityAdmin(ImageWidgetAdmin):
  image_fields = ['card_image', 'banner_image']
  list_display = ('name', 'country', 'is_active', 'country', 'created_at', 'updated_at',)
  list_filter = (
    ('is_active'),
    ('country', admin.RelatedOnlyFieldListFilter),
  )

class TranslatedCountryAdmin(CountryAdmin, TranslationAdmin):
    pass

class TranslatedCityAdmin(CityAdmin, TranslationAdmin):
    pass

admin.site.register(Country, TranslatedCountryAdmin)
admin.site.register(City, TranslatedCityAdmin)



