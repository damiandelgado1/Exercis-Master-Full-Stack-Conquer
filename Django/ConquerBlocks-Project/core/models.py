from django.db import models
from django.utils import timezone


class Contact(models.Model):
    name = models.CharField(max_length=50, verbose_name="Nombre")
    email = models.EmailField(verbose_name="Email")
    comment = models.TextField(verbose_name="Comentario dejado en la Web")
    created_at = models.DateTimeField(default=timezone.now, verbose_name="Fecha y Hora de creacion")
    contact = models.BooleanField(default=False, verbose_name="¿Se ha contactado con El?")

    def __str__(self):
        return self.name