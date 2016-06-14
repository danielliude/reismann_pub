# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0029_auto_20160614_0905'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profilemore',
            name='country_of_birth',
            field=models.PositiveSmallIntegerField(blank=True, choices=[('', 'Country of birth'), (1, 'China'), (2, 'Janpan'), (3, 'South Korea'), (4, 'India')], verbose_name='country of birth', null=True),
        ),
    ]
