from django.db import models

from guardian.shortcuts import assign_perm

from core.constants import ASSIGNED_PERMISSIONS

import re

SHA1_RE = re.compile('^[a-f0-9]{40}$')

class MessageManager(models.Manager):

  def create_message(self, user, recipient, subject, body):

    message = self.create(sender = user, recipient = recipient, subject = subject, body = body)

    for perm in ASSIGNED_PERMISSIONS['message']:
      assign_perm(perm[0], user, message)
      assign_perm(perm[0], recipient, message)

    return message

  def inbox_for(self, user):
    return self.filter(
      recipient=user,
      recipient_deleted_at__isnull=True,
    )

  def outbox_for(self, user):
    return self.filter(
      sender=user,
      sender_deleted_at__isnull=True,
    )

  def trash_for(self, user):
    return self.filter(
      recipient=user,
      recipient_deleted_at__isnull=False,
    ) | self.filter(
      sender=user,
      sender_deleted_at__isnull=False
    )

  def all_for(self, user):
    return self.filter(sender = user,
                       sender_deleted_at__isnull = True
                      ) | self.filter(
                        recipient = user,
                        recipient_deleted_at__isnull = True)

  def unread_for(self, user):
      return self.filter(
          recipient = user,
          read_at__isnull = True)