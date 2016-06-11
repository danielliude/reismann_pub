# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0021_auto_20160529_1659'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='price_type',
            field=models.PositiveSmallIntegerField(blank=True, choices=[(1, 'day'), (2, 'hour')], null=True, verbose_name='service type'),
        ),
    ]
