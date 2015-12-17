from django.dispatch import Signal

registration_complete = Signal(providing_args=["user",])
activation_complete = Signal(providing_args=["user",])
confirmation_complete = Signal(providing_args=["user", "old_email",])
password_complete = Signal(providing_args=["user",])
email_change = Signal(providing_args=["user", "prev_email", "new_email",])
profile_change = Signal(providing_args=["user",])
accounts_login = Signal(providing_args=["user",])
accounts_logout = Signal(providing_args=["user",])