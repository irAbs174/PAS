from materials.models import (Materials)
from django.shortcuts import render
from django.http import JsonResponse

def new_analys(request):
  return render(request, 'pages/analys/new.html', { 'segment': 'analys' })

def materials_list(request):
    """View to return a list of materials as JSON."""
    # Fetching all material objects from the database
    materials = Materials.objects.all().values('material_key', 'material_name')

    # Converting the queryset to a list of dicts
    materials_list = list(materials)
    
    # Returning the list as JSON
    return JsonResponse(materials_list, safe=False)