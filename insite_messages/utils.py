import re
from django.utils.text import wrap
from django.utils.translation import ugettext_lazy as _

def format_quote(sender, body):
  lines = wrap(body, 55).split('\n')
  for i, line in enumerate(lines):
    lines[i] = "> %s" % line
  quote = '\n'.join(lines)
  return _(u"%(sender)s wrote:\n%(body)s") % {
    'sender': sender,
    'body': quote
  }

def format_subject(subject):
  subject_prefix_re = r'^Re\[(\d*)\]:\ '
  m = re.match(subject_prefix_re, subject, re.U)
  prefix = u""
  if subject.startswith('Re: '):
    prefix = u"[2]"
    subject = subject[4:]
  elif m is not None:
    try:
      num = int(m.group(1))
      prefix = u"[%d]" % (num+1)
      subject = subject[6+len(str(num)):]
    except:
      # if anything fails here, fallback to the old mechanism
      pass

  return _(u"Re%(prefix)s: %(subject)s") % {
    'subject': subject,
    'prefix': prefix
  }