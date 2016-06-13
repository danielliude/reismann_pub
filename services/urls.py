from django.conf.urls import url, include
from services import views

urlpatterns = [
    # View services included in profiles
    url(r'(?P<username>[\@\.\w-]+)/services/$', views.services, name='services'),
    url(r'(?P<username>[\@\.\w-]+)/services/add/$', views.service_add, name='service_add'),
    url(r'(?P<username>[\@\.\w-]+)/services/edit/(?P<service_id>[0-9]+)/$', views.service_edit, name='service_edit'),
    url(r'(?P<username>[\@\.\w-]+)/services/view/(?P<service_id>[0-9]+)/$', views.service_view, name='service_view'),
    url(r'(?P<username>[\@\.\w-]+)/services/remove/(?P<service_id>[0-9]+)/$', views.service_remove, name='service_remove'),
    url(r'(?P<username>[\@\.\w-]+)/services/activate/(?P<service_id>[0-9]+)/$', views.service_activate, name='service_activate'),
    url(r'(?P<username>[\@\.\w-]+)/services/view/own/(?P<service_id>[0-9]+)/$', views.service_view_own, name='service_view_own'),

    url(r'(?P<username>[\@\.\w-]+)/get_rating_and_form/$', views.get_rating_and_form, name='get_rating_and_form'),
]