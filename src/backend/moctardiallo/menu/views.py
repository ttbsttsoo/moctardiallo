from django.shortcuts import render

from rest_framework import viewsets

from .serializers import MenuSerializer
from .models import Menu

class MenuView(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
