# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='city',
            name='all_of_country',
            field=models.BooleanField(verbose_name='all cities of selected country', help_text='city all of country help text', default=True),
        ),
        migrations.AlterField(
            model_name='city',
            name='created_at',
            field=models.DateTimeField(verbose_name='created at', auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='city',
            name='updated_at',
            field=models.DateTimeField(verbose_name='updated at', auto_now=True),
        ),
        migrations.AlterField(
            model_name='country',
            name='created_at',
            field=models.DateTimeField(verbose_name='created at', auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='country',
            name='is_active',
            field=models.BooleanField(verbose_name='country is active', help_text='country is active help text', default=True),
        ),
        migrations.AlterField(
            model_name='country',
            name='updated_at',
            field=models.DateTimeField(verbose_name='updated at', auto_now=True),
        ),
    ]
