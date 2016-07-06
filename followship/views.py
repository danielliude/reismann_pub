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

from followship.managers import FollowshipMailManager as mailer

from notifications.signals import notify
from blacklists.models import BlackLists
from django.contrib.contenttypes.models import ContentType


def follow(request, follower, followee):

    follower_object = User.objects.get(username = follower)
    followee_object = User.objects.get(username = followee)

    if follower and followee:
        if not Follow.objects.follows(follower_object, followee_object):
            shielded_list = BlackLists.objects.filter(user__id=followee_object.id)
            for item in shielded_list:
                # the request.user is shielded by profile.user, can not follow
                if item.shielding.id == request.user.id:
                    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
            shielding_list = BlackLists.objects.filter(user__id=request.user.id)
            for item in shielding_list:
                if item.shielding.id == followee_object.id:
                    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
            instance = Follow.objects.follow(follower_object, followee_object)

            # create internal notification
            notify.send(sender = follower_object, recipient=followee_object, verb=u'has started following you', action_object=instance)

            # send email about internal message
            m = mailer()
            m.send_email_new_follower(user = followee_object)

    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


def unfollow(request, follower, followee):

    follower_object = User.objects.get(username = follower)
    followee_object = User.objects.get(username = followee)

    if follower and followee:
        if Follow.objects.follows(follower_object, followee_object):
            instance = Follow.objects.unfollow(follower_object, followee_object)

            # create internal notification
            notify.send(sender = follower_object, recipient=followee_object, verb=u'has unfollowed you', action_object=instance)

            # send email about internal message
            m = mailer()
            m.send_email_lost_follower(user=followee_object)

    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


@secure_required
@permission_required_or_403('followship.view_followers')
def followers(request, username,
                template_name='followship/followship.html',
                extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)

  if not extra_context: extra_context = dict()

  extra_context['followers'] = Follow.objects.followers(user)
  extra_context['followings'] = Follow.objects.followings(user)
  extra_context['followers_page'] = 'true'

  extra_context = makeContextForNotifications(request, extra_context)
  extra_context = makeContextForProfile(request, user, extra_context)
  extra_context = makeContextForMessages(request, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('followship.view_followings')
def followings(request, username,
                template_name='followship/followship.html',
                extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)

  if not extra_context: extra_context = dict()

  extra_context['followers'] = Follow.objects.followers(user)
  extra_context['followings'] = Follow.objects.followings(user)
  extra_context['followings_page'] = 'true'

  extra_context = makeContextForNotifications(request, extra_context)
  extra_context = makeContextForProfile(request, user, extra_context)
  extra_context = makeContextForMessages(request, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)



