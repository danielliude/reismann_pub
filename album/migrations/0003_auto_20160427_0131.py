# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import core.uploads


class Migration(migrations.Migration):

    dependencies = [
        ('album', '0002_auto_20160427_0057'),
    ]

    operations = [
        migrations.AddField(
            model_name='albumimage',
            name='image_size',
            field=models.IntegerField(default=0, verbose_name='Image Size'),
        ),
        migrations.AlterField(
            model_name='albumimage',
            name='image',
            field=models.ImageField(upload_to=core.uploads.upload_to_album, verbose_name='Image'),
        ),
    ]
