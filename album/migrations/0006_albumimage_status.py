# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('album', '0005_auto_20160509_1026'),
    ]

    operations = [
        migrations.AddField(
            model_name='albumimage',
            name='status',
            field=models.PositiveIntegerField(blank=True, null=True, verbose_name='service status', choices=[(1, 'Moderation'), (2, 'Active'), (3, 'Not active')]),
        ),
    ]
