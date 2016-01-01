from django.contrib import admin
from .widgets import AdminImageWidget


class ImageWidgetAdmin(admin.ModelAdmin):

  image_fields = []

  def formfield_for_dbfield(self, db_field, **kwargs):
    if db_field.name in self.image_fields:
      request = kwargs.pop('request', None)
      kwargs['widget'] = AdminImageWidget
      return db_field.formfield(**kwargs)

    return super(ImageWidgetAdmin, self).formfield_for_dbfield(db_field, **kwargs)

