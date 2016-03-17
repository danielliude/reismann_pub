from django.core.urlresolvers import reverse
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, redirect
from django.http import HttpResponseRedirect
from core.utils import ExtraContextTemplateView

from guardian.decorators import permission_required_or_403
from userena.decorators import secure_required

from bookings.models import Booking
from bookings.forms import BookingForm

from profiles.views import makeContextForDetails, makeContextForMessages
from profiles.utils import get_user_profile
from bookings.utils import get_booking_by_id

from datetime import datetime
from bookings.managers import BookingMailManager as mailer

@secure_required
@permission_required_or_403('bookings.view_booking')
def bookings(request, username,
                template_name='bookings/bookings.html',
                extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  profile = get_user_profile(user)
  bookings = Booking.objects.all_for(user)

  if not extra_context: extra_context = dict()

  extra_context['profile'] = profile
  extra_context['bookings']= bookings

  extra_context = makeContextForDetails(request, extra_context)
  extra_context = makeContextForMessages(request, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('bookings.add_booking')
def booking_add(request, username, booking_form = BookingForm,
                template_name = 'bookings/booking_add.html', success_url = None,
                extra_context=None, **kwargs):

    user = get_object_or_404(User, username__iexact = username)
    profile = get_user_profile(user)

    form = booking_form()

    if request.method == 'POST':

        form = booking_form(request.POST, request.FILES)

        if form.is_valid():

          booking = form.save(user)
          m = mailer()
          m.send_notification_email_to_recipient(booking)

          if success_url:
            redirect_to = success_url
          else:
            redirect_to = reverse('profiles:bookings', kwargs={'username': username})

          return redirect(redirect_to)


    if not extra_context: extra_context = dict()

    extra_context['form'] = form
    extra_context['profile'] = profile

    extra_context = makeContextForDetails(request, extra_context)
    extra_context = makeContextForMessages(request, extra_context)

    return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('bookings.reject_booking')
def booking_reject(request, username, booking_id):

    user = get_object_or_404(User, username__iexact=username)
    booking = get_booking_by_id(booking_id)

    if user:
        if user.has_perm('reject_booking', booking):
            booking.status = 4
            booking.save()

    url = reverse('profiles:bookings', kwargs={'username':user.username})
    return HttpResponseRedirect(url)

@secure_required
@permission_required_or_403('bookings.approve_booking')
def booking_approve(request, username, booking_id):

    user = get_object_or_404(User, username__iexact=username)
    booking = get_booking_by_id(booking_id)

    if user:
        if user.has_perm('approve_booking', booking):
            booking.status = 3
            m = mailer()
            m.send_successful_booking_email_to_user(booking)
            booking.save()

    url = reverse('profiles:bookings', kwargs={'username':user.username})
    return HttpResponseRedirect(url)

@secure_required
@permission_required_or_403('bookings.view_booking')
def booking_view(request, username, booking_id, template_name = 'bookings/booking_view.html', success_url=None,
                 extra_context=None, **kwargs):

    user = get_object_or_404(User, username__iexact=username)
    profile = get_user_profile(user)

    booking = Booking.objects.get(pk= booking_id)

    if booking.recipient == user:
        booking.read_at = datetime.now()
        booking.save()

    if not extra_context: extra_context = dict()

    # if user.has_perm('bookings.view_message', booking):
    extra_context['booking'] = booking
    extra_context['profile'] = profile

    extra_context = makeContextForDetails(request, extra_context)
    extra_context = makeContextForMessages(request, extra_context)

    return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('bookings.change_booking')
def booking_edit(request, username, booking_id, edit_booking_form = BookingForm,
                 template_name ='bookings/booking_edit.html', success_url = None,
                  extra_context=None, **kwargs):

    user = get_object_or_404(User, username__iexact=username)
    profile = get_user_profile(user)
    booking = get_booking_by_id(booking_id)

    form = edit_booking_form(instance=booking)

    if request.method == 'POST':
        form = edit_booking_form(request.POST, request.FILES, instance=booking)

        if form.is_valid():
            if user.has_perm('change_booking', booking):
                if(booking.status == 1 or booking.status == 2):
                    booking = form.save(user, booking)
                    m = mailer()
                    m.send_successful_booking_email_to_user(booking)

            if success_url:
                redirect_to = success_url
            else:
                redirect_to = reverse('profiles:bookings', kwargs={'username': username})
            return redirect(redirect_to)

    if not extra_context: extra_context = dict()
    extra_context['form'] = form
    extra_context['profile'] = profile
    extra_context['booking'] = booking

    extra_context = makeContextForDetails(request, extra_context)
    extra_context = makeContextForMessages(request, extra_context)

    return ExtraContextTemplateView.as_view(template_name=template_name,
                                      extra_context=extra_context)(request)


@secure_required
@permission_required_or_403('bookings.delete_booking')
def booking_remove(request, username, booking_id, template_name='bookings/bookings.html', success_url=None,
                 extra_context=None, **kwargs):

    user = get_object_or_404(User, username__iexact=username)
    booking = Booking.objects.get(pk = booking_id)

    if user:
        if user.has_perm('delete_booking', booking):
            if booking.sender == user:
                booking.delete()

    url = reverse('profiles:bookings', kwargs={'username':user.username})
    return HttpResponseRedirect(url)



