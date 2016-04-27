from django.db import models
from django.utils.translation import ugettext_lazy as _

from core.uploads import upload_to_album
from core.constants import MUGSHOT_SETTINGS


class AlbumImage(models.Model):

    user = models.ForeignKey('auth.User', verbose_name=_('user'), related_name='album_images')

    image = models.ImageField(_('Image'), upload_to=upload_to_album)

    image_size = models.IntegerField(_('Image Size'), default=0)

    class Meta:
        verbose_name = _('Album Image')
        verbose_name_plural = _('Album Images')

    def is_in_my_album(self):
        return self in self.user.my_album.images.all()


class MyAlbum(models.Model):
    ''' Selected images that displayed on my profile page '''

    user = models.OneToOneField('auth.User', unique=True, verbose_name=_('user'), related_name='my_album')

    images = models.ManyToManyField(AlbumImage, null=True, blank=True, verbose_name=_('Images'))

    class Meta:
        verbose_name = _('My Album')
        verbose_name_plural = _('My Album')


class MyAvatar(models.Model):
    ''' Selected one image as my avatar '''

    user = models.OneToOneField('auth.User', unique=True, verbose_name=_('user'), related_name='avatar')

    image = models.ForeignKey(AlbumImage, verbose_name=_('Avatar'))

    class Meta:
        verbose_name = _('My Avatar')
        verbose_name_plural = _('My Avatar')
