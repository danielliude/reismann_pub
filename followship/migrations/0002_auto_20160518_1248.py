# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('followship', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='follow',
            options={'permissions': (('view_follow', 'view follow'),), 'verbose_name_plural': 'Follows', 'verbose_name': 'Follow'},
        ),
    ]
