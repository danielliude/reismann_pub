from django.conf.urls import url
from django.contrib.auth import views as auth_views

from accounts import views
from accounts import settings
from accounts.compat import auth_views_compat_quirks, password_reset_uid_kwarg


def merged_dict(dict_a, dict_b):
  """Merges two dicts and returns output. It's purpose is to ease use of
  ``auth_views_compat_quirks``
  """
  dict_a.update(dict_b)
  return dict_a


urlpatterns = [
  url(r'^register/$', views.register, name="register"),
  url(r'^login/$', views.login, name="login"),
  url(r'^logout/$', views.logout, name="logout"),

  # Activation
  url(r'^(?P<username>[\@\.\w-])/registration/complete/$', views.action_complete, {
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

  # Reset password
  url(r'^password/reset/$', auth_views.password_reset,
      merged_dict({'template_name': 'accounts/reset_password_form.html',
                   'email_template_name': 'accounts/emails/reset_password_message.txt',
                   'extra_context': {'without_usernames': False}
                   }, auth_views_compat_quirks['reset_password']),
      name='reset_password'),
  url(r'^password/reset/done/$', auth_views.password_reset_done,
      {'template_name': 'accounts/reset_password_done.html', },
      name='reset_password_done'),
  url(r'^password/reset/confirm/(?P<%s>[0-9A-Za-z]+)-(?P<token>.+)/$' % password_reset_uid_kwarg,
      auth_views.password_reset_confirm,
      merged_dict({'template_name': 'accounts/reset_password_confirm_form.html',
                   }, auth_views_compat_quirks['reset_password_confirm']),
      name='reset_password_confirm'),
  url(r'^password/reset/confirm/complete/$',
      auth_views.password_reset_complete, {'template_name': 'accounts/reset_password_complete.html'},
      name='reset_password_complete'),
]
