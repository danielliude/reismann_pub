# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0005_auto_20151118_2126'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='price',
            field=models.DecimalField(max_digits=6, verbose_name='service price', blank=True, null=True, decimal_places=2),
        ),
    ]
