from django.shortcuts import render
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from libro.models.libro_models import Libro
from django.urls import reverse_lazy


def book_view(request):
    return render(request, "libros/libros.html")


class LibrosList(ListView):
    model = Libro
    template_name = "libros/libros.html"
    context_object_name = "libros"


class LibrosDetail(DetailView):
    model = Libro
    template_name = "libros/libro_detail.html"
    context_object_name = "libro"


class LibroCreate(CreateView):
    model = Libro
    fields = [
        "name",
        "isbn",
        "publish_date",
        "number_page",
    ]
    template_name = "libros/libro_create.html"
    success_url = reverse_lazy("libro:libro_list")


class LibroUpdate(UpdateView):
    model = Libro
    fields = [
        "name",
        "isbn",
        "publish_date",
        "number_page"
    ]
    template_name = "libros/libro_update.html"
    success_url = reverse_lazy("libro:libro_list")


class LibroDelete(DeleteView):
    model = Libro
    template_name = "libros/libro_delete.html"
    success_url = reverse_lazy("libro:libro_list")