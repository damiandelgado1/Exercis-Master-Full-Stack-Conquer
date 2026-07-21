from django import forms


class SearchForm(forms.Form):
    q = forms.CharField(label="Introduce una Cadena de Texto", max_length=20)