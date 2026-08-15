from django.shortcuts import render, redirect
from django.urls import reverse, reverse_lazy
from django.views.generic.edit import FormView
from django.views.generic.base import TemplateView
from django.core.mail import send_mail
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views import View
from .models import Contact
from .forms import ContactForm, RegisterForm, LoginForm
from courses.models import Course
from blog.models import Post


def home(request):
    context = {
        'courses': Course.objects.filter(show_home=True),
        'posts': Post.objects.filter(show_home=True),
    }

    return render(request, 'core/home.html', context)


def about_us(request):
    return render(request, 'core/about_us.html')


def contact(request):
    if request.POST:
        form = ContactForm(request.POST)

        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            comment = form.cleaned_data['comment']

            Contact.objects.create(
                name=name,
                email=email,
                comment=comment
            )

            context = {
                'form': form,
            }

            return render(request, 'core/contact.html', context)

        else:
            context = {
                'form': form
            }

            return render(request, 'core/contact.html', context)

    form = ContactForm()
    context = {
        'form': form
    }

    return render(request, 'core/contact.html', context)


def register(request):
    if request.POST:
        form = RegisterForm(request.POST)

        if form.is_valid():
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            email = form.cleaned_data['email']
            username = form.cleaned_data['username']
            password1 = form.cleaned_data['password1']
            password2 = form.cleaned_data['password2']

            user = User.objects.create_user(username, email, password2)

            if user:
                user.first_name = first_name
                user.last_name = last_name
                user.save()

            context = {
                'msj': 'Usuario creado correctamente'
            }

            return render(request, 'core/register.html', context)

        else:
            context = {
                'form': form,
                'error': True
            }

            return render(request, 'core/register.html', context)

    else:
        form = RegisterForm()
        context = {
            'form': form
        }

        return render(request, 'core/register.html')


def login(request):
    if request.POST:
        form = LoginForm(request.POST)

        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect(reverse('core:home'))
            else:
                context = {
                    'form': form,
                    'error': True,
                    'error_message': 'Usuario no Valido'
                }
                return render(request, 'core/login.html', context)

        else:
            context = {
                'form': form,
                'error': True
            }

            return render(request, 'core/login.html', context)

    else:
        form = LoginForm()
        context = {
            'form': form
        }
        return render(request, 'core/login.html', context)


def logout(request):
    logout(request)
    return redirect(reverse('home'))


class ContactView(FormView):
    template_name = "core/contact.html"
    form_class = ContactForm
    success_url = "/"

    def form_valid(self, form):
        name = form.cleaned_data['name']
        email = form.cleaned_data['email']
        comment = form.cleaned_data['comment']

        message_content = f"{name} con email {email} ha escrito lo siguiente: {comment}"

        Contact.objects.create(
            name = name,
            email = email,
            comment = comment
        )

        return super().form_valid(form)


class Prueba(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse('Hello world')


class PruebaTemplateView(TemplateView):
    template_name = "TestTemplateView.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['name'] = 'Este es Mi Titulo'
        return context