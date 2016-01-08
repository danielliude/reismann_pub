from django.db import models

from guardian.shortcuts import assign_perm

from core.constants import ASSIGNED_PERMISSIONS


class ContactManager(models.Manager):

  def create_contact(self, user, phone=None, weibo=None, wechat=None, qq=None):

    try:
      contact = self.get(user=user)
    except self.model.DoesNotExist:
      contact = self.create(user=user, phone=phone, weibo=weibo, wechat=wechat, qq=qq)

    for perm in ASSIGNED_PERMISSIONS['contact']:
        assign_perm(perm[0], user, contact)

    return contact