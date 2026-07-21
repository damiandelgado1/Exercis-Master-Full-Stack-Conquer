from django.urls import path
from libro.views.editorial_views import EditorialList, EditorialDetail, EditorialCreate, EditorialUpdate, EditorialDelete

app_name = "editorial"

urlpatterns = [
    path("list/", EditorialList.as_view(), name="list"),
    path("detail/<int:pk>", EditorialDetail.as_view(), name="detail"),
    path("create/", EditorialCreate.as_view(), name="create"),
    path("update/<int:pk>/", EditorialUpdate.as_view(), name="update"),
    path("delete/<delete:pk>/", EditorialDelete.as_view(), name="delete")
]