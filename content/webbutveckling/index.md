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

{% set course = collections.webbutveckling | filterByTag("nivå 1") %}
{% include "components/course-nav.njk" %}

## Nivå 2

{% set course = collections.webbutveckling | filterByTag("nivå 2") %}
{% include "components/course-nav.njk" %}
