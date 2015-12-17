# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('configurations', '0005_siteconfiguration'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='servicecategory',
            options={'verbose_name': 'Service category', 'ordering': ['name'], 'verbose_name_plural': 'Service categories'},
        ),
    ]
