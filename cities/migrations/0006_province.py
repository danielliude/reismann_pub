# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '0005_auto_20160204_1132'),
    ]

    operations = [
        migrations.CreateModel(
            name='Province',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=128, verbose_name='province name')),
                ('is_active', models.BooleanField(default=True, verbose_name='province is active')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('country', models.ForeignKey(to='cities.Country', verbose_name='province country')),
            ],
            options={
                'verbose_name_plural': 'Provinces',
                'verbose_name': 'Province',
            },
        ),
    ]
