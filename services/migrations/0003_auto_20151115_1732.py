# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0002_auto_20151114_1510'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='is_active',
            field=models.BooleanField(verbose_name='service is active', default=True, help_text='service is active'),
        ),
    ]
