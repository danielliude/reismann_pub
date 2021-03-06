from datetime import datetime

from django.core.urlresolvers import reverse
from django.shortcuts import redirect, get_object_or_404
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect

from userena.decorators import secure_required
from guardian.decorators import permission_required_or_403

from core.utils import ExtraContextTemplateView

from profiles.utils import get_user_profile

from contacts.utils import get_user_contact
from services.forms import ServiceForm, ServiceRatingForm
from services.utils import get_user_services, get_service_by_id

from configurations.utils import get_active_service_categories

from profiles.views import view_own_profile, makeContextForDetails, makeContextForNotifications, makeContextForActiveServices
from services.models import ServiceRating
from services.utils import get_user_services

from services.managers import ServiceMailManager

#register
from django.contrib.auth import authenticate, login as signin, logout as signout, REDIRECT_FIELD_NAME
from accounts.forms import RegistrationForm
import accounts.signals as accounts_signals
from accounts.settings import ACCOUNT_ACTIVATION_REQUIRED
from django.http import JsonResponse

#message
from insite_messages.forms import MessageComposeForm
from insite_messages.managers import MessageMailManager as mailer
from notifications.signals import notify
from datetime import datetime
from django.utils.timezone import utc

@secure_required
@permission_required_or_403('services.add_service')
def service_add(request, username, edit_service_form=ServiceForm,
                template_name='profiles/service_add.html', success_url=None,
                extra_context=None, **kwargs):

    if request.user.username == username:

        user = get_object_or_404(User, username__iexact=username)

        if get_user_services(user).count() >= 3:
            url = reverse('profiles:services', kwargs={'username':request.user.username})
            return HttpResponseRedirect(url)

        profile = get_user_profile(user)

        if profile.settings.is_provider == False:
            url = reverse('profiles:services', kwargs={'username':request.user.username})
            return HttpResponseRedirect(url)

        contact = get_user_contact(user)

        form = edit_service_form()

        if request.method == 'POST':

            form = edit_service_form(request.POST, request.FILES)
            if form.is_valid():
              service = form.save(username = username)
              service.status = 1
              service.user = user
              service.save()

              m = ServiceMailManager()
              m.send_notification_email_to_administrator(service)

              if success_url:
                redirect_to = success_url
              else:
                redirect_to = reverse('profiles:services', kwargs={'username': username})
              return redirect(redirect_to)

        if not extra_context: extra_context = dict()
        extra_context['form'] = form
        extra_context['service_categories'] = get_active_service_categories()
        extra_context['profile'] = profile
        extra_context['contact'] = contact

        extra_context = makeContextForNotifications(request, extra_context)
        extra_context = makeContextForDetails(request, extra_context)

        return ExtraContextTemplateView.as_view(template_name=template_name,
                                              extra_context=extra_context)(request)

    else:
        url = reverse('profiles:services', kwargs={'username':request.user.username})
        return HttpResponseRedirect(url)

@secure_required
@permission_required_or_403('services.view_service')
def service_edit(request, username, service_id, edit_service_form=ServiceForm,
                 template_name='profiles/service_edit.html', success_url=None,
                 extra_context=None, **kwargs):

    if request.user.username == username:

        user = get_object_or_404(User, username__iexact=username)
        profile = get_user_profile(user)
        contact = get_user_contact(user)
        service = get_service_by_id(service_id)

        form = edit_service_form(instance=service)

        if request.method == 'POST':
            form = edit_service_form(request.POST, request.FILES, instance=service)

            if form.is_valid():
              service = form.save(username=username)
              service.status = 1
              service.save()

              m = ServiceMailManager()
              m.send_notification_email_to_administrator(service)

              if success_url:
                redirect_to = success_url
              else:
                redirect_to = reverse('profiles:services', kwargs={'username': username})
              return redirect(redirect_to)

        if not extra_context: extra_context = dict()
        extra_context['form'] = form
        extra_context['service_categories'] = get_active_service_categories()
        extra_context['profile'] = profile
        extra_context['contact'] = contact
        extra_context['service'] = service

        extra_context = makeContextForDetails(request, extra_context)
        extra_context = makeContextForNotifications(request, extra_context)

        return ExtraContextTemplateView.as_view(template_name=template_name,
                                              extra_context=extra_context)(request)

    else:
        url = reverse('profiles:service_edit', kwargs={'username':request.user.username, 'service_id': service_id})
        return HttpResponseRedirect(url)

@secure_required
def service_view_own(request, username, service_id,
                 template_name='services/__service_view_own.html', success_url=None,
                 extra_context=None, **kwargs):

    if request.user.username == username:
        if not extra_context: extra_context = dict()

        user = get_object_or_404(User, username__iexact=username)
        profile = get_user_profile(user)
        extra_context['profile'] = profile

        service = get_service_by_id(service_id)
        extra_context['service'] = service

        extra_context = makeContextForNotifications(request, extra_context)
        extra_context = makeContextForDetails(request, extra_context)

        return ExtraContextTemplateView.as_view(template_name=template_name,
                                              extra_context=extra_context)(request)

    else:
        url = reverse('profiles:services', kwargs={'username':request.user.username})
        return HttpResponseRedirect(url)



@secure_required
def service_view(request, username, service_id,
                 template_name='services/__service_one.html', success_url=None,
                 extra_context=None, **kwargs):

    if not extra_context: extra_context = dict()

    service = get_service_by_id(service_id)
    ratings = ServiceRating.objects.filter(service = service)

    extra_context['service'] = service
    extra_context['ratings'] = ratings

    canRate = False

    user = User.objects.get(username__iexact = username)

    try:
        who = User.objects.get(username__iexact = request.user.username)
    except User.DoesNotExist:
        who = None

    profile = get_user_profile(user)
    extra_context['profile'] = profile

    if who:
        try:
            serviceRating = ServiceRating.objects.get(service= service, user = who)
        except ServiceRating.DoesNotExist:
            form = ServiceRatingForm()
            extra_context['form'] = form
            canRate = True
    else:
        canRate = False

    if request.user.is_authenticated():
      rec_user = get_object_or_404(User, username__iexact=username)
      initial_recipient = {'recipient': rec_user.id}
      form = MessageComposeForm(initial = initial_recipient)
    else:
      form = RegistrationForm()

    extra_context['form'] = form
    extra_context['view_own_profile'] = view_own_profile(request, username)
    extra_context = makeContextForDetails(request, extra_context)
    extra_context = makeContextForNotifications(request, extra_context)

    if request.method == 'POST':
        form = ServiceRatingForm(request.POST)
        if form.is_valid():
            rating = form.cleaned_data['stars']
            comment = form.cleaned_data['comment']
            if (canRate):
                serviceRating = ServiceRating(user= request.user, service = service, rating = rating, comment = comment)
                serviceRating.created_at = datetime.now()
                serviceRating.save()
            url = reverse('profiles:service_view', kwargs={'username':request.user.username, 'service_id':service_id})
            return HttpResponseRedirect(url)

    return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('services.view_service')
def services(request, username,
                template_name='profiles/services.html',
                extra_context=None, **kwargs):

  if request.user.username == username:

      print('>>>>>>>>>>>>>>>>>username:', username)
      user = get_object_or_404(User, username__iexact=username)
      print('>>>>>>>>>>>>>>>>>user:', user)
      profile = get_user_profile(user)
      contact = get_user_contact(user)
      services = get_user_services(user)

      if not extra_context: extra_context = dict()
      extra_context['services'] = services
      extra_context['profile'] = profile
      extra_context['contact'] = contact

      if get_user_services(user).count() >= 3:
        extra_context['show_add_service'] = False
      else:
        extra_context['show_add_service'] = True

      extra_context = makeContextForDetails(request, extra_context)
      extra_context = makeContextForNotifications(request, extra_context)

      return ExtraContextTemplateView.as_view(template_name=template_name,
                                              extra_context=extra_context)(request)

  else:
    url = reverse('profiles:services', kwargs={'username':request.user.username})
    return HttpResponseRedirect(url)


@secure_required
@permission_required_or_403('services.delete_service')
def service_remove(request, username, service_id, template_name='bookings/bookings.html', success_url=None,
                 extra_context=None, **kwargs):

    if request.user.username == username:

        user = get_object_or_404(User, username__iexact=username)
        service = get_service_by_id(service_id)

        if user.has_perm('delete_service', service):
            service.delete()

        url = reverse('profiles:services', kwargs={'username':user.username})
        return HttpResponseRedirect(url)

    else:
        url = reverse('profiles:services', kwargs={'username':request.user.username})
        return HttpResponseRedirect(url)


@secure_required
@permission_required_or_403('services.view_service')
def service_activate(request, username, service_id, template_name='bookings/bookings.html', success_url=None,
                 extra_context=None, **kwargs):

    if request.user.username == username:

        user = get_object_or_404(User, username__iexact=username)
        service = get_service_by_id(service_id)

        if service.status != 1:
            if service.status == 2:
                service.status = 3
            elif service.status == 3:
                service.status = 2
            service.save()

        url = reverse('profiles:services', kwargs={'username':user.username})
        return HttpResponseRedirect(url)

    else:
        url = reverse('profiles:services', kwargs={'username':request.user.username})
        return HttpResponseRedirect(url)

@secure_required
def get_rating_and_form(request, username,
                 template_name='profiles/__rating_box.html', success_url=None,
                 extra_context=None, **kwargs):

    if not extra_context: extra_context = dict()

    user = User.objects.get(username__iexact = username)
    extra_context['service_id'] = request.GET.get('service_id')
    if request.method == 'POST':
      extra_context['service_id'] = request.POST.get('service_id')

    if not extra_context['service_id'] == 'all':
      service = get_service_by_id(extra_context['service_id'])
      ratings = ServiceRating.objects.filter(service = service)
      extra_context['ratings'] = ratings

      canRate = False

      try:
          who = User.objects.get(username__iexact = request.user.username)
      except User.DoesNotExist:
          who = None

      if who:
          try:
              serviceRating = ServiceRating.objects.get(service= service, user = who)
          except ServiceRating.DoesNotExist:
              form = ServiceRatingForm()
              extra_context['rating_form'] = form
              canRate = True
      else:
          canRate = False
    else:
      extra_context = makeContextForActiveServices(user, extra_context)

    if request.method == 'POST':
        form = ServiceRatingForm(request.POST)
        if form.is_valid():
            rating = form.cleaned_data['stars']
            comment = form.cleaned_data['comment']
            if (canRate):
                serviceRating = ServiceRating(user= request.user, service = service, rating = rating, comment = comment)
                serviceRating.created_at = datetime.now()
                serviceRating.save()
                ratings = ServiceRating.objects.filter(service = service)
                extra_context['ratings'] = ratings
                extra_context['rating_form'] = ''
            return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)
            # url = reverse('profiles:profile', kwargs={'username':request.user.username})
            # return HttpResponseRedirect(url)

    return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)