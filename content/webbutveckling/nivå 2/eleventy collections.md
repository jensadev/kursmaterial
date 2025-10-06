---
title: Eleventy collections
tags: ["eleventy", "11ty", "nunjucks"]
summary: I eleventy kan vi organisera innehåll i samlingar (collections) för att enklare hantera relaterat innehåll.
eleventyNavigation:
    key: eleventy collections
    parent: webbutveckling
    order: 12
---

## Samlingar

Eleventy har en kraftfull funktion som kallas "samlingar" (eng. collections) som låter dig gruppera och hantera relaterat innehåll på din webbplats. Detta är särskilt användbart för bloggar eller andra typer av webbplatser där du har många sidor med liknande struktur.

Vi kan skapa en samling i Eleventy genom att skapa en mapp i roten av vårt projekt, i det här fallet kallar vi den posts (som en blogg eller liknande). Skapa mappen:

```bash
mkdir posts
```

I mappen kan vi sedan skapa flera Markdown-filer som representerar olika inlägg. Varje fil kan ha frontmatter för att definiera metadata som titel och datum.

{% filename "posts/post1.md" %}
```markdown
---
title: "Första inlägget"
date: 2023-01-01
---

Detta är innehållet i mitt första inlägg.
```

Du kan nu testa att surfa till `http://localhost:8080/posts/post1/` för att se ditt inlägg. Vi kan skapa ytterligare ett inlägg för att se hur samlingen fungerar.

{% filename "posts/post2.md" %}
```markdown
---
title: "Andra inlägget"
date: 2023-01-02
---
Detta är innehållet i mitt andra inlägg.
```

Nu när vi skapat flera inlägg så kan vi konstatera att vi vill att varje inlägg ska använda samma layout. Vi skulle kunna lägga till {%raw %}`layout: layout.njk`{% endraw %} i frontmatter för varje inlägg, men det finns ett bättre sätt att göra detta på.

I mappen posts kan vi skapa en data-fil som heter `posts.json`. Denna fil kan innehålla metadata som gäller för alla filer i mappen. Vi kan där lägga till layout-inställningen.

{% filename "posts/posts.json" %}
{% raw %}
```json
{
    "layout": "layout.njk"
}
```
{% endraw %}

Nu kommer alla filer i `posts`-mappen att använda `layout.njk` som layout utan att vi behöver specificera det i varje enskild fil. Det kan även vara så att vi vill använda en specifik layout för just posts, då kan vi skapa en ny layout-fil i `_includes`-mappen som heter `post.njk` och använda den istället.

Posts kan i sin tur hänvisa och ärva innehållet från layout.njk genom att använda Nunjucks {% raw %}`{% extends "layout.njk" %}`{% endraw %} och sedan definiera block som kan fyllas med innehåll.

{% filename "_includes/post.njk" %}
{% raw %}
```html
{% extends "layout.njk" %}

{% block content %}
    <article>
        <h1>{{ title }}</h1>
        <p><em>{{ date }}</em></p>
        {{ content | safe }}
    </article>
{% endblock %}
```
{% endraw %}

Men hur använder du då en samling som posts? Jo, här kan vi använda den för att presentera en lista med alla inlägg på en sida. Vi kan använda `collections.posts` som innehåller samtliga inlägg (eller filer) som `posts` mappen innehåller. Vi kan sedan iterera över denna lista för att skapa innehållet. 

Skapa en ny index-fil i roten av posts mappen som heter `index.md`.

{% filename "posts/index.md" %}
{% raw %}
```markdown
---
title: Blogg
layout: layout.njk
---

# Blogg
Här är en lista över alla inlägg:
<ul>
{% for post in collections.posts %}
    <li>
        <a href="{{ post.url }}">{{ post.data.title }}</a> - <em>{{ post.data.date }}</em>
    </li>
{% endfor %}
</ul>
```
{% endraw %}

Så på det här viset kan vi använda Eleventys samlingar för att gruppera och hantera relaterat innehåll på vår webbplats. När du nu navigerar till `http://localhost:8080/posts/` så bör du se en lista över alla inlägg med länkar till varje inlägg.

{% alert "info" %}
Du kan även skapa egna collections i `eleventy.config.js` om du vill gruppera innehåll på andra sätt.
{% endalert %}

## Tags och kategorier

Eleventy har även inbyggt stöd för att filtrera innehåll baserat på tags och kategorier. Detta görs genom att lägga till en `tags`-frontmatter i dina Markdown-filer.

{% filename "posts/post1.md" %}
{% raw %}
```markdown
---
title: "Första inlägget"
date: 2023-01-01
tags: ["introduktion", "eleventy"]
---

Detta är innehållet i mitt första inlägg.
``` 
{% endraw %}

Likt hur vi använde `collections.posts` för att hämta alla inlägg, så kan vi använda `collections.tagName` för att hämta alla inlägg med en specifik tagg. Om vi till exempel vill skapa en sida som listar alla inlägg med taggen "eleventy", kan vi skapa en ny fil som heter `eleventy.md` i roten av vårt projekt.

{% filename "eleventy.md" %}
{% raw %}
```markdown
---
title: Inlägg om Eleventy
layout: layout.njk
---

# Inlägg om Eleventy
Här är en lista över alla inlägg med taggen "eleventy":
<ul>
{% for post in collections.eleventy %}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
```
{% endraw %}

När du nu navigerar till `http://localhost:8080/eleventy/` så bör du se en lista över alla inlägg som har taggen "eleventy".

## Sammanfattning

Försök att se likheterna i hur vi arbetar med data för att skapa dynamiskt innehåll i Eleventy. Genom att använda samlingar, tags och kategorier kan vi enkelt organisera och presentera innehåll på vår webbplats på ett strukturerat sätt. Vi får ett kraftfullt verktyg som gör det enkelt att hantera stora mängder innehåll utan att behöva duplicera kod eller struktur.