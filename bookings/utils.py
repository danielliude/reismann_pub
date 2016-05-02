from bookings.models import Booking
from django.shortcuts import get_object_or_404

def get_number_bookings(user):
    bookings_to_me = Booking.objects.filter(recipient=user)
    bookings_from_me = Booking.objects.filter(sender = user)
    return len(bookings_to_me)+len(bookings_from_me)

def get_booking_by_id(id):
    return get_object_or_404(Booking, pk = id)