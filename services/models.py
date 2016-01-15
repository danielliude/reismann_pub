from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User

from easy_thumbnails.fields import ThumbnailerImageField

from redactor.fields import RedactorField

from core.constants import SERVICE_TYPE_CHOICES, SERVICE_CARD_IMAGE_SETTINGS
from core.uploads import upload_to_service_card

from configurations.models import ServiceCategory, ServiceTag, ServiceLanguage
from cities.models import City

from services.managers import ServiceManager, ResumeManager

class Service(models.Model):

  user = models.OneToOneField(User, unique=True, verbose_name=_('user'), related_name='service',
                              blank=True, null=True)

  type = models.PositiveSmallIntegerField(_('service type'), choices=SERVICE_TYPE_CHOICES,
                                          blank=True, null=True)

  price = models.DecimalField(_('service price'), blank=True, null=True, max_digits=6, decimal_places=2)

  card_image = ThumbnailerImageField(_('card image'), blank=True, upload_to=upload_to_service_card,
                                     resize_source=SERVICE_CARD_IMAGE_SETTINGS,
                                     help_text=_('service card image help text'))

  categories = models.ManyToManyField(ServiceCategory, verbose_name=_('categories of service'),
                                      help_text=_('categories of service help text'),
                                      related_name='services')

  tags = models.ManyToManyField(ServiceTag, verbose_name=_('tags of service'),
                                help_text=_('tags of service help text'),
                                related_name='services')

  languages = models.ManyToManyField(ServiceLanguage, verbose_name=_('languages of service'),
                                     help_text=_('languages of service help text'),
                                     related_name='services')

  cities = models.ManyToManyField(City, verbose_name=_('cities of service'),
                                  help_text=_('cities of service help text'),
                                  related_name='services')

  is_active = models.BooleanField(default=False, verbose_name=_('service is active'),
                                  help_text=_('service is active'))

  created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('created at'), blank=True, null=True)

  updated_at = models.DateTimeField(auto_now=True, verbose_name=_('updated at'), blank=True, null=True)

  objects = ServiceManager()

  class Meta:
    verbose_name = _('Service')
    verbose_name_plural = _('Services')
    permissions = (
        ('view_service', _('view service')),
    )


  def __str__(self):
    return self.user.username

class Resume(models.Model):

  user = models.ForeignKey(User, verbose_name=_('resume user'))

  service_category = models.ForeignKey(ServiceCategory, verbose_name=_('resume service category'))

  is_active = models.BooleanField(default=True, verbose_name=_('resume is active'),
                                  help_text=_('resume is active'))

  content = RedactorField(verbose_name=_('resume content'), allow_image_upload=True)

  created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('created at'), blank=True, null=True)

  updated_at = models.DateTimeField(auto_now=True, verbose_name=_('updated at'), blank=True, null=True)

  objects = ResumeManager()

  class Meta:
    verbose_name = _('Service resume')
    verbose_name_plural = _('Service resumes')
    ordering = ['service_category']
    unique_together = (("user"), ("service_category"))