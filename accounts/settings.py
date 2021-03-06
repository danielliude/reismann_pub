gettext = lambda s: s

ACCOUNT_ACTIVATED = 'ALREADY_ACTIVATED'
ACCOUNT_ACTIVATION_REQUIRED = True
ACCOUNT_FORBIDDEN_USERNAMES = ('login', 'logout', 'activate', 'me', 'password')
ACCOUNTS_REGISTRATION_ACTIVATION_DAYS = 7
ACCOUNT_LOGIN_REMEMBER_ME_DAYS = (gettext('a month'), 30)
ANONYMOUS_USER_ID=-1

USERENA_SIGNIN_REDIRECT_URL = '/accounts/%(username)s/'
LOGIN_URL = '/accounts/login/'
LOGOUT_URL = '/accounts/logout/'