from django.shortcuts import render
from django.http import HttpResponse
# from PIL import Image

# Create your views here.

def home(request):
    return HttpResponse("Home page")
