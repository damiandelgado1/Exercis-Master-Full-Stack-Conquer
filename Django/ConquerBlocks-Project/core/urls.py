from django.urls import path
from .views import home, about_us, contact, register, login, logout, Contact,Test, TestTemplateView


app_name = "core"

urlpatterns = [
    path('', home, name="home"),
    path('about_us/', about_us, name="about_us"),
    path('contact/', contact, name="contact"),
    path('register/', register, name="register"),
    path('login/', login, name="login"),
    path('logout/', logout, name="logout"),
    path('contact_us/ccbv/', Contact, name="contact_ccbv"),
    path('test/', Test, name="test"),
    path('testtemplateview/', TestTemplateView, name="test_template_view"),
]