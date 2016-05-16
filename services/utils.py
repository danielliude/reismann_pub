from services.models import Service, ServiceRating
from configurations.models import ServiceCategory, ServiceTag, ServiceLanguage
from cities.models import City
from itertools import chain

def get_services_rating(user):

    services = Service.objects.filter(user = user)

    result = []
    for service in services:
        result = list(chain(result, ServiceRating.objects.filter(service = service)))

    all_price = sum(c.rating for c in result)

    if result:
        return all_price/len(result)
    else:
        return 0

def get_user_services(user):

    services = Service.objects.filter(user = user)
    return services

def get_user_active_services(user):

    services = Service.objects.filter(user = user, status = 2)
    return services

def get_service_by_id(id):

    return Service.objects.get(pk = id)

def get_distinct(user, field_name):

    return Service.objects.filter(user= user).values_list(field_name, flat=True).distinct()

def get_distinct_categories(user):

    ids = get_distinct(user, 'category')
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
