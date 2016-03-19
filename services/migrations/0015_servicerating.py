# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('services', '0014_auto_20160204_1518'),
    ]

    operations = [
        migrations.CreateModel(
            name='ServiceRating',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('rating', models.FloatField(blank=True, verbose_name='rating value', null=True)),
                ('comment', models.CharField(null=True, max_length=255, blank=True, verbose_name='rating comment', default='Service comment')),
                ('service', models.ForeignKey(related_name='service_rating', verbose_name='rating service', to='services.Service', blank=True, null=True)),
                ('user', models.ForeignKey(related_name='service_rating', verbose_name='rating user', to=settings.AUTH_USER_MODEL, blank=True, null=True)),
            ],
        ),
    ]
