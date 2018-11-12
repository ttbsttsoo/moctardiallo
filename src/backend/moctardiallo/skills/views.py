from django.shortcuts import render

from rest_framework import viewsets

from .models import Skill

from .serializers import SkillSerializer


class SkillView(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
