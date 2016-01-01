# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '0002_auto_20151114_1510'),
    ]

    operations = [
        migrations.AddField(
            model_name='city',
            name='name_en',
            field=models.CharField(max_length=128, null=True, verbose_name='city name'),
        ),
        migrations.AddField(
            model_name='city',
            name='name_zh_hans',
            field=models.CharField(max_length=128, null=True, verbose_name='city name'),
        ),
        migrations.AddField(
            model_name='country',
            name='name_en',
            field=models.CharField(max_length=48, null=True, verbose_name='country name'),
        ),
        migrations.AddField(
            model_name='country',
            name='name_zh_hans',
            field=models.CharField(max_length=48, null=True, verbose_name='country name'),
        ),
    ]
