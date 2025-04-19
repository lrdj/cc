---
layout: default
title: Alumni Memories
permalink: /memories-10/
---

<h1>{{ page.title }}</h1>

<ul>
  {% assign memories = site.memories | sort: "affiliations[0].class_year" | reverse %}
  {% for memory in memories limit:50 offset:450 %}
    <li>
      {{ memory.author }}:<br><a href="{{ memory.url }}"><i>{{ memory.title }}</i></a>
    </li>
  {% endfor %}
</ul>

<nav class="memory-nav">
  <a href="/memories-9/" class="pill-nav prev">&larr; Previous</a>
  <span>{{ site.memory-label }} 10 of {{ site.memory-indices }}</span>
  <a href="/memories-11/" class="pill-nav next">Next &rarr;</a>
</nav>
