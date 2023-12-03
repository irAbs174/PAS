from django.contrib import admin
from .models import (Materials)

class MaterialsAdmin(admin.ModelAdmin):
    list_display = ('material_key', 'material_name', 'material_author', 'material_color', 'material_unit', 'material_date',)
    list_filter = ('material_date', 'material_unit', 'material_author',)
    search_fields = ('material_key', 'material_name', 'material_author', 'material_color', 'material_unit', 'material_date',)


admin.site.register(Materials, MaterialsAdmin)