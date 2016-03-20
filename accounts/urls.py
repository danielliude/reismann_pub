from django.conf.urls import url
from django.contrib.auth import views as auth_views

from accounts import views
from accounts import settings
from accounts.compat import auth_views_compat_quirks, password_reset_uid_kwarg
from .helpers import merged_dict


urlpatterns = [
  url(r'^register/$', views.register, name="register"),
  url(r'^login/$', views.login, name="login"),
  url(r'^login/$', views.login_old, name="login_old"),
  url(r'^logout/$', views.logout, name="logout"),

  # Activation
  url(r'^(?P<username>\w+)/registration/complete/$', views.action_complete, {
    'template_name': 'accounts/registration_complete.html',
    'extra_context': {
      'account_activation_days': settings.ACCOUNTS_REGISTRATION_ACTIVATION_DAYS
    }
  }, name="registration_complete"),

  url(r'^activate/(?P<activation_key>\w+)/$', views.activate, name='activate'),
  # Activation Retry
  url(r'^activate/retry/(?P<activation_key>\w+)/$', views.activate_retry, name='activate_retry'),

  # Change Password
  url(r'^(?P<username>[\@\.\w-]+)/password/$', views.change_password, name='change_password'),
  url(r'^(?P<username>[\@\.\w-]+)/password/complete/$', views.action_complete, {
    'template_name': 'accounts/password_complete.html'
  }, name='change_password_complete'),

]
