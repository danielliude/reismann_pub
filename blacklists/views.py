from django.shortcuts import render
from django.http.response import HttpResponseRedirect
from accounts.models import User
from blacklists.models import BlackLists
from followship.views import unfollow
from followship.models import Follow


def shield(request, username, shielding):
    user_object = User.objects.get(username=username)
    shield_object = User.objects.get(username=shielding)
    if Follow.objects.follows(shield_object, user_object):
        Follow.objects.unfollow(shield_object, user_object)
    BlackLists.objects.create(user=user_object, shielding=shield_object)
    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


def unshield(request, username, shielding):
    user_object = User.objects.get(username=username)
    shield_object = User.objects.get(username=shielding)
    BlackLists.objects.get(user=user_object, shielding=shield_object).delete()
    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
