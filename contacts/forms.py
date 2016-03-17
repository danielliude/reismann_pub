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
  phone = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': _('telefon number')}),
                          label=_('telephone number'),
                          max_length=30)

  email = forms.CharField(widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': _('contact email')}),
                          label=_('contact email'),
                          max_length=200)

  weibo = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': _('weibo account')}),
                          label=_('weibo account'),
                          max_length=30)
  wechat = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': _('wechat account')}),
                           label=_('wechat account'),
                           max_length=30)
  qq = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': _('qq account')}),
                       label=_('qq account'),
                       max_length=30)

  class Meta:
    model = Contact
    exclude = ['user']

  def save(self, force_insert=False, force_update=False, commit=True):
    contact = super(ContactForm, self).save(commit=commit)

    return contact