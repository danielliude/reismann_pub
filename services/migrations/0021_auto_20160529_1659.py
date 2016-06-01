# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0020_auto_20160426_0914'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='price',
            field=models.DecimalField(verbose_name='service price', blank=True, max_digits=6, null=True, decimal_places=0),
        ),
    ]
