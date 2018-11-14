from django.db import models

class Contact(models.Model):
    email = models.CharField(max_length=50)
    tel = models.CharField(max_length=50)

    def __str__(self):
        return "Contacts"