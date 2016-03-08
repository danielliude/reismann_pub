from django.db import models

from guardian.shortcuts import assign_perm

from core.constants import ASSIGNED_PERMISSIONS

import re

SHA1_RE = re.compile('^[a-f0-9]{40}$')

class BookingManager(models.Manager):

  def create_booking(self, service, sender, recipient):

    booking = self.create(service = service, sender = sender, recipient = recipient)

    for perm in ASSIGNED_PERMISSIONS['booking']:
      assign_perm(perm[0], sender, booking)
      assign_perm(perm[0], recipient, booking)

  def get_number_bookings(self, user):
    return self.filter(
      recipient=user,
    ).count()