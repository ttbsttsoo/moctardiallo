from django.db import models


class Service(models.Model):
    title = models.CharField(max_length=40)
    image = models.CharField(max_length=150)
    content = models.CharField(max_length=1000)
