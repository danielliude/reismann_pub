from django.db import models

from guardian.shortcuts import assign_perm

from core.constants import ASSIGNED_PERMISSIONS

class ServiceManager(models.Manager):

  def create_service(self, user):

    try:
      service = self.get(user=user)
    except self.model.DoesNotExist:
      service = self.create(user=user)

    for perm in ASSIGNED_PERMISSIONS['service']:
      assign_perm(perm[0], user, service)

    return service