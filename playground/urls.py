from django.urls import path, include
from . import views

from channels.routing import ProtocolTypeRouter, URLRouter
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

urlpatterns = [
    path('hello/',views.get_form),
    path('cool/',views.from_treatment, name = 'cool')
    #path('pong/')
]

# application = ProtocolTypeRouter({
#     'websocket': AuthMiddlewareStack(
#         URLRouter(
#             websocket_urlpatterns
#         )
#     ),
# })