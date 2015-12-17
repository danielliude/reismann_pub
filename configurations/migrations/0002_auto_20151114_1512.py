# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('configurations', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='servicecategory',
            name='is_active',
            field=models.BooleanField(help_text='service category is active help text', verbose_name='service category is active', default=True),
        ),
        migrations.AlterField(
            model_name='servicelanguage',
            name='is_active',
            field=models.BooleanField(help_text='service language is active help text', verbose_name='service language is active', default=True),
        ),
        migrations.AlterField(
            model_name='servicetag',
            name='is_active',
            field=models.BooleanField(help_text='service tag is active help text', verbose_name='service tag is active', default=True),
        ),
    ]
