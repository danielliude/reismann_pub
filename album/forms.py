from django import forms
from django.utils.translation import ugettext_lazy as _

from core.constants import ALBUM_IMAGES_QTY, ALBUM_IMAGES_SIZE
from .models import AlbumImage


class AlbumImageUploadForm(forms.ModelForm):

    class Meta:
        model = AlbumImage
        fields = ('image', )

    def get_total_images_num_size(self):
        images_qs = AlbumImage.objects.filter(user=self.user)
        size_list = images_qs.values_list('image_size', flat=True)
        total_num = len(size_list)
        total_size = sum(size_list)
        return total_num, total_size

    def clean_image(self):
        num, size = self.get_total_images_num_size()
        image = self.cleaned_data['image']
        if num + 1 > ALBUM_IMAGES_QTY:
            raise forms.ValidationError(_('Image quantity exceeds limitation'))
        if size + image.size > ALBUM_IMAGES_SIZE:
            raise forms.ValidationError(_('Image size exceeds limitation'))
        return image
