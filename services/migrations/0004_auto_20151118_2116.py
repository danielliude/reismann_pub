# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import redactor.fields
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('configurations', '0006_auto_20151118_2116'),
        ('services', '0003_auto_20151115_1732'),
    ]

    operations = [
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('is_active', models.BooleanField(verbose_name='resume is active', help_text='resume is active', default=True)),
                ('content', redactor.fields.RedactorField(verbose_name='resume content')),
                ('created_at', models.DateTimeField(null=True, verbose_name='created at', auto_now_add=True)),
                ('updated_at', models.DateTimeField(null=True, verbose_name='updated at', auto_now=True)),
                ('category', models.ForeignKey(to='configurations.ServiceCategory', verbose_name='resume service category')),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL, verbose_name='resume user')),
            ],
            options={
                'verbose_name': 'Service resume',
                'ordering': ['category'],
                'verbose_name_plural': 'Service resumes',
            },
        ),
        migrations.AlterUniqueTogether(
            name='resume',
            unique_together=set([('user', 'category')]),
        ),
    ]
