from django.shortcuts import render
from django.http import HttpResponse
from .models import Hello
# from PIL import Image

# Create your views here.

def play_home(request):
    return HttpResponse("Playground home")

def say_hello(request):
    hellos = Hello.objects.all()
    context = {'hellos': hellos}
    return render(request, 'hello.html', context);
    # return HttpResponse("Hello World");
    # im = open("28FKgDAk.jpg", "rb")
    # return HttpResponse(f.read(), content_type=im)
