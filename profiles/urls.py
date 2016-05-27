from django.conf.urls import url, include
from profiles import views

urlpatterns = [
  # View profiles
    url(r'^(?P<username>[\@\.\w-]+)/$', views.profile, name='profile'),
    url(r'^(?P<username>[\@\.\w-]+)/dashboard/$', views.dashboard, name='dashboard'),
    url(r'^(?P<username>[\@\.\w-]+)/detail/$', views.detail, name='detail'),
    url(r'^(?P<username>[\@\.\w-]+)/verification/$', views.verification, name='verification'),
    url(r'^(?P<username>[\@\.\w-]+)/settings/$', views.settings, name='settings'),
    url(r'^(?P<username>[\@\.\w-]+)/album/$', views.album, name='album'),
    url(r'^(?P<username>[\@\.\w-]+)/album/set_image/$', views.set_album_image, name='set_album_image'),
    url(r'^(?P<username>[\@\.\w-]+)/notifications/$', views.notifications, name='notifications'),

    url(r'^', include('services.urls')),
    url(r'^', include('insite_messages.urls')),
    url(r'^', include('followship.urls')),
    url(r'^', include('bookings.urls'))
]