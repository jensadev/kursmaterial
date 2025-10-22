---
title: Objektorienterad programmering (OOP)
summary: Objektorienterad programmering (OOP) är en programmeringsparadigm som använder "objekt" för att representera data och funktionalitet. OOP hjälper till att organisera kod på ett sätt som gör den mer hanterbar, återanvändbar och lättare att förstå.
tags: ["oop"]
eleventyNavigation:
    key: objektorienterad programmering (OOP)
    parent: programmering
    order: 20
---

## Introduktion

För att förstå objektorienterad programmering (OOP) kan vi börja med att tänka på hur vi ser världen omkring oss. Världen av olika objekt, som bilar, människor och byggnader. Varje objekt har sina egna egenskaper och beteenden. Om du tittar dig runt i rummet du befinner dig i just nu, vad ser du? Beskriv ett eller två av de föremålden du ser utifrån dess egenskaper (vad det är och vad det har) och dess beteenden (vad det kan göra eller vad som kan göras med det).

Detta är grunden för objektorienterad programmering. I OOP representerar vi verkliga objekt som "objekt" i vår kod, med deras egna egenskaper (attribut) och beteenden (metoder). Fundera på hur du kan representera de föremål du beskrev som objekt i ett programmeringsspråk.

Om du till exempel hade en penna framför dig, skulle dess egenskaper kunna vara färg, längd och märke, medan dess beteenden skulle kunna vara att skriva eller rita. I programmeringen benämns det attribut och metoder. Om du nu hade två olika pennor framför dig, skulle du kunna skapa två olika objekt av klassen "Penna", där varje objekt har sina egna unika attribut och kan utföra samma metoder.

### Klasser och objekt

Vi använder här objektet som en mall för att skapa en klass i programmeringsspråket. Du kan se på klassen som en ritning eller en mall för att skapa objekt. Klassen definierar vilka attribut och metoder som objekten av den klassen kommer att ha.

Objektet, Penna, är i det här fallet klassen eller en ritning som definierar alla pennor. Varje penna som skapas från denna klass kommer att ha samma attribut (färg, längd, märke) och metoder (skriva, rita), men med olika värden för dessa attribut.

### Skillnader mellan "vanlig" programmering och OOP

I procedurell (med det menas att programmet är uppbyggt av en sekvens av instruktioner som körs i tur och ordning) programmering (som du med största sannolikhet är bekant med sedan tidigare) är data och logik ofta separerade. I OOP kombineras data och logik i objekt.

Tänk dig att du skriver ett program för att dela ut pennor till elever i en skola. I en procedurell programmeringsstil skulle du kanske ha en lista över pennor och funktioner för att hantera dem. I OOP skulle du istället skapa en klass "Penna" med attribut och metoder, och sedan skapa objekt av denna klass för varje penna som delas ut.

Tänk här att du har en variabel som håller ett värde för pennan, som om den är utlånad eller inte. I en procedurell stil skulle du behöva hantera detta med separata funktioner och variabler. I OOP skulle du kunna skapa en metod inom klassen "Penna" som hanterar utlåningen av pennan, vilket gör koden mer organiserad och lättare att förstå.

Med objektorienterad programmering skapar vi alltså en grundläggande struktur för att organisera och hantera komplexa system genom att modellera dem som objekt med egna attribut och beteenden. Syftet med detta är att göra koden mer modulär, återanvändbar och lättare att underhålla.

## Praktisk tillämpning

Låt oss säga att du har ett större projekt som hanterar inventarier för ett bibliotek. I en procedurell programmeringsstil skulle du ha:

1. En lista med böcker, där varje bok är en dictionary med olika attribut, `bok1 = {"titel": "Sagan om Ringen", "författare": "Tolkien", "utlånad": False}`.
2. Separata funktioner: `låna_ut_bok(bok)`, `lämna_tillbaka_bok(bok)`.

Hur skulle du omvandla detta till en objektorienterad design? Vilken klass skulle du skapa, och vilka attribut och metoder skulle den ha?

I en objektorienterad design skulle du skapa en klass som heter `Bok`. Denna klass skulle ha attribut som `titel`, `författare` och `utlånad`. Dessutom skulle den ha metoder som `låna_ut()` och `lämna_tillbaka()`.

### Vinster med omvandling till OOP

I den ursprungliga, procedurella koden kunde du av misstag ha anropat `låna_ut_bok(bok)` på en bok och sedan glömt att uppdatera `utlånad`-attributet på en annan plats i koden. Du kanske också skulle behöva skriva duplicerad kod för att se till att böckernas författare och titlar hanteras korrekt.

Genom att flytta egenskaper och beteenden in i en klass kan du säkerställa att varje bok-objekt hanterar sin egen status och logik. Detta kallas inkapsling och är en av de grundläggande principerna i OOP. Det gör koden mer robust och minskar risken för fel.

## Sammanfattning

Nu har vi titta lite på grunderna i objektorienterad programmering (OOP) och hur det skiljer sig från procedurell programmering. Vi har även sett hur vi kan modellera verkliga objekt som klasser och objekt i vår kod, vilket hjälper oss att organisera och hantera komplexa system på ett mer effektivt sätt.

Att använda OOP är en strukturell skillnad i din kod och det påverkar hur du tar dig an och arbetar med problem i programmering. Objektorienterad programmering kräver att du tänker hur du ska jobba innan du börjar koda, så det är ett annat arbetssätt. Så det kräver övning och tid för att bli bekväm med det.