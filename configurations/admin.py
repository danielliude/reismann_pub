from django.contrib import admin
from django.contrib.sites.admin import SiteAdmin
from django.contrib.sites.models import Site

from easy_thumbnails.fields import ThumbnailerImageField
from easy_thumbnails.widgets import ImageClearableFileInput

from configurations.models import ServiceCategory, ServiceTag, ServiceLanguage, SiteConfiguration

class GeneralConfigurationAdmin(admin.ModelAdmin):
  list_display = ('name', 'is_active', 'created_at',)
  list_filter = ('is_active',)

class SiteConfigrationInline(admin.StackedInline):
  model = SiteConfiguration
  max_num = 1

  formfield_overrides = {
    ThumbnailerImageField: {'widget': ImageClearableFileInput}
  }

class CustomSiteAdmin(SiteAdmin):
  inlines = [SiteConfigrationInline,]

admin.site.register(ServiceCategory, GeneralConfigurationAdmin)
admin.site.register(ServiceTag, GeneralConfigurationAdmin)
admin.site.register(ServiceLanguage, GeneralConfigurationAdmin)

try:
  admin.site.unregister(Site)
except admin.sites.NotRegistered:
  pass

admin.site.register(Site, CustomSiteAdmin)
