from django.db import models

from guardian.shortcuts import assign_perm

from core.constants import ASSIGNED_PERMISSIONS

from core.mail import send_mail
from django.template.loader import render_to_string
from django.contrib.sites.models import Site
from reismann.alex_settings import EMAIL_DEFAULT_FROM_EMAIL

class ServiceManager(models.Manager):

  def create_service(self, user):

    try:
      service = self.get(user=user)
    except self.model.DoesNotExist:
      service = self.create(user=user)

    for perm in ASSIGNED_PERMISSIONS['service']:
      assign_perm(perm[0], user, service)

    return service



class ServiceMailManager():

    def send_notification_email_to_administrator(self, service):


        context = {'service_id':service.id,
                   'site': Site.objects.get_current()}

        subject = render_to_string('services/emails/notification_service_changed_subject_for_admin.txt', context)
        subject = ''.join(subject.splitlines())

        message = render_to_string('services/emails/notification_service_changed_message_for_admin.txt', context)

        send_mail(subject, message, None, EMAIL_DEFAULT_FROM_EMAIL, [EMAIL_DEFAULT_FROM_EMAIL])