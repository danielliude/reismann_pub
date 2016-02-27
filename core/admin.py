from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import ugettext_lazy as _

from guardian.admin import GuardedModelAdmin

from easy_thumbnails.widgets import ImageClearableFileInput
from easy_thumbnails.fields import ThumbnailerImageField

from accounts.models import Registration

from profiles.models import Profile

from services.models import Service

class ProfileInline(admin.StackedInline):
  model = Profile
  max_num = 1

  formfield_overrides = {
    ThumbnailerImageField: {'widget': ImageClearableFileInput}
  }

class RegistrationInline(admin.StackedInline):
  model = Registration
  max_num = 1

class ServiceInline(admin.StackedInline):
  model = Service
  max_num = 5

  formfield_overrides = {
    ThumbnailerImageField: {'widget': ImageClearableFileInput}
  }

class AccountAdmin(UserAdmin, GuardedModelAdmin):
  inlines = [ProfileInline, RegistrationInline, ServiceInline,]
  fieldsets = (
    (None, {'fields': ('username', 'password')}),
    (_('Personal info'), {
      'classes': ('grp-collapse grp-open',),
      'fields': ('first_name', 'last_name', 'email')
    }),
    (_('Permissions'), {
      'classes': ('grp-collapse grp-closed',),
      'fields': ('is_active', 'is_staff', 'is_superuser','groups', 'user_permissions')
    }),
    (_('Important dates'), {
      'classes': ('grp-collapse grp-closed',),
      'fields': ('last_login', 'date_joined')
    }),
  )
  list_display = ('username', 'email', 'first_name', 'last_name',
                  'is_staff', 'is_active', 'date_joined')
  list_filter = ('is_staff', 'is_superuser', 'is_active')

try:
  admin.site.unregister(User)
except admin.sites.NotRegistered:
  pass

admin.site.register(User, AccountAdmin)

from django.contrib.auth.models import Permission
admin.site.register(Permission)