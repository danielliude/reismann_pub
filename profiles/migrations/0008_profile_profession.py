# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0007_auto_20160319_1052'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='profession',
            field=models.PositiveSmallIntegerField(blank=True, verbose_name='profession', choices=[('', 'profession'), (1, 'Student'), (2, 'Engineer'), (3, 'Artist'), (4, 'Performer'), (5, 'Manager'), (6, 'Doctor'), (7, 'Civilian'), (8, 'Accountant'), (9, 'Lawyer'), (10, 'Freelancer'), (11, 'Others')], null=True),
        ),
    ]
