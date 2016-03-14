from django.db import models

from guardian.shortcuts import assign_perm

from core.constants import ASSIGNED_PERMISSIONS

import re

SHA1_RE = re.compile('^[a-f0-9]{40}$')

class BookingManager(models.Manager):

  def create_booking(self, service, sender, recipient):

    booking = self.create(service = service, sender = sender, recipient = recipient)

    for perm in ASSIGNED_PERMISSIONS['booking_sender']:
      assign_perm(perm[0], sender, booking)

    for perm in ASSIGNED_PERMISSIONS['booking_recipient']:
      assign_perm(perm[0], recipient, booking)

    return booking

  def get_number_bookings(self, user):
    return self.filter(
      recipient=user,
    ).count()

  def all_for(self, user):
    return self.filter(sender = user,
                   sender_deleted_at__isnull = True
                  ) | self.filter(
                    recipient = user,
                    recipient_deleted_at__isnull = True)