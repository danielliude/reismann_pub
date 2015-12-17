from django.utils.translation import ugettext_lazy as _

GENDER_CHOICES = (
  (1, _('Male')),
  (2, _('Female')),
)

SERVICE_TYPE_CHOICES = (
  (1, _('Part time')),
  (2, _('Full time')),
)

MUGSHOT_SETTINGS = {'size': (140, 140), 'crop': 'smart'}

SERVICE_CARD_IMAGE_SETTINGS = {'size': (800, 600), 'crop': 'smart'}

PROFILE_CARD_IMAGE_SETTINGS = {'size': (800, 600), 'crop': 'smart'}

ASSIGNED_PERMISSIONS = {
  'profile':
    (('view_profile', 'Can view profile'),
     ('change_profile', 'Can change profile'),
     ('delete_profile', 'Can remove profile')),
  'user':
    (('change_user', 'Can change user'),
     ('delete_user', 'Can delete user')),
  'contact':
    (('view_contact', 'Can view contact'),
     ('change_contact', 'Can change contact'),
     ('delete_contact', 'Can remove contact')),
  'service':
    (('view_service', 'Can view service'),
     ('change_service', 'Can change service'),
     ('delete_service', 'Can delete service')),
}