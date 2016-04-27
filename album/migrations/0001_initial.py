# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import easy_thumbnails.fields
from django.conf import settings
import core.uploads


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='AlbumImage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('image', easy_thumbnails.fields.ThumbnailerImageField(upload_to=core.uploads.upload_to_album, verbose_name='Image')),
                ('user', models.ForeignKey(related_name='album_images', verbose_name='user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Album Image',
                'verbose_name_plural': 'Album Images',
            },
        ),
        migrations.CreateModel(
            name='MyAlbum',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('images', models.ManyToManyField(to='album.AlbumImage', null=True, verbose_name='Images', blank=True)),
                ('user', models.OneToOneField(related_name='album', verbose_name='user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'My Album',
                'verbose_name_plural': 'My Album',
            },
        ),
    ]
