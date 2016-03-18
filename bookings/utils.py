from bookings.models import Booking
from django.shortcuts import get_object_or_404

def get_number_bookings(user):
    return 0
    # Booking.objects.get_number_bookings(user)


def get_booking_by_id(id):
    return get_object_or_404(Booking, pk = id)