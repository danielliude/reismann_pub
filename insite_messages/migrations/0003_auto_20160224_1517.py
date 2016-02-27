# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('insite_messages', '0002_auto_20160224_1402'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='message',
            options={'permissions': (('view_message', 'Can view message'),), 'verbose_name_plural': 'Messages', 'verbose_name': 'Message', 'ordering': ['-sent_at']},
        ),
    ]
