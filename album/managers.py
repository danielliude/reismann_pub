from django.db import models


class AlbumImageManager(models.Manager):

    def active_images(self, user=None):
        qs = self.all().filter(status=2)
        if user:
            qs = qs.filter(user=user)
        return qs
