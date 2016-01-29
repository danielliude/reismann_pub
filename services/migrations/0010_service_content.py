# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0009_auto_20160128_1129'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='content',
            field=redactor.fields.RedactorField(default=b'service content', verbose_name='service content'),
        ),
    ]
