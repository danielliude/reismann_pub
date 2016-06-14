# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('configurations', '0006_auto_20151118_2116'),
        ('profiles', '0027_profilemore'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='languages',
            field=models.ManyToManyField(help_text='languages of service help text', verbose_name='languages of service', related_name='services', to='configurations.ServiceLanguage'),
        ),
        migrations.AddField(
            model_name='profile',
            name='tags',
            field=models.ManyToManyField(help_text='tags of service help text', verbose_name='tags of service', related_name='services', to='configurations.ServiceTag'),
        ),
    ]
