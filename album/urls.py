from django.conf.urls import url, include
from album import views

urlpatterns = [
    url(r'^(?P<username>[\@\.\w-]+)/album/$', views.album, name='album'),
    url(r'^(?P<username>[\@\.\w-]+)/album/set_image/$', views.set_album_image, name='set_album_image'),
    url(r'^(?P<username>[\@\.\w-]+)/album/delete_image/(?P<image_id>\d+)/$', views.delete_album_image, name='delete_album_image'),
]
