---
title: HTML - vad är det?
summary: HTML är standardmärkspråket för att skapa webbsidor och webbapplikationer.
tags: ["html"]
eleventyNavigation:
    key: html - vad är det?
    parent: webbutveckling
    order: 1
---

*[Element]: En del av ett HTML-dokument, som definieras av en starttagg, innehåll och en sluttagg.
*[tagg]: En del av HTML-koden som används för att skapa element. En tagg är omsluten av vinkelparenteser, t.ex. `<tagg>`.
*[Attribut]: Ytterligare information som kan läggas till i en tagg för att specificera egenskaper eller beteenden för ett element, t.ex. `class`, `id`, `src`, `href`.
*[HTML]: Hypertext Markup Language, standardmärkspråket för att skapa webbsidor och webbapplikationer.


## Introduktion

Hypertext Markup Language(HTML) är ett märkspråk som används för att märka upp webbsidor. HTML strukturerar upp text och märker upp den med taggar. Webbläsaren kan sedan tolka dessa taggar och visa innehållet.

HTML dokument är som ett träd av noder, där noderna är element, text eller bilder. Element är de byggstenar som används för att skapa en webbsida. Ett element representeras av en tagg, en tagg har en starttagg och en sluttagg. En tagg kan även ha attribut som ger ytterligare information om elementet.

```html
<h1>Det här är en rubrik</h1>
```

Öppna ett nytt dokument i VS Code och spara det som `index.html`. Skriv sedan följande kod i dokumentet:

{% filename "index.html" %}
```html
<h1>Hej på dig! Det här är en rubrik i en html fil.</h1>
```

Du kan nu öppna filen direkt genom att dubbelklicka på den i Utforskaren. Webbläsaren kommer då att öppna filen och visa texten. Det är ett fungerande sätt, men det är mycket bättre att använda sig av en utvecklingsserver.

{% alert "info" %}
I VS Code kan du installera ett tillägg som heter <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">Live Server</a>. Du kan installera det från sidan eller i VS Code, leta efter <strong>Extensions</strong> i vänstra menyn. När du installerat det kan du sedan starta servern genom att klicka på <strong>Go Live</strong> längst ner i högra hörnet. Nu kommer din webbläsare att öppna filen och den uppdateras automatiskt när du sparar ändringar i filen.
{% endalert %}

## Grundläggande HTML struktur

HTML är ett otroligt robust språk, det är alltså väldigt förlåtande. Du kan skriva HTML med flera fel är påhittade taggar och webbläsaren kommer ändå att visa något. Men för att skriva ett korrekt formulerat HTML dokument så finns det en grundläggande struktur att följa. Den ser ut så här:

{% filename "index.html" %}
```html
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Min första HTML-sida</title>
</head>
<body>
    <h1>Hej på dig! Det här text i en html fil.</h1>
</body>
</html>
```

Vad gör då de olika elementen?
* `<!DOCTYPE html>`: Denna rad talar om för webbläsaren att dokumentet är skrivet i HTML5.
* `<html lang="sv">`: Detta är rot-elementet för hela HTML-dokumentet, där vi även anger att språket är svenska med `lang="sv"`.
* `<head>`: Detta element innehåller metadata om dokumentet, alltså information till webbläsaren. Det visas inte på själva webbsidan.
* `<body>`: Detta element innehåller allt innehåll som visas på webbsidan, alltså allt som användaren ser.

{% alert "info" %}
Det absolut enklaste sättet att skriva all denna kod är i VS Code med hjälp av en inbyggd extension som heter Emmet. Prova att skriva "html" i dokumentet och du kommer se en förslag, välj det som heter `html:5` och tryck på Enter. Då kommer all grundläggande kod att skapas automatiskt.
{% endalert %}

## Vanliga HTML-element

Här är några vanliga HTML-element som du kommer att använda ofta:

* `<h1>` till `<h6>`: Rubriker, där `<h1>` är den viktigaste och `<h6>` är den minst viktiga.
* `<p>`: Stycke (eng. paragraph), används för att gruppera text.
* `<a>`: Länk, används för att skapa länkar till andra sidor.
* `<img>`: Bild, används för att infoga bilder.
* `<ul>` och `<ol>`: Oordnade och ordnade listor.

Hur kan du då använda dessa element för att skapa en enkel webbsida? Börja med HTML-grundstrukturen och lägg sedan till några element i `<body>`:

{% filename "index.html" %}
```html
<body>
    <h1>Min första webbsida</h1>
    <p>Det här är ett stycke text på min webbsida.</p>
    <h2>En underrubrik</h2>
    <p>Här är en länk till <a href="https://kursmaterial.jensa.dev">Kursmaterialet</a>.</p>
    <h2>En bild</h2>
    <img src="https://picsum.photos/200" alt="En beskrivande text för bilden">
    <h2>En lista</h2>
    <ul>
        <li>Första punkten</li>
        <li>Andra punkten</li>
        <li>Tredje punkten</li>
    </ul>
</body>
```

Här är det viktigt att innehållet hamnar inom `<body>`-taggarna. Se även till att alla element är på rätt ställe. Notera då även att vissa element, som `<img>`, inte har en sluttagg. Dessa kallas för självstängande taggar.

## Attribut

I exemplet ovan så har du sett några attribut, som `href` i `<a>`-taggen och `src` och `alt` i `<img>`-taggen. Attribut ger ytterligare information om ett element och placeras alltid i starttaggen. Attribut består av ett namn och ett värde, där namnet och värdet separeras med ett likhetstecken. Värdet ska alltid vara inom citattecken.

Det finns ett väldigt stort antal attribut och många av dem är kopplade till specifika element.

Vi kan titta på att skapa en till sida och länka till den från vår första sida. Skapa en ny fil i samma mapp som `index.html` och kalla den `about.html`. Skriv sedan följande kod i den nya filen:

{% filename "about.html" %}
```html
<head>
    <title>Om mig</title>
</head>
<body>          
    <h1>Om mig</h1>
    <p>Det här är en sida om mig.</p>
    <a href="index.html">Tillbaka till startsidan</a>
</body>
</html>
```

Här har vi skapat en ny sida med en rubrik, ett stycke text och en länk tillbaka till startsidan. Notera att länken använder `href`-attributet för att ange vilken sida som länken ska gå till.

{% alert "info" %}
I exemplet så ändrar vi dokumentets titel med texten i &lt;title&gt;-taggen. Denna titel visas i webbläsarens flik och är viktig för SEO (sökmotoroptimering). Jag har utelämnat &lt;head&gt;-taggens innehåll för att göra exemplet kortare.
{% endalert %}

Om du vill ändra hur en länk öppnas, kan du använda attributet `target`. Om du sätter `target="_blank"` så kommer länken att öppnas i en ny flik. Exempel:

```html
<a href="https://kursmaterial.jensa.dev" target="_blank">Kursmaterialet</a>
```

## Sammanfattning

Nu har du grunderna för att märka upp text med HTML. Du har lärt dig om den grundläggande strukturen för ett HTML-dokument, vanliga HTML-element och hur man använder attribut för att ge mer information om elementen.

Du bör nu ha skapat ett eller flera HTML-dokument och öppnat dem i en webbläsare.

## Testfrågor

1. Var är HTML för typ av språk?
2. Vad är skillnaden mellan en tagg och ett element?
3. Vad är syftet med `<head>`-elementet i ett HTML-dokument?
4. Hur använder du attribut och vad är deras syfte?