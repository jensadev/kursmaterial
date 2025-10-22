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
greeting = "Hej, " + name
```

I exemplet ovan så visar vi hur vi kan utföra matematiska operationer på heltal och flyttal, samt hur vi kan kombinera strängar för att skapa en hälsningsfras.
Men vad händer om vi försöker kombinera olika datatyper på fel sätt? Till exempel, vad händer om vi försöker lägga ihop en sträng och ett tal?

```python
# Felaktig kombination av datatyper
result = name + age  # Detta kommer att orsaka ett fel
```

Men vi kan i vissa fall använda strängar i matematiska uttryck, men resultatet blir inte vad vi kanske förväntar oss.

```python
phrase = "Na"
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
name = input("Vad heter du? ")
print("Hej, " + name + "!")
```

Vi kan även behöva konvertera den inmatade texten till en annan datatyp, till exempel ett heltal eller flyttal, om vi vill använda det i matematiska beräkningar. För att göra detta kan vi använda funktionerna `int()` och `float()`.

```python
age = int(input("Hur gammal är du? "))
next_year_age = age + 1
print("Nästa år kommer du att vara " + str(next_year_age) + " år gammal.")
```

### Omvandling mellan datatyper

I exemplet ovan så använde vi funktionen `int()` för att konvertera den inmatade texten till ett heltal, så att vi kunde lägga till 1 för att räkna ut användarens ålder nästa år. Vi använde också funktionen `str()` för att konvertera det beräknade värdet tillbaka till en sträng, så att vi kunde skriva ut det tillsammans med annan text.

{% alert "info" %}
Det är viktigt att komma ihåg att input alltid returnerar en sträng, så om vi vill använda inmatad data i matematiska operationer måste vi konvertera den till rätt datatyp först.
{% endalert  %}

### Utökad tilldelning

I exemplet ovan så använde vi operatorn `+` för att lägga ihop två värden och sedan tilldela resultatet till en ny variabel `next_year_age`. I Python kan vi också använda utökad tilldelning för att göra detta på ett mer kompakt sätt.

```python
age = 25
age += 1  # Detta är samma som age = age + 1
print("Nästa år kommer du att vara " + str(age) + " år gammal.")
```

Detta fungerar för alla aritmetiska operatorer, till exempel +, -, *, /, och %.

## Operatorer

I programmering använder vi olika operatorer för att utföra operationer på variabler och värden. Här är några vanliga operatorer i Python (men även i många andra programmeringsspråk):

| Typ | Operator |
|---|---|
| Aritmetiska operatorer | `+`, `-`, `*`, `/`, `%`, `**`, `//` |
| Tilldelningsoperatorer | `=`, `+=`, `-=`, `*=`, `/=` |
| Jämförelseoperatorer | `==`, `!=`, `>`, `<`, `>=`, `<=` |
| Logiska operatorer | `and`, `or`, `not` |

I exemplena ovan har vi redan sett några av dessa operatorer i användning. Operatorerna hjälper oss att manipulera och jämföra data i våra program.

```python
x = 10
y = 5
sum = x + y
print(f"Summan av {x} och {y} är {sum}.")
```

{% alert "info" %}
När du använder en f-string (som i exemplet ovan) kan du direkt infoga variabler och uttryck inom strängen genom att använda `{}`. Detta gör det enklare att formatera utskrifter.
{% endalert %}

Vi kommer att lära oss mer om operatorer och deras användning avsnitt.

## Testfrågor

1. Vad är en variabel i programmering?
2. Kan du ge tre exempel på datatyper i Python?
3. Vad händer om du försöker lägga ihop en sträng och ett tal i Python?
4. Hur tilldelar du värdet 42 till en variabel som heter `answer`?

## Övningar

Skriv ett program där användaren får mata in sitt namn och ålder. Programmet ska sedan skriva ut en hälsning som inkluderar både namnet och åldern.
