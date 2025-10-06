---
title: Att spara
summary: I alla program behöver vi kunna spara data, värden. För att göra det använder vi variabler.
tags: ["python", "variabler", "datatyper"]
eleventyNavigation:
    key: att spara
    parent: programmering
    order: 3
---

## Variabler

För att spara värden i datorprogram så använder vi variabler. En variabel är ett namn som refererar till ett värde. Vi kan använda variabler för att spara olika typer av data, till exempel text eller tal.

* En variabel är som en låda där vi kan lagra information. 
* Precis som en låda kan innehålla olika saker, kan en variabel innehålla olika typer av data, som siffror, text eller andra värden. 
* Vi kan namnge lådan (variabeln) och använda namnet för att komma åt eller ändra innehållet.

```python
name = "Alice"
age = 30
```

I exemplet ovan har vi skapat två variabler: `name` som innehåller texten "Alice" och `age` som innehåller talet 30. Vi kan sedan använda dessa variabler i vårt program för att utföra olika operationer, som att skriva ut dem på skärmen eller använda dem i beräkningar.

```python
print("Name:", name)
print("Age:", age)
```

I exemplet ovan så använder vi en funktion som heter `print` för att skriva ut värdena av variablerna `name` och `age` på skärmen.

## Olika datatyper

Varje variabel har en datatyp som bestämmer vilken typ av värde den kan innehålla. I python finns det fyra grundläggande datatyper som vi ofta använder:

* **Heltal (int)**: Används för att lagra hela tal, till exempel 1, 42 eller -7.
* **Flyttal (float)**: Används för att lagra decimaltal, till exempel 3.14 eller -0.001.
* **Sträng (str)**: Används för att lagra text, till exempel
    "Hello, World!" eller "Python".
* **Boolesk (bool)**: Används för att lagra sanningsvärden, antingen `True` eller `False`.

Vi kan skapa variabler av olika datatyper genom att tilldela dem värden av den önskade typen. Här är några exempel:

```python
age = 25
height = 1.75
name = "Bob"
is_student = True
```

De olika datatyper har olika egenskaper och det styr hur vi kan använda dem i våra program. Till exempel kan vi utföra matematiska operationer på heltal och flyttal, medan strängar kan kombineras eller manipuleras på olika sätt.

```python
# Matematiska operationer
sum = age + 5
average = (age + 30) / 2
# Strängmanipulation
greeting = "Hello, " + name
```

I exemplet ovan så visar vi hur vi kan utföra matematiska operationer på heltal och flyttal, samt hur vi kan kombinera strängar för att skapa en hälsningsfras.
Men vad händer om vi försöker kombinera olika datatyper på fel sätt? Till exempel, vad händer om vi försöker lägga ihop en sträng och ett tal?

```python
# Felaktig kombination av datatyper
result = name + age  # Detta kommer att orsaka ett fel
```

Men vi kan i vissa fall använda strängar i matematiska uttryck, men resultatet blir inte vad vi kanske förväntar oss.

```python
phrase = "na"
print(phrase * 8 + " Batman!")
```

Att bygga strängar på detta sätt är bra att känna till och när vi slår ihop strängar så kallas det för konkatenering.

## Tilldelningssoperatorn, =

Att sätta ett värde på en variabel kallas för tilldelning. I python använder vi tecknet `=` för att tilldela ett värde till en variabel. Vänster om `=` skriver vi namnet på variabeln och höger om `=` skriver vi värdet som vi vill tilldela.

Det är viktigt att känna till språket kring programering för att kunna kommunicera kring det. När vi säger "sätt variabeln `x` till värdet 10" så menar vi att vi vill tilldela värdet 10 till variabeln `x` med hjälp av tilldelningsoperatorn `=`.

```python
x = 10
```

## Att läsa in data från användaren

Ibland vill vi att användaren av vårt program ska kunna mata in data. I Python kan vi använda funktionen `input()` för att läsa in text från användaren. Texten som användaren matar in kommer alltid att vara av datatypen sträng (str).

```python
name = input("What is your name? ")
print("Hello, " + name + "!")
```

Vi kan även behöva konvertera den inmatade texten till en annan datatyp, till exempel ett heltal eller flyttal, om vi vill använda det i matematiska beräkningar. För att göra detta kan vi använda funktionerna `int()` och `float()`.

```python
age = int(input("How old are you? "))
next_year_age = age + 1
print("Next year, you will be " + str(next_year_age) + " years old.")
```

## Testfrågor

1. Vad är en variabel i programmering?
2. Kan du ge tre exempel på datatyper i Python?
3. Vad händer om du försöker lägga ihop en sträng och ett tal i Python?
4. Hur tilldelar du värdet 42 till en variabel som heter `answer`?

## Övningar

Skriv ett program där användaren får mata in sitt namn och ålder. Programmet ska sedan skriva ut en hälsning som inkluderar både namnet och åldern.
