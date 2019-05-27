from rest_framework import serializers
from .models import Beer


class BeerListSerializer(serializers.ModelSerializer):
    """docstring for BeerListSerializer"""

    class Meta:
        model = Beer
        fields = (
            'name',
            'ilk_olcum',
            'son_olcum',
            'malt_miktari',
            'hop_miktari',
            'abv',
            'kaynatma',
            'mash_time',
            'mayalama',
        )


class BeerCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer
        fields = (
            'name',
            'ilk_olcum',
            'son_olcum',
            'malt_miktari',
            'hop_miktari',
            'abv',
            'kaynatma',
            'mash_time',
            'mayalama',
        )
