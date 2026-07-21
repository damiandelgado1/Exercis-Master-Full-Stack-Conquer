from django.shortcuts import render
from django.contrib import messages
from django.utils.translation import gettext as _
from django.utils import translation
from libro.models.libro_models import Libro
from libro.models.author_models import Author
from libro.models.editorial_models import Editorial
from libro.forms.search_forms import SearchForm
from .form import ContactForm
from django.conf import settings


def home_view(request):
    return render(request, "general/home.html")


def search_view(request):
    if request.GET:
        form = SearchForm(request.GET)

        search = form.data['']

        author = Author.objects.filter(name__incontains=search)
        editorial = Editorial.objects.filter(name__incontains=search)
        libro = Libro.objects.filter(name__incontains=search)

        context = {
            "autores": author,
            "editoriales": editorial,
            "libros": libro,
            "formulario": form,
        }

        return render(request, "general/search.html", context)

    else:
        form = SearchForm()

    context = {
        "formulario": SearchForm()
    }

    return render(request, "general/search.html", context)


def contact_view(request):
    if request.POST:
        form = ContactForm(request.POST)

        if form.is_valid():
            name = form.cleaned_data["name"]
            email = form.cleaned_data["email"]
            comment = form.cleaned_data["comment"]

            print(f'Se ha Enviado un Correo a {name} procedente de email {email} con el texto {comment}')

            context = {
                "form": form
            }

            messages.info(request, _("El email se ha enviado correctamente"))
            return render(request, "general/contacto.html", context)

        else:
            context = {
                "form": form
            }

            return render(request, "general/contact.html", context)

    form = ContactForm()
    context = {
        "formulario": form
    }

    return render(request, "general/contacto.html", context)