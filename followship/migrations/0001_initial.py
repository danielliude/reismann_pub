# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Follow',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('followee', models.ForeignKey(related_name='followers', verbose_name='followee', to=settings.AUTH_USER_MODEL)),
                ('follower', models.ForeignKey(related_name='followings', verbose_name='follower', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
