from django.shortcuts import render
from django.http import HttpResponseRedirect
from followship.models import Follow
from accounts.models import User

from userena.decorators import secure_required
from guardian.decorators import permission_required_or_403
from django.shortcuts import get_object_or_404
from core.utils import ExtraContextTemplateView
from followship.models import Follow
from profiles.views import makeContextForNotifications, makeContextForProfile, makeContextForAllUserServices, makeContextForMessages

def follow(request, follower, followee):

    follower_object = User.objects.get(username = follower)
    followee_object = User.objects.get(username = followee)

    if follower and followee:
        if not Follow.objects.follows(follower_object, followee_object):
            Follow.objects.follow(follower_object, followee_object)

    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


def unfollow(request, follower, followee):

    follower_object = User.objects.get(username = follower)
    followee_object = User.objects.get(username = followee)

    if follower and followee:
        if Follow.objects.follows(follower_object, followee_object):
            Follow.objects.unfollow(follower_object, followee_object)

    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


@secure_required
@permission_required_or_403('followship.view_followers')
def followers(request, username,
                template_name='followship/followers.html',
                extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)

  if not extra_context: extra_context = dict()

  extra_context['followers'] = Follow.objects.followers(user)

  extra_context = makeContextForNotifications(request, extra_context)
  extra_context = makeContextForProfile(request, user, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('followship.view_followings')
def followings(request, username,
                template_name='followship/followings.html',
                extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)

  if not extra_context: extra_context = dict()

  extra_context['followings'] = Follow.objects.followings(user)

  extra_context = makeContextForNotifications(request, extra_context)
  extra_context = makeContextForProfile(request, user, extra_context)
  extra_context = makeContextForMessages(request, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)



