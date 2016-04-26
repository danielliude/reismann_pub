# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0009_contact_email_notifications'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contact',
            name='email_notifications',
        ),
    ]
