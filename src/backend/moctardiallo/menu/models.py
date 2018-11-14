from django.db import models

class Menu(models.Model):
    name = models.CharField(max_length=50) 
    link =  models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.name
