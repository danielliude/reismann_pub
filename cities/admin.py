from django.contrib import admin

from .models import Country, City

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

admin.site.register(Country, CountryAdmin)
admin.site.register(City, CityAdmin)
