# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '0003_auto_20151229_2306'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='city',
            name='name_en',
        ),
        migrations.RemoveField(
            model_name='city',
            name='name_zh_hans',
        ),
        migrations.RemoveField(
            model_name='country',
            name='name_en',
        ),
        migrations.RemoveField(
            model_name='country',
            name='name_zh_hans',
        ),
        migrations.AlterField(
            model_name='city',
            name='banner_image',
            field=models.ImageField(help_text='city banner image help text', upload_to=b'reismann/images/cities/banner', verbose_name='city banner image'),
        ),
        migrations.AlterField(
            model_name='city',
            name='card_image',
            field=models.ImageField(help_text='city card image help text', upload_to=b'reismann/images/cities/card', verbose_name='city card image'),
        ),
    ]
