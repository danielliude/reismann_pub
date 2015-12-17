# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('configurations', '0002_auto_20151114_1512'),
    ]

    operations = [
        migrations.AlterField(
            model_name='servicecategory',
            name='site',
            field=models.ForeignKey(verbose_name='site', to='sites.Site', default=1),
        ),
        migrations.AlterField(
            model_name='servicelanguage',
            name='site',
            field=models.ForeignKey(verbose_name='site', to='sites.Site', default=1),
        ),
        migrations.AlterField(
            model_name='servicetag',
            name='site',
            field=models.ForeignKey(verbose_name='site', to='sites.Site', default=1),
        ),
    ]
