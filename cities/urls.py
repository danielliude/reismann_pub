from django.conf.urls import url
from cities import views

urlpatterns = [
  # Activation
  url(r'^show/(?P<city_name>\w+)/$', views.city, {
    'template_name': 'cities/city.html',

  }, name="city"),

  # search for cities
  url(r'^search/$', views.search_cities, name='search_cities'),

  url(r'^get_cities/$', views.get_cities, name='get_cities'),
]