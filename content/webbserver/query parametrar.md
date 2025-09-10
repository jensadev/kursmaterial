---
title: Query parametrar
eleventyNavigation:
    key: query parametrar
    parent: webbserver
    order: 6
---

## Query parametrar

För att skicka data till servern så kan vi använda query parametrar. Query parametrar skickas i URL:en och kan användas för att skicka data till servern.

{% filename "server.js" %}
```js
app.get("/search", (req, res) => {
  const query = req.query.q
  res.send(`You searched for: ${query}`)
})
```

För att skicka en query parameter så skriver du `?` efter URL:en och sedan namnet på query parametern och värdet.

```
http://localhost:3000/search?q=hello
```

Vi kan sedan skapa en sök ruta i vår nunjucks fil.

{% filename "views/search.njk" %}
```html
<form action="/search" method="GET">
  <input type="text" name="q">
  <button type="submit">Search</button>
</form>
```

Kom ihåg att query parametrar är synliga i URL:en och ska inte användas för att skicka känslig data. Det är även viktigt att validera data som skickas från användaren.

**Lita aldrig på data som skickas från användaren!**

## Logging

För att logga fel så kan vi använda ett paket som heter `morgan`. Morgan är ett middleware som används för att logga request och response.

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

Nu loggas alla request och response i konsolen.

## Datastrukturer, objekt och json

För att simulera en databas så kommer vi att använda oss av en array med objekt. Vi kommer att skapa en array med objekt som innehåller information om filmer.

{% filename "server.js" %}
```js
const movies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999
  },
  {
    id: 2,
    title: "Inception",
    year: 2010
  }
]
```

För att skicka data från servern så kan vi använda `response.json()` metoden. En route för att hämta samtliga filmer kan se ut så här.

{% filename "server.js" %}
```js
app.get("/movies", (req, res) => {
  res.json(movies)
})
```

För att hämta en specifik film så kan vi använda `request.params` för att hämta id:t på filmen.

{% filename "server.js" %}
```js
app.get("/movies/:id", (req, res) => {
  const id = req.params.id
  const movie = movies.find(movie => movie.id === Number(id))
  res.json(movie)
})
```

## Middleware

Middleware är funktioner som körs innan eller efter en route. Middleware används för att utföra uppgifter som att logga request och response, validera data, autentisera användare och mycket mer.

För att skapa en middleware så skapar vi en funktion som tar tre parametrar, `req`, `res` och `next`. `next` är en funktion som används för att fortsätta till nästa middleware eller route.

För att skapa en 404 middleware så kan vi skapa en funktion som ser ut så här.

{% filename "server.js" %}
```js
function notFound(req, res, next) {
  res.status(404)
  res.send("404 Not Found")
}
```

För att använda en middleware så lägger vi till den i vår express app med `app.use()` metoden.

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

## Search route

Vi skapade en sökruta som skickar data till servern med en query parameter. Vi skapade en route som tar emot query parametern och skickar tillbaka en respons.

{% filename "routes/index.js" %}
```js
router.get("/search", (req, res) => {
  const query = req.query.q
  res.send(`You searched for: ${query}`)
})
```

Vi skapade även en sökruta i vår nunjucks fil.

{% filename "search.njk" %}
```html
<form action="/search" method="GET">
  <input type="text" name="q">
  <button type="submit">Search</button>
</form>
```

Vi kan utöka det med att faktiskt söka.
Vi skapade en sökning i en array med filter metoden.
Här är ett exempel där vi söker efter filmer som innehåller söksträngen.
Filmerna är en array med objekt som innehåller titel och år. Den ser ut som följande:

{% filename "routes/index.js" %}
```js
const movies = [
  {
    title: "The Matrix",
    year: 1999
  },
  {
    title: "Inception",
    year: 2010
  }
]
```

{% filename "routes/index.js" %}
```js
router.get("/search", (req, res) => {
  const query = req.query.q
  const results = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
  res.render("search.njk", { results })
})
```

Testa!

## POST route

För att skicka data till servern så kan vi använda en POST route. En POST route används för att skicka data till servern. Vi kan skapa en POST route med `app.post()` metoden.

För att skapa en POST route så skapar vi en form i vår nunjucks fil som skickar data till servern med en POST request.

{% filename "views/search.njk" %}
```html
<form action="/movies" method="POST">
  <input type="text" name="title">
  <input type="number" name="year">
  <button type="submit">Add Movie</button>
</form>

```

Vi skapar en POST route som tar emot data från formuläret och lägger till filmen i vår array med filmer.

{% filename "routes/index.js" %}
```js
router.post("/movies", (req, res) => {
  const title = req.body.title
  const year = req.body.year
  const id = movies.length + 1
  const movie = { id, title, year }
  movies.push(movie)
  res.redirect("/movies")
})
```

För att använda `req.body` så behöver vi använda ett middleware som heter `express.json()`. `express.json()` används för att tolka JSON data som skickas från klienten.

För att använda `express.json()` så lägger vi till det i vår express app, redigera `server.js` och lägg till följande kod.

{% filename "server.js" %}
```js
app.use(express.json())
```

