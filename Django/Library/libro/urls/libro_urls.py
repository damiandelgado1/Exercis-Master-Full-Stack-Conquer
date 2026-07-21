from django.urls import path
from libro.views.libro_views import LibrosList, LibrosDetail

app_name = "libro"

urlpatterns = [
    path("list/", LibrosList.as_view(), name="list"),
    path("detail/<int:pk>", LibrosDetail.as_view(), name="detail")
]