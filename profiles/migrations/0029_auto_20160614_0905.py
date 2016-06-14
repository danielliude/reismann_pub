# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0028_auto_20160614_0802'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profilemore',
            name='country_of_birth',
            field=models.PositiveSmallIntegerField(verbose_name='country of birth', choices=[('', 'Country of birth'), (1, 'aaaa'), (2, 'bbbb'), (3, 'cccc'), (4, 'dddd'), (5, 'eeee'), (6, 'fffff'), (7, 'gggg'), (8, 'hhhh'), (9, 'iiii'), (10, 'ggg')], blank=True, null=True),
        ),
    ]
