from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from django.contrib.auth.models import User
from django.contrib.sites.models import Site
from django.template.loader import render_to_string

from userena.utils import generate_sha1, get_protocol

from reismann.settings import EMAIL_DEFAULT_FROM_EMAIL

from accounts.settings import ACCOUNTS_REGISTRATION_ACTIVATION_DAYS
from accounts.managers import RegistrationManager

from core.mail import send_mail

import datetime

class Registration(models.Model):

  user = models.OneToOneField(User, verbose_name=_('user'),
                              related_name='registration')

  last_active = models.DateTimeField(_('last active'), blank=True, null=True,
                                     help_text=_('user last active help text'))
  activation_key = models.CharField(_('activation key'), max_length=40, blank=True, null=True)

  activation_notification_send = models.BooleanField(_('notification send'),default=False,
                                                     help_text=_('registration activation notification send help text.'))

  email_unconfirmed = models.EmailField(_('unconfirmed email address'), blank=True,
                                        help_text=_('registration email unconfirmed help text.'))

  email_confirmation_key = models.CharField(_('unconfirmed email verification key'), max_length=40,
                                            blank=True)

  email_confirmation_key_created = models.DateTimeField(_('creation date of email confirmation key'),
                                                        blank=True,
                                                        null=True)

  objects = RegistrationManager()

  class Meta:
    verbose_name = _('Registration')
    verbose_name_plural = _('Registrations')

  def __str__(self):
    return "%s" % self.user.username

  def change_email(self, email):
    self.email_unconfirmed = email

    salt, hash = generate_sha1(self.user.username)
    self.email_confirmation_key = hash
    self.email_confirmation_key_created = timezone.now()
    self.save()

    self.send_confirmation_email()

  def send_confirmation_email(self):
    context = {'user': self.user,
                  'without_usernames': False,
                  'new_email': self.email_unconfirmed,
                  'protocol': get_protocol(),
                  'confirmation_key': self.email_confirmation_key,
                  'site': Site.objects.get_current()}
    subject_old = render_to_string('userena/emails/confirmation_email_message_old.txt', context)
    subject_old = ''.join(subject_old.splitlines())

    message_old = render_to_string('userena/emails/confirmation_email_message_old.txt', context)

    if self.user.email:
      send_mail(subject_old,
                message_old,
                None,
                EMAIL_DEFAULT_FROM_EMAIL,
                [self.user.email])

    subject_new = render_to_string('userena/emails/confirmation_email_subject_new.txt', context)
    subject_new = ''.join(subject_new.splitlines())

    message_new = render_to_string('userena/emails/confirmation_email_message_new.txt', context)

    send_mail(subject_new,
              message_new,
              None,
              EMAIL_DEFAULT_FROM_EMAIL,
              [self.email_unconfirmed])

  def activation_key_expired(self):
    expiration_days = datetime.timedelta(days=ACCOUNTS_REGISTRATION_ACTIVATION_DAYS)
    expiration_date = self.user.date_joined + expiration_days
    if self.activation_key == 'ALREADY_ACTIVATED':
      return True
    if timezone.now() >= expiration_date:
      return True

    return False

  def send_activation_email(self):
    context = {'user': self.user,
               'without_usernames': False,
               'protocol': get_protocol(),
               'activation_days': ACCOUNTS_REGISTRATION_ACTIVATION_DAYS,
               'activation_key': self.activation_key,
               'site': Site.objects.get_current()}

    subject = render_to_string('accounts/emails/activation_email_subject.txt', context)
    subject = ''.join(subject.splitlines())

    message = render_to_string('accounts/emails/activation_email_message.txt', context)

    send_mail(subject, message, None, EMAIL_DEFAULT_FROM_EMAIL, [self.user.email])
