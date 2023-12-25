from django.urls import path
from .views import (new_analys, materials_list)

urlpatterns = [
    path('new', new_analys, name="start_new_analys"),
    path('materials_list', materials_list),
]