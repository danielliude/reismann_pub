from django.core.urlresolvers import reverse
from django.shortcuts import redirect, get_object_or_404
from django.contrib.auth.models import User
from userena.decorators import secure_required
from guardian.decorators import permission_required_or_403

from profiles.utils import get_user_profile
from core.utils import ExtraContextTemplateView
from contacts.utils import get_user_contact
from services.forms import ServiceForm
from services.utils import get_user_services, get_service_by_id
from configurations.utils import get_active_service_categories
from insite_messages.models import Message

from services.utils import get_distinct_tags, get_distinct_languages,get_distinct_categories, get_distinct_cities
from profiles.views import view_own_profile, makeContextForDetails

@secure_required
@permission_required_or_403('services.add_service')
def service_add(request, username, edit_service_form=ServiceForm,
                template_name='profiles/service_add.html', success_url=None,
                extra_context=None, **kwargs):

    user = get_object_or_404(User, username__iexact=username)

    profile = get_user_profile(user)
    contact = get_user_contact(user)
    unread_messages = Message.objects.unread_for(user)

    form = edit_service_form()

    if request.method == 'POST':
        form = edit_service_form(request.POST, request.FILES)

        if form.is_valid():
          service = form.save()
          service.user = user
          service.save()

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
    extra_context['unread_messages'] = unread_messages

    extra_context = makeContextForDetails(request, user, username, extra_context)

    return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('services.view_service')
def service_edit(request, username, service_id, edit_service_form=ServiceForm,
                 template_name='profiles/service_edit.html', success_url=None,
                 extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  profile = get_user_profile(user)
  contact = get_user_contact(user)
  service = get_service_by_id(service_id)
  unread_messages = Message.objects.unread_for(user)


  form = edit_service_form(instance=service)

  if request.method == 'POST':
    form = edit_service_form(request.POST, request.FILES, instance=service)

    if form.is_valid():
      service = form.save()

      if success_url:
        redirect_to = success_url
      else:
        redirect_to = reverse('profiles:dashboard', kwargs={'username': username})
      return redirect(redirect_to)

  if not extra_context: extra_context = dict()
  extra_context['form'] = form
  extra_context['service_categories'] = get_active_service_categories()
  extra_context['profile'] = profile
  extra_context['contact'] = contact
  extra_context['service'] = service
  extra_context['unread_messages'] = unread_messages

  extra_context = makeContextForDetails(request, user, username, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

@secure_required
def service_view(request, username, service_id,
                 template_name='services/__service_one.html', success_url=None,
                 extra_context=None, **kwargs):

  if not extra_context: extra_context = dict()

  user = get_object_or_404(User, username__iexact=username)

  profile = get_user_profile(user)

  services = []
  services.append(get_service_by_id(service_id))

  extra_context['profile'] = profile
  extra_context['services'] = services
  extra_context['view_own_profile'] = view_own_profile(request, username)

  if(request.user.is_authenticated):
    contact = get_user_contact(user)
    extra_context['contact'] = contact

  if view_own_profile(request, username):
    unread_messages = Message.objects.unread_for(user)
    extra_context['unread_messages'] = unread_messages


  unique_tags = get_distinct_tags(user)
  unique_cities = get_distinct_cities(user)
  unique_languages = get_distinct_languages(user)
  unique_categories = get_distinct_categories(user)

  extra_context['unique_tags'] = unique_tags
  extra_context['unique_cities'] = unique_cities
  extra_context['unique_languages'] = unique_languages
  extra_context['unique_categories'] = unique_categories

  extra_context = makeContextForDetails(request, user, username, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name, extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('services.view_service')
def services(request, username,
                template_name='profiles/services.html',
                extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  profile = get_user_profile(user)
  contact = get_user_contact(user)
  services = get_user_services(user)
  unread_messages = Message.objects.unread_for(user)


  if not extra_context: extra_context = dict()
  extra_context['services'] = services
  extra_context['profile'] = profile
  extra_context['contact'] = contact
  extra_context['unread_messages'] = unread_messages

  extra_context = makeContextForDetails(request, user, username, extra_context)

  return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

