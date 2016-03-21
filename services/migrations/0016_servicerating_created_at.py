# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0015_servicerating'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicerating',
            name='created_at',
            field=models.DateTimeField(verbose_name='created at', null=True, auto_now_add=True),
        ),
    ]
