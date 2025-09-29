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

## Nivå 1

<ul>
{% for item in collections.programmering | orderByNavigation | filterByTag("nivå 1") %}
    <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>

## Nivå 2

<ul>
{% for item in collections.programmering | orderByNavigation | filterByTag("nivå 2") %}
    <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>
