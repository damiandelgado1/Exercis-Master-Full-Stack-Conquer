from django.db import models
from .author_models import Author
from .editorial_models import Editorial


# Information and Description about of the Book
class Libro(models.Model):
    name = models.CharField(max_length=100)
    isbn = models.CharField(max_length=100, unique=True)
    publish_date = models.DateField()
    number_page = models.IntegerField()

    LANGS_CHOICES = {
        "ES": "Español",
        "EN": "Ingles"
    }

    language = models.CharField(max_length=20, choices=LANGS_CHOICES, default="ES")
    description = models.TextField()
    editorial = models.ForeignKey(Editorial, on_delete=models.CASCADE, blank=True, null=True, related_name="books")
    author = models.ManyToManyField(Author)
    category = models.CharField(max_length=100, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    is_out_of_stock = models.BooleanField("Esta fuera de Stock", default=False)

    def __str__(self):
        return self.name