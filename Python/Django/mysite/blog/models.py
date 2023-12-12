from django.db import models
from django.utils import timezone

class Voetbalspelers(models.Model):
    naam_voetballer = models.CharField(max_length=255)
    actuele_voetbalclub = models.CharField(max_length=255)
    naam_auteur = models.CharField(max_length=255)
    datum_invoer = models.DateTimeField(default=timezone.now)
    datum_aanpassing = models.DateTimeField(default=timezone.now)

    def save_entry(self):
        self.datum_aanpassing = timezone.now()
        self.save()
