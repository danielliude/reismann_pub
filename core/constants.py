from django.utils.translation import ugettext_lazy as _

GENDER_CHOICES = (
  ("", _('gender')),
  (1, _('Male')),
  (2, _('Female')),
)

SERVICE_TYPE_CHOICES = (
  (1, _('Part time')),
  (2, _('Full time')),
)

BOOKING_STATUS = (
  (1, _('Negotiation by customer')),
  (2, _('Negotiation by provider')),
  (3, _('Rejected by customer')),
  (4, _('Rejected by provider')),
  (5, _('Approved by customer')),
  (6, _('Approved byprovider')),
  (7, _('Removed by customer')),
  (8, _('Revoved by provider')),
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
    (('add_service', 'Can add service'),
     ('view_service', 'Can view service'),
     ('change_service', 'Can change service'),
     ('delete_service', 'Can delete service')),
  'message':
    (('add_message', 'Can add message'),
     ('view_message', 'Can view message'),
     ('change_message', 'Can change message'),
     ('delete_message', 'Can delete message')),
  'booking_sender':
    (('view_booking', 'Can view booking'),
     ('change_booking', 'Can change booking'),
     ('delete_booking', 'Can delete booking'),
     ('reject_booking', 'Can reject booking'),
     ('approve_booking', 'Can approve booking')),
   'booking_recipient':
    (('view_booking', 'Can view booking'),
     ('change_booking', 'Can change booking'),
     ('delete_booking', 'Can delete booking'),
     ('reject_booking', 'Can reject booking'),
     ('approve_booking', 'Can approve booking')),

}

GLOBAL_PERMISSIONS = {
  'global':
    (('insite_messages.add_message', 'Can add message'),
     ('insite_messages.view_message', 'Can view message'),
     ('insite_messages.change_message', 'Can change message'),
     ('insite_messages.delete_message', 'Can delete message'),

     ('services.add_service', 'Can add service'),
     ('services.view_service', 'Can view service'),
     ('services.change_service', 'Can change service'),
     ('services.delete_service', 'Can delete service'),

     ('bookings.add_booking', 'Can add booking'),
     ('bookings.view_booking', 'Can view booking'),
     ('bookings.change_booking', 'Can change booking'),
     ('bookings.reject_booking', 'Can reject booking'),
     ('bookings.reject_booking', 'Can reject booking'),
     ('bookings.approve_booking', 'Can approve booking')),
}