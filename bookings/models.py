from datetime import datetime

from django.db import models
from django.contrib.auth.models import User
from services.models import Service
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from django.utils.timezone import utc
from django.utils.timesince import timesince
from redactor.fields import RedactorField
from core.constants import BOOKING_STATUS

from bookings.managers import BookingManager


class Booking(models.Model):

  service = models.ForeignKey(Service, related_name="related_bookings", verbose_name=_('booking service'))
  sender = models.ForeignKey(User, related_name='sent_bookings', verbose_name=_('booking sender'))
  recipient = models.ForeignKey(User, related_name='received_bookings', verbose_name=_('booking recipient'))

  service_starts_at = models.DateTimeField(_('service starts at'), null=True, blank=True)
  service_ends_at = models.DateTimeField(_('service ends at'), null=True, blank=True)
  number_of_customers = models.PositiveSmallIntegerField(_('number of customers'), blank=True, null=True)
  price = models.PositiveIntegerField(_('booking price'), blank=True, null=True)
  meeting_point = models.CharField(_('meeting point'), max_length=200)

  booking_content = RedactorField(verbose_name=_('booking content'), allow_image_upload=False, allow_file_upload=False)
  booking_remark = RedactorField(verbose_name=_('booking remark'), allow_image_upload=False, allow_file_upload=False)

  status = models.PositiveIntegerField(_('booking price'), choices=BOOKING_STATUS, blank=True, null=True)

  read_at = models.DateTimeField(_('booking read at'), null=True, blank=True)

  sender_sent_at = models.DateTimeField(_('booking sender sent at'), null=True, blank=True)
  sender_replied_at = models.DateTimeField(_('booking sender replied at'), null=True, blank=True)
  sender_deleted_at = models.DateTimeField(_('booking sender deleted at'), null=True, blank=True)

  recipient_sent_at = models.DateTimeField(_('booking recipient sent at'), null=True, blank=True)
  recipient_replied_at = models.DateTimeField(_('booking recipient replied at'), null=True, blank=True)
  recipient_deleted_at = models.DateTimeField(_('booking recipient deleted at'), null=True, blank=True)

  objects = BookingManager()

  class Meta:
    ordering = ['-sender_sent_at']
    verbose_name = _('Booking')
    verbose_name_plural = _('Bookings')

    permissions = (
      ('view_booking', 'Can view Booking'),
    )