# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0034_auto_20160627_0620'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='gender',
            field=models.PositiveSmallIntegerField(verbose_name='Gender', help_text='gender', choices=[('', 'gender'), (0, 'irrelevant'), (1, 'Male'), (2, 'Female')], null=True, blank=True),
        ),
    ]
