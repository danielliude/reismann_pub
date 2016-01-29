# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0008_auto_20160115_1032'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='resume',
            unique_together=set([]),
        ),
        migrations.RemoveField(
            model_name='resume',
            name='service_category',
        ),
        migrations.RemoveField(
            model_name='resume',
            name='user',
        ),
        migrations.DeleteModel(
            name='Resume',
        ),
    ]
