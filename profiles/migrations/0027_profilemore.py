# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('profiles', '0026_profile_province'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProfileMore',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('country_of_birth', models.PositiveSmallIntegerField(null=True, verbose_name='country of birth', blank=True, choices=[('', 'country_of_birth'), (1, ''), (2, ''), (3, ''), (4, ''), (5, ''), (6, ''), (7, ''), (8, ''), (9, ''), (10, '')])),
                ('marrittal_status', models.PositiveSmallIntegerField(null=True, verbose_name='marrittal status', blank=True, choices=[('', 'marrittal_status'), (1, 'unmarried'), (2, 'married'), (3, 'divorced'), (4, 'widowed'), (5, 'separated'), (6, 'no answer')])),
                ('children', models.PositiveSmallIntegerField(null=True, verbose_name='children', blank=True, choices=[('', 'children'), (1, 'no kid'), (2, 'one kid'), (3, '> 1 kid'), (4, 'no answer')])),
                ('ethnicity', models.PositiveSmallIntegerField(null=True, verbose_name='ethnicity', blank=True, choices=[('', 'ethnicity'), (1, 'chinese'), (2, 'cambodian'), (3, 'filipino'), (4, 'japanese'), (5, 'korean'), (6, 'malaysian'), (7, 'thai'), (8, 'vietnamese'), (9, 'indian'), (10, 'black'), (11, 'hispanic latin'), (12, 'middle east'), (13, 'white/caucasian'), (14, 'other'), (15, 'no answer')])),
                ('religion', models.PositiveSmallIntegerField(null=True, verbose_name='religion', blank=True, choices=[('', 'religion'), (1, 'buddihism'), (2, 'chistianity'), (3, 'judaism'), (4, 'catholicism'), (5, 'islan'), (6, 'hinduism'), (7, 'other'), (8, 'no answer')])),
                ('education', models.PositiveSmallIntegerField(null=True, verbose_name='education', blank=True, choices=[('', 'education'), (1, 'high school'), (2, 'bachelor'), (3, 'master'), (4, 'phd'), (5, 'no answer')])),
                ('annual_income', models.PositiveSmallIntegerField(null=True, verbose_name='annual_income', blank=True, choices=[('', 'annual_income'), (1, '< €15k'), (2, '€15k - €30k'), (3, '€30k - €40k'), (4, '€40k - €50k'), (5, '€50k - €80k'), (6, '< €80k'), (7, 'no answer')])),
                ('immigration_status', models.PositiveSmallIntegerField(null=True, verbose_name='immigration_status', blank=True, choices=[('', 'immigration_status'), (1, 'resident'), (2, 'citizen'), (3, 'no answer')])),
                ('body_form', models.PositiveSmallIntegerField(null=True, verbose_name='body form', blank=True, choices=[('', 'body_form'), (1, 'slim'), (2, 'athlete'), (3, 'average'), (4, 'curvy'), (5, 'no answer')])),
                ('smoking', models.PositiveSmallIntegerField(null=True, verbose_name='smoking', blank=True, choices=[('', 'smoking'), (1, 'yes'), (2, 'some times'), (3, 'never'), (4, 'no answer')])),
                ('drinking', models.PositiveSmallIntegerField(null=True, verbose_name='drinking', blank=True, choices=[('', 'drinking'), (1, 'yes'), (2, 'some times'), (3, 'never'), (4, 'no answer')])),
                ('pets', models.PositiveSmallIntegerField(null=True, verbose_name='pets', blank=True, choices=[('', 'pets'), (1, 'dog(s)'), (2, 'cat(s)'), (3, 'other pets'), (4, 'want to have'), (5, 'no answer')])),
                ('hobby', models.PositiveSmallIntegerField(null=True, verbose_name='hobby', blank=True, choices=[('', 'hobby'), (1, 'basketball'), (2, 'camping'), (3, 'card game'), (4, 'bicycle'), (5, 'dance'), (6, 'fishing/hunting'), (7, 'golf'), (8, 'musical'), (9, 'jogging'), (10, 'singing'), (11, 'ski'), (12, 'football'), (13, 'read'), (14, 'swimming'), (15, 'tennis'), (16, 'travel'), (17, 'gym'), (18, 'yoga'), (19, 'Other')])),
                ('most_cheerful', models.CharField(null=True, verbose_name='most cheerful', max_length=400, blank=True)),
                ('good_at', models.CharField(null=True, verbose_name='good at', max_length=400, blank=True)),
                ('friends_description', models.CharField(null=True, verbose_name='friends description', max_length=200, blank=True)),
                ('must_have', models.CharField(null=True, verbose_name='must have', max_length=400, blank=True)),
                ('favourite_things', models.CharField(null=True, verbose_name='favourite things', max_length=400, blank=True)),
                ('crazy_thing_done', models.CharField(null=True, verbose_name='crazy thing done', max_length=400, blank=True)),
                ('normal_do_weekend', models.CharField(null=True, verbose_name='normal do weekend', max_length=400, blank=True)),
                ('user', models.OneToOneField(verbose_name='user', related_name='more_profile', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'more profile',
                'verbose_name_plural': 'more profiles',
            },
        ),
    ]
