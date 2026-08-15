from django.db import models
from django.utils import timezone

class Post(models.Model):
    name = models.CharField(max_length=200, verbose_name="Nombre del Post")
    content = models.TextField(verbose_name="Contenido del Post")
    author = models.CharField(max_length=20, verbose_name="Autor del Post")
    created_at = models.DateTimeField(default=timezone.now, verbose_name="Fecha y Hora de Creacion")
    show_home = models.BooleanField('Mostrar en el Inicio', default=False)

    def __str__(self):
        return self.name