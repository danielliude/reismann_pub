# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0028_auto_20160614_1204'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='languages',
            field=models.ManyToManyField(to='configurations.ServiceLanguage', help_text='languages of profile help text', related_name='profiles', verbose_name='languages of profile'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='tags',
            field=models.ManyToManyField(to='configurations.ServiceTag', help_text='tags of profile help text', related_name='profiles', verbose_name='tags of profile'),
        ),
    ]
