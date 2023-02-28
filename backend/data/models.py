# Standard Library
from uuid import uuid4
# Django
from django.db import models
# 3rd Party Libraries
import pytz


class Dates(models.Model):
    """A base class for date and time that keeps the time of creation and \
        modification for objects of classes that inherit it."""

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class ID(models.Model):

    id = models.UUIDField(primary_key=True, editable=False, default=uuid4)

    class Meta:
        abstract = True
