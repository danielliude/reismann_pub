# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('album', '0006_albumimage_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='albumimage',
            name='status',
            field=models.PositiveIntegerField(blank=True, choices=[(1, 'Moderation'), (2, 'Active'), (3, 'Not active')], null=True, verbose_name='Image status'),
        ),
    ]
