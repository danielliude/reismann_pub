from django.conf.urls import url
from insite_messages import views

urlpatterns = [

    url(r'(?P<username>[\@\.\w-]+)/inbox_messages/$', views.inbox_messages, name='inbox_messages'),
    url(r'(?P<username>[\@\.\w-]+)/outbox_messages/$', views.outbox_messages, name='outbox_messages'),

    url(r'^(?P<username>[\@\.\w-]+)/unread_messages_count/$', views.get_message_unread_count, name='unread_messages_count'),
    url(r'^(?P<username>[\@\.\w-]+)/unread_messages/$', views.get_message_unread_info, name='unread_messages_info'),
    url(r'(?P<username>[\@\.\w-]+)/messages/write/$', views.message_write, name='message_write'),
    url(r'(?P<username>[\@\.\w-]+)/messages/write/(?P<recipient>[\@\.\w-]+)/$', views.message_write, name='message_write'),
    url(r'(?P<username>[\@\.\w-]+)/messages/(?P<message_id>[0-9]+)/$', views.message_view, name='message_view'),
    url(r'(?P<username>[\@\.\w-]+)/messages/(?P<message_id>[0-9]+)/reply$', views.message_reply, name='message_reply'),
    url(r'(?P<username>[\@\.\w-]+)/messages/(?P<message_id>[0-9]+)/remove$', views.message_remove, name='message_remove'),
]