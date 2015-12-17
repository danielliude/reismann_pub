from django.conf.urls import url
from profiles import views

urlpatterns = [
  # View profiles
    url(r'^(?P<username>[\@\.\w-]+)/$', views.profile, name='profile'),
    url(r'^(?P<username>[\@\.\w-]+)/dashboard$', views.dashboard, name='dashboard'),
    url(r'^(?P<username>[\@\.\w-]+)/detail/$', views.detail, name='detail'),
    url(r'^(?P<username>[\@\.\w-]+)/contact/$', views.contact, name='contact'),
    url(r'^(?P<username>[\@\.\w-]+)/service/$', views.service, name='service'),
    url(r'^(?P<username>[\@\.\w-]+)/resume/(?P<category_id>[\d]+)/$', views.resume, name='resume'),
]