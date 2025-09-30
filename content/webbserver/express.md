---
title: Express
summary: Lär dig grunderna i Express, hur du skapar en webbserver och hanterar statiska filer.
tags: ["express", "javascript"]
eleventyNavigation:
    key: express
    parent: webbserver
    order: 3
---

*[API]: Application Programming Interface, ett gränssnitt för att kommunicera mellan olika programvaror.
*[ramverk]: En uppsättning verktyg och bibliotek som underlättar utveckling av applikationer.
*[HTTP]: Hypertext Transfer Protocol, ett protokoll för att överföra data på webben.
*[port]: En port är en kommunikationsändpunkt som används för att identifiera en specifik process eller tjänst på en dator.
*[URL]: Uniform Resource Locator, en adress som används för att hitta resurser på webben.

# Express

I förra delen så skrev vi Hello World i node.js. Nu ska vi bygga vidare på det och skapa en webbserver med [Express](https://expressjs.com/).

Express är ett ramverk(framework) för node.js som gör det enklare att bygga webbapplikationer och API:er. Det är ett av de mest populära ramverken för node.js och används av många stora företag.

Det här handlar alltså om att lära sig använda Express i Javascript. Kom ihåg att din grundläggande programmeringskunskap är viktigt för att förstå Javascript. Express handlar till stor del om att lära sig använda ramverket och dess funktioner, snarare än att lära sig Javascript i sig. Du kan tänka på det som att lära sig använda random modulen i Python.

## Installera Express

Vi kommer att installera Express i samma projekt/repo som tidigare. Om du inte har ett projekt se avsnitt om [Node](../node).

För att installera Express så kör vi följande kommando i terminalen:

{% alert "warning" %}
Du måste ha kört <code>npm init -y</code> för att skapa en <code>package.json</code> fil innan du kan installera Express.
{% endalert %}

```bash
npm install express
```
Nu har vi installerat Express och kan börja använda det i vårt projekt.

## Skapa en Express server

En Express server är en webbserver som kan hantera HTTP-förfrågningar(eng. requests) och skicka svar(eng. response) tillbaka till klienten. För att skapa en Express server så behöver vi först importera Express och sedan skapa en instans av det. Vi gör detta genom att använda den importerade funktionen `express()`. Genom att anropa denna funktion skapar vi en ny Express-applikation som vi sparar i en constant som vi kallar `app`.

{% filename "server.js" %}
```js
import express from "express" // ESM
const app = express()
```
Nu har vi skapat en Express app som vi kan använda för att bygga vår server. I app finns ett stort antal metoder och egenskaper som vi kan använda för att hantera HTTP-förfrågningar och skicka svar tillbaka till klienten.

För att starta servern så använder vi `app.listen()` metoden. Den tar emot en port som argument och startar servern på den porten.

{% filename "server.js" %}
```js
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
```

Nu har vi skapat en Express server som lyssnar på port 3000. Du kan ändra porten genom att sätta miljövariabeln `PORT` eller så använder du standardporten 3000.

## Ta emot och skicka svar från servern

{% alert "info" %}
En <strong>request</strong> är en förfrågan från en klient (till exempel en webbläsare) till en server.

En <strong>response</strong> är svaret från servern tillbaka till klienten.
{% endalert %}

För att skicka svar från servern så använder vi `app.get()` metoden. Den tar emot en URL och en callback-funktion som körs när en GET-förfrågan görs till den URL:en.

{% filename "server.js" %}
```js
app.get("/", (req, res) => {
  res.send("Hello World!")
})
```

Nu har vi skapat en route som svarar med "Hello World!" när vi gör en GET-förfrågan till root-URL:en, det vill säga "/", som är startsidan på vår server. Urlen är det som kommer efter domännamnet, så i det här fallet `http://localhost:3000/`.

Starta servern genom att köra `npm run dev` i terminalen. Detta kommer att starta servern med Nodemon, vilket innebär att den automatiskt startar om när du gör ändringar i koden.

```bash
npm run dev
```

För att testa servern så kan du öppna en webbläsare och gå till `http://localhost:3000`. Du bör se "Hello World!" i webbläsaren.

{% alert "info" %}
Den kod du just skrev kan du använda som grund för alla dina express projekt. Det är viktigt att du förstår hur Express fungerar och hur du kan använda det för att bygga webbapplikationer och API:er.
{% endalert %}

### Statiska filer med public mapp

För att skicka statiska filer så används en mapp som heter public. Med statiska filer menas filer som inte ändras, som bilder, css och javascript filer. Dessa filer kan vi använda för att bygga en webbplats.
För att använda en public mapp så behöver vi konfigurera Express att använda den mappen för statiska filer. Vi kan göra det med `express.static()` middleware.

{% filename "server.js" %}
```js
app.use(express.static("public"))
```

För att sedan använda denna konfiguaration så skapar vi en mapp som heter `public` i vår projektmapp. Skapa mappen med kommandot `mkdir public` i terminalen.

### HTML

Nu kan vi skapa en HTML-fil i public mappen. Skapa en fil som heter `index.html` i public mappen. Kör igång en grundläggande HTML struktur med `html:5` i VSCode och lägg sedan till följande kod i `index.html`:

{% filename "public/index.html" %}
```html
<h1>Hello World!</h1>
<p>Welcome to my Express server!</p>
```

Nu kan vi öppna `http://localhost:3000/` i webbläsaren och se vår HTML-fil. Notera att vi inte behöver ange `/public` i URL:en eftersom Express automatiskt letar efter filer i public mappen när vi använder `express.static()` middleware.

#### Middleware

Middleware är funktioner som körs innan eller efter en route. Middleware används för att utföra uppgifter som att logga request och response, validera data, autentisera användare och mycket mer.


### CSS

Nu kan vi lägga till en CSS-fil som vi sedan kan använda i vår HTML-fil. Skapa en fil som heter `style.css` i public mappen. Lägg till följande kod i `style.css`:

{% filename "public/style.css" %}
```css
body {
  font-size: 1.2rem;
  font-family: sans-serif;
}
```

För att använda css filen i din html fil så lägger du till en länk i head taggen.

{% filename "public/index.html" %}
```html
<link rel="stylesheet" href="/style.css">
```

Viktigt att notera och tänka på här är att vi inte behöver ange `/public` i href attributet eftersom Express automatiskt letar efter filer i public mappen när vi använder `express.static()` middleware.

## Sammanfattning

I den här delen har vi lärt oss hur vi kan skapa en Express server, skicka svar från servern, använda statiska filer och skapa en HTML-fil med CSS. Vi har även lärt oss om middleware och hur vi kan använda det för att utföra uppgifter innan eller efter en route.

## Testfrågor

1. Vad är Express och varför används det?
2. Vad är en request och response?
3. Förklara vad som menas med statiska filer.
4. Vad är en port och hur används den i en webbserver?