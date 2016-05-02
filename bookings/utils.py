from bookings.models import Booking
from django.shortcuts import get_object_or_404

def get_number_bookings(user):
    bookings_to_me = Booking.objects.filter(recipient=user, recipient_deleted_at = None)
    bookings_from_me = Booking.objects.filter(sender = user, sender_deleted_at = None)
    return len(bookings_to_me)+len(bookings_from_me)

def get_booking_by_id(id):
    return get_object_or_404(Booking, pk = id)