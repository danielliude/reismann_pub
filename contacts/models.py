from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User

from contacts.managers import ContactManager

class Contact(models.Model):

  user= models.OneToOneField(User, unique=True, verbose_name=_('user'),
                             related_name=_('contact'), blank=True, null=True)

  phone = models.CharField(max_length=15, verbose_name=_('telephone number'),
                           blank=True, null=True)

  weibo = models.CharField(max_length=128, verbose_name=_('weibo account'),
                           blank=True, null=True)

  wechat = models.CharField(max_length=128, verbose_name=_('wechat account'),
                            blank=True, null=True)

  qq = models.CharField(max_length=12, verbose_name=_('qq username'),
                        blank=True, null=True)

  objects = ContactManager()

  class Meta:
    verbose_name = _('Contact')
    verbose_name_plural = _('Contacts')

  def __str__(self):
    return _('Contact of %(username)s') % {'username': self.user.username}

