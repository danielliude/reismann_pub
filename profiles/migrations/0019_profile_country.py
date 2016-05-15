# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '0005_auto_20160204_1132'),
        ('profiles', '0018_auto_20160504_1206'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='country',
            field=models.ForeignKey(verbose_name='country', to='cities.Country', help_text='country', blank=True, null=True),
        ),
    ]
