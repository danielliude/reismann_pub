# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0010_auto_20160425_1058'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='id_status',
            field=models.PositiveIntegerField(null=True, default=1, choices=[(1, 'Not started'), (2, 'Waiting for approval'), (3, 'Approved'), (4, 'Declined')], verbose_name='identification status', blank=True),
        ),
    ]
