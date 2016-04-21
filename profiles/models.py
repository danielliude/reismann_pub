import datetime
import statistics

from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User
from easy_thumbnails.fields import ThumbnailerImageField

from core.constants import MUGSHOT_SETTINGS, GENDER_CHOICES, PROFILE_CARD_IMAGE_SETTINGS, PROFESSION_CHOICES
from core.uploads import upload_to_avatar, upload_to_profile_card
from configurations.utils import get_profile_card_fallback_url, get_avatar_fallback_url
from cities.models import City
from profiles.managers import ProfileManager
from services.utils import get_user_services


class Profile(models.Model):

  user = models.OneToOneField(User, unique=True, verbose_name=_('user'), related_name='profile')

  is_active = models.BooleanField(default=False, verbose_name=_('profile is active'),
                                  help_text=_('profile is active help text'))

  avatar = ThumbnailerImageField(_('avatar'), blank=True, upload_to=upload_to_avatar,
                                 resize_source=MUGSHOT_SETTINGS, help_text=_('profile avatar help text'))

  card_image = ThumbnailerImageField(_('profile card image'), blank=True, upload_to=upload_to_profile_card,
                                     resize_source=PROFILE_CARD_IMAGE_SETTINGS,
                                     help_text=_('profile card image help text'))

  gender = models.PositiveSmallIntegerField(_('gender'), choices=GENDER_CHOICES,
                                            blank=True, null=True)

  profession = models.PositiveSmallIntegerField(_('profession'), choices=PROFESSION_CHOICES,
                                            blank=True, null=True)

  birthday = models.DateField(_('birthday'), blank=True, null=True)

  location = models.ForeignKey(City, blank=True, null=True, verbose_name=_('profile location'))

  short_description = models.CharField(_('profile short description'), blank=True, null=True, max_length=255)

  bio = models.TextField(_('profile bio'), blank=True, null=True)

  created_at = models.DateTimeField(auto_now_add=True)

  updated_at = models.DateTimeField(auto_now=True)

  objects = ProfileManager()

  class Meta:
    verbose_name = _('Profile')
    verbose_name_plural = _('Profiles')

  def __str__(self):
    return _('Profile of %(username)s') % {'username': self.user.username}

  def get_avatar_url(self):
    if self.avatar:
      return self.avatar.url

    return get_avatar_fallback_url()

  def get_card_image_url(self):
    if self.card_image:
      return self.card_image.url

    return get_profile_card_fallback_url()

  @property
  def average_price(self):
      user_services = get_user_services(self.user)
      prices = []
      for service in user_services:
        if service.status == 2:
            prices.append(service.price)

      if prices:
        return int(statistics.mean(prices))
      else:
        return 0;

      return 0;

  @property
  def age(self):
    if not self.birthday: return False
    else:
      today = datetime.date.today()

      if self.birthday > today: return False

      # Raised when birthday is February 29 and the current year is not a leap year
      try:
        birth_date = self.birthday.replace(year=today.year)
      except ValueError:
        day = today.day - 1 if today.day != 1 else today.day + 2
        birth_date = self.birthday.replace(year=today.year, day=day)

      age = 0
      if birth_date > today: age = today.year - self.birthday.year - 1
      else: age = today.year - self.birthday.year

      return age

  def member_since(self):
    if not self.created_at: return False
    else:
      return _("member since %(year)i.%(month)i.%(day)i") % {'year': self.created_at.year, 'month': self.created_at.month, 'day': self.created_at.day}

  def get_full_name_or_username(self):
    user = self.user
    if user.first_name or user.last_name:
      name = _("%(first_name)s %(last_name)s") % {'first_name': user.first_name, 'last_name': user.last_name}
    else:
      name = "%(username)s" % {'username': user.username}

    return name.strip()
