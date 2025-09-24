---
title: Programmering
permalink: /programmering/index.html
toc: false
eleventyNavigation:
    key: programmering
    parent: kursmaterial
    order: 0
---

# Programmering

Programmering består av två kurser, nivå 1 och nivå 2.

## Syfte

Undervisningen i ämnet programmering ska ge eleverna förutsättningar att utveckla följande:
* Kunskaper om programmerbara system, programspråk och programmeringsparadigm.
* Förmåga att formulera och skapa lösningar för programmeringsproblem.
* Förmåga att skapa program med anpassning till syfte, användare och tillgänglighet.

## Nivå 1

<ul>
{% for item in collections.programmering | filterByTag("nivå 1") %}
    <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>

## Nivå 2

<ul>
{% for item in collections.programmering | filterByTag("nivå 2") %}
    <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>
