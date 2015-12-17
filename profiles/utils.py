from profiles.models import Profile

from contacts.models import Contact

from services.models import Service

def get_user_profile(user):
  try:
    profile = user.profile
  except Profile.DoesNotExist:
    profile = Profile.objects.create(user=user)

  return profile