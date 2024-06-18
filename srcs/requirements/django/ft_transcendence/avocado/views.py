from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.cache import never_cache

# Create your views here.
# avocado/views.py

@never_cache
def index(request):
    return render(request, "hello/index.html")

@never_cache
def horse(request):
    return HttpResponse("Hello, Avocad-horse!")

@never_cache
def greet(request, name):
    return render(request, "hello/greet.html", {
        "name": name.capitalize()
    })
