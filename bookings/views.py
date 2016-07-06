from django.core.urlresolvers import reverse
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, redirect
from django.http import HttpResponseRedirect
from core.utils import ExtraContextTemplateView

from guardian.decorators import permission_required_or_403
from userena.decorators import secure_required

from bookings.models import Booking
from bookings.forms import BookingForm

from profiles.views import makeContextForDetails, makeContextForNotifications
from profiles.utils import get_user_profile
from bookings.utils import get_booking_by_id

try:
    from _datetime import datetime
except ImportError:
    from datetime import datetime

from bookings.managers import BookingMailManager as mailer
from services.models import Service

from notifications.signals import notify

@secure_required
@permission_required_or_403('bookings.view_booking')
def bookings(request, username,
                template_name='bookings/bookings.html',
                extra_context=None, **kwargs):

    if request.user.username == username:

        user = get_object_or_404(User, username__iexact=username)
        profile = get_user_profile(user)
        bookings = Booking.objects.all_for(user)
        my_bookings = Booking.objects.my_bookings(user)
        other_bookings = Booking.objects.other_bookings(user)

        if not extra_context: extra_context = dict()

        extra_context['profile'] = profile
        extra_context['my_bookings'] = my_bookings
        if profile.settings.is_provider:
            extra_context['other_bookings'] = other_bookings
            extra_context['show_other_bookings'] = True

        extra_context = makeContextForDetails(request, extra_context)
        extra_context = makeContextForNotifications(request, extra_context)
        extra_context['inbox_page'] = 'true'

        return ExtraContextTemplateView.as_view(template_name=template_name,
                                      extra_context=extra_context)(request)
    else:
        url = reverse('profiles:bookings', kwargs={'username':request.user.username})
        return HttpResponseRedirect(url)

@secure_required
@permission_required_or_403('bookings.view_booking')
def other_bookings(request, username,
                template_name='bookings/bookings.html',
                extra_context=None, **kwargs):

    if request.user.username == username:

        user = get_object_or_404(User, username__iexact=username)
        profile = get_user_profile(user)
        bookings = Booking.objects.all_for(user)
        my_bookings = Booking.objects.my_bookings(user)
        other_bookings = Booking.objects.other_bookings(user)

        if not extra_context: extra_context = dict()

        extra_context['profile'] = profile
        extra_context['my_bookings'] = my_bookings
        if profile.settings.is_provider:
            extra_context['other_bookings'] = other_bookings
            extra_context['show_other_bookings'] = True

        extra_context = makeContextForDetails(request, extra_context)
        extra_context = makeContextForNotifications(request, extra_context)
        extra_context['outbox_page'] = 'true'

        return ExtraContextTemplateView.as_view(template_name=template_name,
                                      extra_context=extra_context)(request)
    else:
        url = reverse('profiles:bookings', kwargs={'username':request.user.username})
        return HttpResponseRedirect(url)

@secure_required
@permission_required_or_403('bookings.add_booking')
def booking_add(request, username, service_id, booking_form = BookingForm,
                template_name = 'bookings/booking_add.html', success_url = None,
                extra_context=None, **kwargs):

        if request.user.username == username:
            user = request.user
            profile = get_user_profile(user)


            form = booking_form(user=request.user)

            if service_id:
                if service_id != '0':
                    service = Service.objects.get(id = service_id)
                    if service:
                        form.fields['service'].initial = service.pk

            if request.method == 'POST':

                form = booking_form(request.POST, request.FILES)
                if form.is_valid():

                  booking = form.save(user)

                  # send email to provider
                  m = mailer()
                  m.send_notification_email_for_provider(booking)

                  # create internal notification
                  notify.send(sender = booking.sender, recipient=booking.recipient, action_object=booking,
                              verb=u'has created new booking')

                  if success_url:
                    redirect_to = success_url
                  else:
                    redirect_to = reverse('profiles:bookings', kwargs={'username': username})

                  return redirect(redirect_to)


            if not extra_context: extra_context = dict()

            extra_context['form'] = form
            extra_context['profile'] = profile

            extra_context = makeContextForDetails(request, extra_context)
            extra_context = makeContextForNotifications(request, extra_context)

            return ExtraContextTemplateView.as_view(template_name=template_name,
                                                  extra_context=extra_context)(request)
        else:
            url = reverse('profiles:booking_add', kwargs={'username':request.user.username, 'service_id': service_id})
            return HttpResponseRedirect(url)

@secure_required
@permission_required_or_403('bookings.reject_booking')
def booking_reject(request, username, booking_id):

    if request.user.username == username:
        user = get_object_or_404(User, username__iexact=username)
        booking = get_booking_by_id(booking_id)

        if user:
            if user.has_perm('reject_booking', booking):
                if(booking.sender == user):

                    booking.status = 3

                    # create internal notification
                    notify.send(sender = booking.sender, recipient=booking.recipient, action_object=booking,
                                verb=u'has been rejected')

                elif(booking.recipient == user):

                    booking.status = 4

                    # create internal notification
                    notify.send(sender = booking.recipient, recipient=booking.sender, action_object=booking,
                                verb=u'has been rejected')
                booking.save()

    url = reverse('profiles:bookings', kwargs={'username':request.user.username})
    return HttpResponseRedirect(url)

@secure_required
@permission_required_or_403('bookings.approve_booking')
def booking_approve(request, username, booking_id):

    if request.user.username == username:
        user = get_object_or_404(User, username__iexact=username)
        booking = get_booking_by_id(booking_id)

        if user:
            if user.has_perm('approve_booking', booking):
                if(user == booking.sender):
                    booking.status = 5

                    # create internal notification
                    notify.send(sender = booking.sender, recipient=booking.recipient, action_object=booking,
                                verb=u'has been approved')

                elif(user == booking.recipient):
                    booking.status = 6

                    # create internal notification
                    notify.send(sender = booking.recipient, recipient=booking.sender, action_object=booking,
                                verb=u'has been approved')
                booking.save()

                m = mailer()
                m.send_successful_booking_email_for_user(booking)
                m.send_successful_booking_email_for_provider(booking)


    url = reverse('profiles:bookings', kwargs={'username':request.user.username})
    return HttpResponseRedirect(url)

@secure_required
@permission_required_or_403('bookings.view_booking')
def booking_view(request, username, booking_id, template_name = 'bookings/booking_view.html', success_url=None,
                 extra_context=None, **kwargs):

    if not extra_context: extra_context = dict()

    if request.user.username == username:
        user = get_object_or_404(User, username__iexact=username)
        profile = get_user_profile(user)

        booking = get_booking_by_id(booking_id)

        if booking.recipient == user:
            booking.read_at = datetime.now()
            booking.save()

        # if user.has_perm('bookings.view_message', booking):
        extra_context['booking'] = booking
        extra_context['profile'] = profile

        extra_context = makeContextForDetails(request, extra_context)
        extra_context = makeContextForNotifications(request, extra_context)

        return ExtraContextTemplateView.as_view(template_name=template_name,
                                              extra_context=extra_context)(request)
    else:
        url = reverse('profiles:booking_view', kwargs={'username':request.user.username, 'booking_id': booking_id})
        return HttpResponseRedirect(url)


@secure_required
@permission_required_or_403('bookings.change_booking')
def booking_edit(request, username, booking_id, edit_booking_form = BookingForm,
                 template_name ='bookings/booking_edit.html', success_url = None,
                  extra_context=None, **kwargs):

    if request.user.username == username:
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

                        if(booking.status == 2):
                            # create internal notification
                            notify.send(sender=booking.sender, recipient=booking.recipient, action_object=booking,
                                        verb=u'has been changed by user')

                            # send email about changed booking
                            m.send_notification_booking_email_for_provider(booking)

                        elif(booking.status == 1):
                            # create internal notification
                            notify.send(sender=booking.recipient, recipient=booking.sender, action_object=booking,
                                        verb=u'has been changed by provider')

                            m.send_notification_booking_email_for_user(booking)

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
        extra_context = makeContextForNotifications(request, extra_context)

        return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)
    else:
        url = reverse('profiles:booking_edit', kwargs={'username':request.user.username, 'booking_id': booking_id})
        return HttpResponseRedirect(url)


@secure_required
@permission_required_or_403('bookings.delete_booking')
def booking_delete(request, username, booking_id, template_name='bookings/bookings.html', success_url=None,
                 extra_context=None, **kwargs):

    if request.user.username == username:

        user = get_object_or_404(User, username__iexact=username)
        booking = get_booking_by_id(booking_id)

        if user:
            if user.has_perm('delete_booking', booking):
                if(booking.sender == user):
                    booking.sender_deleted_at = datetime.now()
                    booking.status = 7
                    booking.save()
                elif(booking.recipient == user):
                    booking.recipient_deleted_at = datetime.now()
                    booking.status = 8
                    booking.save()

                if(booking.recipient_deleted_at is not None and booking.sender_deleted_at is not None):
                    booking.delete()


        url = reverse('profiles:bookings', kwargs={'username':user.username})
        return HttpResponseRedirect(url)

    else:
        url = reverse('profiles:bookings', kwargs={'username':request.user.username})
        return HttpResponseRedirect(url)


@secure_required
@permission_required_or_403('bookings.cancel_booking')
def booking_cancel(request, username, booking_id, template_name='bookings/bookings.html', success_url=None,
                 extra_context=None, **kwargs):

    if request.user.username == username:

        user = get_object_or_404(User, username__iexact=username)
        booking = get_booking_by_id(booking_id)

        if user:
            # if user.has_perm('cancel_booking', booking):
            if(booking.sender == user):
                booking.status = 9
                booking.save()

                # create internal notification
                notify.send(sender=booking.sender, recipient=booking.recipient, action_object=booking,
                            verb=u'has been canceled by user')

            elif(booking.recipient == user):
                booking.status = 10
                booking.save()

                # create internal notification
                notify.send(sender=booking.recipient, recipient=booking.sender, action_object=booking,
                            verb=u'has been canceled by provider')

        url = reverse('profiles:bookings', kwargs={'username':user.username})
        return HttpResponseRedirect(url)

    else:
        url = reverse('profiles:bookings', kwargs={'username':request.user.username})
        return HttpResponseRedirect(url)

