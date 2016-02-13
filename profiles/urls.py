from django.conf.urls import url
from profiles import views

urlpatterns = [
  # View profiles
    url(r'^(?P<username>[\@\.\w-]+)/$', views.profile, name='profile'),
    url(r'^(?P<username>[\@\.\w-]+)/dashboard$', views.dashboard, name='dashboard'),
    url(r'^(?P<username>[\@\.\w-]+)/detail/$', views.detail, name='detail'),
    url(r'^(?P<username>[\@\.\w-]+)/contact/$', views.contact, name='contact'),

    url(r'^(?P<username>[\@\.\w-]+)/services/$', views.services, name='services'),
    url(r'^(?P<username>[\@\.\w-]+)/services/(?P<service_id>[0-9]+)/$', views.service, name='service'),
    url(r'^(?P<username>[\@\.\w-]+)/services/add/$', views.service_add, name='service_add'),

    url(r'^(?P<username>[\@\.\w-]+)/messages/$', views.messages, name='messages'),
    url(r'^(?P<username>[\@\.\w-]+)/messages/write/$', views.message_write, name='message_write'),

]