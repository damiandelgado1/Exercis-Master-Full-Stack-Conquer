from django.contrib import admin
from django.urls import path, include, re_path
from .views import home_view, search_view, contact_view
from django.conf import settings


urlpatterns = [
    path('', home_view, name="home"),
    path('buscar/', search_view, name="search"),
    path('contact/', contact_view, name="contact"),
    path('libro/', include("libro.urls.libro_url", namespace="libro")),
    path('autor/', include("libro.urls.autor_url", namespace="autor")),
    path('editorial/', include("libro.urls.editorial_url", namespace="editorial")),
    path('admin/', admin.site.urls),
]