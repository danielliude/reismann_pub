from django.conf.urls import url, include
from profiles import views

urlpatterns = [
  # View profiles
    url(r'^(?P<username>[\@\.\w-]+)/$', views.profile, name='profile'),
    url(r'^(?P<username>[\@\.\w-]+)/dashboard/$', views.dashboard, name='dashboard'),
    url(r'^(?P<username>[\@\.\w-]+)/detail/$', views.detail, name='detail'),
    url(r'^(?P<username>[\@\.\w-]+)/verification/$', views.verification, name='verification'),
    url(r'^(?P<username>[\@\.\w-]+)/settings/$', views.settings, name='settings'),
    url(r'^(?P<username>[\@\.\w-]+)/notifications/$', views.notifications, name='notifications'),
    url(r'^(?P<username>[\@\.\w-]+)/notifications/avatar/(?P<avatar_username>[\@\.\w-]+)/$', views.notification_avatar, name='notification_avatar'),
    url(r'^(?P<username>[\@\.\w-]+)/mark_read_or_delete/$', views.mark_read_or_delete, name='mark_read_or_delete'),


    url(r'^', include('album.urls')),
    url(r'^', include('services.urls')),
    url(r'^', include('insite_messages.urls')),
    url(r'^', include('followship.urls')),
    url(r'^', include('bookings.urls')),
    url(r'^', include('blacklists.urls')),
]