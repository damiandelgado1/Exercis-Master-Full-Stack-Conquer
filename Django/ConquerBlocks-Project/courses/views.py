from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Course


@login_required
def course_list(request):
    courses = Course.objects.all()
    context = {
        'courses': courses
    }

    return render(request, 'courses/course_list.html', context)


@login_required
def course_detail(request):
    course = Course.objects.get(pk=id)
    context = {
        'course': course
    }

    return render(request, 'courses/course_detail.html', context)