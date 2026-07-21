from django import forms
from django.utils.translation import gettext_lazy as _


class ContactForm(forms.Form):
    name = forms.CharField(max_length=50, label=_("Nombre"))
    email = forms.EmailField(label=_("Email"))
    comment = forms.CharField(max_length=50, label=_("Comentario", widget=forms.Textarea))

    def clean_name(self):
        name = self.cleaned_data.get("name")

        if len(name) < 5:
            raise forms.ValidationError("El Nombre debe tener al menos 5 Caracteres")
        return name

    def clean_email(self):
        email = self.cleaned_data.get("email")

        if "test" in email:
            raise forms.ValidationError("El Email no parece ser Correcto")
        return email