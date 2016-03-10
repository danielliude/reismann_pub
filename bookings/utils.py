from bookings.models import Booking


def get_number_bookings(user):
    return 0
    # Booking.objects.get_number_bookings(user)


def get_booking_by_id(id):

    return Booking.objects.get(pk = id)