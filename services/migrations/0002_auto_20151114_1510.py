# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import easy_thumbnails.fields
import services.models


class Migration(migrations.Migration):

    dependencies = [
        ('configurations', '0001_initial'),
        ('cities', '0002_auto_20151114_1510'),
        ('services', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='card_image',
            field=easy_thumbnails.fields.ThumbnailerImageField(verbose_name='card image', help_text='service card image help text', upload_to=services.models.upload_to_service_card, blank=True),
        ),
        migrations.AddField(
            model_name='service',
            name='categories',
            field=models.ManyToManyField(verbose_name='categories of service', to='configurations.ServiceCategory', help_text='categories of service help text', related_name='services'),
        ),
        migrations.AddField(
            model_name='service',
            name='cities',
            field=models.ManyToManyField(verbose_name='cities of service', to='cities.City', help_text='cities of service help text', related_name='services'),
        ),
        migrations.AddField(
            model_name='service',
            name='created_at',
            field=models.DateTimeField(verbose_name='created at', null=True, auto_now_add=True),
        ),
        migrations.AddField(
            model_name='service',
            name='is_active',
            field=models.BooleanField(verbose_name='city is active', help_text='city is active', default=True),
        ),
        migrations.AddField(
            model_name='service',
            name='languages',
            field=models.ManyToManyField(verbose_name='languages of service', to='configurations.ServiceLanguage', help_text='languages of service help text', related_name='services'),
        ),
        migrations.AddField(
            model_name='service',
            name='tags',
            field=models.ManyToManyField(verbose_name='tags of service', to='configurations.ServiceTag', help_text='tags of service help text', related_name='services'),
        ),
        migrations.AddField(
            model_name='service',
            name='type',
            field=models.PositiveSmallIntegerField(verbose_name='service type', blank=True, null=True, choices=[(1, 'Part time'), (2, 'Full time')]),
        ),
        migrations.AddField(
            model_name='service',
            name='updated_at',
            field=models.DateTimeField(verbose_name='updated at', null=True, auto_now=True),
        ),
    ]
