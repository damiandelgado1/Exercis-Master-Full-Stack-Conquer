from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', include("core.urls", namespace="core")),
    path('blog/', include("blog.urls", namespace="blog")),
    path('courses/', include("courses.urls", namespace="courses")),
    path('admin/', admin.site.urls),
]