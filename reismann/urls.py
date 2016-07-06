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
import notifications.urls

from core import views

urlpatterns = patterns('',
  url(r'^$', views.index, name="index"),  
  url(r'^search_url$', views.search_url, name="search_url"),  
  url(r'^404/$', views.handler404, name="404"),
  url(r'^500/$', views.handler500, name="500"),
  url(r'^about/(?P<about_type>[\@\.\w-]+)/$', views.about_us, name="about_us"),
  url(r'^help/problem/(?P<problem_type>[\@\.\w-]+)/(?P<serial_id>[\@\.\w-]+)/$', views.help_problem, name="help_problem"),
  url(r'^contact_info$', views.contact_info, name="contact_info"),
  url(r'^accounts/', include('accounts.urls', namespace='accounts')),
  url(r'^accounts/', include('accounts.auth_urls')),
  url(r'^profiles/', include('profiles.urls', namespace='profiles')),
  url(r'^cities/', include('cities.urls', namespace='cities')),
  url(r'^redactor/', include('redactor.urls')),
  url(r'^grappelli/', include('grappelli.urls')),
  url(r'^admin/', include(admin.site.urls)),
  url('^inbox/notifications/', include(notifications.urls, namespace='notifications')),

  url(r'^i18n/', include('django.conf.urls.i18n')),
)

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)