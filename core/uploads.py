from userena.utils import generate_sha1

def upload_to_fallbacks(instance, filename):
  extension = filename.split('.')[-1].lower()
  salt, hash = generate_sha1(instance.id)
  path = 'reismann/images/configuration'
  return '%(path)s%(hash)s.%(extension)s' % {'path': path, 'hash': hash[:10], 'extension': extension}

def upload_to_service_card(instance, filename):
  extension = filename.split('.')[-1].lower()
  salt, hash = generate_sha1(instance.id)
  path = 'reismann/images/services/card'
  return '%(path)s%(hash)s.%(extension)s' % {'path': path, 'hash': hash[:10], 'extension': extension}

def upload_to_avatar(instance, filename):
  extension = filename.split('.')[-1].lower()
  salt, hash = generate_sha1(instance.id)
  path = 'reismann/images/accounts/avatar'
  return '%(path)s%(hash)s.%(extension)s' % {'path': path,
                                             'hash': hash[:10],
                                             'extension': extension}

def upload_to_profile_card(instance, filename):
  extension = filename.split('.')[-1].lower()
  salt, hash = generate_sha1(instance.id)
  path = 'reismann/images/accounts/card'
  return '%(path)s%(hash)s.%(extension)s' % {'path': path,
                                             'hash': hash[:10],
                                             'extension': extension}

def upload_to_profile_id_card(instance, filename):
  extension = filename.split('.')[-1].lower()
  salt, hash = generate_sha1(instance.id)
  path = 'reismann/images/profiles/id_cards'
  return '%(path)s%(hash)s.%(extension)s' % {'path': path, 'hash': hash[:10], 'extension': extension}

def upload_to_service_content(instance, filename):
  extension = filename.split('.')[-1].lower()
  salt, hash = generate_sha1(instance.id)
  path = 'reismann/images/services/content'
  return '%(path)s%(hash)s.%(extension)s' % {'path': path, 'hash': hash[:10], 'extension': extension}