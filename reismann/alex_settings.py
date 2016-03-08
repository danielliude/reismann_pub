import os
from ast import literal_eval as make_bool

#LANGUAGES
LANGUAGE_CODE = 'en'

ugettext = lambda s: s
LANGUAGES = (
	('en', ugettext('English')),
)

#MEDIA SETTINGS
MEDIA_ROOT = ''
MEDIA_URL = '/media/'

#EMAIL
EMAIL_HOST = os.environ.get('EMAIL_HOST', 'localhost')
EMAIL_PORT = os.environ.get('EMAIL_PORT', 1025)
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER', '')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD', '')
EMAIL_USE_TLS = make_bool(os.environ.get('EMAIL_USE_TLS', 'False'))
EMAIL_BACKEND = os.environ.get('EMAIL_BACKEND', 'django.core.mail.backends.console.EmailBackend')
EMAIL_DEFAULT_FROM_EMAIL = os.environ.get('DEFAULT_FROM_EMAIL', 'alex@alex.com')

# Database SETTINGS
DATABASES = {
	'default': {
		 'ENGINE': 'django.db.backends.mysql',
		 'NAME': 'reismanndb',
		 'USER': 'reismann',
		 'PASSWORD':'reismannpwd',
		 'HOST' : '',
		 'PORT' : '',
	}
}