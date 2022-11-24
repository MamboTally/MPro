from rest_framework import serializers
from django.contrib.auth.models import User
from .models import driver, driverLicence, drivesDetails, Todo1
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class drivingSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = driver
        fields= '__all__'

class driverLicenceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = driverLicence
        fields= '__all__'
        
class drivesDetailsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = drivesDetails
        fields= '__all__'
        
        
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo1
        fields = '__all__'
    