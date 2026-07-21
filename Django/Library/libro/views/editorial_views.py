from typing import Any
from django.shortcuts import render, redirect
from libro.forms.editorial_forms import EditorialCreate, EditorialModelFormCreate
from libro.models.editorial_models import Editorial
from django.urls import reverse, reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from libro.decorators import user_can_delete_editorial


class EditorialList(ListView):
    model = Editorial
    template_name = "editoriales/EditorialList.html"
    context_object_name = "editoriales"


class EditorialDetail(DetailView):
    model = Editorial
    template_name = "editoriales/EditorialDetail.html"
    context_object_name = "editorial"


@method_decorator(login_required, name="dispatch")
class EditorialCreate(CreateView):
    model = Editorial
    template_name = "editoriales/EditorialCreate.html"
    success_url = reverse_lazy("editorial:list")
    form_class = EditorialModelFormCreate

    def form_valid(self, form):
        form.instance.created_by = self.request.user
        return super().form_valid(form)


@method_decorator(login_required, name="dispatch")
class EditorialUpdate(UpdateView):
    model = Editorial
    template_name = "editoriales/EditorialUpdate.html"
    success_url = reverse_lazy("editorial:list")
    fields = [
        "name",
        "address",
        "city",
        "stated",
        "country",
        "postal_code",
        "phone",
        "email",
        "web_site",
        "foundation_date",
    ]


@method_decorator(login_required, name="dispatch")
class EditorialDelete(DeleteView):
    model = Editorial
    template_name = "editoriales/EditorialDelete.html"
    success_url = reverse_lazy("editorial:list")