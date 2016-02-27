from django.core.urlresolvers import reverse
from django.shortcuts import redirect, get_object_or_404

from django.contrib.auth.models import User

from django.http import Http404, HttpResponseRedirect

from datetime import datetime
from django.utils.timezone import utc

from userena.decorators import secure_required
from profiles.utils import get_user_profile
from core.utils import ExtraContextTemplateView

from contacts.utils import get_user_contact
from insite_messages.models import Message
from insite_messages.forms import MessageComposeForm

from guardian.shortcuts import assign_perm
from guardian.decorators import permission_required_or_403


@secure_required
# @permission_required_or_403('view_service', (Service, 'user__username', 'username'))
def messages(request, username,
                template_name='profiles/messages.html',
                extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  profile = get_user_profile(user)
  messages = Message.objects.all_for(user)
  unread_messages = Message.objects.unread_for(user)

  if not extra_context: extra_context = dict()
  extra_context['messages'] = messages
  extra_context['unread_messages']= unread_messages
  extra_context['profile'] = profile

  return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)


@secure_required
@permission_required_or_403('insite_messages.add_message')
def message_write(request, username, write_message_form=MessageComposeForm,
                template_name='profiles/message_write.html', success_url=None,
                extra_context=None, **kwargs):

    user = get_object_or_404(User, username__iexact=username)
    profile = get_user_profile(user)
    contact = get_user_contact(user)

    unread_messages = Message.objects.unread_for(user)

    form = write_message_form()

    if request.method == 'POST':
        form = write_message_form(request.POST, request.FILES)

        if form.is_valid():
          message = form.save(user)
          message.sent_at = datetime.utcnow().replace(tzinfo=utc)

          # Permissions
          assign_perm('insite_messages.view_message', user, message)
          assign_perm('insite_messages.view_message', message.recipient, message)
          assign_perm('insite_messages.delete_message', user, message)
          assign_perm('insite_messages.delete_message', message.recipient, message)
          assign_perm('insite_messages.change_message', user, message)

          message.save()

          if success_url:
            redirect_to = success_url
          else:
            redirect_to = reverse('profiles:messages', kwargs={'username': username})
          return redirect(redirect_to)

    if not extra_context: extra_context = dict()
    extra_context['form'] = form
    extra_context['profile'] = profile
    extra_context['contact'] = contact
    extra_context['unread_messages'] = unread_messages
    return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)


@secure_required
@permission_required_or_403('insite_messages.view_message')
def message_view(request, username, message_id, write_message_form=MessageComposeForm,
                 template_name='profiles/message_view.html', success_url=None,
                 extra_context=None, **kwargs):

    user = get_object_or_404(User, username__iexact=username)
    profile = get_user_profile(user)
    unread_messages = Message.objects.unread_for(user)

    message = Message.objects.get(pk= message_id)

    if message.recipient == user:
        message.read_at = datetime.now()
        message.save()

    if not extra_context: extra_context = dict()

    if user.has_perm('insite_messages.view_message', message):
        extra_context['message'] = message

    extra_context['profile'] = profile
    extra_context['unread_messages'] = unread_messages

    return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)


@secure_required
@permission_required_or_403('insite_messages.add_message')
def message_reply(request, username, message_id, write_message_form=MessageComposeForm,
                 template_name='profiles/message_write.html', success_url=None,
                 extra_context=None, **kwargs):

    user = get_object_or_404(User, username__iexact=username)

    profile = get_user_profile(user)
    contact = get_user_contact(user)
    message = Message.objects.get(pk= message_id)
    unread_messages = Message.objects.unread_for(user)

    initial_subject = "Re: " + message.subject
    initial_body = ">" + message.body

    form = write_message_form(initial={'recipient': message.sender,
                                       'subject': initial_subject,
                                       'body': initial_body}
                                )


    if request.method == 'POST':
        form = write_message_form(request.POST, request.FILES)

        if form.is_valid():
          message = form.save(user)

          # Permissions
          assign_perm('insite_messages.view_message', user, message)
          assign_perm('insite_messages.view_message', message.recipient, message)
          assign_perm('insite_messages.delete_message', user, message)
          assign_perm('insite_messages.delete_message', message.recipient, message)
          assign_perm('insite_messages.change_message', user, message)

          message.save()

          if success_url:
            redirect_to = success_url
          else:
            redirect_to = reverse('profiles:messages', kwargs={'username': username})
          return redirect(redirect_to)

    if not extra_context: extra_context = dict()
    extra_context['form'] = form
    extra_context['profile'] = profile
    extra_context['contact'] = contact
    extra_context['unread_messages'] = unread_messages
    return ExtraContextTemplateView.as_view(template_name=template_name,
                                          extra_context=extra_context)(request)

@secure_required
@permission_required_or_403('insite_messages.delete_message')
def message_remove(request, username, message_id, template_name='profiles/messages.html', success_url=None,
                 extra_context=None, **kwargs):

  user = get_object_or_404(User, username__iexact=username)
  message = Message.objects.get(pk = message_id)

  if(message.sender == user):
      message.sender_deleted_at = datetime.now()
      message.save()

  if(message.recipient == user):
      message.recipient_deleted_at = datetime.now()
      message.save()

  if(message.recipient_deleted_at is not None and message.sender_deleted_at is not None):
      message.delete()

  url = reverse('profiles:messages', kwargs={'username':user.username})
  return HttpResponseRedirect(url)

