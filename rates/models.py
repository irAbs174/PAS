from django.db import models

class Rates(models.Model):
    rate_key = models.CharField(max_length=50, verbose_name='کلید', null=True, blank=True)
    rate_author = models.CharField(max_length=40, verbose_name='ثبت کننده نرخ', null=True, blank=True)
    rate_value = models.FloatField(verbose_name='نرخ', blank=True, null=True)
    rate_unit = models.CharField(max_length=40, verbose_name='واحد نرخ', null=True, blank=True)
    rate_date = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ و زمان نرخ گذاری', null=True, blank=True)

    objects = models.Manager()

    class Meta:
        verbose_name = 'نرخ تولید'
        verbose_name_plural = 'نرخ های تولید'
