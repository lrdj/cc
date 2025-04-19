---
layout: default
title: Alumni Memories
permalink: /memories-14/
---

<h1>{{ page.title }}</h1>

<ul>
  {% assign memories = site.memories | sort: "affiliations[0].class_year" | reverse %}
  {% for memory in memories limit:50 offset:650 %}
    <li>
      {{ memory.author }}:<br><a href="{{ memory.url }}"><i>{{ memory.title }}</i></a>
    </li>
  {% endfor %}
</ul>

<nav class="pagination">
  <a href="/memories-13/">Previous</a>
  <span>Page 14 of 45</span>
  <a href="/memories-15/">Next</a>
</nav>
