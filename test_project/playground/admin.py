from django.contrib import admin

# Register your models here.

from .models import Hello

admin.site.register(Hello)
