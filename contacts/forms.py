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
  phone = forms.CharField(widget=forms.TextInput(attrs={'placeholder': _('telephone number')}),
                          required= True,
                          label=_('Telephone number'),
                          max_length=30)
  email = forms.CharField(widget=forms.EmailInput(attrs={'placeholder': _('contact email')}),
                          required= True,
                          label=_('Contact email'),
                          max_length=200)

  weibo = forms.CharField(widget=forms.TextInput(attrs={'placeholder': _('weibo account')}),
                          required= False,
                          label=_('Weibo account'),
                          max_length=30)
  wechat = forms.CharField(widget=forms.TextInput(attrs={'placeholder': _('wechat account')}),
                          required= False,
                          label=_('Wechat account'),
                          max_length=30)
  qq = forms.CharField(widget=forms.TextInput(attrs={'placeholder': _('qq account')}),
                       label=_('Qq account'),
                       max_length=30)

  email_notifications = forms.BooleanField(widget=forms.CheckboxInput(attrs={'placeholder': _('email notifications')}),
                       required= False,
                       label=_('Email notifications'))


  class Meta:
    model = Contact
    exclude = ['user']

  def save(self, force_insert=False, force_update=False, commit=True):
    contact = super(ContactForm, self).save(commit=commit)

    return contact