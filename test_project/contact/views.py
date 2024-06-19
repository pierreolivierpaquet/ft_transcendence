from django.shortcuts import render
from .models import Contact
from django.http import HttpResponse, JsonResponse
from django.core import serializers
import json

def contact(request):
    if request.method == 'POST':
        user=json.loads(request.body)
        print(user['name'])
        if Contact.objects.filter(name=user['name']).exists():
            return HttpResponse(status=409);
        newcontact = Contact(name=user['name'])
        newcontact.save()
        data = serializers.serialize('json', Contact.objects.filter(name=user['name']));
        print(data)
        return JsonResponse(data, safe=False)
    elif request.method == 'GETALL':
        data = serializers.serialize('json', Contact.objects.all());
        return JsonResponse(data, safe=False)
    elif request.method == 'DELETE':
        user=json.loads(request.body)
        if not Contact.objects.filter(name=user['name']).exists():
            return HttpResponse(status=404);
        Contact.objects.filter(name=user['name']).delete()
        return HttpResponse(status=200);
    else:
        return render(request, 'index.html');
