from django.conf.urls import url
from bookings import views

urlpatterns = [

    url(r'^(?P<username>[\@\.\w-]+)/bookings/$', views.bookings, name='bookings'),

    url(r'^(?P<username>[\@\.\w-]+)/bookings/add/$', views.booking_add, name='booking_add'),
    url(r'^(?P<username>[\@\.\w-]+)/bookings/add/(?P<service_id>[0-9]+)/$', views.booking_add_with_service, name='booking_add_with_service'),

    url(r'^(?P<username>[\@\.\w-]+)/bookings/view/(?P<booking_id>[0-9]+)/$', views.booking_view, name='booking_view'),
    url(r'^(?P<username>[\@\.\w-]+)/bookings/edit/(?P<booking_id>[0-9]+)/$', views.booking_edit, name='booking_edit'),
    url(r'^(?P<username>[\@\.\w-]+)/bookings/reject/(?P<booking_id>[0-9]+)/$', views.booking_reject, name='booking_reject'),
    url(r'^(?P<username>[\@\.\w-]+)/bookings/approve/(?P<booking_id>[0-9]+)/$', views.booking_approve, name='booking_approve'),
    url(r'^(?P<username>[\@\.\w-]+)/bookings/remove/(?P<booking_id>[0-9]+)/$', views.booking_remove, name='booking_remove'),

]