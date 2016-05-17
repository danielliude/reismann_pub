from django.contrib import admin

from guardian.admin import GuardedModelAdmin

from profiles.models import Profile
from profiles.models import ProfileSettings

class ProfileSettingsInline(admin.StackedInline):
    model = ProfileSettings
    max_num = 1

class ProfileAdmin(admin.ModelAdmin):
    inlines = [ProfileSettingsInline]

admin.site.register(Profile, ProfileAdmin)
