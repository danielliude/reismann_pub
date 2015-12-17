from django import forms
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone

from redactor.fields import RedactorEditor

from insite_messages.models import Message

class MessageComposeForm(forms.Form):

  recipient = forms.CharField(label=_("message recipient"))
  subject = forms.CharField(label=_("message subject"), max_length=120)

  def save(self, sender, parent=None):
    recipient_username = self.cleaned_data['recipient'].strip()

    try:
      recipient = User.objects.get(username=recipient_username)
    except User.DoesNotExist:
      raise forms.ValidationError(_('The following username is incorrect: %(username)s') % {
        'username': recipient_username
      })

    subject = self.cleaned_data['subject']
    body = self.cleaned_data['body']
    message = Message(
      sender = sender,
      recipient = recipient,
      subject = subject,
      body = body,
    )
    if parent is not None:
      message.parent = parent
      parent.replied_at = timezone.now()
      parent.save()

    message.save()

    return message

  class Meta:
    model = Message
    exclude = ['sender', 'parent', 'sent_at', 'read_at', 'replied_at', 'sender_deleted_at', 'recipient_deleted_at']
    widgets = {
      'body': RedactorEditor()
    }
