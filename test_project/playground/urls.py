from django.urls import path
from . import views

urlpatterns = [
    path("hello/", views.say_hello, name="hello"),
    path("", views.play_home, name="play_home"),
]
