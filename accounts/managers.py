from django.contrib.auth.models import User, UserManager, Permission
from django.contrib.contenttypes.models import ContentType

from django.utils.six import text_type
from django.core.exceptions import ObjectDoesNotExist

from userena.utils import generate_sha1, get_profile_model, get_user_model, get_user_profile

from userena.compat import smart_text

from accounts.settings import ACCOUNT_ACTIVATED, ANONYMOUS_USER_ID

from profiles.models import Profile
from contacts.models import Contact
from services.models import Service
from profiles.models import ProfileSettings

from guardian.shortcuts import assign_perm, get_perms

from core.constants import ASSIGNED_PERMISSIONS
from core.constants import GLOBAL_PERMISSIONS

from _datetime import datetime

import re

SHA1_RE = re.compile('^[a-f0-9]{40}$')

class RegistrationManager(UserManager):

  def create_user(self, username, email, password, active=False, send_email=True):

    new_user = User.objects.create_user(username=username, email=email, password=password)
    new_user.is_active = active
    new_user.save()

    for perm in ASSIGNED_PERMISSIONS['user']:
      assign_perm(perm[0], new_user, new_user)

    for perm in GLOBAL_PERMISSIONS['global']:
      assign_perm(perm[0], new_user)

    registration = self.create_registration(new_user)
    settings = ProfileSettings(profile_is_active = True, email_notifications = True)
    settings.save()
    profile = Profile.objects.create_profile(new_user, settings)
    contact = Contact.objects.create_contact(new_user)

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
      registration.user.date_joined = datetime.datetime.now()
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

  def check_permissions(self):
    """
    Checks that all permissions are set correctly for the users.
    :return: A set of users whose permissions was wrong.
    """
    # Variable to supply some feedback
    changed_permissions = []
    changed_users = []
    warnings = []

    # Check that all the permissions are available.
    for model, perms in ASSIGNED_PERMISSIONS.items():
        if model == 'profile':
            model_obj = get_profile_model()
        else: model_obj = get_user_model()

        model_content_type = ContentType.objects.get_for_model(model_obj)

        for perm in perms:
            try:
                Permission.objects.get(codename=perm[0],
                                       content_type=model_content_type)
            except Permission.DoesNotExist:
                changed_permissions.append(perm[1])
                Permission.objects.create(name=perm[1],
                                          codename=perm[0],
                                          content_type=model_content_type)

    # it is safe to rely on settings.ANONYMOUS_USER_ID since it is a
    # requirement of django-guardian
    for user in get_user_model().objects.exclude(id=ANONYMOUS_USER_ID):
        try:
            user_profile = get_user_profile(user=user)
        except ObjectDoesNotExist:
            warnings.append(_("No profile found for %(username)s") \
                                % {'username': user.username})
        else:
            all_permissions = get_perms(user, user_profile) + get_perms(user, user)

            for model, perms in ASSIGNED_PERMISSIONS.items():
                if model == 'profile':
                    perm_object = get_user_profile(user=user)
                else: perm_object = user

                for perm in perms:
                    if perm[0] not in all_permissions:
                        assign_perm(perm[0], user, perm_object)
                        changed_users.append(user)

    return (changed_permissions, changed_users, warnings)