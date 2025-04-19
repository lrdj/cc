---
layout: default
title: Alumni Memories
permalink: /memories-41/
---

<h1>{{ page.title }}</h1>

<ul>
  {% assign memories = site.memories | sort: "affiliations[0].class_year" | reverse %}
  {% for memory in memories limit:50 offset:2000 %}
    <li>
      {{ memory.author }}:<br><a href="{{ memory.url }}"><i>{{ memory.title }}</i></a>
    </li>
  {% endfor %}
</ul>

<nav class="memory-nav">
  <a href="/memories-40/" class="pill-nav prev">&larr; Previous</a>
  <span>{{ site.memory-label }} 41 of {{ site.memory-indices }}</span>
  <a href="/memories-42/" class="pill-nav next">Next &rarr;</a>
</nav>
