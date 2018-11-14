from django.shortcuts import render

from rest_framework import viewsets

from .serializers import MyWorkSerializer
from .models import MyWork

class MyWorkView(viewsets.ModelViewSet):
    queryset = MyWork.objects.all()
    serializer_class = MyWorkSerializer
