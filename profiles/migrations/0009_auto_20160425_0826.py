# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import easy_thumbnails.fields
import core.uploads


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0008_profile_profession'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='id_image',
            field=models.ImageField(verbose_name='Id card', upload_to=core.uploads.upload_to_profile_id_card, blank=True, help_text='id card'),
        ),
        migrations.AddField(
            model_name='profile',
            name='second_id_image',
            field=models.ImageField(verbose_name='Second Id card', upload_to=core.uploads.upload_to_profile_id_card, blank=True, help_text='second id card'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=easy_thumbnails.fields.ThumbnailerImageField(verbose_name='Avatar', upload_to=core.uploads.upload_to_avatar, blank=True, help_text='profile avatar'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='bio',
            field=models.TextField(null=True, verbose_name='Biography', blank=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='birthday',
            field=models.DateField(null=True, verbose_name='Birthday', blank=True, help_text='birthday'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='card_image',
            field=easy_thumbnails.fields.ThumbnailerImageField(verbose_name='Card image', upload_to=core.uploads.upload_to_profile_card, blank=True, help_text='card image'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='gender',
            field=models.PositiveSmallIntegerField(null=True, verbose_name='Gender', blank=True, choices=[('', 'gender'), (1, 'Male'), (2, 'Female')], help_text='gender'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='is_active',
            field=models.BooleanField(verbose_name='profile is active', default=False, help_text='profile is active'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='location',
            field=models.ForeignKey(null=True, verbose_name='location', to='cities.City', help_text='location', blank=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='profession',
            field=models.PositiveSmallIntegerField(null=True, verbose_name='Profession', blank=True, choices=[('', 'profession'), (1, 'Student'), (2, 'Engineer'), (3, 'Artist'), (4, 'Performer'), (5, 'Manager'), (6, 'Doctor'), (7, 'Civilian'), (8, 'Accountant'), (9, 'Lawyer'), (10, 'Freelancer'), (11, 'Others')], help_text='profession'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='short_description',
            field=models.CharField(null=True, verbose_name='Short description', max_length=255, blank=True, help_text='short description'),
        ),
    ]
