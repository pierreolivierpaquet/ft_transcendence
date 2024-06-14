from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# avocado/views.py

def index(request):
    return HttpResponse("Avocado app is working!")
