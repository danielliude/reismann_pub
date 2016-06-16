#coding=utf-8

from django.utils.translation import ugettext_lazy as _

ALBUM_IMAGES_QTY = 20
ALBUM_IMAGES_SIZE = 20 * 1024 * 1024

GENDER_CHOICES = (
  ('', _('gender')),
  (1, _('Male')),
  (2, _('Female')),
)

PROFESSION_CHOICES = (
  ('', _('profession')),
  (1, _('Student')),
  (2, _('Engineer')),
  (3, _('Artist')),
  (4, _('Performer')),
  (5, _('Manager')),
  (6, _('Doctor')),
  (7, _('Civilian')),
  (8, _('Accountant')),
  (9, _('Lawyer')),
  (10, _('Freelancer')),
  (11, _('Others')),
)

SERVICE_TYPE_CHOICES = (
  (1, _('Part time')),
  (2, _('Full time')),
)

SERVICE_PRICE_TYPE_CHOICES = (
  (1, _('day')),
  (2, _('hour')),
)

SERVICE_CURRENCY_CHOICES = (
  (1, _('€')),
  (2, _('¥')),
)

BOOKING_STATUS = (
  (1, _('Negotiation by customer')),
  (2, _('Negotiation by provider')),
  (3, _('Rejected by customer')),
  (4, _('Rejected by provider')),
  (5, _('Approved by customer')),
  (6, _('Approved by provider')),
  (7, _('Deleted by customer')),
  (8, _('Deleted by provider')),
  (9, _('Canceled by customer')),
  (10, _('Canceled by provider')),
)

SERVICE_STATUS = (
  (1, _('Moderation')),
  (2, _('Active')),
  (3, _('Not active')),
)

PROFILE_STATUS = (
  (1, _('Moderation')),
  (2, _('Active')),
  (3, _('Not active')),
  (4, _('Suspended')),
)

ALBUM_IMAGE_STATUS = SERVICE_STATUS

IDENTIFICATION_STATUS = (
  (1, _('Not started')),
  (2, _('Waiting for approval')),
  (3, _('Approved')),
  (4, _('Declined')),
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
    (('add_booking', 'Can add booking'),
     ('view_booking', 'Can view booking'),
     ('change_booking', 'Can change booking'),
     ('delete_booking', 'Can delete booking'),
     ('reject_booking', 'Can reject booking'),
     ('cancel_booking', 'Can cancel booking'),
     ('approve_booking', 'Can approve booking')),

   'booking_recipient':
    (('add_booking', 'Can add booking'),
     ('view_booking', 'Can view booking'),
     ('change_booking', 'Can change booking'),
     ('delete_booking', 'Can delete booking'),
     ('reject_booking', 'Can reject booking'),
     ('cancel_booking', 'Can cancel booking'),
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
     ('bookings.delete_booking', 'Can delete booking'),
     ('bookings.approve_booking', 'Can approve booking'),
     ('bookings.cancel_booking', 'Can cancel booking'),

    ('followship.view_followers', 'Can view followers'),
    ('followship.view_followings', 'Can view followings')),
}

COUNTRY_OF_BIRTH = (
  ('', _('Country of birth')),
  (1, _('China')),
  (2, _('Janpan')),
  (3, _('South Korea')),
  (4, _('India')),
)
MARRITTAL_STATUS = (
  ('', _('marrittal_status')),
  (1, _('unmarried')),
  (2, _('married')),
  (3, _('divorced')),
  (4, _('widowed')),
  (5, _('separated')),
  (6, _('no answer')),
)
CHILDREN = (
  ('', _('children')),
  (1, _('no kid')),
  (2, _('one kid')),
  (3, _('> 1 kid')),
  (4, _('no answer')),
)
ETHNICITY = (
  ('', _('ethnicity')),
  (1, _('chinese')),
  (2, _('cambodian')),
  (3, _('filipino')),
  (4, _('japanese')),
  (5, _('korean')),
  (6, _('malaysian')),
  (7, _('thai')),
  (8, _('vietnamese')),
  (9, _('indian')),
  (10, _('black')),
  (11, _('hispanic latin')),
  (12, _('middle east')),
  (13, _('white/caucasian')),
  (14, _('other')),
  (15, _('no answer')),
)
RELIGION = (
  ('', _('religion')),
  (1, _('buddihism')),
  (2, _('chistianity')),
  (3, _('judaism')),
  (4, _('catholicism')),
  (5, _('islan')),
  (6, _('hinduism')),
  (7, _('other')),
  (8, _('no answer')),
)
EDUCATION = (
  ('', _('education')),
  (1, _('high school')),
  (2, _('bachelor')),
  (3, _('master')),
  (4, _('phd')),
  (5, _('no answer')),
)
ANNUAL_INCOME = (
  ('', _('annual_income')),
  (1, _('< €15k')),
  (2, _('€15k - €30k')),
  (3, _('€30k - €40k')),
  (4, _('€40k - €50k')),
  (5, _('€50k - €80k')),
  (6, _('< €80k')),
  (7, _('no answer')),
)
IMMIGRATION_STATUS = (
  ('', _('immigration_status')),
  (1, _('resident')),
  (2, _('citizen')),
  (3, _('no answer')),
)
BODY_FORM = (
  ('', _('body_form')),
  (1, _('slim')),
  (2, _('athlete')),
  (3, _('average')),
  (4, _('curvy')),
  (5, _('no answer')),
)
SMOKING = (
  ('', _('smoking')),
  (1, _('yes')),
  (2, _('some times')),
  (3, _('never')),
  (4, _('no answer')),
)
DRINKING = (
  ('', _('drinking')),
  (1, _('yes')),
  (2, _('some times')),
  (3, _('never')),
  (4, _('no answer')),
)
PETS = (
  ('', _('pets')),
  (1, _('dog(s)')),
  (2, _('cat(s)')),
  (3, _('other pets')),
  (4, _('want to have')),
  (5, _('no answer')),
)
HOBBY = (
  ('', _('hobby')),
  (1, _('basketball')),
  (2, _('camping')),
  (3, _('card game')),
  (4, _('bicycle')),
  (5, _('dance')),
  (6, _('fishing/hunting')),
  (7, _('golf')),
  (8, _('musical')),
  (9, _('jogging')),
  (10, _('singing')),
  (11, _('ski')),
  (12, _('football')),
  (13, _('read')),
  (14, _('swimming')),
  (15, _('tennis')),
  (16, _('travel')),
  (17, _('gym')),
  (18, _('yoga')),
  (19, _('Other')),
)