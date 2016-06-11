# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '0006_province'),
    ]

    operations = [
        migrations.AddField(
            model_name='city',
            name='province',
            field=models.ForeignKey(to='cities.Province', verbose_name='city province', null=True, blank=True),
        ),
    ]
