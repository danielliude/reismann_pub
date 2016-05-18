from django.conf.urls import url, include
from followship import views

urlpatterns = [
    # View services included in profiles
    url(r'(?P<follower>[\@\.\w-]+)/follow/(?P<followee>\w+)/$', views.follow, name='follow'),

    url(r'^(?P<username>[\@\.\w-]+)/followers/$', views.followers, name='followers'),
    url(r'^(?P<username>[\@\.\w-]+)/followings/$', views.followings, name='followings'),
]