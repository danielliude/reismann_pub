"""
Django settings for reismann project.

Generated by 'django-admin startproject' using Django 1.8.5.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""

# Specific developer settings
try:
   from .alex_settings import *
except ImportError:
   pass

try:
   from .zheng_settings import *
except ImportError:
    pass

try:
   from .youngjie_settings import *
except ImportError:
    pass

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
import sys

from django.utils.translation import ugettext_lazy as _

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'ocj5ofb!!%3e)0rf6rv+^y3yw-@ela)$==&hsn6jro65hmfb!7'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

SITE_ID = 1

ROOT_URLCONF = 'reismann.urls'

# Application definition
INSTALLED_APPS = (
  'django.contrib.contenttypes',
  'django.contrib.auth',
  'grappelli',
  'grappelli.dashboard',
  'django.contrib.sessions',
  'django.contrib.messages',
  'django.contrib.sites',
  'django.contrib.admin',
  'django.contrib.staticfiles',
  'redactor',
  'guardian',
  'easy_thumbnails',
  'configurations',
  'core',
  'cities',
  'contacts',
  'services',
  'accounts',
  'profiles',
  'insite_messages',
  'followship',
  'webpack_loader',
)

SESSION_COOKIE_AGE = 360

MIDDLEWARE_CLASSES = (
  'django.contrib.sessions.middleware.SessionMiddleware',
  'django.middleware.common.CommonMiddleware',
  'django.middleware.csrf.CsrfViewMiddleware',
  'django.contrib.auth.middleware.AuthenticationMiddleware',
  'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
  'django.contrib.messages.middleware.MessageMiddleware',
  'django.middleware.clickjacking.XFrameOptionsMiddleware',
  'django.middleware.security.SecurityMiddleware',
  'userena.middleware.UserenaLocaleMiddleware',
)


TEMPLATES = [
  {
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [],
    'APP_DIRS': True,
    'OPTIONS': {
      'context_processors': [
        'django.template.context_processors.debug',
        'django.template.context_processors.request',
        'django.contrib.auth.context_processors.auth',
        'django.contrib.messages.context_processors.messages',
        'django.core.context_processors.request',
      ],
    },
  },
]

WSGI_APPLICATION = 'reismann.wsgi.application'

# Add the Guardian and accounts authentication backends
AUTHENTICATION_BACKENDS = (
  'userena.backends.UserenaAuthenticationBackend',
  'guardian.backends.ObjectPermissionBackend',
  'django.contrib.auth.backends.ModelBackend',
)


# Database MOVED TO LOCAL SETTINGS
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases


# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/


TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

LOCALE_PATHS = (
  'locale',
)

AUTH_PROFILE_MODULE = 'profiles.Profile'

STATIC_ROOT = os.path.join(BASE_DIR, 'static/')

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.8/howto/static-files/

STATICFILES_DIRS = (
  os.path.join(BASE_DIR, 'assets/'),
)

STATIC_URL = '/static/'

# Webpack-loader
WEBPACK_LOADER = {
  'DEFAULT': {
    'BUNDLE_DIR_NAME': 'bundles/',
    'STATS_FILE': os.path.join(BASE_DIR, 'frontend/webpack-stats.json'),
  }
}

# Greppelli Dashboard
GRAPPELLI_INDEX_DASHBOARD = 'reismann.dashboard.AdminDashboard'
GRAPPELLI_ADMIN_TITLE = _('reismann admin interface')

# Needed for Django guardian
ANONYMOUS_USER_ID = -1

# Mail Server Configuration MOVED TO LOCAL SETTINGS

# Redactor Configuration
REDACTOR_OPTIONS = {'lang': 'zh_cn'}
REDACTOR_UPLOAD = 'reismann/images/services/redactor/'
REDACTOR_UPLOAD_HANDLER = 'redactor.handlers.DateDirectoryUploader'
REDACTOR_AUTH_DECORATOR = 'django.contrib.auth.decorators.login_required'

# Logging
LOGGING = {
  'version': 1,
  'disable_existing_loggers': False,
  'handlers': {
    'console': {
      'class': 'logging.StreamHandler',
      'level': 'DEBUG',
      'stream': sys.stdout
    },
  },
  'loggers': {
    'django': {
      'handlers': ['console'],
      'level': os.getenv('DJANGO_LOG_LEVEL', 'INFO'),
    },
    'accounts': {
      'handlers': ['console'],
      'level': 'DEBUG'
    }
  },
}