# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0002_auto_20160107_1411'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contact',
            options={'verbose_name': 'Contact', 'verbose_name_plural': 'Contacts'},
        ),
    ]
