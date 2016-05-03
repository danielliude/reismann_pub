# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0016_delete_defaultavatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='profilesettings',
            name='is_provider',
            field=models.BooleanField(help_text='provider functionality', default=True, verbose_name='I am provider'),
        ),
    ]
