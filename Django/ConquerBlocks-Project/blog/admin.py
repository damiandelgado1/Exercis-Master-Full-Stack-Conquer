from django.contrib import admin
from .models import Post


@admin.register(Post)
class PostResource(admin.ModelAdmin):
    model = Post
    list_display = ["name", "pk", "show_home", "author", "created_at"]