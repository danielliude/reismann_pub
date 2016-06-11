from django.contrib import admin

from cities.models import Country, City, Province
from reismann.admin import ImageWidgetAdmin

class CountryAdmin(admin.ModelAdmin):
  list_display = ('name', 'is_active', 'created_at',)
  list_filter = ('is_active',)

class ProvinceAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_active', 'created_at')
    list_filter = ('name', 'country', 'is_active', 'created_at', 'updated_at')

class CityAdmin(ImageWidgetAdmin):
  image_fields = ['card_image', 'banner_image']
  list_display = ('name', 'country', 'province', 'is_active', 'created_at', 'updated_at',)
  list_filter = (
    ('is_active'),
    ('province', admin.RelatedOnlyFieldListFilter),
    ('country', admin.RelatedOnlyFieldListFilter),
  )
admin.site.register(Country, CountryAdmin)
admin.site.register(Province, ProvinceAdmin)
admin.site.register(City, CityAdmin)



