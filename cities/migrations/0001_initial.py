# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('name', models.CharField(verbose_name='city name', max_length=128)),
                ('card_image', models.ImageField(help_text='city card image help text', upload_to='/media/reismann/images/cities/card', verbose_name='city card image')),
                ('banner_image', models.ImageField(help_text='city banner image help text', upload_to='/media/reismann/images/cities/banner', verbose_name='city banner image')),
                ('is_active', models.BooleanField(help_text='city is active', default=True, verbose_name='city is active')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'City',
                'verbose_name_plural': 'Cities',
            },
        ),
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('name', models.CharField(verbose_name='country name', max_length=48)),
                ('is_active', models.BooleanField(help_text='country is active', default=True, verbose_name='country is active')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Country',
                'verbose_name_plural': 'Countries',
            },
        ),
        migrations.AddField(
            model_name='city',
            name='country',
            field=models.ForeignKey(verbose_name='city country', to='cities.Country'),
        ),
    ]
