from core.mail import send_mail
from django.template.loader import render_to_string
from django.contrib.sites.models import Site
from reismann.alex_settings import EMAIL_DEFAULT_FROM_EMAIL

class FollowshipMailManager():

  def send_email_new_follower(self, user):

    if user.profile.settings.email_notifications == True:

        context = {'user': user,
                   'site': Site.objects.get_current()}

        subject = render_to_string('followship/emails/new_follower_subject.txt', context)
        subject = ''.join(subject.splitlines())

        text = render_to_string('followship/emails/new_follower_text.txt', context)

        send_mail(subject, text, None, EMAIL_DEFAULT_FROM_EMAIL, [user.email])


  def send_email_lost_follower(self, user):

    if user.profile.settings.email_notifications == True:

        context = {'user': user,
                   'site': Site.objects.get_current()}

        subject = render_to_string('followship/emails/lost_follower_subject.txt', context)
        subject = ''.join(subject.splitlines())

        text = render_to_string('followship/emails/lost_follower_text.txt', context)

        send_mail(subject, text, None, EMAIL_DEFAULT_FROM_EMAIL, [user.email])