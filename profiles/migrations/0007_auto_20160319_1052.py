# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0006_auto_20160115_1022'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='gender',
            field=models.PositiveSmallIntegerField(choices=[('', 'gender'), (1, 'Male'), (2, 'Female')], blank=True, verbose_name='gender', null=True),
        ),
    ]
