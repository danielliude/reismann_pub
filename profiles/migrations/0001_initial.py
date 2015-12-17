# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import profiles.models
import easy_thumbnails.fields
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('avatar', easy_thumbnails.fields.ThumbnailerImageField(help_text='A personal image displayed in your profile.', upload_to=profiles.models.upload_to_avatar, blank=True, verbose_name='avatar')),
                ('gender', models.PositiveSmallIntegerField(null=True, choices=[(1, 'Male'), (2, 'Female')], blank=True, verbose_name='gender')),
                ('birthday', models.DateField(null=True, verbose_name='birthday', blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('location', models.ForeignKey(blank=True, null=True, verbose_name='profile location', to='cities.City')),
                ('user', models.OneToOneField(related_name='profile', verbose_name='user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Profile',
                'verbose_name_plural': 'Profiles',
            },
        ),
    ]
