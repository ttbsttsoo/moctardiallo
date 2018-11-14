from django.db import models

class MyWork(models.Model):
    name = models.CharField(max_length=50) 
    domain = models.CharField(max_length=50)
    logo = models.ImageField()
    likes = models.IntegerField()
    views = models.IntegerField()
    shares = models.IntegerField()

    def __str__(self):
        return self.name

