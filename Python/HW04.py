#!/usr/bin/env python3
StrObj = "Dit is tekst"
IntObj = 5
ListObj = [1, 2, 3, 4, 5]

print("Type StrObj:", type(StrObj))
print("ID IntObj:", id(IntObj))
print("List Length:", len(ListObj))

def combine(obj1, obj2, obj3):
    resultaat = str(obj1) + str(obj2) + str(obj3)
    print("The combined objects results in:", resultaat)
    
combine(StrObj, ListObj, IntObj)
