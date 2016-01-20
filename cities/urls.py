from django.conf.urls import url
from cities import views

urlpatterns = [
  # Activation
  url(r'^(?P<city_name>\w+)/$', views.city, {
    'template_name': 'cities/city.html',

  }, name="city"),

   url(r'^(?P<from_city>\w+)/search/$', views.search, name='search'),
]