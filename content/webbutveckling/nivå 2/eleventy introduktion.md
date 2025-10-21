---
title: Eleventy introduktion
tags: ["eleventy", "11ty"]
summary: En introduktion till Eleventy, en statisk webbplatsgenerator som hjälper dig att skapa snabba och optimerade webbplatser med enkelhet och flexibilitet.
eleventyNavigation:
    key: eleventy introduktion
    parent: webbutveckling
    order: 20
---

*[webbplatsgenerator]: Ett verktyg som automatiskt skapar en webbplats från olika filer och mallar.
*[API]: Application Programming Interface, ett sätt för olika program att kommunicera med varandra.
*[ramverk]: En uppsättning verktyg och bibliotek som förenklar utvecklingen av webbapplikationer.

## En webbplatsgenerator

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

