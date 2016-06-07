from django.db import models
from django.utils.translation import ugettext_lazy as _

from core.uploads import upload_to_album
from core.constants import MUGSHOT_SETTINGS
from core.constants import ALBUM_IMAGE_STATUS
from .managers import AlbumImageManager

from core.mail import send_mail
from django.template.loader import render_to_string
from django.contrib.sites.models import Site
from reismann.alex_settings import EMAIL_DEFAULT_FROM_EMAIL
from notifications.signals import notify
from django.contrib.auth.models import User
from reismann.settings import ADMIN_NAME


class AlbumImage(models.Model):

    user = models.ForeignKey('auth.User', verbose_name=_('user'), related_name='album_images')

    image = models.ImageField(_('Image'), upload_to=upload_to_album)

    image_size = models.IntegerField(_('Image Size'), default=0)

    status = models.PositiveIntegerField(_('Image status'), choices=ALBUM_IMAGE_STATUS, blank=True, null=True)

    objects = AlbumImageManager()

    class Meta:
        verbose_name = _('Album Image')
        verbose_name_plural = _('Album Images')

    # only admins can change the album image
    def save(self):
        active = self.is_active()
        admin = User.objects.get(username = ADMIN_NAME)

        if active:
            if admin:
                notify.send(admin, recipient= self.user, action_object= self,
                        verb=u'image was approved')
            else:
                notify.send(self.user, recipient=self.user, action_object=self,
                            verb=u'image was approved')

        super(AlbumImage, self).save()



    def is_in_my_album(self):
        return self in self.user.my_album.images.all()

    def is_moderated(self):
        return self.status == 1

    def is_active(self):
        return self.status == 2

    def send_notification_email_to_administrator(self):
        context = {'site': Site.objects.get_current()}
        context['image_id'] = self.id
        subject = render_to_string('album/emails/notification_image_changed_subject_for_admin.txt', context)
        subject = ''.join(subject.splitlines())

        message = render_to_string('album/emails/notification_image_changed_message_for_admin.txt', context)

        send_mail(subject, message, None, EMAIL_DEFAULT_FROM_EMAIL, [EMAIL_DEFAULT_FROM_EMAIL])


class MyAlbum(models.Model):
    ''' Selected images that displayed on my profile page '''

    user = models.OneToOneField('auth.User', unique=True, verbose_name=_('user'), related_name='my_album')

    images = models.ManyToManyField(AlbumImage, blank=True, verbose_name=_('Images'))

    class Meta:
        verbose_name = _('My Album')
        verbose_name_plural = _('My Album')
