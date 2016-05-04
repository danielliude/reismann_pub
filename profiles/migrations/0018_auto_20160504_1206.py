# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0017_profilesettings_is_provider'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='is_moderated',
            field=models.BooleanField(verbose_name='Is moderated', default=False, help_text='is moderated'),
        ),
        migrations.AlterField(
            model_name='profilesettings',
            name='is_provider',
            field=models.BooleanField(verbose_name='Provider functionality', default=True, help_text='provider functionality'),
        ),
    ]
