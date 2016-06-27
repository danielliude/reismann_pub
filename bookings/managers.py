from django.db import models

from guardian.shortcuts import assign_perm

from core.constants import ASSIGNED_PERMISSIONS

import re

from core.mail import send_mail
from django.template.loader import render_to_string
from django.contrib.sites.models import Site
from reismann.alex_settings import EMAIL_DEFAULT_FROM_EMAIL

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

  def my_bookings(self, user):
    return self.filter(sender=user, sender_deleted_at__isnull=True).exclude(recipient=user)

  def other_bookings(self, user):
    return self.filter(recipient=user, sender_deleted_at__isnull=True).exclude(sender=user)


class BookingMailManager():

  def send_notification_email_for_provider(self, booking):

    if booking.recipient.profile.settings.email_notifications == True:
        if booking.recipient.contact.email:
            context = {'booking': booking,
                       'site': Site.objects.get_current()}

            subject = render_to_string('bookings/emails/new_booking_subject.txt', context)
            subject = ''.join(subject.splitlines())

            message = render_to_string('bookings/emails/new_booking_message.txt', context)

            send_mail(subject, message, None, EMAIL_DEFAULT_FROM_EMAIL, [booking.recipient.contact.email])

  def send_successful_booking_email_for_user(self, booking):

    if booking.sender.profile.settings.email_notifications == True:
        if booking.sender.contact.email:

            context = {'user_first_name': booking.sender.first_name,
                       'user_last_name': booking.sender.last_name,
                       'service_title': booking.service.title,
                       'service_date_starts_at': booking.service_starts_at,
                       'service_date_ends_at': booking.service_ends_at,
                       'service_time_starts_at': 'TO CHANGE!',
                       'service_time_ends_at': 'TO CHANGE!',
                       'service_price': booking.price,
                       'provider_first_name':booking.service.user.first_name,
                       'provider_last_name':booking.service.user.last_name,
                       'provider_birthday':booking.service.user.profile.birthday,
                       'provider_gender': booking.service.user.profile.get_gender_display(),
                       'provider_phone':booking.service.user.contact.phone,
                       'provider_wechat':booking.service.user.contact.wechat,
                       'provider_email':booking.service.user.contact.email,
                       'service_content':booking.booking_content,
                       'service_remark':booking.booking_remark,
                       'site': Site.objects.get_current()}

            subject = render_to_string('bookings/emails/successful_booking_subject_for_user.txt', context)
            subject = ''.join(subject.splitlines())

            message = render_to_string('bookings/emails/successful_booking_message_for_user.txt', context)

            send_mail(subject, message, None, EMAIL_DEFAULT_FROM_EMAIL, [booking.sender.email])

  def send_notification_booking_email_for_user(self, booking):

    if booking.sender.profile.settings.email_notifications == True:
        if booking.sender.contact.email:
            context = {'user_first_name': booking.sender.first_name,
                       'user_last_name': booking.sender.last_name,
                       'service_title': booking.service.title,
                       'site': Site.objects.get_current()}

            subject = render_to_string('bookings/emails/notification_booking_subject_for_user.txt', context)
            subject = ''.join(subject.splitlines())

            message = render_to_string('bookings/emails/notification_booking_message_for_user.txt', context)

            send_mail(subject, message, None, EMAIL_DEFAULT_FROM_EMAIL, [booking.sender.email])

  def send_successful_booking_email_for_provider(self, booking):

    if booking.recipient.profile.settings.email_notifications == True:
        if booking.recipient.contact.email:
            context = {'provider_first_name': booking.recipient.first_name,
                       'provider_last_name': booking.recipient.last_name,
                       'service_title': booking.service.title,
                       'service_date_starts_at': booking.service_starts_at,
                       'service_date_ends_at': booking.service_ends_at,
                       'service_time_starts_at': 'TO CHANGE!',
                       'service_time_ends_at': 'TO CHANGE!',
                       'service_price': booking.price,
                       'customer_first_name':booking.sender.first_name,
                       'customer_last_name':booking.sender.last_name,
                       'customer_phone':booking.sender.contact.phone,
                       'customer_wechat':booking.sender.contact.wechat,
                       'customer_email':booking.sender.contact.email,
                       'service_content':booking.booking_content,
                       'service_remark':booking.booking_remark,
                       'site': Site.objects.get_current()}

            subject = render_to_string('bookings/emails/successful_booking_subject_for_provider.txt', context)
            subject = ''.join(subject.splitlines())
            message = render_to_string('bookings/emails/successful_booking_message_for_provider.txt', context)

            send_mail(subject, message, None, EMAIL_DEFAULT_FROM_EMAIL, [booking.recipient.email])


  def send_notification_booking_email_for_provider(self, booking):

    if booking.recipient.profile.settings.email_notifications == True:
        if booking.recipient.contact.email:
            context = {'provider_first_name': booking.recipient.first_name,
                       'provider_last_name': booking.recipient.last_name,
                       'service_title': booking.service.title,
                       'site': Site.objects.get_current()}

            subject = render_to_string('bookings/emails/notification_booking_subject_for_provider.txt', context)
            subject = ''.join(subject.splitlines())
            message = render_to_string('bookings/emails/notification_booking_message_for_provider.txt', context)

            send_mail(subject, message, None, EMAIL_DEFAULT_FROM_EMAIL, [booking.recipient.email])