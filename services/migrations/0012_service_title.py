# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0011_auto_20160128_1135'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='title',
            field=models.CharField(default=b'Service title', max_length=255, null=True, verbose_name='service title', blank=True),
        ),
    ]
