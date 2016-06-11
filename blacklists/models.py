from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _


class BlackLists(models.Model):
    user = models.OneToOneField(User, related_name='blacklist', verbose_name=_('user'))
    shielding = models.ForeignKey(User, related_name='shielding', verbose_name=_('shielding'))
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'blacklists'
        verbose_name = _('BlackLists')
