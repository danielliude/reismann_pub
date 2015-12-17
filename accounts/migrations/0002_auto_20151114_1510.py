# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='activation_key',
            field=models.CharField(verbose_name='activation key', max_length=40, null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='registration',
            name='activation_notification_send',
            field=models.BooleanField(verbose_name='notification send', help_text='registration activation notification send help text.', default=False),
        ),
        migrations.AlterField(
            model_name='registration',
            name='email_unconfirmed',
            field=models.EmailField(verbose_name='unconfirmed email address', max_length=254, help_text='registration email unconfirmed help text.', blank=True),
        ),
        migrations.AlterField(
            model_name='registration',
            name='last_active',
            field=models.DateTimeField(verbose_name='last active', blank=True, null=True, help_text='user last active help text'),
        ),
    ]
