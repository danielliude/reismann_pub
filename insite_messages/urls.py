from django.conf.urls import url
from insite_messages import views

urlpatterns = [

    url(r'(?P<username>[\@\.\w-]+)/messages/$', views.messages, name='messages'),
    url(r'(?P<username>[\@\.\w-]+)/messages/write/$', views.message_write, name='message_write'),
    url(r'(?P<username>[\@\.\w-]+)/messages/(?P<message_id>[0-9]+)/$', views.message_view, name='message_view'),
    url(r'(?P<username>[\@\.\w-]+)/messages/(?P<message_id>[0-9]+)/reply$', views.message_reply, name='message_reply'),
    url(r'(?P<username>[\@\.\w-]+)/messages/(?P<message_id>[0-9]+)/remove$', views.message_remove, name='message_remove'),
]