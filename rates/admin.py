from django.contrib import admin
from .models import (Rates)

class RatesAdmin(admin.ModelAdmin):
    list_display = ('rate_key', 'rate_author', 'rate_value','rate_unit', 'rate_date')
    list_filter = ('rate_author', 'rate_date', )
    search_fields = ('rate_key', 'rate_author', 'rate_value','rate_unit', 'rate_date')


admin.site.register(Rates, RatesAdmin)