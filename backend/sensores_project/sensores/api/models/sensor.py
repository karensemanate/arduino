from django.db import models

class Sensor(models.Model):
    id = models.AutoField(primary_key=True)
    valor_sensor = models.IntegerField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Sensor {self.id}: {self.valor_sensor}"

