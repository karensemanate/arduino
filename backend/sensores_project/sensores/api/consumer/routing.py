from django.urls import path
from django.urls import re_path
from sensores.api.consumer.sensor_consumer import SensorConsumer

websocket_urlpatterns = [
    path('ws/sensor/', SensorConsumer.as_asgi()), 
]