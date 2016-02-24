from django.conf.urls import url, include
from services import views

urlpatterns = [
  # View profiles
    url(r'^(?P<username>[\@\.\w-]+)/services/$', views.services, name='services'),
    url(r'^(?P<username>[\@\.\w-]+)/services/(?P<service_id>[0-9]+)/$', views.service, name='service'),
    url(r'^(?P<username>[\@\.\w-]+)/services/add/$', views.service_add, name='service_add'),

]