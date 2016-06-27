# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0023_auto_20160614_1204'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='price_type',
            field=models.PositiveSmallIntegerField(verbose_name='price type', blank=True, null=True, choices=[(1, 'day'), (2, 'hour'), (3, 'time')]),
        ),
    ]
