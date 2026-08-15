from django import forms
from django.contrib.auth.password_validation import validate_password


class ContactForm(forms.Form):
    name = forms.CharField(max_length=50, label="Nombre")
    email = forms.EmailField(label="Email")
    comment = forms.CharField(max_length=50, label="Comentario", widget=forms.Textarea)

    def clean_name(self):
        name = self.cleaned_data.get('name')

        if len(name) < 5:
            raise forms.ValidationError('El Nombre debe tener al menos 5 caracteres')
        return name


class LoginForm(forms.Form):
    username = forms.CharField(max_length=150, label="Nombre de Usuario")
    password = forms.CharField(widget=forms.PasswordInput(), label="Contraseña")


class RegisterForm(forms.Form):
    first_name = forms.CharField(max_length=150, label="Nombre")
    last_name = forms.CharField(max_length=150, label="Apellido")
    username = forms.CharField(max_length=150, label="Nombre de Usuario")
    email = forms.EmailField(max_length=150, label="Email")
    password1 = forms.CharField(label="Contraseña", widget=forms.PasswordInput)
    password2 = forms.CharField(label="Repetir contraseña", widget=forms.PasswordInput)

    def clean_password(self):
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')

        if password1 != password2 and password1 != '':
            raise forms.ValidationError('Las Contraseñas no coinciden')

        if password2 != '':
            validate_password(password2)

        return password2