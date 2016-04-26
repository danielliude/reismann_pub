# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0018_auto_20160409_0917'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='currency',
            field=models.PositiveSmallIntegerField(blank=True, null=True, verbose_name='service currency', choices=[(1, '€'), (2, '¥')]),
        ),
        migrations.AddField(
            model_name='service',
            name='price_type',
            field=models.PositiveSmallIntegerField(blank=True, null=True, verbose_name='service type', choices=[(1, 'Per day'), (2, 'Per hour')]),
        ),
    ]
