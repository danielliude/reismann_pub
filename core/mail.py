# -*- coding: utf-8 -*-
from django.utils.translation import ugettext as _
from django.core.mail import EmailMultiAlternatives

from html2text import html2text

from reismann.settings import EMAIL_DEFAULT_FROM_EMAIL

def send_mail(subject, message_plain, message_html, email_from, recipients,
              custom_headers={}, attachments={}):

  if not message_plain and not message_html:
    raise ValueError(_("Either message_plain or message_html should be set"))

  if not message_plain:
    message_plain = html2text(message_html)

  if not email_from:
    email_from = EMAIL_DEFAULT_FROM_EMAIL

  message = {}

  message['subject'] = subject
  message['body'] = message_plain
  message['from_email'] = email_from
  message['to'] = recipients
  if attachments:
    message['attachments'] = attachments
  if custom_headers:
    message['headers'] = custom_headers

  mail = EmailMultiAlternatives(**message)
  if message_html:
    mail.attach_alternative(message_html, "text/html")
  mail.send()

def wrap_attachment():
  pass
