# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0017_auto_20160408_1245'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='service',
            name='is_active',
        ),
        migrations.AddField(
            model_name='service',
            name='status',
            field=models.PositiveIntegerField(verbose_name='service status', blank=True, choices=[(1, 'Moderation'), (2, 'Active'), (3, 'Not active')], null=True),
        ),
    ]
