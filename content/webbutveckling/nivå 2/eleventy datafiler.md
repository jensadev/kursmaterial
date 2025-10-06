---
title: Eleventy datafiler
tags: ["eleventy", "11ty", "nunjucks"]
summary: I eleventy kan vi använda oss av datafiler för att separera innehåll från presentation och skapa dynamiska mallar.
eleventyNavigation:
    key: eleventy datafiler
    parent: webbutveckling
    order: 13
---

## Datafiler

Eleventy har stöd för datafiler som låter dig separera innehåll från presentation. Datafiler kan vara i format som JSON, JavaScript eller YAML och används för att tillhandahålla data som kan användas i dina mallar. Det blir likt de `collections` vi lärde oss om i föregående avsnitt.

Datafilerna skapar du i en specifik mapp som heter `_data` i roten av ditt projekt. Skapa mappen:

```bash
mkdir _data
```

Skapa sedan en fil i den mappen som heter `site.json`. I denna fil kan vi lägga till allmän data som vi vill använda på vår webbplats, till exempel webbplatsens namn och beskrivning.

{% filename "_data/site.json" %}
```json
{
    "name": "Min Eleventy Webbplats",
    "description": "En enkel webbplats skapad med Eleventy"
}
```

Vi kan nu använda denna data i våra mallar. Öppna `layout.njk` och lägg till webbplatsens namn i `<title>`-taggen och beskrivningen i `<body>`.

{% filename "_includes/layout.njk" %}
{% raw %}
```html
<head>
    <title>{{ site.name }} - {{ title }}</title>
</head>
<body>
    <header>
        <h1>{{ site.name }}</h1>
        <p>{{ site.description }}</p>
    </header>
    {{ content | safe }}
</body>
```
{% endraw %}

Spara filen och uppdatera din webbläsare. Du bör nu se webbplatsens namn och beskrivning på varje sida.

### Datafil för navigering

Vi kan även skapa en datafil för att hantera navigeringen på vår webbplats. Skapa en ny fil i `_data`-mappen som heter `navigation.json`.

{% filename "_data/navigation.json" %}
```json
[
    { "title": "Hem", "url": "/" },
    { "title": "Blogg", "url": "/posts/" },
    { "title": "Om", "url": "/about/" }
]
```

Vi kan nu använda denna navigationsdata i vår layout för att skapa en navigeringsmeny. Det gör vi genom att kombinera det vi lärt oss om datorfiler och hur vi skriver loopar i Nunjucks. Öppna `layout.njk` och lägg till följande kod i `<body>`-sektionen, kanske ovanför {% raw %}`{{ content }}`{% endraw %}.

{% filename "_includes/layout.njk" %}
{% raw %}
```html
<nav>
    <ul>
    {% for item in navigation %}
        <li><a href="{{ item.url }}">{{ item.title }}</a></li>
    {% endfor %}
    </ul>
</nav>
``` 
{% endraw %}

Spara filen och uppdatera din webbläsare. Du bör nu se en navigeringsmeny med länkar till Hem, Blogg och Om.

### Include

Föregående exempel med navigationen är ett utmärkt exempel på när vi kan använda includes. Om vi har en del av vår layout som återkommer på flera sidor, som en navigeringsmeny eller en sidfot, kan vi skapa en separat fil för denna del och inkludera den i vår layout. Skapa en ny fil i `_includes`-mappen som heter `nav.njk`.

Flytta sedan innehållet för navigationsmenyn från `layout.njk` till `nav.njk`.

{% filename "_includes/nav.njk" %}
{% raw %}
```html
<nav>
    <ul>
    {% for item in navigation %}
        <li><a href="{{ item.url }}">{{ item.title }}</a></li>
    {% endfor %}
    </ul>
</nav>
```
{% endraw %}

Vi kan nu inkludera denna fil i vår layout med hjälp av Nunjucks {% raw %}`{% include %}`{% endraw %}-taggen. Öppna `layout.njk` och ersätt navigationskoden med följande rad:

{% filename "_includes/layout.njk" %}
{% raw %}
```html
{% include "nav.njk" %}
```
{% endraw %}

Spara filen och uppdatera din webbläsare. Du bör fortfarande se navigeringsmenyn på din webbplats.

### Testfrågor

1. Vad är en datafil i Eleventy och hur används den?
2. Hur kan du skapa en navigeringsmeny med hjälp av datafiler och includes?
3. Vad är fördelen med att använda includes i din layout?
4. Hur kan du använda samlingar för att hantera relaterat innehåll på din webbplats?
