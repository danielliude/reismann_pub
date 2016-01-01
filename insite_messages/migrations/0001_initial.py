# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import redactor.fields
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('subject', models.CharField(max_length=120, verbose_name='message subject')),
                ('body', redactor.fields.RedactorField(verbose_name='message body')),
                ('sent_at', models.DateTimeField(null=True, verbose_name='message sent at', blank=True)),
                ('read_at', models.DateTimeField(null=True, verbose_name='message read at', blank=True)),
                ('replied_at', models.DateTimeField(null=True, verbose_name='message replied at', blank=True)),
                ('sender_deleted_at', models.DateTimeField(null=True, verbose_name='message sender deleted at', blank=True)),
                ('recipient_deleted_at', models.DateTimeField(null=True, verbose_name='message recipient deleted at', blank=True)),
                ('parent', models.ForeignKey(related_name='next_messages', verbose_name='parent message', blank=True, to='insite_messages.Message', null=True)),
                ('recipient', models.ForeignKey(related_name='received_messages', verbose_name='message recipient', blank=True, to=settings.AUTH_USER_MODEL, null=True)),
                ('sender', models.ForeignKey(related_name='sent_messages', verbose_name='message sender', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-sent_at'],
                'verbose_name': 'Message',
                'verbose_name_plural': 'Messages',
            },
        ),
    ]
