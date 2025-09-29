---
title: Eleventy
tags: ["eleventy"]
eleventyNavigation:
    key: eleventy
    parent: webbutveckling
    order: 10
---

*[webbplatsgenerator]: Ett verktyg som automatiskt skapar en webbplats från olika filer och mallar.

# Eleventy

[Eleventy](https://www.11ty.dev/) är en statisk webbplatsgenerator med syfte att förenkla och hjälpa dig att skapa optimerade webbplatser. Det är ett verktyg som omvandlar mallar och innehåll till statiska HTML-filer, vilket gör det möjligt att bygga webbplatser utan behov av en traditionell server.
Ibland kallas ramverk som Eleventy för ett "JAMstack"-ramverk, där JAM står för JavaScript, API:er och Markup (HTML).

## Funktioner och fördelar

- **Enkelhet**: Eleventy är designat för att vara enkelt att använda och förstå. Det kräver minimalt med konfiguration och låter dig snabbt komma igång med att skapa webbplatser.
- **Flexibilitet**: Eleventy stöder flera mallmotorer, inklusive Nunjucks och du kan använda Markdown för att skriva innehåll.
- **Prestanda**: Eftersom Eleventy genererar statiska filer, är webbplatser byggda med Eleventy ofta snabba och optimerade för prestanda. Detta kan leda till bättre användarupplevelse och högre sökmotorrankningar.

## Användningsområden

Eleventy är idealiskt för att skapa olika typer av webbplatser, inklusive:

- Personliga bloggar
- Portföljer
- Dokumentationssidor
- Små företagswebbplatser
- Landningssidor

Med det sagt är inte Eleventy det bästa valet för alla typer av webbplatser. För mer komplexa webbapplikationer med mycket interaktivitet och dynamiskt innehåll kan andra ramverk som React, Vue eller Angular vara mer lämpliga. Eller så har du ett system som kanske kräver inloggning och användarhantering, då är andra system att föredra.

## Kom igång

För att jobba med Eleventy så kommer vi att utgå från att du har Node.js installerat på din dator. Precis som för webbserver kursen så är det enklast att köra detta under WSL (Windows Subsystem for Linux) om du kör Windows.
Instruktionerna för att installera detta hittar du på [webbserver - installation](/webbserver/installation).

### Hello world

Vi kommer nu att testa att installera Eleventy och skapa en enkel webbplats. Skapa en ny mapp för ditt projekt och navigera in i den:

```bash
mkdir 11ty-hello-world
cd 11ty-hello-world
```

Här kan vi välja att direkt köra Eleventy eller installera det, vi kommer att göra det sistnämnda för att senare kunna installera fler paket. Så för att göra det så behöver vi initiera ett nytt npm-projekt:

```bash
npm init -y
```

Nu kan vi installera Eleventy:

```bash
npm install @11ty/eleventy
```

För att köra Eleventy så lägger vi till ett start-skript i `package.json`:

{% filename "package.json" %}
```json
"scripts": {
    "start": "eleventy --serve"
}
```

Slutligen så skapar vi en innehållsfil för Eleventy att utgå ifrån. Vi kommer skapa en Markdown-fil (`.md`) för att visa hur enkelt vi kan arbeta med Markdown som Eleventy omvandlar till HTML.

{% filename "index.md" %}
```markdown
---
title: Min första 11ty sida
---

# Hej världen

Detta är min första sida skapad med Eleventy!
```

Nu kan vi starta vår webbplats med kommandot:

```bash
npm start
```

Detta kommer att starta en lokal utvecklingsserver och du kan öppna din webbläsare och navigera till `http://localhost:8080` för att se din webbplats. Du bör kunna se sidan vi just skapaden i webbläsaren. Eleventy ligger nu och lyssnar efter förändringar i dina filer och uppdaterar sidan automatiskt när du gör ändringar.
Testa det med att ändra texten i `index.md` och spara filen.

### Testfrågor

1. Vad är Eleventy och vad används det för?
2. Vilka är några av fördelarna med att använda Eleventy?
3. Hur skapar du en ny Eleventy-projektmapp och installerar Eleventy

## Layouts och mallar

En av de stora styrkorna med Eleventy är dess stöd för layouts och mallar. Det underlättar vårt arbete som utvecklare då vi kan återanvända kod och struktur på flera sidor. Eleventy har inbyggt stöd för flera olika templat-motorer och mallarna sparas i en mapp som heter `_includes` i roten av ditt projekt.

Vi ska nu skapa en layout-fil med grundläggande HTML-struktur.
Börja med att skapa mappen för mallarna:

```bash
mkdir _includes
```

Skapa sedan en ny fil i den mappen som heter `layout.njk` (Nunjucks är en av de mallmotorer som Eleventy stödjer). Du bör kunna skriva `HTML:5` i VSCode och trycka på tab för att få en grundläggande HTML-struktur (tack vare Emmet).

{% alert "info" %}
Eleventy kan använda olika former av templater, men du kan också döpa filerna till .html. Men för att tydliggöra att det är en mall så använder vi .njk.
För att få VSCode att känna igen Nunjucks-filer som HTML så är det bra att associera dem som HTML i inställningarna.
{% endalert %}

I filen kommer vi att använda två inbyggda variabler som Eleventy tillhandahåller: `{{ title }}` och `{{ content }}`. Den första används för att sätta sidans titel, och den andra används för att infoga innehållet från våra Markdown-filer.

{% filename "_includes/layout.njk" %}
{% raw %}
```html
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
</head>
<body>
    {{ content | safe }}
</body>
</html>
```
{% endraw %}

Nu behöver vi uppdatera vår `index.md`-fil för att använda denna layout. Vi lägger till en `layout`-frontmatter i början av filen. Fronmatter är metadata som Eleventy använder för att konfigurera sidan. Frontmatter placeras mellan tre streck `---` högst upp i filen.

{% filename "index.md" %}
```markdown
---
title: Min första 11ty sida
layout: layout.njk
---
# Hej världen
```

Detta talar om för Eleventy att använda `layout.njk` som layout för denna sida. När du nu sparar filen och uppdaterar din webbläsare, bör du se att sidan nu har en fullständig HTML-struktur med titeln "Min första 11ty sida". Eleventy har automatiskt infogat innehållet från `index.md` i layouten. Inspektera sidan i webbläsaren så ser du att HTML-strukturen är på plats.

## Anpassa utseendet med CSS

För att göra vår webbplats mer visuellt tilltalande kan vi lägga till lite grundläggande CSS. Skapa en ny mapp i roten av ditt projekt som heter `css` och skapa sedan en fil inuti den mappen som heter `styles.css`.

```bash
mkdir css
cd css
touch style.css
```

Skapa en eller flera css-regler i filen.

{% filename "css/styles.css" %}
```css
body {
    font-family: sans-serif;
}
```

Nu behöver vi länka denna CSS-fil i vår layout. Öppna `layout.njk` och lägg till en `<link>`-tagg i `<head>`-sektionen för att inkludera vår CSS-fil.

{% filename "_includes/layout.njk" %}
```html
<head>
    <link rel="stylesheet" href="/css/styles.css">
</head>
```

Spara filen och uppdatera din webbläsare. Du kommer nu se att ingen förändring har skett. Detta beror på att vi behöver konfigurera Eleventy för att kopiera över vår `css`-mapp till den genererade webbplatsen.
För att göra detta så behöver vi skapa en konfigurationsfil för Eleventy i roten av vårt projekt som instruerar Eleventy att kopiera över vissa mappar.

Skapa en fil som heter `eleventy.config.js` i roten av ditt projekt:

{% filename "eleventy.config.js" %}
```js
export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
}
```

Denna konfigurationsfil använder Eleventys API för att lägga till en "passthrough copy" för `css`-mappen, vilket innebär att innehållet i denna mapp kommer att kopieras över till den genererade webbplatsen utan några ändringar. Spara filen och starta om din utvecklingsserver med `npm start`. När du uppdaterar din webbläsare bör du nu se att stilen från `style.css` har tillämpats på din webbplats. Du kan även undersöka om filen har kopierats genom att titta i `_site`-mappen i roten av ditt projekt.

{% alert "info" %}
Mappen som skapas av Eleventy heter `_site` och är där alla genererade filer hamnar. I mappen kan du se vad Eleventy har kopierat och skapat från dina filer. Du ska aldrig redigera filerna i denna mapp och du kan även ta bort mappen om du till exempel söker efter något som har gått fel. `_site_` mappen bör inte checkas in i versionshantering (Git) utan läggas till i `.gitignore`.
{% endalert %}

### Testfrågor

1. Hur skapar du en layout i Eleventy och hur använder du den i en Markdown-fil?
2. Hur lägger du till och länkar en CSS-fil i din Eleventy-layout?
3. Vad är syftet med `eleventy.config.js`-filen och hur använder du den för att kopiera över mappar?

## Nästa steg