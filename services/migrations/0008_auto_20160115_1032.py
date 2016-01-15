# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0007_auto_20160107_1434'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='is_active',
            field=models.BooleanField(default=False, help_text='service is active', verbose_name='service is active'),
        ),
    ]
