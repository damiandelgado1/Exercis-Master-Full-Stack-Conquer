from django.db import models
from django.contrib.auth.models import User


# Information about the Editorial
class Editorial(models.Model):
    name = models.CharField(max_length=20)
    address = models.CharField(max_length=20)
    city = models.CharField(max_length=20, blank=True, null=True)
    stated = models.CharField(max_length=20, blank=True, null=True)
    country = models.CharField(max_length=20, blank=True, null=True)
    postal_code = models.CharField(max_length=20, blank=True, null=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    email = models.EmailField()
    web_site = models.URLField(null=True, blank=True)
    foundation_date = models.CharField(max_length=20)
    created_by = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)

    LEVEL_CHOICES = {
        "1": "Nivel 1",
        "2": "Nivel 2",
        "3": "Nivel 3"
    }

    level = models.CharField('Nivel', max_length=10, choices=LEVEL_CHOICES, default=1)

    def __str__(self):
        return self.name