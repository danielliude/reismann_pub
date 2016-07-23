# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0036_auto_20160710_1706'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profilemore',
            name='country_of_birth',
            field=models.PositiveSmallIntegerField(blank=True, choices=[('', 'Country of birth'), (1, 'China'), (2, 'Germany'), (3, 'United Kingdom'), (4, 'Franch'), (5, 'Holland'), (6, 'Spain'), (7, 'Italy'), (8, 'Australia'), (9, 'Indonesia'), (10, 'Japan'), (11, 'Malaysia'), (12, 'Singapore'), (13, 'South Korea'), (14, 'Thailand'), (15, 'America'), (16, 'Other')], null=True, verbose_name='country of birth'),
        ),
        migrations.AlterField(
            model_name='profilemore',
            name='ethnicity',
            field=models.PositiveSmallIntegerField(blank=True, choices=[('', 'ethnicity'), (1, 'chinese'), (2, 'japanese'), (3, 'korean'), (4, 'malaysian'), (5, 'thai'), (6, 'vietnamese'), (7, 'indian'), (8, 'black'), (9, 'hispanic latin'), (10, 'middle east'), (11, 'white/caucasian'), (12, 'other')], null=True, verbose_name='ethnicity'),
        ),
    ]
