# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0024_auto_20160517_1220'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profilesettings',
            name='profile',
            field=models.OneToOneField(verbose_name='settings', null=True, related_name='settings', blank=True, to='profiles.Profile'),
        ),
    ]
