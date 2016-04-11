"""reismann URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url, patterns
from django.contrib import admin
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings

from core import views

urlpatterns = patterns('',
  url(r'^$', views.index, name="index"),  
  url(r'^search_url$', views.search_url, name="search_url"),  
  url(r'^404/$', views.handler404, name="404"),
  url(r'^500/$', views.handler500, name="500"),
  url(r'^about/about_us/$', views.about_us, name="about_us"),
  url(r'^about/service_term/$', views.service_term, name="service_term"),
  url(r'^about/privacy_protect/$', views.privacy_protect, name="privacy_protect"),
  url(r'^about/disclaimer/$', views.disclaimer, name="disclaimer"),
  url(r'^accounts/', include('accounts.urls', namespace='accounts')),
  url(r'^accounts/', include('accounts.auth_urls')),
  url(r'^profiles/', include('profiles.urls', namespace='profiles')),
  url(r'^cities/', include('cities.urls', namespace='cities')),
  url(r'^redactor/', include('redactor.urls')),
  url(r'^grappelli/', include('grappelli.urls')),
  url(r'^admin/', include(admin.site.urls)),
)

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)