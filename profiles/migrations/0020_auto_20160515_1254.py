# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0019_profile_country'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='bio',
            field=redactor.fields.RedactorField(default='Biography', verbose_name='Biography'),
        ),
    ]
