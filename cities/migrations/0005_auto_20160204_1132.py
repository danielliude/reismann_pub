# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '0004_auto_20160107_0816'),
    ]

    operations = [
        migrations.AlterField(
            model_name='city',
            name='banner_image',
            field=models.ImageField(upload_to='reismann/images/cities/banner', verbose_name='city banner image', help_text='city banner image help text'),
        ),
        migrations.AlterField(
            model_name='city',
            name='card_image',
            field=models.ImageField(upload_to='reismann/images/cities/card', verbose_name='city card image', help_text='city card image help text'),
        ),
    ]
