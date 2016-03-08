from django.shortcuts import render
from django.http import HttpResponseRedirect
from followship.models import Follow
from accounts.models import User

def follow(request, follower, followee):

    follower_object = User.objects.get(username = follower)
    followee_object = User.objects.get(username = followee)

    if follower and followee:
        if not Follow.objects.follows(follower_object, followee_object):
            Follow.objects.follow(follower_object, followee_object)

    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))