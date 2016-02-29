# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('insite_messages', '0011_auto_20160224_1552'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='message',
            options={'verbose_name': 'Message', 'permissions': (('view_message', 'Can view Message'),), 'verbose_name_plural': 'Messages', 'ordering': ['-sent_at']},
        ),
    ]
