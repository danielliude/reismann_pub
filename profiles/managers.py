from django.db import models

from guardian.shortcuts import assign_perm

from core.constants import ASSIGNED_PERMISSIONS

import re

SHA1_RE = re.compile('^[a-f0-9]{40}$')

class ProfileManager(models.Manager):

  def create_profile(self, user):

    try:
      profile = self.get(user=user)
    except self.model.DoesNotExist:
      profile = self.create(user=user)
    for perm in ASSIGNED_PERMISSIONS['profile']:
      assign_perm(perm[0], user, profile)

    return profile

  def get_active_profiles(self):

    profiles = self.all()

    filter_kwargs = {'user__is_active': True}

    profiles = profiles.filter(**filter_kwargs)

    return profiles

from core.mail import send_mail
from django.template.loader import render_to_string
from django.contrib.sites.models import Site
from reismann.alex_settings import EMAIL_DEFAULT_FROM_EMAIL


class ProfileMailManager():

    def send_notification_email_to_administrator(self, user):


        context = {'profile_id':user.profile.id,
                   'site': Site.objects.get_current()}

        subject = render_to_string('profiles/emails/notification_id_added_subject_for_admin.txt', context)
        subject = ''.join(subject.splitlines())

        message = render_to_string('profiles/emails/notification_id_added_message_for_admin.txt', context)

        send_mail(subject, message, None, EMAIL_DEFAULT_FROM_EMAIL, [EMAIL_DEFAULT_FROM_EMAIL])