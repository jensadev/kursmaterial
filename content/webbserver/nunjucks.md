---
title: Nunjucks
summary: Lär dig hur du använder Nunjucks som templating språk i Express för att skapa dynamiska HTML-sidor.
tags: ["nunjucks", "express", "javascript", "layout", "template", "view", "render"]
eleventyNavigation:
    key: nunjucks
    parent: webbserver
    order: 4
---

Statiska HTML filer i all ära men de stora vinsterna i att köra en webbserver är att kunna skapa dynamiska sidor. För att göra detta så kan vi använda ett templating språk som heter Nunjucks.

## Installera Nunjucks

Som med allt annat i Node.js så kan vi installera Nunjucks med npm. Nunjucks är ett templating språk. För att installera Nunjucks så kör vi följande kommando i terminalen:

```bash
npm install nunjucks
```

### Templating språk

Med ett templating språk kan vi skapa dynamiska HTML sidor. Det innebär att vi kan använda variabler, loopar och villkor i våra HTML filer. Nunjucks är ett populärt templating språk som används tillsammans med Express för att skapa dynamiska sidor.

## Använda Nunjucks i Express

För att använda nunjucks i express så behöver vi konfigurera express att använda nunjucks som view engine. Öppna din `server.js` fil och lägg till följande kod:

{% filename "server.js" %}
```js
import nunjucks from "nunjucks"

...

nunjucks.configure("views", {
    autoescape: true,
    express: app
})
```

Först så importerar vi nunjucks modulen så att vi kan använda den. Sedan så konfigurerar vi nunjucks med `nunjucks.configure()` metoden.
Det är viktigt att konfigurationen ligger efter att du har skapat din express app, annars kommer det inte att fungera. Denna kod konfigurerar nunjucks att använda mappen `views` som standardmapp för vyer och att använda `autoescape` för att undvika XSS-attacker.

### XSS-skydd

XSS står för Cross-Site Scripting och är en typ av attack där en angripare kan injicera skadlig kod i en webbapplikation. För att skydda mot XSS-attacker så använder vi `autoescape: true` i vår nunjucks konfiguration. Detta innebär att nunjucks automatiskt kommer att rensa bort farlig HTML-kod från våra variabler.

## Skapa en vy

Nu ska vi skapa en mapp som heter `views`. I mappen kommer vi att skapa alla våra nunjucks filer, eller vyer. Skapa en mapp som heter `views` i din projektmapp.

```bash
mkdir views
```

Skapa sedan en fil som heter `index.njk` i `views` mappen, du kan kopiera koden från din statiska HTML fil och klistra in den i `index.njk` filen. 

### Nunjucks i VSCode

För att få syntax highlighting och autocompletion i VSCode när du använder Nunjucks så kan du associera filerna med `html`. För att göra detta så öppnar du kommandopaletten i VSCode (Ctrl + Shift + P) och söker efter "Change Language Mode". Välj sedan "HTML" som språk för Nunjucks-filerna. Detta gör att du får syntax highlighting och autocompletion när du skriver Nunjucks-kod.

Du kan nu skriva `html:5` och få en grundläggande HTML-struktur i din `index.njk` fil. Lägg sedan till följande kod i `index.njk`:

{% filename "views/index.njk" %}
```html
<h1>Hello node med express och nunjucks!</h1>
<p>Welcome to my Express server with Nunjucks!</p>
```

## Rendera en vy

Med Nunjucks kan vi rendera en vy och skicka data till den. För att göra detta så använder vi `render()` metoden i vår route. Med render menas att vi skapar en HTML-sida från vår Nunjucks-fil och skickar den som svar till klienten.

För att rendera en vy så ändrar vi i vår `server.js` fil och lägger till en route som renderar vår `index.njk` fil. Vi kan göra det så här:

{% filename "server.js" %}
```js
app.get("/", (req, res) => {
    res.render("index.njk")
})
```

Eftersom vi kör med `nodemon` så kommer servern att starta om automatiskt när vi sparar filen. Nu kan vi öppna webbläsaren och gå till `http://localhost:3000/` och se vår Nunjucks-renderade HTML-sida.

#### Min sida fungerar inte?

Om din sida inte fungerar så kan det bero på att du inte har konfigurerat Nunjucks korrekt eller att du har glömt att starta servern med `npm run dev`. Kontrollera att du har följt stegen ovan och att du har sparat filerna.

Det kan också vara så att du ser filen, men innehållet stämmer inte. Det är för att du har en statisk HTML-fil i public-mappen som Express servern skickar istället för din Nunjucks-renderade vy. Se till att du har tagit bort den statiska HTML-filen eller ändrat din route så att den renderar Nunjucks-filen.

I bash kan du använda `rm public/index.html` för att ta bort den statiska HTML-filen.

## Skicka data till vyn

Nu när vi använder Nunjucks och `render()` metoden så kan vi skicka data till vyn. Vi kan skicka data som ett objekt som sedan kan användas i Nunjucks-filen.
För att skicka data till vyn så kan vi ändra vår route så här:

{% filename "server.js" %}
```js
app.get("/", (req, res) => {
    res.render("index.njk", {
        title: "Hello Nunjucks",
        message: "Welcome to my Express server with Nunjucks!"
    })
})
```

Nu kan vi använda `title` och `message` i vår Nunjucks-fil. Ändra din `index.njk` fil så här:

{% filename "index.njk" %}
{% raw %}
```html
<h1>{{ title }}</h1>
<p>{{ message }}</p>
```
{% endraw %}

Nu kommer Nunjucks att rendera `title` och `message` från vårt dataobjekt i HTML-sidan. Du kan även lägga till fler variabler i dataobjektet och använda dem i din Nunjucks-fil.

## Testfrågor

1. Vad är Nunjucks och varför används det?
2. Förklara vad XSS är och hur Nunjucks hjälper till att skydda mot det.
3. Hur skriver du ut en variabel i en Nunjucks-fil?

## Kod

Om du har svårt att få allt att samspela och fungera så kan du hitta koden på GitHub: [wsp1-kurs](https://github.com/jensadev/wsp1-kurs/commit/1c71d54898d07a65685da61056db88b2c01a4fdf). Då kan det bli lättare att se hur allt hänger ihop och i vilken ordning saker och ting ska göras.