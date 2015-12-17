# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('configurations', '0003_auto_20151114_1519'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='servicecategory',
            unique_together=set([('site', 'name')]),
        ),
        migrations.AlterUniqueTogether(
            name='servicelanguage',
            unique_together=set([('site', 'name')]),
        ),
        migrations.AlterUniqueTogether(
            name='servicetag',
            unique_together=set([('site', 'name')]),
        ),
    ]
