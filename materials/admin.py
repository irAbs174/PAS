from django.contrib import admin
from .models import (Materials)

class MaterialsAdmin(admin.ModelAdmin):
    list_display = ('material_code', 'material_name', 'material_location', 'material_hall', 'material_quantity', 'material_unit', 'material_author',)
    list_filter = ('material_author', 'material_location', 'material_hall', 'material_date', 'is_active', 'is_available', 'material_unit',)
    search_fields = ('material_code', 'material_name',)


admin.site.register(Materials, MaterialsAdmin)