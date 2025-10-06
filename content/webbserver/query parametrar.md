---
title: Query parametrar
summary: I denna del lär vi oss hur vi kan använda query parametrar för att skicka data till servern. Vi går även igenom hur vi kan använda middleware för att logga requests och hantera 404 sidor.
tags: ["query", "params", "express", "javascript", "middleware", "routes", "logging"]
eleventyNavigation:
    key: query parametrar
    parent: webbserver
    order: 6
---
*[parameter]: En parameter är en variabel som skickas till en funktion eller metod. I webbutveckling används parametrar ofta för att skicka data från klienten till servern.
*[query]: En query är en fråga som skickas till en databas eller server för att hämta data. I webbutveckling används query parametrar för att skicka data från klienten till servern.
*[endpoint]: En endpoint är en URL som används för att skicka eller hämta data från servern. En endpoint består av en HTTP metod och en URL.
*[middleware]: Middleware är funktioner som körs innan eller efter en route. Middleware används för att utföra uppgifter som att logga request och response, validera data, autentisera användare och mycket mer.
*[tvätta]: Att tvätta data innebär att rensa data som skickas från användaren för att förhindra skadlig kod och säkerställa att datan är i rätt format.
*[validera]: Att validera data innebär att kontrollera att datan som skickas från användaren är i rätt format och innehåller rätt värden.

## Introduktion

För att skicka data till servern så kan vi använda query parametrar. Query parametrar skickas i URL:en och kan användas för att skicka data till servern.

Vi kan testa detta genom att skriva en route som svarar med en personlig hälsning baserat på en query parameter. Vi får tillgång till query parametrar genom `request.query`.

{% filename "server.js" %}
{% raw %}
```js
app.get("/greeting", (req, res) => {
    const query = req.query.name
    res.send(`Var hälsad, ${query}!`)
})
```
{% endraw %}

För att skicka en query parameter så skriver du `?` efter URL:en och sedan namnet på query parametern och värdet.

```
http://localhost:3000/greeting?name=Frums
```

{% alert "info" %}
Kom ihåg att query parametrar är synliga i URL:en och ska inte användas för att skicka känslig data. Det är även viktigt att validera data som skickas från användaren.
{% endalert %}

Vi kan sedan skapa ett formulär i vår nunjucks fil som skickar en query parameter till servern.

{% filename "views/greeting.njk" %}
{% raw %}
```html
<form action="/greeting" method="GET">
    <input type="text" name="name" placeholder="Skriv ditt namn...">
    <button type="submit">Skicka</button>
</form>

<h1>Var hälsad, {{ name }}!</h1>
```
{% endraw %}

Vi kan nu använda denna template både för att visa formuläret och hälsningen. Vi behöver bara skicka med `name` variabeln när vi renderar templaten.

{% filename "server.js" %}
```js
app.get("/greeting", (req, res) => {
    const name = req.query.name || ""
    res.render("greeting.njk", { name })
})
```

Med denna ändring behöver vi inte längre skriva in query parametern i URL:en manuellt, utan vi kan använda formuläret för att skicka den. Vad användaren skriver in i formuläret kommer att visas i hälsningen.

{% alert "warning" %}
<strong>Lita aldrig på data som skickas från användaren!</strong>

Den data som användaren skickar kan vara skadlig och kan användas för att attackera din server. Det är viktigt att alltid validera och tvätta data som skickas från användaren.
{% endalert %}

## Logging

För att logga requests till servern, parametrar och fel så kan vi använda ett paket som heter `morgan`. Morgan är ett middleware som används för att logga request och response i konsolen. Att kunna se vad som händer i servern är viktigt för att kunna felsöka och förstå hur servern används.

Installera morgan genom att köra:

```bash
npm install morgan
```

För att använda morgan så lägger vi till följande kod i vår server fil.

{% filename "server.js" %}
```js
import morgan from "morgan"
// viktigt att följande rad kommer efter const app = express()
app.use(morgan("dev"))
```

Nu loggas alla request och response i konsolen. Du kan testa det genom att göra en request till servern.

## Använda middleware för 404 sida

När vi nu börjar använda params och query så är det viktigt att hantera fel. Om en användare försöker hämta en film som inte finns så vill vi skicka tillbaka en 404 sida. Detta kan vi göra med hjälp av middleware.

### Middleware

Middleware är funktioner som körs innan eller efter en route. Middleware används för att utföra uppgifter som att logga request och response, validera data, autentisera användare och mycket mer.

För att skapa en middleware så skriver vi en funktion som tar tre parametrar, `req`, `res` och `next`. `next` är en funktion som används för att fortsätta till nästa middleware eller route.

För en 404 middleware så redigera din `server.js` fil och lägg till följande kod.

{% filename "server.js" %}
```js
function notFound(req, res, next) {
  res.status(404)
  res.send("404 Not Found")
}
```

För att använda en middleware så lägger vi till den i vår express app med `app.use()` metoden. Gör detta längst ned i filen innan `app.listen()`.

{% filename "server.js" %}
```js
app.use(notFound)
```

Nu kommer `notFound` middleware att köras om ingen route matchar.

## Routes

Routes används för att skapa olika endpoints i din express app. En route består av en HTTP metod och en URL. En endpoint är en URL som används för att skicka eller hämta data från servern.

För att skapa en route så använder vi `app.get()` eller mer specifikt så använder vi express router för att skapa en route.

För att separera routes från vår server fil så kan vi skapa nya filer för våra routes i en mapp som heter `routes`.

För att samla våra index routes så kan vi skapa en fil som heter `index.js` i `routes` mappen.

Skapa en mapp som heter `routes` med `mkdir`. Skapa en fil som heter `index.js` i `routes` mappen och lägg till följande kod.

{% filename "routes/index.js" %}
```js
import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello from index route")
})

export default router
```

När vi har routes i separata filer så måste vi i routes filen importera express och skapa en router med `express.Router()`.
Vi exporterar sedan router objektet med `export default router`.

För att använda routes i vår server fil så importerar vi routes filen och använder `app.use()` metoden för att använda routern.

{% filename "server.js" %}
```js
import indexRouter from "./routes/index.js"

app.use("/", indexRouter)
```

Nu är våra routes separerade från server filen. Det ger oss en tydligare struktur och gör det enklare att läsa och underhålla koden.

## Testfrågor

1. Vad är en query parameter och hur används den i en URL?
2. Hur kan du hämta query parametrar i en Express route?
3. Vad är middleware i Express och hur används det?
4. Vad är fördelarna med att separera routes i olika filer?

## Kod 

Koden för den här delen finns i följande commit på [GitHub](https://github.com/jensadev/wsp1-kurs/commit/012991d8444fba10a67d1928cbc1495ce5ec0e44)
