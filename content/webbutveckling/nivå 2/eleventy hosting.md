---
title: Eleventy hosting
tags: ["eleventy", "11ty", "netlify", "hosting"]
summary: Eftersom Eleventy är en webbplatsgenerator så kan vi automatisera byggandet av webbplatsen och sedan hosta. För det kommer vi använda en tjänst som heter Netlify.
eleventyNavigation:
    key: eleventy hosting
    parent: webbutveckling
    order: 19
---

Så...

## Förberedelser

### Gitignore

Se till att din `.gitignore` fil innehåller `node_modules/` och `_site/` (eller vad du nu har döpt din output-mapp till).

### Byggscript

{% filename "package.json" %}
```json
{
  "scripts": {
    "build": "eleventy",
  },
```

### Netlify

Registrea ett konto på [Netlify](https://www.netlify.com/), använd GitHub för att koppla ihop ditt repository med Netlify.


## Testa lokalt

Innan vi pushar vår kod till GitHub och låter Netlify bygga vår webbplats, så kan vi testa att bygga den lokalt med kommandot:

```bash
npm run build
```

Om allt fungerar som det ska så kommer din output-mapp (t.ex. `_site/`) att skapas med din färdiga webbplats inuti. Eftersom `eleventy --serve` också använder `_site` som output-mapp så kan du vilja rensa bort den mappen innan du kör `eleventy --serve` för att undvika konflikter. Det kan du göra med kommandot:

```bash
rm -rf _site/
``` 

## Pusha till GitHub

När du är nöjd med din webbplats och har testat att bygga den lokalt, så är det dags att pusha din kod till GitHub:
