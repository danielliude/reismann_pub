# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0008_contact_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='email_notifications',
            field=models.BooleanField(verbose_name='email notifications', default=True),
        ),
    ]
