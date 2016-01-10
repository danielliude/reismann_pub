def merged_dict(dict_a, dict_b):
  """Merges two dicts and returns output. It's purpose is to ease use of
  ``auth_views_compat_quirks``
  """
  dict_a.update(dict_b)
  return dict_a