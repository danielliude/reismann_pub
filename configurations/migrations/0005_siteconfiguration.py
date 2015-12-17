# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import easy_thumbnails.fields
import core.uploads


class Migration(migrations.Migration):

    dependencies = [
        ('sites', '0001_initial'),
        ('configurations', '0004_auto_20151114_1523'),
    ]

    operations = [
        migrations.CreateModel(
            name='SiteConfiguration',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='ID', auto_created=True)),
                ('avatar_fallback', easy_thumbnails.fields.ThumbnailerImageField(help_text='avatar fallback image help text', upload_to=core.uploads.upload_to_fallbacks, verbose_name='avatar fallback image', blank=True)),
                ('profile_card_fallback', easy_thumbnails.fields.ThumbnailerImageField(help_text='profile card fallback image help text', upload_to=core.uploads.upload_to_fallbacks, verbose_name='profile card fallback image', blank=True)),
                ('service_card_fallback', easy_thumbnails.fields.ThumbnailerImageField(help_text='service card fallback image help text', upload_to=core.uploads.upload_to_fallbacks, verbose_name='service card fallback image', blank=True)),
                ('site', models.ForeignKey(default=1, to='sites.Site', verbose_name='site')),
            ],
            options={
                'verbose_name_plural': 'site configurations',
                'verbose_name': 'Site configuration',
            },
        ),
    ]
