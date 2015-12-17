from configurations.models import SiteConfiguration, ServiceCategory

def get_avatar_fallback_url():

  configuration = SiteConfiguration.objects.first()

  if configuration and configuration.avatar_fallback:
    return configuration.avatar_fallback.url

  return None

def get_profile_card_fallback_url():

  configuration = SiteConfiguration.objects.first()

  if configuration and configuration.profile_card_fallback:
    return configuration.profile_card_fallback.url

  return None

def get_active_service_categories():
  return ServiceCategory.objects.filter(is_active=True)