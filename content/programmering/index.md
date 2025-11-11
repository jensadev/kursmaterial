---
title: Programmering
permalink: /programmering/index.html
toc: false
eleventyNavigation:
    key: programmering
    parent: kursmaterial
    order: 0
---

Programmering består av två kurser, nivå 1 och nivå 2.

## Nivå 1

{% set course = collections.programmering | filterByTag("nivå 1") %}
{% include "components/course-nav.njk" %}

## Nivå 2

{% set course = collections.programmering | filterByTag("nivå 2") %}
{% include "components/course-nav.njk" %}