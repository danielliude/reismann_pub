from django.db import IntegrityError

class AlreadyFollowedError(IntegrityError):
  pass