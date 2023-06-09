from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes

from knox.views import LoginView as KnoxLoginView
from knox.auth import TokenAuthentication

from django.contrib.auth import authenticate, login, logout
from django.db.models import Q 
from .serializers import UserSerializer, LoginSerializer
from .models import User

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permissions_classes = [IsAuthenticated]
    

class UserLoginView(KnoxLoginView):
    serializer_class = LoginSerializer
    permission_classes = (AllowAny,)
    def post(self, request, format=None):
        serializer = self.serializer_class(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        resp = super(UserLoginView, self).post(request, format=None)
        resp.data['roleId'] = user.role
        resp.data['userId'] = user.id
        resp.data['firstName'] = user.first_name
        resp.data['lastName'] = user.last_name
        return Response({"data": resp.data})
        
class ConstructionManagerList(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.filter(Q(role = 6) | Q(is_superuser = True))
    
    @api_view(['GET'])
    @permission_classes([AllowAny])
    def get_construction_managers(self, request):
        queryset = self.queryset
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)
    
class SiteSurveyorList(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.filter(Q(role = 7) | Q(is_superuser = True))
    
    @api_view(['GET'])
    @permission_classes([AllowAny])
    def get_site_surveyors(self, request):
        queryset = self.queryset
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

class SalesRepList(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.filter(Q(role = 2) | Q(is_superuser = True))
    
    @api_view(['GET'])
    @permission_classes([AllowAny])
    @authentication_classes([])
    def get_salesreps(self, request):
        queryset = self.queryset
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)