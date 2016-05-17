# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0022_auto_20160515_1326'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='is_moderated',
        ),
        migrations.RemoveField(
            model_name='profilesettings',
            name='profile_is_active',
        ),
        migrations.AddField(
            model_name='profilesettings',
            name='status',
            field=models.PositiveSmallIntegerField(verbose_name='profile status', default=1, null=True, blank=True, choices=[(1, 'Moderation'), (2, 'Active'), (3, 'Not active'), (4, 'Suspended')]),
        ),
        migrations.AlterField(
            model_name='profilesettings',
            name='is_provider',
            field=models.BooleanField(verbose_name='provider functionality', default=True, help_text='provider functionality'),
        ),
    ]
