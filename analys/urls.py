from django.urls import path
from .views import (new_analys)

urlpatterns = [
    path('new', new_analys, name="start_new_analys"),
]