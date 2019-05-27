from django.shortcuts import render
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.permissions import AllowAny

from .models import Beer
from .renderers import BeerJSONRenderer
from .serializers import BeerListSerializer, BeerCreateSerializer


class BeerListApiView(ListAPIView):
    model = Beer
    queryset = Beer.objects.all()
    permission_classes = (AllowAny,)
    renderer_classes = (BeerJSONRenderer,)
    serializer_class = BeerListSerializer


class BeerCreateApiView(CreateAPIView):
    model = Beer
    serializer_class = BeerCreateSerializer
    permission_classes = (AllowAny,)


def graph(request):
    if request.method == 'GET':
        beers = Beer.objects.all()
        return render(request, 'graph.html', {'beers': beers})


def form(request):
    if request.method == 'GET':
        return render(request, 'form.html')
