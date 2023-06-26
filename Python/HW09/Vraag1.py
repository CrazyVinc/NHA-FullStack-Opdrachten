#!/usr/bin/env python3

Getal = input("Wat is uw nummer: ")
if(int(Getal) > 50):
    f = open("Vraag1.txt", mode="w")
    f.write("Dit was uw nummer {}".format(Getal))
    f.close()
else:
    print("Helaas.")