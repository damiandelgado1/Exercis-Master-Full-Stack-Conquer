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
    path('contact_us/ccbv/', Contact.as_view(), name="contact_ccbv"),
    path('test/', Test.as_view(), name="test"),
    path('testtemplateview/', TestTemplateView.as_view(), name="test_template_view"),
]