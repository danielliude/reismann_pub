# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sites', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ServiceCategory',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('name', models.CharField(verbose_name='service category name', max_length=48)),
                ('is_active', models.BooleanField(verbose_name='service category is active', help_text='service category is active help text')),
                ('created_at', models.DateTimeField(verbose_name='created at', auto_now_add=True)),
                ('updated_at', models.DateTimeField(verbose_name='updated at', auto_now=True)),
                ('site', models.ForeignKey(verbose_name='site', to='sites.Site')),
            ],
            options={
                'verbose_name': 'Service category',
                'verbose_name_plural': 'Service categories',
            },
        ),
        migrations.CreateModel(
            name='ServiceLanguage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('name', models.CharField(verbose_name='service language name', max_length=48)),
                ('is_active', models.BooleanField(verbose_name='service language is active', help_text='service language is active help text')),
                ('created_at', models.DateTimeField(verbose_name='created at', auto_now_add=True)),
                ('updated_at', models.DateTimeField(verbose_name='updated at', auto_now=True)),
                ('site', models.ForeignKey(verbose_name='site', to='sites.Site')),
            ],
            options={
                'verbose_name': 'Service language',
                'verbose_name_plural': 'Service languages',
            },
        ),
        migrations.CreateModel(
            name='ServiceTag',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('name', models.CharField(verbose_name='service tag name', max_length=48)),
                ('is_active', models.BooleanField(verbose_name='service tag is active', help_text='service tag is active help text')),
                ('created_at', models.DateTimeField(verbose_name='created at', auto_now_add=True)),
                ('updated_at', models.DateTimeField(verbose_name='updated at', auto_now=True)),
                ('site', models.ForeignKey(verbose_name='site', to='sites.Site')),
            ],
            options={
                'verbose_name': 'Service tag',
                'verbose_name_plural': 'Service tags',
            },
        ),
    ]
