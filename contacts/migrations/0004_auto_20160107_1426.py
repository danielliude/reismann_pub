# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0003_auto_20160107_1414'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contact',
            options={'verbose_name': 'Contact', 'verbose_name_plural': 'Contacts', 'permissions': (('view_contacts', 'view contacts'), ('edit_contacts', 'edit contacts'), ('remove_contacts', 'remove contacts'))},
        ),
    ]
