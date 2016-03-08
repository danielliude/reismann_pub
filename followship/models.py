from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User

from django.core.exceptions import ValidationError

from django.core.cache import cache

from followship.signals import follower_created, follower_removed, \
  followee_created, followee_removed, following_created, following_removed

from followship.exceptions import AlreadyFollowedError


CACHE_TYPES = {
  'followers': 'fo-%d',
  'followings': 'fl-%d',
}

INVALIDATE_CACHES = {
  'followers': ['followers'],
  'followings': ['followings'],
}

def cache_key(type, user_id):
  return CACHE_TYPES[type] % user_id

def invalidate_cache(type, user_id):
  invalidate_keys = INVALIDATE_CACHES[type]
  keys = [CACHE_TYPES[k] % user_id for k in invalidate_keys]
  cache.delete_many(keys)

class FollowingManager(models.Manager):

  def followers(self, user):
    key = cache_key('followers', user.id)
    followers = cache.get(key)

    if followers is None:
      queryset = Follow.objects.filter(followee=user).all()
      followers = [u.follower for u in queryset]
      cache.set(key, followers)

    return followers

  def followings(self, user):
    key = cache_key('followings', user.id)
    followings = cache.get(key)

    if followings is None:
      queryset = Follow.objects.filter(follower=user).all()
      followings = [u.followee for u in queryset]
      cache.set(key, followings)

    return followings

  def follow(self, follower, followee):
    if follower == followee:
      raise ValidationError("Users cannot follow themselves")

    following, created = Follow.objects.get_or_create(follower=follower, followee=followee)

    if created is False:
      raise AlreadyFollowedError("User '%s' already follows '%s'" % (follower, followee))

    followee_created.send(sender=self, follower=follower)
    followee_created.send(sender=self, followee=followee)
    following_created.send(sender=self, following=following)

    invalidate_cache('followers', followee.id)
    invalidate_cache('followings', follower.id)

    return following

  def unfollow(self, follower, followee):
    try:
      following = Follow.objects.get(follower=follower, followee=followee)
      following.delete()

      follower_removed.send(sender=following, follower=follower)
      followee_removed.send(sender=following, followee=followee)
      following_removed.send(sender=following, following=following)

      invalidate_cache('followers', followee.id)
      invalidate_cache('followings', follower.id)
      return True
    except Follow.DoesNotExist:
      return False

  def follows(self, follower, followee):
    followers = cache.get(cache_key('followings', follower.id))
    followings = cache.get(cache_key('followers', followee.id))

    if followers and followee in followers:
      return True
    elif followings and follower in followings:
      return True
    else:
      try:
        Follow.objects.get(follower=follower, followee=followee)
        return True
      except Follow.DoesNotExist:
        return False


class Follow(models.Model):

  follower = models.ForeignKey(User, verbose_name=_('follower'), related_name='followings')

  followee = models.ForeignKey(User, verbose_name=_('followee'), related_name='followers')

  created_at = models.DateTimeField(auto_now_add=True)

  updated_at = models.DateTimeField(auto_now=True)

  objects = FollowingManager()

  def __str__(self):
    return "User #%s follows #%s" % (self.follower.username, self.followee.username)

  def save(self, *args, **kwargs):
    if self.follower == self.followee:
      raise ValidationError("Users cannot follow themselves")
    super(Follow, self).save(*args, **kwargs)