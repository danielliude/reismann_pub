# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0015_defaultavatar'),
    ]

    operations = [
        migrations.DeleteModel(
            name='DefaultAvatar',
        ),
    ]
