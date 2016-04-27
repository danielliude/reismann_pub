# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('album', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MyAvatar',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('image', models.ForeignKey(verbose_name='Avatar', to='album.AlbumImage')),
                ('user', models.OneToOneField(related_name='avatar', verbose_name='user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'My Avatar',
                'verbose_name_plural': 'My Avatar',
            },
        ),
        migrations.AlterField(
            model_name='myalbum',
            name='user',
            field=models.OneToOneField(related_name='my_album', verbose_name='user', to=settings.AUTH_USER_MODEL),
        ),
    ]
