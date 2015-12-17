# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import profiles.models
import easy_thumbnails.fields


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_auto_20151114_1510'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='card_image',
            field=easy_thumbnails.fields.ThumbnailerImageField(verbose_name='avatar', upload_to=profiles.models.upload_to_profile_card, blank=True, help_text='profile card image help text'),
        ),
        migrations.AddField(
            model_name='profile',
            name='is_active',
            field=models.BooleanField(verbose_name='profile is active', default=True, help_text='profile is active help text'),
        ),
    ]
