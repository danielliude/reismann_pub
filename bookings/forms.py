from django import forms
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _

from redactor.fields import RedactorEditor

from bookings.models import Booking
from services.models import Service

from datetime import datetime
from django.utils.timezone import utc

from core.constants import SERVICE_TYPE_CHOICES, SERVICE_CURRENCY_CHOICES, SERVICE_PRICE_TYPE_CHOICES

class BookingForm(forms.ModelForm):

  service = forms.ModelChoiceField(required=True,
                                    widget=forms.Select(attrs={'class': 'ui fluid search dropdown',
                                    'placeholder': _('service')}),
                                    label=_('Service'),
                                    queryset=None)

  start_time = forms.DateField(required=True,
                               initial=datetime.today, label= _('Start time'),
                               widget=forms.DateTimeInput(attrs={'class': 'required', 'required': True},
                               format='%Y-%m-%d'),
                               input_formats=['%Y-%m-%d'])

  end_time = forms.DateField(required=True,
                             initial=datetime.today, label = _('End time'),
                             widget=forms.DateTimeInput(attrs={'class': 'required', 'required': True},
                             format='%Y-%m-%d'),
                             input_formats=['%Y-%m-%d'])

  number_of_customers = forms.IntegerField(required=True,
                                           min_value=1, max_value=20,
                                           label = _('Number of customers'),
                                           widget = forms.NumberInput(attrs={'class': 'required form-control', 
                                                                             'required': True,
                                                                             'placeholder': _('Number of customers')}))
  currency = forms.ChoiceField(label=_('Price type'),
                           choices = SERVICE_CURRENCY_CHOICES, initial='', widget=forms.Select(attrs={'class': 'ui compact selection dropdown', 'required': True}), required=True)

  price = forms.IntegerField(min_value=1, max_value=1000, required=False,
                             label = _('Price'),
                             widget = forms.NumberInput(attrs={'class': 'required',
                                                               'required': True,
                                                               'placeholder': _('negotiation price')}))

  price_type = forms.ChoiceField(label=_('Price type'),
                           choices = SERVICE_PRICE_TYPE_CHOICES, initial='', widget=forms.Select(attrs={'class': 'ui compact selection dropdown', 'required': True}), required=True)

  meeting_point = forms.CharField(required=False,
                                  max_length=200, label = _('Meeting point'),
                                  widget=forms.TextInput(attrs={
                                      'placeholder': _('meeting point')}),)

  booking_content = forms.CharField(required=False,
                                    widget=RedactorEditor(attrs={
                                        'placeholder': _('booking content'),
                                        'cols': "20",
                                        'rows': "5"}),
                                    label=_('Booking content'),
                                    max_length=600)

  booking_remark = forms.CharField(required=False,
                                   widget=RedactorEditor(attrs={
                                        'placeholder': _('booking remark'),
                                        'cols': "20",
                                        'rows': "5"}),
                                        label=_('Booking remark'),
                                        max_length=300)

  def __init__(self, user, *args, **kwargs):
    super(BookingForm, self).__init__(*args, **kwargs)
    self.fields['service'].queryset = Service.objects.all().exclude(user=user)


  def save(self, sender_username, booking=None):

    service = self.cleaned_data['service']
    try:
      service = Service.objects.get(pk= service.pk)
    except Service.DoesNotExist:
      raise forms.ValidationError(_('The following service does not exists'))

    try:
      sender = User.objects.get(username = sender_username)
    except User.DoesNotExist:
      raise forms.ValidationError(_('The following username is incorrect: %(username)s') % {
        'username': sender_username
      })

    booking_price = self.cleaned_data['price']
    booking_number_customer = self.cleaned_data['number_of_customers']
    booking_meeting_point = self.cleaned_data['meeting_point']
    booking_content = self.cleaned_data['booking_content']
    booking_remark = self.cleaned_data['booking_remark']
    service_starts_at = self.cleaned_data['start_time']
    service_ends_at = self.cleaned_data['end_time']

    if not booking:
        booking = Booking.objects.create_booking(service= service, sender= sender, recipient = service.user)

    if booking.sender == sender:
        booking.status = 2
        booking.sender_sent_at = datetime.utcnow().replace(tzinfo=utc)
    elif booking.recipient == sender:
        booking.status = 1
        booking.recipient_sent_at = datetime.utcnow().replace(tzinfo=utc)

    booking.booking_content = booking_content
    booking.booking_remark = booking_remark
    booking.price = booking_price
    booking.meeting_point = booking_meeting_point
    booking.number_of_customers = booking_number_customer
    booking.service_starts_at = service_starts_at
    booking.service_ends_at = service_ends_at

    booking.save()

    return booking

  class Meta:
    model = Booking
    exclude = ['sender', 'recipient', 'status', 'read_at', 'sender_sent_at', 'sender_replied_at', 'sender_deleted_at' 'recipient_sent_at', 'recipient_replied_at', 'recipient_deleted_at']
    widgets = {
      'booking_content': RedactorEditor(),
      'booking_remark':RedactorEditor()
    }




