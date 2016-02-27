# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('insite_messages', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='message',
            options={'verbose_name_plural': 'Messages', 'permissions': (('view_message', 'View message'),), 'ordering': ['-sent_at'], 'verbose_name': 'Message'},
        ),
    ]
