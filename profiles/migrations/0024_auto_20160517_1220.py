# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0023_auto_20160517_1148'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='profilesettings',
            options={'verbose_name': 'Profile settings', 'verbose_name_plural': 'Profiles settings'},
        ),
        migrations.RemoveField(
            model_name='profile',
            name='settings',
        ),
        migrations.AddField(
            model_name='profilesettings',
            name='profile',
            field=models.OneToOneField(to='profiles.Profile', verbose_name='settings', blank=True, related_name='profile_settings', null=True),
        ),
    ]
