# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0012_auto_20160426_1545'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Settings',
            new_name='ProfileSettings',
        ),
    ]
