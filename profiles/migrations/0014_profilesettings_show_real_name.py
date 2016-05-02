# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0013_auto_20160426_1717'),
    ]

    operations = [
        migrations.AddField(
            model_name='profilesettings',
            name='show_real_name',
            field=models.BooleanField(verbose_name='real name', default=False, help_text='show real name'),
        ),
    ]
