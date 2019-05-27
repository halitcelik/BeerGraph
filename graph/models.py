from django.db import models

# Create your models here.


class Beer(models.Model):
    """A simple Beer model for the graph"""

    name = models.CharField(max_length=50)
    ilk_olcum = models.FloatField()
    son_olcum = models.FloatField()
    malt_miktari = models.FloatField()
    hop_miktari = models.IntegerField()
    abv = models.FloatField()
    mayalama = models.IntegerField()
    kaynatma = models.IntegerField()
    mash_time = models.IntegerField()

    def __str__(self):
        return self.name
