from django.shortcuts import render
from django.http import HttpResponseRedirect
from cities.forms import SearchForm
from services.models import Service
from cities.models import City
import sys

# Create your views here.


def city(request, city_name, template_name='cities/city.html'):

    form = SearchForm(initial= {'city': city_name})
    services = Service.objects.filter(is_active= True)

    return render(request, 'cities/city.html', {'form': form, 'services': services})

def search(request, from_city):
    if request.method == 'POST':
        print(request.POST)
        form = SearchForm(request.POST)

        if form.is_valid():
            service_city = request.POST.get('city')
            print(service_city)
            city = City.objects.filter(name= service_city)
            if city:
                services = Service.objects.filter(cities = city)
                return HttpResponseRedirect('/cities/' + str(service_city) + '/', {'services': services})
    else:
            form = SearchForm(initial= {'city': from_city})
            services = Service.objects.filter(is_active= True)
            return render(request, 'cities/city.html', {'form': form, 'services': services})