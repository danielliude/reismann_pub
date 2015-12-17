from django.db.models import Q
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import RequestContext

from profiles.models import Profile

from cities.models import City

def index(request):
  newcomer_profiles = Profile.objects.filter(is_active=True) \
                        .exclude(Q(user__is_staff=True) | Q(user__is_superuser=True)) \
                        .order_by('created_at')[:6]
  newcomer_cities = City.objects.filter(is_active=True).order_by('created_at')[:6]
  context = {
    'newcomer_profiles': newcomer_profiles,
    'newcomer_cities': newcomer_cities
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
