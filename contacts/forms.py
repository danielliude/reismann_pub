#encoding:utf-8

from django import forms
from django.utils.translation import ugettext_lazy as _

from contacts.models import Contact

import logging

# Get an instance of a logger
logger = logging.getLogger('contacts')

class ContactForm(forms.ModelForm):
  """
  Form for creating or editing a new contact.
  """
  email = forms.CharField(widget=forms.EmailInput(attrs={'placeholder': _('contact email')}),
                          required=False,
                          label=_('Contact email'),
                          max_length=200)

  phone = forms.CharField(widget=forms.TextInput(attrs={'placeholder': _('telephone number')}),
                          required= False,
                          label=_('Telephone number'),
                          max_length=30)

  weibo = forms.CharField(widget=forms.TextInput(attrs={'placeholder': _('weibo account')}),
                          required= False,
                          label=_('Weibo account'),
                          max_length=30)
  wechat = forms.CharField(widget=forms.TextInput(attrs={'placeholder': _('wechat account')}),
                          required= False,
                          label=_('Wechat account'),
                          max_length=30)
  qq = forms.CharField(widget=forms.TextInput(attrs={'placeholder': _('qq account')}),
                       required=False,
                       label=_('Qq account'),
                       max_length=30)


  class Meta:
    model = Contact
    exclude = ['user']

  def __init__(self, *args, **kw):
    super(ContactForm, self).__init__(*args, **kw)

    # disable some fields on the second edition
    instance = getattr(self, 'instance', None)
    if instance.email:
        self.fields['email'].widget.attrs['disabled'] = 'disabled'

  def clean_email(self):
      instance = getattr(self, 'instance', None)
      if instance.email:
          return instance.email
      else:
          return self.cleaned_data['email']

  def save(self, force_insert=False, force_update=False, commit=True):
    contact = super(ContactForm, self).save(commit=commit)

    return contact