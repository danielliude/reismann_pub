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
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('phone', models.CharField(null=True, verbose_name='telephone number', max_length=15, blank=True)),
                ('weibo', models.CharField(null=True, verbose_name='weibo account', max_length=128, blank=True)),
                ('wechat', models.CharField(null=True, verbose_name='wechat account', max_length=128, blank=True)),
                ('qq', models.CharField(null=True, verbose_name='qq username', max_length=12, blank=True)),
                ('user', models.OneToOneField(related_name='contact', blank=True, null=True, verbose_name='user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Contact',
                'verbose_name_plural': 'Contacts',
            },
        ),
    ]
