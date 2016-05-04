import random

from django.db.models import Q
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.http import HttpResponse

from profiles.models import Profile
from cities.models import City
from profiles.views import makeContextForDetails, makeContextForMessages

def index(request):
    city_list = City.objects.filter(is_active=1)

    if request.method == 'POST':
        # City is required in the post
        cityId = request.POST.get('name')

        url = reverse('cities:city', kwargs={'city_name': cityId})

        return HttpResponseRedirect(url)

    else:

      popular_profiles = sorted(Profile.objects.filter(settings__profile_is_active=True, settings__is_provider=True, is_moderated=True) \
                        .exclude(Q(user__is_staff=True) | Q(user__is_superuser=True)) \
                        .order_by('created_at')[:6], key=lambda x: random.random())

      popular_cities = sorted(City.objects.filter(is_active=True).order_by('created_at')[:6], key=lambda x: random.random())

      context = {
        'city_list' : city_list,
        'popular_profiles': popular_profiles,
        'popular_cities': popular_cities,
      }

      context = makeContextForMessages(request, context)
      context = makeContextForDetails(request, context)

      return render(request, 'core/index.html', context)
      

def search_url(request):

  cityId = request.GET.get('name')
  url = reverse('cities:city', kwargs={'city_name': cityId})

  return HttpResponse(url)


def handler404(request):
  response = render_to_response('404.html', {}, context_instance=RequestContext(request))
  response.status_code = 404

  return response

def handler500(request):
  response = render_to_response('500.html', {}, context_instance=RequestContext(request))
  response.status_code = 500

  return response


def about_us(request, about_type, template_name='core/about/about_us.html'):
  context = {
    'about_type': about_type
  }
  context = makeContextForMessages(request, context)
  context = makeContextForDetails(request, context)

  return render(request, 'core/about/about_us.html', context)

def help_problem(request, problem_type, serial_id, template_name='core/help/problem.html'):
  context = {
    'problem_type': problem_type,
    'serial_id': serial_id
  }
  context = makeContextForMessages(request, context)
  context = makeContextForDetails(request, context)

  return render(request, 'core/help/problem.html', context)


def contact_info(request):
  context = {}
  context = makeContextForMessages(request, context)
  context = makeContextForDetails(request, context)

  return render(request, 'core/contact_info/contact_info.html', context)
