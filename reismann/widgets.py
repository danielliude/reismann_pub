from django.contrib.admin.widgets import AdminFileWidget
from django.utils.translation import ugettext_lazy as _
from django.utils.safestring import mark_safe


class AdminImageWidget(AdminFileWidget):

  class Media:
    css = {
      'all': (
        'bundles/admin.css',
      )
    }

  def render(self, name, value, attrs=None):
    output = []
    if value and getattr(value, 'url', None):
      image_url = value.url
      file_name = str(value)
      output.append(u'<a href="%s" target="_blank"><img src="%s" alt="%s" /></a>' % \
        (image_url, image_url, file_name))

    output.append(super(AdminFileWidget, self).render(name, value, attrs))

    return mark_safe(u''.join(output))
