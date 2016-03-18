from django.core.urlresolvers import reverse

def login_redirect(redirect=None, user=None):

  if redirect: return redirect
  elif user is not None:
    return reverse('profiles:dashboard', kwargs={'username': user.username})
  else: return reverse('index')