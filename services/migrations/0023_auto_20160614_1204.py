# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0022_auto_20160611_1636'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='service',
            name='languages',
        ),
        migrations.RemoveField(
            model_name='service',
            name='tags',
        ),
    ]
