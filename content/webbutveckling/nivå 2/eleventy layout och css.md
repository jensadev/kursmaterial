---
title: Eleventy layout och CSS
tags: ["eleventy", "11ty", "nunjucks"]
summary: Hur du skapar och använder layouts och CSS i Eleventy.
eleventyNavigation:
    key: eleventy layout och css
    parent: webbutveckling
    order: 11
---

En av de stora styrkorna med Eleventy är dess stöd för layouts och mallar. Det underlättar vårt arbete som utvecklare då vi kan återanvända kod och struktur på flera sidor.

## Nunjucks

Eleventy har inbyggt stöd för flera olika templat-motorer. Den här guiden använder Nunjucks. I eleventy så sparas mallarna i en mapp som heter `_includes` i roten av ditt projekt.

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

## Config och passthrough copy

Skapa en fil som heter `eleventy.config.js` i roten av ditt projekt och lägg till följande kod:

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

### Övning

Du har ovan skapat en grund för en webbplats med Eleventy. Du har där använt en layout och skapat en CSS-fil för att styla sidan.

Testa nu att skapa en ny sida i ditt projekt, det kan vara en about sida där du kan skriva vem du är och att detta är ett övningsexempel. Använd det du har lärt dig så att about sidan använder samma layout och CSS som din index-sida.

Det är ofta så att vi vill kunna använda bilder eller liknande i våra projekt. Vi kan göra det på samma sätt som vi gjorde med CSS-filerna. Skapa en mapp som heter `images` i roten av ditt projekt och lägg till en bildfil där. Lägg sedan till en passthrough copy i `eleventy.config.js` för att kopiera över bilderna.
Du kan sedan använda bilden i din HTML eller Markdown med en vanlig `<img>`-tagg.
