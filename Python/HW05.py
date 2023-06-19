#!/usr/bin/env python3

WeekMenu = {
    "Maandag": "Spaghetti Bolognese",
    "Dinsdag": "Gegrilde kip met groenten",
    "Woensdag": "Pasta pesto",
    "Donderdag": "Zalm met citroen en dille",
    "Vrijdag": "Pizza Margherita",
    "Zaterdag": "Biefstuk met aardappelpuree",
    "Zondag": "Geroosterde kip met rozemarijn"
}

dag = input("Voer een dag van de week in: ")

gerecht = WeekMenu.get(dag.capitalize())

if gerecht:
    print(f"Het gerecht voor {dag} is: {gerecht}")
else:
    print("Ongeldige invoer. Voer een geldige dag van de week in.")