# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0010_remove_contact_email_notifications'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='user',
            field=models.OneToOneField(blank=True, related_name='联系方式', to=settings.AUTH_USER_MODEL, null=True, verbose_name='user'),
        ),
    ]
