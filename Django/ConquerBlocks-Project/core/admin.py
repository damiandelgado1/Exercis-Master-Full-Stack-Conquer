from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class ContactResource(admin.ModelAdmin):
    model = Contact
    list_display = ["name", "contact", "email", "created_at"]
    list_filter = ["contact"]