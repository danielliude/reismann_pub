from services.models import Service, Resume

from configurations.models import ServiceCategory

def get_user_service(user):
  try:
    service = user.service
  except Service.DoesNotExist:
    service = Service.objects.create(user=user)

  return service

def get_user_category_resume(user, category):
  try:
    resume = Resume.objects.get(user=user, service_category=category)
  except Resume.DoesNotExist:
    resume = Resume.objects.create_resume(user=user, service_category=category)

  return resume

def get_user_resumes(user):
  service = get_user_service(user)
  resumes = []
  for category in service.categories.all():
    resume = get_user_category_resume(user, category)
    if resume.is_active and resume.content: resumes.append(resume)

  return resumes