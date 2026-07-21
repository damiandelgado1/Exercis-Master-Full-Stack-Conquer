from django.contrib import admin
from libro.models.author_models import Author
from libro.models.editorial_models import Editorial
from libro.models.libro_models import Libro
from import_export import resources
from import_export.admin import ImportExportModelAdmin

from django.http import HttpResponse
import csv


class AuthorResource(resources.ModelResource):
    class Meta:
        model = Author
        fields = ("first_name", "last_name", "birth_date")
        export_order = ("first_name", "last_name", "birth_date")


class LibroInline(admin.StackedInline):
    model = Libro


@admin.register(Author)
class AuthorAdmin(ImportExportModelAdmin):
    resource_class = AuthorResource
    list_display = ["pk", "first_name", "last_name", "birth_date", "email", "phone"]
    ordering = ["first_name", "last_name"]


@admin.register(Editorial)
class EditorialAdmin(admin.ModelAdmin):
    list_display = ["name", "city", "phone", "email", "web_site", "foundation_date"]
    list_filter = ["foundation_date"]
    inlines = [LibroInline]


def set_out_of_stock(modeladmin, request, queryset):
    queryset.update(is_out_of_stock=True)
    modeladmin.messages_user(request, "Los Libros seleccionados han sido marcados como fuera de Stock")

set_out_of_stock.short_description = "Marcar como fuera de Stock"


def export_books_to_csv(modeladmin, request, queryset):
    response = HttpResponse(content_type="text/csv")
    response["Content-Disposition"] = 'attachment; filename="books.csv"'

    writer = csv.writer(response)

    writer.writerow(["Name", "ISBN", "Publish Date", "Number Page", "Language"])

    for book in queryset:
        writer.writerow([book.name, book.isbn, book.publish_date, book.number_page, book.language])

    return response

export_books_to_csv.short_description = "Exportar Libros seleccionados a CSV"


@admin.register(Libro)
class BookAdmin(admin.ModelAdmin):
    list_display = ["name", "editorial", "isbn", "is_out_of_stock", "publish_date", "number_page", "language"]
    list_filter = ["editorial", "is_out_of_stock", "language"]
    search_fields = ["name", "autores__nombre"]
    filter_horizontal = ("author",)
    actions = [set_out_of_stock, export_books_to_csv]