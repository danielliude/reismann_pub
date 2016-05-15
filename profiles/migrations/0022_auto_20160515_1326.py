# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0021_auto_20160515_1325'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='bio',
            field=redactor.fields.RedactorField(verbose_name='Biography', default='Biography'),
        ),
    ]
