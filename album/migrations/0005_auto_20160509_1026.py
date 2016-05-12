# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('album', '0004_auto_20160502_0924'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='myavatar',
            name='image',
        ),
        migrations.RemoveField(
            model_name='myavatar',
            name='user',
        ),
        migrations.DeleteModel(
            name='MyAvatar',
        ),
    ]
