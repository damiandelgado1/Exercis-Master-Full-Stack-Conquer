from datetime import datetime
from libro.models.libro_models import Libro
from libro.models.author_models import Author
from libro.models.editorial_models import Editorial

def get_current_year_context_processor(request):
    current_year = datetime.now().year

    return {
        "current_year": current_year
    }


def get_statistics_books(request):
    return {
        'n_books': Libro.objects.all().count(),
        'n_editorial': Editorial.objects.all().count(),
        'n_author': Author.objects.all().count(),
        'user_logged': request.user
    }