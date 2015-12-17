# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0004_auto_20151117_1103'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='short_description',
            field=models.CharField(blank=True, null=True, max_length=255, verbose_name='profile short description'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='bio',
            field=models.TextField(blank=True, null=True, verbose_name='profile bio'),
        ),
    ]
