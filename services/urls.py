from django.conf.urls import url, include
from services import views

urlpatterns = [
    # View services included in profiles
    url(r'(?P<username>[\@\.\w-]+)/services/$', views.services, name='services'),
    url(r'(?P<username>[\@\.\w-]+)/services/add/$', views.service_add, name='service_add'),
    url(r'(?P<username>[\@\.\w-]+)/services/edit/(?P<service_id>[0-9]+)/$', views.service_edit, name='service_edit'),
    url(r'(?P<username>[\@\.\w-]+)/services/view/(?P<service_id>[0-9]+)/$', views.service_view, name='service_view'),

]