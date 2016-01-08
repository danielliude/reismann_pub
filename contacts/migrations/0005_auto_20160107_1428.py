# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0004_auto_20160107_1426'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contact',
            options={'verbose_name': 'Contact', 'verbose_name_plural': 'Contacts', 'permissions': (('view_contact', 'view contact'),)},
        ),
    ]
