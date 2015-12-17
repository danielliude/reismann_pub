from django.contrib.auth.models import User, UserManager
from django.utils.six import text_type

from userena.utils import generate_sha1, get_datetime_now

from userena.compat import smart_text

from accounts.settings import ACCOUNT_ACTIVATED

from profiles.models import Profile

from contacts.models import Contact

from services.models import Service

from guardian.shortcuts import assign_perm

from core.constants import ASSIGNED_PERMISSIONS

import re

SHA1_RE = re.compile('^[a-f0-9]{40}$')

class RegistrationManager(UserManager):

  def create_user(self, username, email, password, active=False,
                  send_email=True):
    new_user = User.objects.create_user(username, email, password)
    new_user.is_active = active
    new_user.save()

    for perm in ASSIGNED_PERMISSIONS['user']:
      assign_perm(perm[0], new_user, new_user)

    registration = self.create_registration(new_user)
    profile = Profile.objects.create_profile(new_user)
    contact = Contact.objects.create_contact(new_user)
    service = Service.objects.create_service(new_user)

    if send_email:
      registration.send_activation_email()

    return new_user

  def create_registration(self, user):
    if isinstance(user.username, text_type):
      user.username = smart_text(user.username)
    salt, activation_key = generate_sha1(user.username)

    try:
      regisration = self.get(user=user)
    except self.model.DoesNotExist:
      regisration = self.create(user=user, activation_key=activation_key)

    return regisration

  def reissue_activation(self, activation_key):
    try:
      registration = self.get(activation_key=activation_key)
    except self.model.DoesNotExist:
      return False
    try:
      salt, new_activation_key = generate_sha1(registration.user.username)
      registration.activation_key = new_activation_key
      registration.save(using=self._db)
      registration.user.date_joined = get_datetime_now()
      registration.user.save(using=self._db)
      registration.send_activation_email()
      return True
    except Exception:
      return False

  def activate_user(self, activation_key):
    if SHA1_RE.search(activation_key):
      try:
        registration = self.get(activation_key=activation_key)
      except self.model.DoesNotExist:
        return False
      if not registration.activation_key_expired():
        registration.activation_key = ACCOUNT_ACTIVATED
        user = registration.user
        user.is_active = True
        registration.save(using=self._db)
        user.save(using=self._db)

        return user

    return False

  def check_expired_activation(self, activation_key):
    if SHA1_RE.search(activation_key):
      registration = self.get(activation_key=activation_key)
      return registration.activation_key_expired()

    raise self.model.DoesNotExist

  def confirm_email(self, confirmation_key):
    if SHA1_RE.search(confirmation_key):
      try:
        registration = self.get(email_confirmation_key=confirmation_key,
                                email_unconfirmed__isnull=False)
      except self.model.DoesNotExist:
        return False
      else:
        user = registration.user
        old_email = user.email
        user.email = registration.email_unconfirmed
        registration.email_unconfirmed, registration.email_confirmation_key = '', ''
        registration.save(using=self._db)
        user.save(using=self._db)

        return user

    return False

  def delete_expired_users(self):
    deleted_users = []
    for user in User.objects.filter(is_staff=False, is_active=False):
      if user.regisration.activation_key_expired():
        deleted_users.append(user)
        user.delete()
    return deleted_users