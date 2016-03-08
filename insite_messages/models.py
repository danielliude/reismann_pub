from datetime import datetime

from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _
from django.utils.timezone import utc
from django.utils.timesince import timesince
from redactor.fields import RedactorField

from insite_messages.managers import MessageManager

class Message(models.Model):

  sender = models.ForeignKey(User, related_name='sent_messages', verbose_name=_('message sender'))
  recipient = models.ForeignKey(User, related_name='received_messages', verbose_name=_('message recipient'),
                                null=True, blank=True)
  subject = models.CharField(_('message subject'), max_length=120)
  body = RedactorField(verbose_name=_('message body'), allow_image_upload=False,
                       allow_file_upload=False)
  parent = models.ForeignKey('self', related_name='next_messages', verbose_name=_('parent message'),
                             null=True, blank=True)
  sent_at = models.DateTimeField(_('message sent at'), null=True, blank=True)
  read_at = models.DateTimeField(_('message read at'), null=True, blank=True)
  replied_at = models.DateTimeField(_('message replied at'), null=True, blank=True)
  sender_deleted_at = models.DateTimeField(_('message sender deleted at'), null=True, blank=True)
  recipient_deleted_at = models.DateTimeField(_('message recipient deleted at'), null=True, blank=True)

  objects = MessageManager()

  def unread(self):
    if self.read_at is not None:
      return False
    return True

  def status(self):
      if self.read_at is None:
          return "Unread"
      return "Read"

  def minutes_past(self):
    now = datetime.utcnow().replace(tzinfo=utc)
    return timesince(self.sent_at, now=now)

  def replied(self):
    if self.replied_at is not None:
      return True
    return False

  def __str__(self):
    return self.subject

  def get_absolute_url(self):
    return ('messages:message_detail', [self.id])
  get_absolute_url = models.permalink(get_absolute_url)

  def save(self, **kwargs):
    if not self.id:
      self.sent_at = timezone.now()
    super(Message, self).save(**kwargs)

  class Meta:
    ordering = ['-sent_at']
    verbose_name = _('Message')
    verbose_name_plural = _('Messages')

    permissions = (
        ('view_message', 'Can view Message'),
    )


def inbox_count_for(user):
  return Message.objects.filter(recipient=user, read_at__isnull=True, recipient_deleted_at__isnull=True).count()
