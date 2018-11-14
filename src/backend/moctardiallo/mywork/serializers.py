from rest_framework import serializers

from .models import MyWork

class MyWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyWork
        fields = ('id', 'name', 'domain', 'logo', 'likes', 'shares', 'views')
