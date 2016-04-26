import datetime
import statistics

from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User
from easy_thumbnails.fields import ThumbnailerImageField

from core.constants import MUGSHOT_SETTINGS, GENDER_CHOICES, PROFILE_CARD_IMAGE_SETTINGS, PROFESSION_CHOICES, IDENTIFICATION_STATUS
from core.uploads import upload_to_avatar, upload_to_profile_card, upload_to_profile_id_card
from configurations.utils import get_profile_card_fallback_url, get_avatar_fallback_url
from cities.models import City
from profiles.managers import ProfileManager
from services.utils import get_user_services

class ProfileSettings(models.Model):

  profile_is_active = models.BooleanField(default=False, verbose_name=_('profile is active'),
                                  help_text=_('profile is active'))

  email_notifications = models.BooleanField(default=True, verbose_name=_('email notifications'),
                                              help_text=_('get email notifications'))

class Profile(models.Model):

  user = models.OneToOneField(User, unique=True, verbose_name=_('user'), related_name='profile')

  settings = models.OneToOneField(ProfileSettings, unique=True, verbose_name=_('settings'), related_name='profile', blank = True, null = True)

  avatar = ThumbnailerImageField(_('Avatar'), blank=True, upload_to=upload_to_avatar,
                                 resize_source=MUGSHOT_SETTINGS, help_text=_('profile avatar'))

  card_image = ThumbnailerImageField(_('Card image'), blank=True, upload_to=upload_to_profile_card,
                                     resize_source=PROFILE_CARD_IMAGE_SETTINGS,
                                     help_text=_('card image'))

  id_image = models.ImageField(_('Id card'), blank=True, upload_to=upload_to_profile_id_card,
                                  help_text= _('id card'))

  second_id_image = models.ImageField(_('Second id card'), blank=True, upload_to=upload_to_profile_id_card,
                                  help_text= _('second id card'))

  id_status = models.PositiveIntegerField(_('identification status'), choices=IDENTIFICATION_STATUS, blank=True, null=True, default=1)

  gender = models.PositiveSmallIntegerField(_('Gender'), choices=GENDER_CHOICES,
                                            blank=True, null=True, help_text=_('gender'))

  profession = models.PositiveSmallIntegerField(_('Profession'), choices=PROFESSION_CHOICES,
                                            blank=True, null=True, help_text=_('profession'))

  birthday = models.DateField(_('Birthday'), blank=True, null=True, help_text=_('birthday'))

  location = models.ForeignKey(City, blank=True, null=True, verbose_name=_('location'),
                                help_text='location')

  short_description = models.CharField(_('Short description'), blank=True, null=True,
                                       max_length=255, help_text= _('short description'))

  bio = models.TextField(_('Biography'), blank=True, null=True)

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
