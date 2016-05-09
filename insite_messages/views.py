from datetime import datetime

from django.core.urlresolvers import reverse
from django.shortcuts import redirect, get_object_or_404
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from django.utils.timezone import utc
from userena.decorators import secure_required
from guardian.decorators import permission_required_or_403

from profiles.utils import get_user_profile
from core.utils import ExtraContextTemplateView
from contacts.utils import get_user_contact
from insite_messages.models import Message
from insite_messages.forms import MessageComposeForm
from profiles.views import makeContextForDetails, makeContextForMessages


@secure_required
@permission_required_or_403('insite_messages.view_message')
def inbox_messages(request, username,
                template_name='insite_messages/inbox_messages.html',
                extra_context=None, **kwargs):

  if request.user.username == username:

      user = get_object_or_404(User, username__iexact=username)
      profile = get_user_profile(user)
      messages = Message.objects.inbox_for(user)

      if not extra_context: extra_context = dict()
      extra_context['messages'] = messages
      extra_context['profile'] = profile

      extra_context = makeContextForDetails(request, extra_context)
      extra_context = makeContextForMessages(request, extra_context)

      return ExtraContextTemplateView.as_view(template_name=template_name,
                                              extra_context=extra_context)(request)
  else:

    url = reverse('profiles:inbox_messages', kwargs={'username':request.user.username})
    return HttpResponseRedirect(url)


@secure_required
@permission_required_or_403('insite_messages.view_message')
def outbox_messages(request, username,
                template_name='insite_messages/outbox_messages.html',
                extra_context=None, **kwargs):

  if request.user.username == username:

      user = get_object_or_404(User, username__iexact=username)
      profile = get_user_profile(user)
      messages = Message.objects.outbox_for(user)

      if not extra_context: extra_context = dict()
      extra_context['messages'] = messages
      extra_context['profile'] = profile

      extra_context = makeContextForDetails(request, extra_context)
      extra_context = makeContextForMessages(request, extra_context)

      return ExtraContextTemplateView.as_view(template_name=template_name,
                                              extra_context=extra_context)(request)
  else:

    url = reverse('profiles:outbox_messages', kwargs={'username':request.user.username})
    return HttpResponseRedirect(url)


@secure_required
@permission_required_or_403('insite_messages.add_message')
def message_write(request, username, recipient=None, write_message_form=MessageComposeForm,
                template_name='insite_messages/message_write.html', success_url=None,
                extra_context=None, **kwargs):

    if request.user.username == username:
        user = get_object_or_404(User, username__iexact=username)
        profile = get_user_profile(user)
        contact = get_user_contact(user)

        initial_recipient = {}
        if recipient:
            rec_user = get_object_or_404(User, username__iexact=recipient)
            initial_recipient = {'recipient': rec_user.id}

        form = write_message_form(initial = initial_recipient)

        if request.method == 'POST':
            form = write_message_form(request.POST, request.FILES)

            if form.is_valid():
              message = form.save(user)
              message.sent_at = datetime.utcnow().replace(tzinfo=utc)
              message.send_notification_email_to_recipient()
              message.save()

              if success_url:
                redirect_to = success_url
              else:
                redirect_to = reverse('profiles:outbox_messages', kwargs={'username': username})
              return redirect(redirect_to)

        if not extra_context: extra_context = dict()
        extra_context['form'] = form
        extra_context['profile'] = profile
        extra_context['contact'] = contact

        extra_context = makeContextForDetails(request, extra_context)
        extra_context = makeContextForMessages(request, extra_context)

        return ExtraContextTemplateView.as_view(template_name=template_name,
                                              extra_context=extra_context)(request)

    else:

        url = reverse('profiles:message_write', kwargs={'username':request.user.username})
        return HttpResponseRedirect(url)


@secure_required
@permission_required_or_403('insite_messages.view_message')
def message_view(request, username, message_id, write_message_form=MessageComposeForm,
                 template_name='insite_messages/message_view.html', success_url=None,
                 extra_context=None, **kwargs):

    if request.user.username == username:

        user = get_object_or_404(User, username__iexact=username)
        profile = get_user_profile(user)

        message = get_object_or_404(Message, pk= message_id)

        if message.recipient == user:
            message.read_at = datetime.now()
            message.save()

        if not extra_context: extra_context = dict()

        if user.has_perm('insite_messages.view_message', message):
            extra_context['message'] = message

        extra_context['profile'] = profile

        extra_context = makeContextForDetails(request, extra_context)
        extra_context = makeContextForMessages(request, extra_context)

        return ExtraContextTemplateView.as_view(template_name=template_name,
                                              extra_context=extra_context)(request)
    else:
        url = reverse('profiles:message_view', kwargs={'username':request.user.username, 'message_id':message_id})
        return HttpResponseRedirect(url)


@secure_required
@permission_required_or_403('insite_messages.add_message')
def message_reply(request, username, message_id, write_message_form=MessageComposeForm,
                 template_name='insite_messages/message_write.html', success_url=None,
                 extra_context=None, **kwargs):

    if request.user.username == username:

        user = get_object_or_404(User, username__iexact=username)

        profile = get_user_profile(user)
        contact = get_user_contact(user)
        message = Message.objects.get(pk= message_id)

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
              message.save()

              if success_url:
                redirect_to = success_url
              else:
                redirect_to = reverse('profiles:outbox_messages', kwargs={'username': username})
              return redirect(redirect_to)

        if not extra_context: extra_context = dict()
        extra_context['form'] = form
        extra_context['profile'] = profile
        extra_context['contact'] = contact

        extra_context = makeContextForDetails(request, extra_context)
        extra_context = makeContextForMessages(request, extra_context)

        return ExtraContextTemplateView.as_view(template_name=template_name,
                                              extra_context=extra_context)(request)

    else:

        url = reverse('profiles:message_reply', kwargs={'username':request.user.username, 'message_id':message_id})
        return HttpResponseRedirect(url)

@secure_required
@permission_required_or_403('insite_messages.delete_message')
def message_remove(request, username, message_id, template_name='profiles/inbox_messages.html', success_url=None,
                 extra_context=None, **kwargs):

  if request.user.username == username:

      user = get_object_or_404(User, username__iexact=username)
      message = Message.objects.get(pk = message_id)

      if user.has_perm('delete_message', message):

          if(message.sender == user):
              message.sender_deleted_at = datetime.now()
              message.save()

          if(message.recipient == user):
              message.recipient_deleted_at = datetime.now()
              message.save()

          if(message.recipient_deleted_at is not None and message.sender_deleted_at is not None):
              message.delete()

      url = reverse('profiles:inbox_messages', kwargs={'username':user.username})
      return HttpResponseRedirect(url)

  else:
    url = reverse('profiles:message_remove', kwargs={'username':request.user.username, 'message_id':message_id})
    return HttpResponseRedirect(url)

