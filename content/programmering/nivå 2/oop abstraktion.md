---
title: OOP - Abstraktion, klasser och objekt
summary: Den första av delen i objektorienterad programmering utifrån de fyra grundpelarna i OOP.
tags: ["oop", "klasser", "fyra grundpelare", "abstraktion"]
eleventyNavigation:
    key: oop - abstraktion, klasser och objekt
    parent: programmering
    order: 21
---

I det inledande avsnittet så tittade vi på vad objektorienterad programmering (OOP) är och varför det är användbart. Vi undersökte några exempel och använde flera metaforer för att förstå konceptet bättre. Nu ska vi börja titta på hur vi faktiskt kan koda med OOP i Python.

## Klasser och objekt

I OOP är en **klass** som en ritning eller mall för att skapa objekt. Den definierar vilka attribut (egenskaper) och metoder (funktioner) som objekten av den klassen kommer att ha. Ett **objekt** är en instans av en klass, vilket betyder att det är ett konkret exempel på klassen med sina egna specifika värden för attributen.

### Skapa en klass

I Python skapar vi en klass med nyckelordet `class`, följt av klassens namn och ett kolon. Vi fortsätter med exemplet från föregående avsnitt och skapar en klass för en bok.

{% alert "info" %}
De kodexempel som används i denna del är på svenska för att göra det lättare att förstå koncepten. I praktiken är det vanligare att använda engelska namn för klasser, attribut och metoder.
{% endalert %}

```python
class Bok:
    def __init__(self, titel, författare, utgivnings_år):
        self.titel = titel
        self.författare = författare
        self.utgivnings_år = utgivnings_år
```

Förutom syntax för att skapa klassen använder vi här en speciell metod som kallas `__init__`. Denna metod kallas en konstruktor (eng. constructor) och används för att initialisera objektets attribut när ett nytt objekt skapas. Parametrarna `titel`, `forfattare` och `ar` används för att sätta värdena för objektets attribut.

### Self

Inom klassens metoder, inklusive `__init__`, används `self` för att referera till det aktuella objektet. Det är genom `self` som vi kan komma åt och modifiera objektets attribut och metoder.

{% alert "info" %}
Namnet `self` är unikt för Python. I många andra programmeringsspråk används `this` istället.
{% endalert %}







