from django.urls import path
from sensores.api.views.sensor_views import SensorView

urlpatterns = [
    path('sensores/', SensorView.as_view(), name='sensor-list'),
]
