from django.contrib import admin

from guardian.admin import GuardedModelAdmin

from profiles.models import Profile
from profiles.models import ProfileSettings
from django.contrib.auth.models import User
from reismann.settings import ADMIN_NAME
from notifications.signals import notify

class ProfileSettingsInline(admin.StackedInline):
    model = ProfileSettings
    max_num = 1

class ProfileAdmin(admin.ModelAdmin):
    inlines = [ProfileSettingsInline]

    def save_model(self, request, obj, form, change):
        if obj.id_status == 3:
            admin = User.objects.get(username=ADMIN_NAME)
            if admin:
                notify.send(admin, recipient=obj.user, action_object=obj,
                            verb=u'profile ID was approved')
            else:
                notify.send(obj.user, recipient=obj.user, action_object=obj,
                            verb=u'profile ID was approved')

        obj.save()

admin.site.register(Profile, ProfileAdmin)