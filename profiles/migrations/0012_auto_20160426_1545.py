# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0011_auto_20160425_1059'),
    ]

    operations = [
        migrations.CreateModel(
            name='Settings',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', primary_key=True, auto_created=True)),
                ('profile_is_active', models.BooleanField(default=False, verbose_name='profile is active', help_text='profile is active')),
                ('email_notifications', models.BooleanField(default=True, verbose_name='email notifications', help_text='get email notifications')),
            ],
        ),
        migrations.RemoveField(
            model_name='profile',
            name='is_active',
        ),
        migrations.AddField(
            model_name='profile',
            name='settings',
            field=models.OneToOneField(null=True, to='profiles.Settings', verbose_name='settings', blank=True, related_name='profile'),
        ),
    ]
