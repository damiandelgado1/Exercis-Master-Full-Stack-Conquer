from django import forms
from django.forms import ModelForm
from libro.models.editorial_models import Editorial


class EditorialCreate(forms.Form):
    name = forms.CharField(max_length=20)
    address = forms.CharField(max_length=20, required=False)
    city = forms.CharField(max_length=20, required=False)
    stated = forms.CharField(max_length=20, required=False)
    country = forms.CharField(max_length=20, required=False)
    postal_code = forms.CharField(max_length=20, required=False)
    phone = forms.CharField(max_length=20, required=False)
    email = forms.EmailField()
    web_site = forms.URLField(required=False)
    foundation_date = forms.DateField(widget=forms.SelectDateWidget)

    def clean_name(self):
        name = self.cleaned_data.get('name')

        if len(name) < 5:
            raise forms.ValidationError("El Nombre debe tener al menos 5 Caracteres")
        return name


class EditorialModelFormCreate(ModelForm):
    class Meta:
        model = Editorial
        fields = [
            "name",
            "address",
            "email",
            "foundation_date",
            "level",
            "web_site",
        ]