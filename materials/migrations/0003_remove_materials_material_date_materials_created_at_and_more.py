# Generated by Django 4.1.12 on 2023-12-04 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('materials', '0002_remove_materials_is_active_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='materials',
            name='material_date',
        ),
        migrations.AddField(
            model_name='materials',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True, verbose_name='تاریخ ایجاد'),
        ),
        migrations.AddField(
            model_name='materials',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='توضیحات'),
        ),
        migrations.AddField(
            model_name='materials',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='تاریخ بروزرسانی'),
        ),
    ]
