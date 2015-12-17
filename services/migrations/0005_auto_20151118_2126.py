# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0004_auto_20151118_2116'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='resume',
            options={'verbose_name': 'Service resume', 'verbose_name_plural': 'Service resumes', 'ordering': ['service_category']},
        ),
        migrations.RenameField(
            model_name='resume',
            old_name='category',
            new_name='service_category',
        ),
        migrations.AlterUniqueTogether(
            name='resume',
            unique_together=set([('user', 'service_category')]),
        ),
    ]
