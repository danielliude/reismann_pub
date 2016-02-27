# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('insite_messages', '0006_auto_20160224_1528'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='message',
            options={'ordering': ['-sent_at'], 'verbose_name_plural': 'Messages', 'verbose_name': 'Message'},
        ),
    ]
