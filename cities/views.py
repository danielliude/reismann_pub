import datetime

from django.db.models import Q
from django.shortcuts import render
from django.contrib.auth.models import User

from cities.forms import SearchForm
from services.models import Service
from cities.models import City
from cities.models import Province
from profiles.models import Profile
from profiles.views import makeContextForDetails, makeContextForMessages
from django.http import HttpResponse
import json
from django.http import JsonResponse
from django.db.models import Q
from configurations.models import ServiceCategory, ServiceTag, ServiceLanguage

# search for cities from index page
def search_cities(request):

    if request.is_ajax():
        q = request.GET.get('term', '')
        cities = City.objects.filter(name__startswith = q )[:20]
        results = []
        for city in cities:
            city_json = {}
            city_json['id'] = city.id
            city_json['label'] = city.name
            city_json['value'] = city.name
            results.append(city_json)
        data = json.dumps(results)
    else:
        data = 'fail'

    mimetype = 'application/json'
    return HttpResponse(data, mimetype)

def city(request, city_name, template_name='cities/city.html'):

    form = SearchForm()

    try:
        city = City.objects.get(name = city_name)
        form.fields['city'].initial = city.pk
    except:
        form.fields['city'].initial = 0

    if request.method == 'POST':

        form = SearchForm(request.POST)
        if form.is_valid():

            users = User.objects.all()
            users = users.exclude(Q(is_staff=True) | Q(is_superuser=True) | Q(username__iexact = 'AnonymousGuardianUser')).filter(is_active=True)

            result = []

            for user in users:
                print('>>>>>>>>>>>>>>>>>user is:', user)

                # check number of services for provider
                services = Service.objects.filter(user = user)
                if not services: continue

                # check if at least one service of provider is active
                one_is_active = False
                for service in services:
                    if service.status == 2:
                        one_is_active = True
                if not one_is_active: continue

                # Check number categories
                categories = request.POST.getlist('category[]')
                number_categories = len(categories)

                if categories:
                    if categories[0]!= "":
                        if number_categories < 4:
                            prel_result = Service.objects.none()

                            count = 0
                            for cat_id in categories:
                                filtered_services = services.filter(category=cat_id)
                                if filtered_services:
                                    count = count + 1
                                prel_result = prel_result | filtered_services
                        else:
                            continue

                        services = prel_result
                        if not services: continue
                        if number_categories != count: continue


                # Check services has all requested cities
                city_ids = request.POST.getlist('city[]')
                if city_ids:
                    for ci_id in city_ids:
                        services = services.filter(cities=ci_id)

                if not services: continue

                # Checking gender of provider
                skip_provider = False
                gender = request.POST.get('gender')
                if gender:
                    if user.profile.gender != int(gender):
                        skip_provider = True
                if skip_provider: continue

                # Check age of provider
                min_age = request.POST.get('min_age')
                max_age = request.POST.get('max_age')
                if min_age:
                    if(user.profile.age < int(min_age)):
                        skip_provider = True
                if max_age:
                    if(user.profile.age > int(max_age)):
                        skip_provider = True
                if skip_provider: continue

                # Check languages of provider
                languages = request.POST.getlist('languages[]')
                print(languages)
                if languages:
                    for lang in languages:
                        print("Language")
                        print(lang)
                        print("Language is attached to provider:")
                        print(user.profile.languages.filter(id=lang).exists())

                        if not user.profile.languages.filter(id=lang).exists():
                            skip_provider = True
                if skip_provider: continue

                # Check tags of provider
                tags = request.POST.getlist('tags[]')

                if tags:
                    for tag in tags:
                        if not user.profile.tags.filter(id=int(tag)).exists():
                            skip_provider = True

                if skip_provider: continue

                user_dict = {}
                user_services = user.service.all()
                services_dict = {}

                for service in user_services:

                    if service.status != 2 : continue
                    service_dict = {}

                    service_dict['service_url'] = "/profiles/" + user.username + "/services/view/" + str(service.id)

                    cities = []
                    for city in service.cities.all():
                        cities.append(city.name)

                    citiesStr = ",".join(str(item) for item in cities)

                    service_dict['cities'] = citiesStr
                    service_dict['id'] = service.id
                    service_dict['price'] = service.price
                    service_dict['title'] = service.title
                    service_dict['category'] = service.category.name
                    service_dict['searched'] = False
                    service_dict['price_type'] = service.get_price_type_display()
                    service_dict['currency'] = service.get_currency_display()


                    # Checking cities for services
                    city_ids = request.POST.getlist('city[]')
                    if city_ids:
                        count = 0
                        for ci_id in city_ids:
                            if service.cities.filter(id = ci_id).exists():
                                count = count+1

                        if count == len(city_ids):
                            service_dict['searched'] = True
                        else:
                            service_dict['searched'] = False



                    categories = request.POST.getlist('category[]')

                    service_dict['searched'] = False

                    if categories:
                        if categories[0] != "":
                            for cat in categories:
                                if service.category.id == int(cat):
                                    service_dict['searched'] = True
                                    break

                    services_dict[service.id] = service_dict


                user_dict['services'] = services_dict
                user_dict['gender'] = user.profile.get_gender_display()
                user_dict['age'] = user.profile.age
                if user.profile.location:
                    user_dict['location'] = user.profile.location.name
                    user_dict['get_full_location'] = user.profile.location.get_full_location()
                user_dict['bio'] = user.profile.bio
                user_dict['card_image_url'] = user.profile.get_card_image_url()
                user_dict['profile_url'] = "/profiles/" + user.username + "/"
                user_dict['avatar_url'] = user.profile.get_avatar_url()
                user_dict['username'] = user.username
                user_dict['short_description'] = user.profile.short_description


                result.append(user_dict)

            page = int(request.POST.get('page'))
            page_num = 21
            page_start = (page-1) * page_num
            page_end   = page * page_num
            num        = len(result)
            result = result[page_start:page_end]

            temp = {'num': num, 'result' : result}
            return JsonResponse(temp)
    else:

        users = User.objects.all()
        users = users.exclude(Q(is_staff=True) | Q(is_superuser=True)| Q(username = 'AnonymousGuardianUser')).filter(is_active=True)

        banner_image = { 'url' : '/media/reismann/images/cities/banner/munich.jpg' } 

        result = []

        for user in users:
            print('>>>>>>>>>>>>>>>>>user is:', user)

            user_dict = {}
            user_dict['profile'] = user.profile
            user_dict['card_image_url'] = user.profile.get_card_image_url()
            user_dict['profile_url'] = "/profiles/" + user.username + "/"
            user_dict['avatar_url'] = user.profile.get_avatar_url()
            user_dict['username'] = user.username
            user_dict['short_description'] = user.profile.short_description
            if user.profile.location: user_dict['location'] = user.profile.location.name

            user_services = user.service.all()

            user_is_valid = False
            services_dict = []
            for service in user_services:
                if service.status != 2 : continue
                service_dict = {}

                print(service)
                service_dict['id'] = service.id
                service_dict['price'] = service.price
                service_dict['title'] = service.title
                service_dict['category'] = service.category.name
                service_dict['searched'] = False
                service_dict['price_type'] = service.get_price_type_display
                service_dict['currency'] = service.get_currency_display
                    
                # Checking cities for services
                if city_name == 'all' :
                    user_is_valid = True
                if(city_name):
                    city = City.objects.filter(name= city_name)

                    if city:
                        banner_image = city[0].banner_image
                        if service.cities.filter(id = city[0].id).exists():
                            service_dict['searched'] = True
                            user_is_valid = True
                        else:
                            service_dict['searched'] = False

                services_dict.append(service_dict)

            user_dict['services'] = services_dict

            if(user_is_valid):
                result.append(user_dict)


        context = {
            'form': form,
            'results': result,
            'banner_image': banner_image
        }

        context = makeContextForMessages(request, context)
        context = makeContextForDetails(request, context)

        return render(request, 'cities/city.html', context)

def get_cities(request):
    if request.is_ajax():
        cities = City.objects.all()
        data = []
        results = []
        mimetype = 'application/json'
        for city in cities:
            city_json = {}
            city_json['id'] = city.id
            city_json['name'] = city.name
            city_json['province'] = city.province.id
            results.append(city_json)
        data = json.dumps(results)
    else:
        data = 'fail'

    return HttpResponse(data, mimetype)

def get_provinces(request):
    if request.is_ajax():
        provinces = Province.objects.all()
        data = []
        results = []
        mimetype = 'application/json'
        for province in provinces:
            province_json = {}
            province_json['id'] = province.id
            province_json['name'] = province.name
            province_json['country'] = province.country.id
            results.append(province_json)
        data = json.dumps(results)
    else:
        data = 'fail'

    return HttpResponse(data, mimetype)