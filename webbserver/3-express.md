---
title: Express
eleventyNavigation:
    key: express
    parent: webbserver
---

# Express

I förra delen så skrev vi Hello World i Node.js. Nu ska vi bygga vidare på det och skapa en webbserver med Express.

Express är ett ramverk för Node.js som gör det enklare att bygga webbapplikationer och API:er. Det är ett av de mest populära ramverken för Node.js och används av många stora företag.

Det här handlar alltså om att lära sig använda Express i Javascript. Kom ihåg att din grundläggande programmeringskunskap är viktigt för att förstå Javascript. Express handlar till stor del om att lära sig använda ramverket och dess funktioner, snarare än att lära sig Javascript i sig.

## Installera Express

Vi kommer att installera Express i samma projekt som tidigare. Om du inte har ett projekt se avsnitt [2 hello_node](../2-hello_node).

För att installera Express så kör vi följande kommando i terminalen:

```bash
npm install express
```
Nu har vi installerat Express och kan börja använda det i vårt projekt.

## Skapa en Express server

En Express server är en webbserver som kan hantera HTTP-förfrågningar och skicka svar tillbaka till klienten. För att skapa en Express server så behöver vi först importera Express och sedan skapa en instans av det.
```js
import express from "express" // ESM
const app = express()
```
Nu har vi skapat en Express app som vi kan använda för att hantera HTTP-förfrågningar.

För att starta servern så använder vi `app.listen()` metoden. Den tar emot en port som argument och startar servern på den porten.

```js
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
```
Nu har vi en enkel Express server som lyssnar på port 3000. Du kan ändra porten genom att sätta miljövariabeln `PORT` eller så använder du standardporten 3000.

## Skicka svar från servern
För att skicka svar från servern så använder vi `app.get()` metoden. Den tar emot en URL och en callback-funktion som körs när en GET-förfrågan görs till den URL:en.

```js
app.get("/", (request, response) => {
  response.send("Hello World!")
})
```
Nu har vi skapat en route som svarar med "Hello World!" när vi gör en GET-förfrågan till root-URL:en ("/").

Starta servern genom att köra `npm run dev` i terminalen. Detta kommer att starta servern med Nodemon, vilket innebär att den automatiskt startar om när du gör ändringar i koden.

```bash
npm run dev
```

För att testa servern så kan du öppna en webbläsare och gå till `http://localhost:3000/`. Du bör se "Hello World!" i webbläsaren.

### Viktigt

Den kod du just skrev kan du använda som grund för alla dina express projekt. Det är viktigt att du förstår hur Express fungerar och hur du kan använda det för att bygga webbapplikationer och API:er.

### Statiska filer med public mapp

För att skicka statiska filer så används en mapp som heter public. Med statiska filer menas filer som inte ändras, som bilder, css och javascript filer. Dessa filer kan vi använda för att bygga en webbplats.
För att använda en public mapp så behöver vi konfigurera Express att använda den mappen för statiska filer. Vi kan göra det med `express.static()` middleware.

```js
app.use(express.static("public"))
```

För att sedan använda denna konfiguaration så skapar vi en mapp som heter `public` i vår projektmapp. Skapa mappen med kommandot `mkdir public` i terminalen.

### HTML

Nu kan vi skapa en HTML-fil i public mappen. Skapa en fil som heter `index.html` i public mappen. Kör igång en grundläggande HTML struktur med `html:5` i VSCode och lägg sedan till följande kod i `index.html`:

```html
<h1>Hello World!</h1>
<p>Welcome to my Express server!</p>
```

Nu kan vi öppna `http://localhost:3000/` i webbläsaren och se vår HTML-fil. Notera att vi inte behöver ange `/public` i URL:en eftersom Express automatiskt letar efter filer i public mappen när vi använder `express.static()` middleware.

#### Middleware

Middleware är funktioner som körs innan eller efter en route. Middleware används för att utföra uppgifter som att logga request och response, validera data, autentisera användare och mycket mer.


### CSS

Nu kan vi lägga till en CSS-fil som vi sedan kan använda i vår HTML-fil. Skapa en fil som heter `style.css` i public mappen. Lägg till följande kod i `style.css`:

```css
body {
  font-size: 1.2rem;
  font-family: sans-serif;
}
```

För att använda css filen i din html fil så lägger du till en länk i head taggen.

```html
<link rel="stylesheet" href="/style.css">
```

## Sammanfattning

I den här delen har vi lärt oss hur vi kan skapa en Express server, skicka svar från servern, använda statiska filer och skapa en HTML-fil med CSS. Vi har även lärt oss om middleware och hur vi kan använda det för att utföra uppgifter innan eller efter en route.
