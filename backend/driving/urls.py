from django.contrib import admin
from django.urls import path
from driving import views
from rest_framework import routers
from django.conf.urls import include
from .views import UserViewSet, driveLicenceView, driveDetailsView, TodoView

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('driverLicence', driveLicenceView)
router.register('drivesDetails', driveDetailsView)
router.register('TodoView', TodoView)

urlpatterns = [
    path('', include(router.urls)),
]