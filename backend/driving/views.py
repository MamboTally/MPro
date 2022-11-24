from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import driver, driverLicence, drivesDetails, Todo1
from .serializers import UserSerializer, drivingSerializer, driverLicenceSerializer, drivesDetailsSerializer,  TodoSerializer  

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
 
@api_view(['GET', 'POST'])
def drivingList(request):
    
    if request.method == 'GET':
        driving1= driver.objects.all()
        serializer=drivingSerializer(driving1, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer=drivingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save
            return Response(serializer.data, status=status.HTTP_201_CREATED)

class driveLicenceView(viewsets.ModelViewSet):
    serializer_class = driverLicenceSerializer
    queryset = driverLicence.objects.all()
        
class driveDetailsView(viewsets.ModelViewSet):
    serializer_class = drivesDetailsSerializer
    queryset = drivesDetails.objects.all()
    
class TodoView(viewsets.ModelViewSet):      
    serializer_class = TodoSerializer          
    queryset = Todo1.objects.all()

# @api_view(['GET', 'PUT', 'DELETE'])
# def driving_detail(request):
    
