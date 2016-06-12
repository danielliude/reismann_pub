import _datetime as datetime
import statistics

from redactor.fields import RedactorField
from core.uploads import upload_to_profiles_bio

from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User
from easy_thumbnails.fields import ThumbnailerImageField

from core.constants import *
from core.uploads import upload_to_avatar, upload_to_profile_card, upload_to_profile_id_card
from configurations.utils import get_profile_card_fallback_url, get_avatar_fallback_url
from cities.models import City, Country, Province
from profiles.managers import ProfileManager
from services.utils import get_user_services

class Profile(models.Model):

  user = models.OneToOneField(User, unique=True, verbose_name=_('user'), related_name='profile')

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

  country = models.ForeignKey(Country, blank=True, null=True, verbose_name=_('country'),
                                help_text='country')

  province = models.ForeignKey(Province, blank=True, null=True, verbose_name=_('province'),
                               help_text='province')

  short_description = models.CharField(_('Short description'), blank=True, null=True,
                                       max_length=255, help_text= _('short description'))

  bio = RedactorField(verbose_name=_('Biography'), default="Biography", upload_to= upload_to_profiles_bio)

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

  def get_short_name_or_username(self):
    user = self.user
    if user.first_name or user.last_name:
      name = _("%(first_name)s %(last_name)s") % {'first_name': user.first_name, 'last_name': user.last_name[:1]+"."}
    else:
      name = "%(username)s" % {'username': user.username}

    return name.strip()



class ProfileSettings(models.Model):

  profile = models.OneToOneField(Profile, unique=True, verbose_name=_('settings'), related_name='settings', blank = True, null = True)

  status = models.PositiveSmallIntegerField(_('profile status'), choices=PROFILE_STATUS,
                                              blank=True, null=True, default=1)

  email_notifications = models.BooleanField(default=True, verbose_name=_('email notifications'),
                                              help_text=_('get email notifications'))

  show_real_name = models.BooleanField(default=False, verbose_name=_('real name'),
                                              help_text=_('show real name'))

  is_provider = models.BooleanField(default=True, verbose_name=_('provider functionality'),
                                              help_text=_('provider functionality'))

  class Meta:
    verbose_name = _('Profile settings')
    verbose_name_plural = _('Profiles settings')

  def __str__(self):
    return _('Profile settings for %(username)s') % {'username': self.profile.user.username}


class ProfileMore(models.Model):
  user = models.OneToOneField(User, unique=True, verbose_name=_('user'), related_name='more_profile')
  country_of_birth = models.PositiveSmallIntegerField(_('country of birth'), blank=True, null=True, choices=COUNTRY_OF_BIRTH)
  marrittal_status = models.PositiveSmallIntegerField(_('marrittal status'), blank=True, null=True, choices=MARRITTAL_STATUS)
  children = models.PositiveSmallIntegerField(_('children'), blank=True, null=True, choices=CHILDREN)
  ethnicity = models.PositiveSmallIntegerField(_('ethnicity'), blank=True, null=True, choices=ETHNICITY)
  religion = models.PositiveSmallIntegerField(_('religion'), blank=True, null=True, choices=RELIGION)
  education = models.PositiveSmallIntegerField(_('education'), blank=True, null=True, choices=EDUCATION)
  annual_income = models.PositiveSmallIntegerField(_('annual_income'), blank=True, null=True, choices=ANNUAL_INCOME)
  immigration_status = models.PositiveSmallIntegerField(_('immigration_status'), blank=True, null=True, choices=IMMIGRATION_STATUS)
  body_form = models.PositiveSmallIntegerField(_('body form'), blank=True, null=True, choices=BODY_FORM)
  smoking = models.PositiveSmallIntegerField(_('smoking'), blank=True, null=True, choices=SMOKING)
  drinking = models.PositiveSmallIntegerField(_('drinking'), blank=True, null=True, choices=DRINKING)
  pets = models.PositiveSmallIntegerField(_('pets'), blank=True, null=True, choices=PETS)
  hobby = models.PositiveSmallIntegerField(_('hobby'), blank=True, null=True, choices=HOBBY)

  most_cheerful = models.CharField(_('most cheerful'), max_length=400, blank=True, null=True)
  good_at = models.CharField(_('good at'), max_length=400, blank=True, null=True)
  friends_description = models.CharField(_('friends description'), max_length=200, blank=True, null=True)
  must_have = models.CharField(_('must have'), max_length=400, blank=True, null=True)
  favourite_things = models.CharField(_('favourite things'), max_length=400, blank=True, null=True)
  crazy_thing_done = models.CharField(_('crazy thing done'), max_length=400, blank=True, null=True)
  normal_do_weekend = models.CharField(_('normal do weekend'), max_length=400, blank=True, null=True)

  class Meta:
    verbose_name = _('more profile')
    verbose_name_plural = _('more profiles')

    def __str__(self):
      return _('More profile for %(username)s') % {'username': self.profile.user.username}
