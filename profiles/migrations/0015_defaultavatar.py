# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import core.uploads
import easy_thumbnails.fields


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0014_profilesettings_show_real_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='DefaultAvatar',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('avatar', easy_thumbnails.fields.ThumbnailerImageField(upload_to=core.uploads.upload_to_avatar, verbose_name='Avatar', help_text='profile avatar', blank=True)),
            ],
        ),
    ]
