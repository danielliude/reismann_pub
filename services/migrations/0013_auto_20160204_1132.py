# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0012_service_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='content',
            field=redactor.fields.RedactorField(verbose_name='service content', default='service content'),
        ),
        migrations.AlterField(
            model_name='service',
            name='title',
            field=models.CharField(blank=True, null=True, verbose_name='service title', max_length=255, default='Service title'),
        ),
    ]
