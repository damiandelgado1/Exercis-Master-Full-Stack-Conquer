from django.urls import path
from .views import home, about_us, contact, register, login, logout, Contact, Prueba, PruebaTemplateView


app_name = "core"

urlpatterns = [
    path('', home, name="home"),
    path('about_us/', about_us, name="about_us"),
    path('contact/', contact, name="contact"),
    path('register/', register, name="register"),
    path('login/', login, name="login"),
    path('logout/', logout, name="logout"),
    path('contact_us/ccbv/', Contact, name="contact_ccbv"),
    path('prueba/', Prueba.as_view(), name="prueba"),
    path('pruebatemplateview/', PruebaTemplateView.as_view(), name="prueba_template_view"),
]