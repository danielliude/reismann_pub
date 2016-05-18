# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('followship', '0002_auto_20160518_1248'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='follow',
            options={'verbose_name_plural': 'Follows', 'verbose_name': 'Follow', 'permissions': (('view_followers', 'view followers'), ('view_followings', 'view followings'))},
        ),
    ]
