---
layout: default
title: Alumni Memories
permalink: /memories-43/
---

<h1>{{ page.title }}</h1>

<ul>
  {% assign memories = site.memories | sort: "affiliations[0].class_year" | reverse %}
  {% for memory in memories limit:50 offset:2100 %}
    <li>
      {{ memory.author }}:<br><a href="{{ memory.url }}"><i>{{ memory.title }}</i></a>
    </li>
  {% endfor %}
</ul>

<nav class="pagination">
  <a href="/memories-42/">Previous</a>
  <span>Page 43 of 45</span>
  <a href="/memories-44/">Next</a>
</nav>
