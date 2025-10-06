---
title: Webbutveckling
permalink: /webbutveckling/index.html
toc: false
eleventyNavigation:
    key: webbutveckling
    parent: kursmaterial
    order: 0
---

Webbutveckling består av två kurser, nivå 1 och nivå 2. Kurserna fokuserar på tekniker som körs i webbläsaren, såsom HTML, CSS och JavaScript.

## Nivå 1

<ul>
{% for item in collections.webbutveckling | orderByNavigation | filterByTag("nivå 1") %}
    <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>

## Nivå 2

<ul>
{% for item in collections.webbutveckling | orderByNavigation | filterByTag("nivå 2") %}
    <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>
