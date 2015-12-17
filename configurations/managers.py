from django.db import models
from django.contrib.sites.models import Site

class GeneralSiteConfigurationManager(models.Manager):

  def get_queryset(self):
    site = Site.objects.get_current()
    return super(GeneralSiteConfigurationManager, self).get_queryset().filter(site=site)