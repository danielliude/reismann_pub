# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('configurations', '0006_auto_20151118_2116'),
        ('services', '0019_auto_20160426_0823'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='service',
            name='categories',
        ),
        migrations.AddField(
            model_name='service',
            name='category',
            field=models.ForeignKey(verbose_name='service category', blank=True, help_text='service category help text', related_name='services', null=True, to='configurations.ServiceCategory'),
        ),
    ]
