# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0010_service_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='user',
            field=models.ForeignKey(related_name='service', default=1, blank=True, to=settings.AUTH_USER_MODEL, null=True, verbose_name='user'),
        ),
    ]
