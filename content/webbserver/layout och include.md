---
title: Layout och includes
tags: ["layout", "includes", "nunjucks"]
eleventyNavigation:
    key: layout och includes
    parent: webbserver
    order: 5
---
*[templat]: En templat är en fördefinierad struktur eller mall som används för att skapa dokument, webbsidor eller andra typer av innehåll. Templat kan innehålla platshållare för variabler och dynamiskt innehåll som fylls i när templaten används.
*[objekt]: Ett objekt är en samling av egenskaper och värden som representerar en enhet eller koncept. I programmering används objekt för att organisera och strukturera data på ett meningsfullt sätt.

En av fördelarna med att arbeta med en templat-motor som Nunjucks är att vi kan återanvända kod för att skapa enhetliga sidor. Detta gör vi genom att använda layouts och includes.

## Layouts

Vi kan skapa en layout-fil som innehåller den gemensamma strukturen för våra sidor. Skapa en fil som heter `layout.njk` i `views` mappen och lägg till HTML-grundstrukturen i den filen. Använd emmet och skriv `html:5` för att snabbt skapa en grundläggande HTML-struktur.

Vi kan sedan använda oss av `{% raw %}{% block %}{% endraw %}` och `{% raw %}{% endblock %}{% endraw %}` för att definiera områden i layouten som kan fyllas med innehåll från andra filer. Materialet i dessa block kommer att ersättas med innehållet från de filer som använder layouten.

{% filename "views/layout.njk" %}
{% raw %}
```html
<head>
    <title>{{ title }}</title>
</head>
<body>
    {% block content %}{% endblock %}
</body>
```
{% endraw %}

I exemplet ovan har vi skapat ett block som heter `content`. Detta block kommer att fyllas med innehåll från andra filer som använder denna layout. Vi har även en variabel som heter `title` som vi kan använda för att sätta titeln på sidan.

## Använda layout

För att använda layouten i en annan fil så använder vi `{% raw %}{% extends "layout.njk" %}{% endraw %}` högst upp i filen. Detta talar om för Nunjucks att denna fil ska använda `layout.njk` som grund och utöka denna.

{% filename "views/index.njk" %}
{% raw %}
```html
{% extends "layout.njk" %}

{% block content %}
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
{% endblock %}
```
{% endraw %}

I exemplet ovan så använder vi `layout.njk` som layout och fyller `content` blocket med en rubrik och ett stycke. Vi använder även variablerna `title` och `message` för att sätta innehållet i rubriken och stycket.

### Variablerna och data från servern

För att skicka data från servern till vyn så använder vi `res.render()` metoden i vår route. Vi skickar med ett objekt som innehåller de variabler vi vill använda i vyn.

{% filename "routes/index.js" %}
```js
res.render("index", {
    title: "Hem",
    message: "Välkommen till min Express-server med Nunjucks!"
});
```

I exemplet ovan så skickar vi med ett objekt som innehåller två variabler: `title` och `message`. Dessa variabler kan vi sedan använda i vår `index.njk` fil.

## Includes

Includes används för att återanvända kod i flera filer. Vi kan skapa en fil som innehåller kod som vi vill återanvända och sedan inkludera den filen i andra filer med `{% raw %}{% include "filnamn.njk" %}{% endraw %}`.

Vi kan till exempel skapa en fil för navigationsmenyn som vi vill använda på flera sidor. Skapa en fil som heter `nav.njk` i `views` mappen och lägg till följande kod:

{% filename "views/nav.njk" %}
```html
<nav>
    <ul>
        <li><a href="/">Hem</a></li>
        <li><a href="/about">Om</a></li>
        <li><a href="/contact">Kontakt</a></li>
    </ul>
</nav>
```

Vi kan sedan inkludera denna fil i vår layout eller i andra filer med `{% raw %}{% include "nav.njk" %}{% endraw %}`.

{% filename "views/layout.njk" %}
{% raw %}
```html
<body>
    {% include "nav.njk" %}
    {% block content %}
    {% endblock %}
</body>
```
{% endraw %}

I exemplet ovan så inkluderar vi `nav.njk` i vår layout. Detta gör att navigationsmenyn kommer att visas på alla sidor som använder denna layout.

## Testfrågor

1. Vad är en layout och varför används det?
2. Hur skapar du en layout i Nunjucks?
3. Vad är ett block i Nunjucks och hur används det?
4. Vad är includes och varför används det?

## Kod

{% alert "info" %}
Även om koden finns att kopiera för avsnitten så rekommenderar jag att du skriver koden själv. Det är genom att skriva koden själv som du lär dig bäst.

Kör du fast eller det blir fel, använd koden på GitHub som referens, men prova först att lösa det själv.
<strong>Det gör inget att misslyckas, det är så vi lär oss.</strong>
{% endalert %}

Du kan hitta den uppdaterade koden för det här avsnittet på GitHub: [wsp1-kurs](https://github.com/jensadev/wsp1-kurs/commit/8bed379ee3e998d42c5c561a3ee95dc64bc0d4bc).


