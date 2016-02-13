from services.models import Service
from configurations.models import ServiceCategory, ServiceTag, ServiceLanguage
from cities.models import City
from insite_messages.models import Message

def get_user_services(user):

    services = Service.objects.filter(user = user)
    return services

def get_service_by_id(id):

    return Service.objects.get(pk = id)

def get_distinct(user, field_name):

    return Service.objects.filter(user= user).values_list(field_name, flat=True).distinct()

def get_distinct_categories(user):

    ids = get_distinct(user, 'categories')
    return ServiceCategory.objects.filter(id__in=ids)

def get_distinct_tags(user):
    ids = get_distinct(user, 'tags')
    return ServiceTag.objects.filter(id__in=ids)

def get_distinct_languages(user):
    ids = get_distinct(user, 'languages')
    return ServiceLanguage.objects.filter(id__in=ids)

def get_distinct_cities(user):
    ids = get_distinct(user, 'cities')
    return City.objects.filter(id__in=ids)
