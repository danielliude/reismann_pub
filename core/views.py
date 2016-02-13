import random

from django.db.models import Q
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse

from profiles.models import Profile
from cities.models import City
from cities.forms import SearchIndexForm

def index(request):

    form = SearchIndexForm()

    if request.method == 'POST':

        form = SearchIndexForm(request.POST)

        if form.is_valid():

            # City is required in the post
            cityId = request.POST.get('name')

            city = City.objects.get(pk = cityId)

            url = reverse('cities:city', kwargs={'city_name': city})

            return HttpResponseRedirect(url)

    else:

      popular_profiles = sorted(Profile.objects.filter(is_active=True) \
                        .exclude(Q(user__is_staff=True) | Q(user__is_superuser=True)) \
                        .order_by('created_at')[:6], key=lambda x: random.random())

      newcomer_profiles = Profile.objects.filter(is_active=True) \
                            .exclude(Q(user__is_staff=True) | Q(user__is_superuser=True)) \
                            .order_by('created_at')[:6]

      newcomer_cities = City.objects.filter(is_active=True).order_by('created_at')[:6]

      popular_cities = sorted(City.objects.filter(is_active=True).order_by('created_at')[:6], key=lambda x: random.random())

      context = {
        'form' : form,
        'popular_profiles': popular_profiles,
        'newcomer_profiles': newcomer_profiles,
        'newcomer_cities': newcomer_cities,
        'popular_cities': popular_cities,
      }

      return render(request, 'core/index.html', context)

def handler404(request):
  response = render_to_response('404.html', {}, context_instance=RequestContext(request))
  response.status_code = 404

  return response

def handler500(request):
  response = render_to_response('500.html', {}, context_instance=RequestContext(request))
  response.status_code = 500

  return response
