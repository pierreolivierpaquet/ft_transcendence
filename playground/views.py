# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User

import random

def get_form(request):
    return render(request, 'hello.html')


def from_treatment(request):
    if request.method == 'POST':
        input_text = request.POST.get('input_text')
        if len(input_text) == 0:
            return render(request, 'hello.html', context= {'registered': True})
        exist = create_user(input_text)
        if exist:
            return render(request, 'hello.html', context= {'registered': exist})
    return render(request, 'hello.html')

def create_user(name):
    if not User.objects.filter(username=name).exists():
        user = User.objects.create_user(username=name,password='secret')
        print("nouvel user !")
        user.save()
        return True
    return False