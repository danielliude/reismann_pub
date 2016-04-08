# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0016_servicerating_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='content',
            field=redactor.fields.RedactorField(verbose_name='service content', default='service content'),
        ),
    ]
