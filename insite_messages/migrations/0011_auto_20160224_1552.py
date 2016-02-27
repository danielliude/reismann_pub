# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('insite_messages', '0010_auto_20160224_1539'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='message',
            options={'ordering': ['-sent_at'], 'verbose_name': 'Message', 'verbose_name_plural': 'Messages', 'permissions': (('view_message', 'view message'),)},
        ),
    ]
