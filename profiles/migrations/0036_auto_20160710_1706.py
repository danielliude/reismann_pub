# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0035_auto_20160702_0357'),
    ]

    operations = [
        migrations.AddField(
            model_name='profilemore',
            name='created_at',
            field=models.DateTimeField(null=True, auto_now_add=True),
        ),
        migrations.AddField(
            model_name='profilemore',
            name='updated_at',
            field=models.DateTimeField(null=True, auto_now=True),
        ),
    ]
