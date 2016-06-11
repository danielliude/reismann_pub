from django.conf.urls import url
from blacklists import views

urlpatterns = [
    url(r'^(?P<username>[\@\.\w-]+)/shield/(?P<shielding>\w+)/$', views.shield, name='shield'),
    url(r'^(?P<username>[\@\.\w-]+)/unshield/(?P<shielding>\w+)/$', views.unshield, name='unshield'),
]