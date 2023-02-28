from django.db import models
from accounts.models import User
from data.models import ID, Dates
from django.utils.translation import gettext_lazy as _


class ReminderChoices(models.TextChoices):
    """Allowed roles in a tenant."""

    BIRTHDAY = "Birthday", _("Birthday")
    FAMILY_EVENT = "Family Event", _("Family Event")
    HANGOUT = "Hangout", _("Hangout")
    MEETING = "Meeting", _("Meeting")
    Interview = "Interview", _("Interview")


class Reminder(ID, Dates):

    title = models.CharField(max_length=100)
    type = models.CharField(max_length=50, choices=ReminderChoices.choices)
    due_date = models.DateField()
    details = models.TextField(null=True, blank=True)
    is_send_alert = models.BooleanField(default=True)
    user = models.ForeignKey( to=User, on_delete=models.CASCADE,
        related_name="%(class)s"
    )
