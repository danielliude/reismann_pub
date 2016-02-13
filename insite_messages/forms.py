from django import forms
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone

from redactor.fields import RedactorEditor

from insite_messages.models import Message

class MessageComposeForm(forms.Form):

  recipient = forms.ModelChoiceField(widget=forms.Select(attrs={
                        'class': 'form-control select2',
                        'placeholder': _('recipient')}),
                      label=_('Recipient'),
                      queryset= User.objects.all())

  subject = forms.CharField(widget=forms.TextInput(attrs={
                        'class': 'form-control',
                        'placeholder': _('subject')}),
                      label=_('Subject'),
                      max_length=120)

  body = forms.CharField(widget=forms.Textarea(attrs={
                         'class': 'form-control',
                         'placeholder': _('message body'),
                         'cols': "20",
                         'rows': "5"}),
                        label=_('Message'),
                        max_length=500)

  def save(self, sender, parent=None):

    recipient = self.cleaned_data['recipient']
    try:
      recipient = User.objects.get(username=recipient.username)
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
    exclude = ['parent', 'sent_at', 'read_at', 'replied_at', 'sender_deleted_at', 'recipient_deleted_at']
    widgets = {
      'body': RedactorEditor()
    }
