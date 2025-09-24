---
title: Installation
summary: Installera
tags: ["python"]
eleventyNavigation:
    key: installation
    parent: programmering
    order: 2
---

*[kompilera]: Att översätta källkod till maskinkod  
*[interaktiv miljö]: En miljö där vi kan skriva och köra kod direkt  
*[path]: En lista med kataloger där operativsystemet letar efter program att köra  

# Installation

En förutsättning för att vi ska kunna programmera är att vi kan köra kod i en interaktiv miljö, till exempel en terminal eller någon form av online-miljö. Det kan även vara så att vi måste installera programvara för att kunna kompilera och köra koden.

I det här materialet kommer vi att använda Python som programspråk. Du kan köra Python i en interaktiv miljö online, som [online python](https://www.online-python.com), men för materialet är det bra att du installerar Python på din dator.

## Installera Python

* Ladda ned Python för din maskin från [python.org](https://www.python.org/).
* Kör installationsprogrammet.

{% alert "attention" %}
Kryssa i checkboxen för att lägga till Python i din dators path (du behöver sannolikt också välja "Disable path length limit").
{% endalert %}

När installationen är färdig ska du kunna starta Python terminalen.

1. Tryck ned ⊞ (windows tangenten)
2. Skriv python
3. Starta programmet (enter)

Du kan nu testa att skriva kod i terminalfönstret som kommer att tolkas av Python.

```python
print("Hello, World!")
Hello, World!
12 + 12
24
name = "Kursmaterial"
print(f"Hej, {name}!")
Hej, Kursmaterial!
```

Du kan nu avsluta Python terminalen genom att skriva `exit()` och trycka enter.

## Kontrollera installationen

För att testa om du installerat Python i din path, starta först Powershell eller cmd.
Skriv sedan python i terminalen för att starta Python. Om programmet finns i systemets path så kommer det att startas.

Om Python saknas i systemets path, så kan du lägga till det manuellt, eller installera om Python (kom ihåg checkboxen).