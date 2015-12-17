from contacts.models import Contact

def get_user_contact(user):
  try:
    contact = user.contact
  except Contact.DoesNotExist:
    contact = Contact.objects.create(user=user)

  return contact