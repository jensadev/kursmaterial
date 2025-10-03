---
title: En sökfunktion
summary: Nu kan vi använda det vi har lärt oss om Nunjucks och Express för att skapa en sökfunktion med query parameter.
tags: ["nunjucks", "express", "javascript", "query", "form"]
eleventyNavigation:
    key: en sökfunktion
    parent: webbserver
    order: 7
---

# En sökfunktion med query parameter

Lite vip just nu, jag skriver om det här avsnittet.

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

{% filename "routes/movies.js" %}
```js
app.get("/", (req, res) => {
  res.json(movies)
})
```

För att hämta en specifik film så kan vi använda `request.params` för att hämta id:t på filmen.

{% filename "routes/movies.js" %}
```js
app.get("/movies/:id", (req, res) => {
  const id = req.params.id
  const movie = movies.find(movie => movie.id === Number(id))
  res.json(movie)
})
```

För att använda routen så behöver vi lägga till den i vår server fil.

{% filename "server.js" %}
```js
import moviesRouter from "./routes/movies.js"
app.use("/movies", moviesRouter)
```


I vår index route så kan vi nu skapa en sök route som tar emot en query parameter och visar resultatet.

{% filename "routes/index.js" %}
```js
router.get("/search", (req, res) => {
  const query = req.query.q
  res.send(`You searched for: ${query}`)
})
```

Vi kan nu använda denna route i vår nunjucks fil för att skapa en sök ruta.

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

