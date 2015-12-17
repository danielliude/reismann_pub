# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import easy_thumbnails.fields
import core.uploads


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0003_auto_20151116_1328'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='bio',
            field=models.TextField(blank=True, null=True, verbose_name='profilebio'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='card_image',
            field=easy_thumbnails.fields.ThumbnailerImageField(blank=True, upload_to=core.uploads.upload_to_profile_card, verbose_name='profile card image', help_text='profile card image help text'),
        ),
    ]
