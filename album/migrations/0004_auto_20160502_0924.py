# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('album', '0003_auto_20160427_0131'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myalbum',
            name='images',
            field=models.ManyToManyField(blank=True, verbose_name='Images', to='album.AlbumImage'),
        ),
    ]
