from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("horse", views.horse, name="horse"),
    path("<str:name>", views.greet, name="greet"),
]
