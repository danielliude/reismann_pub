from django.db import models

from guardian.shortcuts import assign_perm

from core.constants import ASSIGNED_PERMISSIONS

from core.mail import send_mail
from django.template.loader import render_to_string
from django.contrib.sites.models import Site
from reismann.alex_settings import EMAIL_DEFAULT_FROM_EMAIL

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


class MessageMailManager():

  def send_email_new_message_to_recipient(self, message):

    if message.recipient.profile.settings.email_notifications == True:

        context = {'user': message.recipient,
                   'site': Site.objects.get_current()}

        subject = render_to_string('insite_messages/emails/new_message_subject.txt', context)
        subject = ''.join(subject.splitlines())

        text = render_to_string('insite_messages/emails/new_message_text.txt', context)

        send_mail(subject, text, None, EMAIL_DEFAULT_FROM_EMAIL, [message.recipient.email])


  def send_email_replied_message_to_recipient(self, message):

    if message.recipient.profile.settings.email_notifications == True:

        context = {'user': message.recipient,
                   'site': Site.objects.get_current()}

        subject = render_to_string('insite_messages/emails/replied_message_subject.txt', context)
        subject = ''.join(subject.splitlines())

        text = render_to_string('insite_messages/emails/replied_message_text.txt', context)

        send_mail(subject, text, None, EMAIL_DEFAULT_FROM_EMAIL, [message.recipient.email])