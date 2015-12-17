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