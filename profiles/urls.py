from django.conf.urls import url, include
from profiles import views

urlpatterns = [
  # View profiles
    url(r'^(?P<username>[\@\.\w-]+)/$', views.profile, name='profile'),
    url(r'^(?P<username>[\@\.\w-]+)/dashboard$', views.dashboard, name='dashboard'),
    url(r'^(?P<username>[\@\.\w-]+)/detail/$', views.detail, name='detail'),
    url(r'^(?P<username>[\@\.\w-]+)/contact/$', views.contact, name='contact'),

    url(r'^/', include('services.urls')),

    url(r'^/', include('insite_messages.urls')),
]