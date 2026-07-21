from django.db import models


# Data and Information a Author writer the Books
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    birth_date = models.DateField()
    nationality = models.CharField(max_length=100)
    biography = models.TextField()
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    web_site = models.CharField(blank=True, null=True)
    awards = models.CharField(blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"