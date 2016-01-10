from django.conf.urls import url
from django.contrib.auth import views as auth_views

from accounts import views
from accounts import settings
from accounts.compat import auth_views_compat_quirks, password_reset_uid_kwarg
from .helpers import merged_dict

urlpatterns = [
  # Reset passwords
  url(r'^password/reset/$', auth_views.password_reset,
      merged_dict({'template_name': 'accounts/password_reset_form.html',
                   'email_template_name': 'accounts/emails/reset_password_message.txt',
                   'extra_context': {'without_usernames': False}
                   }, auth_views_compat_quirks['password_reset']),
      name='password_reset'),

  url(r'^password/reset/done/$', auth_views.password_reset_done,
      {'template_name': 'accounts/password_reset_done.html', },
      name='password_reset_done'),

  url(r'^password/reset/confirm/(?P<%s>[0-9A-Za-z]+)-(?P<token>.+)/$' % password_reset_uid_kwarg,
      auth_views.password_reset_confirm,
      merged_dict({'template_name': 'accounts/reset_password_confirm_form.html',
                   }, auth_views_compat_quirks['password_reset_confirm']),
      name='password_reset_confirm'),

  url(r'^password/reset/confirm/complete/$',
      auth_views.password_reset_complete, {'template_name': 'accounts/password_reset_complete.html'},
      name='password_reset_complete'),

]