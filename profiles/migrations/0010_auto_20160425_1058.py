# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import core.uploads


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0009_auto_20160425_0826'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='id_status',
            field=models.PositiveIntegerField(null=True, verbose_name='identification status', choices=[(1, 'Not started'), (2, 'Waiting for approval'), (3, 'Approved'), (4, 'Declined')], blank=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='second_id_image',
            field=models.ImageField(blank=True, upload_to=core.uploads.upload_to_profile_id_card, help_text='second id card', verbose_name='Second id card'),
        ),
    ]
