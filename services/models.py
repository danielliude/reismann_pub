from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User
from django.utils.safestring import mark_safe

from redactor.fields import RedactorField


from easy_thumbnails.fields import ThumbnailerImageField

from core.constants import SERVICE_TYPE_CHOICES, SERVICE_CARD_IMAGE_SETTINGS, SERVICE_STATUS, SERVICE_CURRENCY_CHOICES, SERVICE_PRICE_TYPE_CHOICES
from core.uploads import upload_to_service_card, upload_to_service_content

from configurations.models import ServiceCategory
from cities.models import City

from services.managers import ServiceManager
from django.db.models import Avg


class Service(models.Model):

  user = models.ForeignKey(User, verbose_name=_('user'), related_name='service',
                              blank=True, null=True, default=1)

  type = models.PositiveSmallIntegerField(_('service type'), choices=SERVICE_TYPE_CHOICES,
                                          blank=True, null=True)

  title = models.CharField(_('service title'), blank=True, null=True, default='Service title', max_length=255)

  price = models.DecimalField(_('service price'), blank=True, null=True, max_digits=6, decimal_places=0)

  currency = models.PositiveSmallIntegerField(_('service currency'), choices=SERVICE_CURRENCY_CHOICES,
                                          blank=True, null=True)

  price_type = models.PositiveSmallIntegerField(_('price type'), choices=SERVICE_PRICE_TYPE_CHOICES,
                                          blank=True, null=True)

  card_image = ThumbnailerImageField(_('card image'), blank=True, upload_to=upload_to_service_card,
                                     resize_source=SERVICE_CARD_IMAGE_SETTINGS,
                                     help_text=_('service card image help text'))

  category = models.ForeignKey(ServiceCategory, verbose_name=_('service category'),
                                      help_text=_('service category help text'),
                                      related_name='services', blank=True, null= True)

  content = RedactorField(verbose_name=_('service content'), default="service content", upload_to= upload_to_service_content)


  cities = models.ManyToManyField(City, verbose_name=_('cities of service'),
                                  help_text=_('cities of service help text'),
                                  related_name='services')

  status = models.PositiveIntegerField(_('service status'), choices=SERVICE_STATUS, blank=True, null=True)

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
    return self.title + str(_(' by ')) + self.user.username + str(_(' with price ')) + str(self.price)

  def get_card_url(self):
    if self.card_image:
      return self.card_image.url

  @property
  def rating(self):
    service_ratings = ServiceRating.objects.filter(service = self)
    if service_ratings:
        return service_ratings.aggregate(Avg('rating')).get('rating__avg')
    else:
        return 0

  @property
  def gen_stars(self):
    service_ratings = ServiceRating.objects.filter(service = self)
    a = 0
    if service_ratings:
        a = service_ratings.aggregate(Avg('rating')).get('rating__avg')

    output = '<div class="ui star rating" data-rating="' + str(int(a)) +'" data-max-rating="5"></div>'
    return mark_safe(output)

  @property
  def provider_stars(self):
    service_ratings = ServiceRating.objects.filter(service=self, user=self.user)
    a = 0
    if service_ratings:
        a = service_ratings[0].rating
    output = '<div class="ui star rating" data-rating="' + str(int(a)) +'" data-max-rating="5"></div><br>'
    return mark_safe(output)

  @property
  def my_stars(self):
    service_ratings = ServiceRating.objects.filter(service=self)
    a = 0
    for item in service_ratings:
      if not item.user == self.user:
        a = item.rating
    output = '<div class="ui star rating" data-rating="' + str(int(a)) +'" data-max-rating="5"></div><br>'
    return mark_safe(output)

class ServiceRating(models.Model):

    service = models.ForeignKey(Service, verbose_name=_('rating service'), related_name='service_rating', blank=True, null=True)

    user = models.ForeignKey(User, verbose_name=_('rating user'), related_name='service_rating', blank=True, null=True)

    rating = models.FloatField(verbose_name=_('rating value'), null=True, blank=True)

    comment = models.CharField(_('rating comment'), blank=True, null=True, default='Service comment', max_length=255)

    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('created at'), blank=True, null=True)

    @property
    def gen_stars(self):
        output = '<div class="ui star rating" data-rating="' + str(self.rating) +'" data-max-rating="5"></div>'
        return mark_safe(output)
