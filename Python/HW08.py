#!/usr/bin/env python3

class CursistenRegister:
    def __init__(self, voornaam, achternaam, adres, email):
        self.voornaam = voornaam
        self.achternaam = achternaam
        self.adres = adres
        self.email = email
    
    def welkomstbericht(self):
        bericht = "Welkom {0} {1}. Uw boekenpakket is verstuurd naar {2} in Amsterdam. U krijgt hiervan een bevestiging op het door u opgegeven e-mailadres: {3}.".format(
            self.voornaam, self.achternaam, self.adres, self.email)
        print(bericht)

# Voorbeeldgebruik
cursist = CursistenRegister("Tom", "Tomassen", "Giraffestraat 4", "tom@python123.nl")
cursist.welkomstbericht()