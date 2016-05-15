import datetime

from django.db.models import Q
from django.shortcuts import render
from django.contrib.auth.models import User

from cities.forms import SearchForm
from services.models import Service
from cities.models import City
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

            services = Service.objects.all()
            services = services.exclude(Q(user__is_staff=True) | Q(user__is_superuser=True))
            services = services.filter(status = 2)

            # Check cities for service
            # print('init', services)
            city = request.POST.getlist('city[]')
            cit = ''
            if(city):
                for ci in city:
                    if(cit):
                        cit = cit | Q(cities=City.objects.filter(id=ci)) 
                    else:
                        cit = Q(cities=City.objects.filter(id=ci)) 
            if(cit):
                services = services.filter(cit)
            # print('cit', services)

            # Let's get gender
            gender = request.POST.getlist('gender[]')
            gen = ''
            if(gender):
                for gend in gender:
                    profiles = Profile.objects.filter(gender__in =(gend))
                    users = User.objects.filter(profile__in=(profiles))
                    if(gen):
                        gen = gen | Q(user__in=(users)) 
                    else:
                        gen = Q(user__in=(users)) 
            if(gen):
                services = services.filter(gen)
            # print('gen', services)

            #Check age
            age = request.POST.get('age')
            if(age):
                if(age != '0'):
                    min = age.split(',')[0]
                    min_date = datetime.datetime.now() - datetime.timedelta(days=int(min)*365)
                    max = age.split(',')[1]
                    max_date = datetime.datetime.now() - datetime.timedelta(days=int(max)*365)
                    profiles = Profile.objects.filter(birthday__gt = max_date).filter(birthday__lt = min_date)

                    users = User.objects.filter(profile__in=(profiles))
                    services = services.filter(user__in=(users))
            # print('age', services)

            # Check languages for service
            languages = request.POST.getlist('languages[]')
            lan = ''
            if(languages):
                for lang in languages:
                    if(lan):
                        lan = lan | Q(languages = ServiceLanguage.objects.filter(id=lang)) 
                    else:
                        lan = Q(languages = ServiceLanguage.objects.filter(id=lang)) 
            if(lan):
                print('lan lan', lan)
                services = services.filter(lan) 
            # print('lan', services)

            # Check tags
            tags = request.POST.getlist('tags[]')
            ta = ''
            if(tags):
                for tag in tags:
                    if(ta):
                        ta = ta | Q(tags = ServiceTag.objects.filter(id=tag)) 
                    else:
                        ta = Q(tags = ServiceTag.objects.filter(id=tag)) 
            if(ta):
                services = services.filter(ta)
            # print('ta', services)

            # Check type of services
            svrs = request.POST.getlist('services[]')
            svr = ''
            if(svrs):
                for service in svrs:
                    if(svr):
                        svr = svr | Q(categories = ServiceCategory.objects.filter(id=service)) 
                    else:
                        svr = Q(categories = ServiceCategory.objects.filter(id=service)) 
            if(svr):
                services = services.filter(svr)
            # print('serv', services)

            services_new = []
            for service in services.distinct():
                # for each object, construct a dictionary containing the data you wish to return
                service_dict = {}
                service_dict['profile_map_url'] = "/profiles/" + service.user.username + "/services/view/" + str(service.id)
                service_dict['card_image_url'] = service.user.profile.get_card_image_url()
                service_dict['image_url'] = "/profiles/" + service.user.username + "/"
                service_dict['avatar_url'] = service.user.profile.get_avatar_url()
                service_dict['name_of_username'] = service.user.username
                service_dict['short_description'] = service.user.profile.short_description

                cities = []
                for city in service.cities.all():
                     cities.append(city.name)

                citiesStr = ",".join(str(item) for item in cities)

                service_dict['cities'] = citiesStr
                service_dict['price'] = service.price
                service_dict['title'] = service.title
                services_new.append(service_dict)


            page = int(request.POST.get('page'))
            page_num = 21
            page_start = (page-1) * page_num
            page_end   = page * page_num
            num        = len(services_new)
            services_new = services_new[page_start:page_end]

            #it is a test ,need to modify
            for service in services_new:
                tem = {}
                service['all_service'] = []
                tem['categorie'] = "booking"
                tem['title']     = "test"
                tem['price']     = "12/day"
                tem['active']     = 'true'
                service['all_service'].append(tem)
                service['all_service'].append(tem)

            temp = {'num': num, 'services_new' : services_new}
            return JsonResponse(temp)
    else:
        services = Service.objects.filter(status = 2) \
                        .exclude(Q(user__is_staff=True) | Q(user__is_superuser=True))


        # this is a default banner_image
        banner_image = { 'url' : '/media/reismann/images/cities/banner/munich.jpg' } 
        if(city_name):
            city = City.objects.filter(name= city_name)

            if city:
                banner_image = city[0].banner_image
                services = services.filter(cities = city)

        for service in services:
            tem = {}
            service.all_service = []
            tem['categorie'] = "booking"
            tem['title']     = "test"
            tem['price']     = "12/day"
            tem['active']     = 'true'
            service.all_service.append(tem)
            service.all_service.append(tem)

        context = {
            'form': form,
            'services': services,
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
            city_json['country'] = city.country.id
            results.append(city_json)
        data = json.dumps(results)
    else:
        data = 'fail'

    return HttpResponse(data, mimetype)