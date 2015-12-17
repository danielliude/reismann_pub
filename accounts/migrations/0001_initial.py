# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import accounts.managers
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('last_active', models.DateTimeField(null=True, help_text='The last date that the user was active.', blank=True, verbose_name='last active')),
                ('activation_key', models.CharField(verbose_name='activation key', max_length=40, blank=True)),
                ('activation_notification_send', models.BooleanField(help_text='Designates whether this user has already got a notification about activating their account.', default=False, verbose_name='notification send')),
                ('email_unconfirmed', models.EmailField(help_text='Temporary email address when the user requests an email change.', max_length=254, blank=True, verbose_name='unconfirmed email address')),
                ('email_confirmation_key', models.CharField(verbose_name='unconfirmed email verification key', max_length=40, blank=True)),
                ('email_confirmation_key_created', models.DateTimeField(null=True, verbose_name='creation date of email confirmation key', blank=True)),
                ('user', models.OneToOneField(related_name='registration', verbose_name='user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Registration',
                'verbose_name_plural': 'Registrations',
            },
            managers=[
                ('objects', accounts.managers.RegistrationManager()),
            ],
        ),
    ]
