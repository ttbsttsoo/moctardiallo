from django.db import models


class Skill(models.Model):
    title = models.CharField(max_length=50)
    value = models.IntegerField()
