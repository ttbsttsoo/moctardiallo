from django.urls import path, include

from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("contact", views.ContactView)

urlpatterns = [
    path("", include(router.urls))
]