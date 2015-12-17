# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import easy_thumbnails.fields
import profiles.models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=easy_thumbnails.fields.ThumbnailerImageField(verbose_name='avatar', help_text='profile avatar help text', upload_to=profiles.models.upload_to_avatar, blank=True),
        ),
    ]
