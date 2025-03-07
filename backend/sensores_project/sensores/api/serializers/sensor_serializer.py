from rest_framework import serializers
from sensores.api.models.sensor import Sensor

class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = '__all__'
