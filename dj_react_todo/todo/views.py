from django.shortcuts import render
from todo.models import ToDo
from todo.serializers import ToDoSerializer
from rest_framework import viewsets, permissions

# Create your views here.


class ToDoViewSet(viewsets.ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
    permission_classes = [permissions.AllowAny]
