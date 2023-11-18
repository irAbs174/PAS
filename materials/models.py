from django.db import models

class Materials(models.Model):
    material_author = models.CharField(max_length=40, verbose_name='اپراتور ثبت',null=False, blank=False )
    material_name = models.CharField(max_length=300, verbose_name='نام',null=False, blank=False )
    material_code = models.CharField(max_length=50, verbose_name='کد',null=False, blank=False )
    material_color = models.CharField(max_length=50, verbose_name='رنگ',null=False, blank=False )
    material_quantity = models.PositiveIntegerField(verbose_name='موجودی', null=True)
    material_location = models.CharField(max_length=50, verbose_name='انبار',null=False, blank=False )
    material_hall = models.CharField(max_length=20, verbose_name='سالن انبار',null=False, blank=False )
    material_unit = models.CharField(max_length=20, verbose_name='واحد',null=False, blank=False )
    material_date = models.DateTimeField(auto_now_add=True, verbose_name='زمان دقیق ثبت', null=True, blank=True)
    is_active = models.BooleanField(default=True, verbose_name='فعال / غیرفعال', blank=False, null=False)
    is_available = models.BooleanField(default=True, verbose_name='موجودی / عدم موجودی', blank=False, null=False)
    row = models.PositiveIntegerField(default=0)

    objects = models.Manager()
    
    def jpub(self):
        return jConvert(self.material_date)

    class Meta:
        verbose_name = 'ماده اولیه'
        verbose_name_plural = 'مواد اولیه'