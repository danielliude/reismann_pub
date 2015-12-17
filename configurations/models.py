from django.db import models
from django.contrib.sites.models import Site
from django.utils.translation import ugettext_lazy as _

from easy_thumbnails.fields import ThumbnailerImageField

from reismann import settings

from core.constants import MUGSHOT_SETTINGS, SERVICE_CARD_IMAGE_SETTINGS, \
  PROFILE_CARD_IMAGE_SETTINGS
from core.uploads import upload_to_fallbacks

from configurations.managers import GeneralSiteConfigurationManager

class ServiceCategory(models.Model):

  site = models.ForeignKey(Site, default=settings.SITE_ID, verbose_name=_('site'))

  name = models.CharField(max_length=48, verbose_name=_('service category name'))

  is_active = models.BooleanField(default=True, verbose_name=_('service category is active'),
                                  help_text=_('service category is active help text'))

  created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('created at'))

  updated_at = models.DateTimeField(auto_now=True, verbose_name=_('updated at'))

  objects = GeneralSiteConfigurationManager()

  class Meta:
    verbose_name = _('Service category')
    verbose_name_plural = _('Service categories')
    ordering = ['name']
    unique_together = (("site"), ("name"))

  def __str__(self):
    return self.name

class ServiceTag(models.Model):

  site = models.ForeignKey(Site, default=settings.SITE_ID, verbose_name=_('site'))

  name = models.CharField(max_length=48, verbose_name=_('service tag name'))

  is_active = models.BooleanField(default=True, verbose_name=_('service tag is active'),
                                  help_text=_('service tag is active help text'))

  created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('created at'))

  updated_at = models.DateTimeField(auto_now=True, verbose_name=_('updated at'))

  objects = GeneralSiteConfigurationManager()

  class Meta:
    verbose_name = _('Service tag')
    verbose_name_plural = _('Service tags')
    unique_together = (("site"), ("name"))

  def __str__(self):
    return self.name

class ServiceLanguage(models.Model):

  site = models.ForeignKey(Site, default=settings.SITE_ID, verbose_name=_('site'))

  name = models.CharField(max_length=48, verbose_name=_('service language name'))

  is_active = models.BooleanField(default=True, verbose_name=_('service language is active'),
                                  help_text=_('service language is active help text'))

  created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('created at'))

  updated_at = models.DateTimeField(auto_now=True, verbose_name=_('updated at'))

  objects = GeneralSiteConfigurationManager()

  class Meta:
    verbose_name = _('Service language')
    verbose_name_plural = _('Service languages')
    unique_together = (("site"), ("name"))

  def __str__(self):
    return self.name

class SiteConfiguration(models.Model):

  site = models.ForeignKey(Site, default=settings.SITE_ID, verbose_name=_('site'))

  avatar_fallback = ThumbnailerImageField(_('avatar fallback image'), blank=True,
                                          upload_to=upload_to_fallbacks,
                                          resize_source=MUGSHOT_SETTINGS,
                                          help_text=_('avatar fallback image help text'))

  profile_card_fallback = ThumbnailerImageField(_('profile card fallback image'), blank=True,
                                                upload_to=upload_to_fallbacks,
                                                resize_source=PROFILE_CARD_IMAGE_SETTINGS,
                                                help_text=_('profile card fallback image help text'))

  service_card_fallback = ThumbnailerImageField(_('service card fallback image'), blank=True,
                                                upload_to=upload_to_fallbacks,
                                                resize_source=SERVICE_CARD_IMAGE_SETTINGS,
                                                help_text=_('service card fallback image help text'))

  objects = GeneralSiteConfigurationManager()

  class Meta:
    verbose_name = _('Site configuration')
    verbose_name_plural = _('site configurations')

  def __str__(self):
    return _("Configuration of %(site_name)s") % {'site_name': self.site.name}