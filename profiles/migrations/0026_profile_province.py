# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '0006_province'),
        ('profiles', '0025_auto_20160518_1627'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='province',
            field=models.ForeignKey(blank=True, verbose_name='province', null=True, to='cities.Province', help_text='province'),
        ),
    ]
