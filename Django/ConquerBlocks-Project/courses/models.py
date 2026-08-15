from django.db import models
from django.utils import timezone
# from thumbnails.fields import ImageField
# from ckeditor.fields import RichTextField


class Course(models.Model):
    name = models.CharField(max_length=150, verbose_name="Nombre del Curso")
    content = models.TextField(verbose_name="Contenido del Curso")
    call_link = models.URLField(verbose_name="Enlace de Llamada")
    created_at = models.DateTimeField(default=timezone.now, verbose_name="Fecha y Hora de creacion")
    show_home = models.BooleanField('Mostrar en el Inicio', default=False)
    toc = models.FileField(upload_to="courses/toc/", null=True, blank=True,verbose_name="Temario")
    course_image = models.ImageField(upload_to="courses/images/", null=True, blank=True, verbose_name="Portada del Curso")

    def __str__(self):
        return self.name