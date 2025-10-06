---
title: Node
summary: Lär dig grunderna i Node.js, hur du sätter upp ett projekt och använder Nodemon för utveckling.
tags: ["node", "javascript", "npm", "nodemon"]
eleventyNavigation:
    key: node
    parent: webbserver
    order: 2
---

*[node.js]: Node.js är en JavaScript runtime byggd på Chrome's V8 JavaScript engine som låter dig köra JavaScript på serversidan.
*[ESM]: ECMAScript Modules, ett modulformat för JavaScript som använder `import` och `export` syntax.
*[CommonJS]: Ett äldre modulformat för JavaScript som använder `require` och `module.exports` syntax.


## Kom igång med Node

{% alert "warning" %}
Innan du fortsätter så se till att du har installerat node.js med NVM, se föregående avsnitt, <a href="../installation">Installation</a>.
{% endalert %}

Skapa först en ny mapp för ditt projekt och navigera in i den. Du kan använda terminalen i Ubuntu eller Windows Terminal.

```bash
mkdir mitt_node_projekt
cd mitt_node_projekt
```

För att initiera ett nytt node projekt kör du `npm init -y` i en mapp. Detta skapar en package.json fil. `-y` betyder att vi accepterar alla standardvärden utan att behöva svara på några frågor.

```bash
npm init -y
```

Resultatet blir en `package.json` fil som innehåller information om ditt projekt, inklusive dess beroenden (eng. dependencies) och script.
Nu kan du skapa en fil som heter `server.js` och lägga in följande kod:

{% filename "server.js" %}
```js
console.log("Hello node!")
```

För att avsluta node som körs tryck `ctrl + c` i terminalen.

### Git och GitHub

Eftersom vi jobbar med kod är det bra att använda Git för versionshantering. Initiera projektet i VSCode eller i terminalen med följande kommando:

```bash
git init
```

Detta skapar en `.git` mapp i din projektmapp som innehåller all information om ditt git repository.

När vi jobbar med Node så använder vi package.json för att hålla koll på vilka beroenden vi har i projektet. Syftet med filen är också att vi ska kunna dela vårt projekt med andra och att de ska kunna installera alla beroenden med ett enkelt kommando.

Det gör också att vi inte vill lägga upp `node_modules` mappen på GitHub eftersom den kan bli väldigt stor och innehåller filer som inte är nödvändiga för att köra projektet.

Därför skapar vi en `.gitignore` fil där vi listar de filer och mappar som vi inte vill ska läggas till i vårt git repository.
Vi kan skapa en `.gitignore` fil med kommandot `touch .gitignore` i terminalen.
eller genom att skapa en ny fil i VSCode.
När filen är skapad så lägger du till `node_modules` i den filen för att ignorera den mappen.


## Installera Nodemon

När vi jobbar med node.js är det önskvärt att starta en utvecklingsserver som automatiskt startar om när vi gör ändringar i koden. För detta ändamål använder vi ett paket som heter [Nodemon](https://www.npmjs.com/package/nodemon).

Nodemon övervakar förändringar i din kod och startar automatiskt om servern när du sparar en fil.

Installera Nodemon genom att köra:

```bash
npm install nodemon --save-dev
```

För att starta servern med Nodemon behöver du skapa ett script i `package.json`. Lägg till `"dev": "nodemon server.js"` i `scripts` i `package.json` så att det ser ut så här (vi ser även till att nodemon lyssnar efter ändringar i njk filer, något vi kommer att använda senare):

{% filename "package.json" %}
```json
{
  "scripts": {
    "dev": "nodemon -e js,html,njk,json,css ./server.js"
  }
}
```

### Andra viktiga delar av package.json

I `package.json` samlar vi script för din server tillsammans med beroenden som du använder i ditt projekt.
Det kan också vara bra att ange ett start script som kan användas för att starta servern i produktion. Lägg till `"start": "node server.js"` i `scripts` så att det ser ut så här:

{% filename "package.json" %}
```json
{
  "scripts": {
    "dev": "nodemon -e js,html,njk,json,css ./server.js",
    "start": "node server.js"
  }
}
```

Du kan också ange versionen av Node.js som du använder i ditt projekt. Detta är ibland viktigt för att säkerställa att alla som arbetar med projektet använder samma version av Node.js. Om du får konstiga fel och har svårt att felsöka ditt projekt kan det vara värt att undersöka detta. Du kan kontrollera din Node version med `node -v`. Lägg till `"engines": { "node": ">=20" }` i `package.json` så att det ser ut så här:

{% filename "package.json" %}
```json
{
  "engines": {
    "node": ">=20"
  }
}
```

Utöver detta så är det i `package.json` du anger vilken typ av javascript standard du använder i ditt projekt. Om du använder ESM (ECMAScript Modules) så behöver du lägga till `"type": "module"` i `package.json`. Detta gör att du kan använda `import` och `export` syntax i din kod istället för `require` och `module.exports` som används i CommonJS. Lägg till `"type": "module"` i `package.json` så att det ser ut så här:

{% filename "package.json" %}
```json
{
  "type": "module",
  "engines": {
    "node": ">=20"
  },
  "scripts": {
    "dev": "nodemon -e js,html,njk,json,css ./server.js",
    "start": "node server.js"
  }
}
```

## Sammanfattning

Nu har du en grundläggande Node.js-applikation som kan köras med Nodemon. Du har också lärt dig hur du hanterar beroenden och script i `package.json`, samt hur du använder Git för versionshantering.
Du kan nu starta din server med kommandot:

```bash
npm run dev
```

Du bör se meddelandet "Hello node!" i terminalen, vilket bekräftar att din node.js server fungerar.

## Testfrågor

1. Vad är Node.js och vad används det för?
2. Hur initierar du ett nytt Node.js-projekt?
3. Vad är Nodemon och varför är det användbart under utveckling?
4. Hur lägger du till ett skript i `package.json` för att starta din server med Nodemon?


## Läs mer

* [Node.js](https://nodejs.org/)