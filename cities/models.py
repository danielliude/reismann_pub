from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.conf import settings

import os

class Country(models.Model):

  name = models.CharField(max_length=48, verbose_name=_('country name'))

  is_active = models.BooleanField(verbose_name=_('country is active'), default=True,
                                  help_text=_('country is active help text'))

  created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('created at'))

  updated_at = models.DateTimeField(auto_now=True, verbose_name=_('updated at'))

  class Meta:
    verbose_name = _('Country')
    verbose_name_plural = _('Countries')

  def __str__(self):
    return self.name


cityCardImagePath = os.path.join(settings.MEDIA_ROOT, 'reismann/images/cities/card')
cityBannerImagePath = os.path.join(settings.MEDIA_ROOT, 'reismann/images/cities/banner')

class Province(models.Model):
    country = models.ForeignKey(Country, verbose_name=_('province country'))
    name = models.CharField(max_length=128, verbose_name=_('province name'))
    is_active = models.BooleanField(default=True, verbose_name=_('province is active'))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('created at'))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_('updated at'))
    class Meta:
        verbose_name = _('Province')
        verbose_name_plural = _('Provinces')
    def __str__(self):
      return self.name

class City(models.Model):

  country = models.ForeignKey(Country, verbose_name=_('city country'))

  province = models.ForeignKey(Province, verbose_name=_('city province'), blank=True, null=True)

  name = models.CharField(max_length=128, verbose_name=_('city name'))

  card_image = models.ImageField(upload_to=cityCardImagePath, verbose_name=_('city card image'),
                                 help_text=_('city card image help text'))

  banner_image = models.ImageField(upload_to=cityBannerImagePath, verbose_name=_('city banner image'),
                                   help_text=_('city banner image help text'))

  all_of_country = models.BooleanField(default=True, verbose_name=_('all cities of selected country'),
                                help_text=_('city all of country help text'))

  is_active = models.BooleanField(default=True, verbose_name=_('city is active'),
                                  help_text=_('city is active'))

  created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('created at'))

  updated_at = models.DateTimeField(auto_now=True, verbose_name=_('updated at'))

  class Meta:
    verbose_name = _('City')
    verbose_name_plural = _('Cities')

  def __str__(self):
    return self.name

  def get_full_location(self):
    if self.country:
      return _("%(name)s, %(country_name)s") % \
             {'name': self.name,
              'country_name': self.country.name}
    else:
      return self.name