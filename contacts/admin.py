from django.contrib import admin

from guardian.admin import GuardedModelAdmin

from contacts.models import Contact

admin.site.register(Contact, GuardedModelAdmin)