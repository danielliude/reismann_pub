# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0027_profilemore'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profilemore',
            name='country_of_birth',
            field=models.PositiveSmallIntegerField(null=True, blank=True, verbose_name='country of birth', choices=[('', 'Country of birth'), (1, ''), (2, ''), (3, ''), (4, ''), (5, ''), (6, ''), (7, ''), (8, ''), (9, ''), (10, '')]),
        ),
    ]
