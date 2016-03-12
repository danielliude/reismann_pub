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

            # City is required in the post
            service_pk = request.POST.get('city')

            if (not service_pk):
                services = Service.objects.all()
            else:
                city = City.objects.filter(pk= service_pk)
                services = Service.objects.filter(cities = city)

            # Let's get gender
            gender = request.POST.getlist('gender')
            if(gender):
                profiles = Profile.objects.filter(gender__in =(gender))
                users = User.objects.filter(profile__in=(profiles))
                services = services.filter(user__in=(users))

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

            # Check languages for service
            languages = request.POST.getlist('languages')
            if(languages):
                for language in languages:
                    services = services.filter(languages = language)

            # Check tags
            tags = request.POST.getlist('tags')
            if(tags):
                for tag in tags:
                    services = services.filter(tags = tag)

            # Check type of services
            request_services = request.POST.getlist('services')
            if(request_services):
                for service in request_services:
                    services = services.filter(categories = service)

            services = services.exclude(Q(user__is_staff=True) | Q(user__is_superuser=True))

            return render(request, 'cities/city.html', {'form': form, 'services': services})
    else:
        services = Service.objects.filter(is_active= True) \
                        .exclude(Q(user__is_staff=True) | Q(user__is_superuser=True))

        if(city_name):
            city = City.objects.filter(name= city_name)

            if city:
                services = services.filter(cities = city)

        context = {
            'form': form,
            'services': services
        }

        context = makeContextForMessages(request, context)
        context = makeContextForDetails(request, context)

        return render(request, 'cities/city.html', context)
