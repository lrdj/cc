---
layout: default
title: Alumni Memories
permalink: /memories-22/
---

<h1>{{ page.title }}</h1>

<ul>
  {% assign memories = site.memories | sort: "affiliations[0].class_year" | reverse %}
  {% for memory in memories limit:50 offset:1050 %}
    <li>
      {{ memory.author }}:<br><a href="{{ memory.url }}"><i>{{ memory.title }}</i></a>
    </li>
  {% endfor %}
</ul>

<nav class="memory-nav">
  <a href="/memories-21/" class="pill-nav prev">&larr; Previous</a>
  <span>{{ site.memory-label }} 22 of {{ site.memory-indices }}</span>
  <a href="/memories-23/" class="pill-nav next">Next &rarr;</a>
</nav>
