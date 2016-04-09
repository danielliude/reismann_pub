from django.contrib import admin

from services.models import Service


class ServiceAdmin(admin.ModelAdmin):
  list_display = ('title', 'user', 'status',)
  list_filter = ('status',)


admin.site.register(Service, ServiceAdmin)
