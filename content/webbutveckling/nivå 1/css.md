---
title: CSS - vad är det?
summary: CSS är ett språk där vi kan beskriva hur HTML-element ska visas på skärmen.
tags: ["css"]
eleventyNavigation:
    key: css - vad är det?
    parent: webbutveckling
    order: 2
---

## Introduktion

Cascading Style Sheets (CSS) är ett stilmallsspråk (eng. stylesheet language) som används för att beskriva hur HTML-element ska visas på skärmen. Det är med andra ord CSS som gör att webbsidor inte bara är text utan även har färger, typsnitt, layouter och mycket mer.

I det här avsnittet ska vi titta lite på hur vi kan introducera CSS genom den HTML vi skrev i förra avsnittet.

### Inbäddad CSS

Det finns flera sätt att använda CSS på en webbsida. Ett sätt är att skriva CSS direkt i HTML-dokumentet, detta kallas för inbäddad CSS (eng. embedded CSS). Det görs genom att använda `<style>`-elementet i `<head>`-delen av HTML-dokumentet.

Öppna `index.html` som du skapade i förra avsnittet och lägg till följande kod i `<head>`-delen:

{% filename "index.html" %}
```html
<head>
    <style>
        body {
            font-family: sans-serif;
            color: #333;
        }
    </style>
</head>
```

Om du nu sparar filen och uppdaterar webbläsaren så kommer texten att visas med typsnittet sans-serif och färgen #333 (mörkgrå).

## Centrera innehållet på en sida

En väldigt viktig del i en layout är att göra innehållet tillgängligt och lättläst. Ett sätt att göra detta är att centrera innehållet på sidan och begränsa bredden på innehållet. Det handlar inte om att centrera text, något som gör den svårläst, utan att centrera hela innehållsytan.

Lägg till följande CSS i `<style>`-delen i `index.html`:

{% filename "index.html" %}
```html
<head>
    <style>
        body {
            max-width: 52rem;
            margin-inline: auto;
        }
    </style>
</head>
```

Här använder vi `max-width` för att begränsa bredden på innehållet till 52 rem (ungefär 832 pixlar om standardfontstorleken är 16 pixlar). Vi använder även `margin-inline: auto;` för att centrera innehållet horisontellt på sidan.
