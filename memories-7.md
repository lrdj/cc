---
layout: default
title: Alumni Memories
permalink: /memories-7/
---

<h1>{{ page.title }}</h1>

<ul>
  {% assign memories = site.memories | sort: "affiliations[0].class_year" | reverse %}
  {% for memory in memories limit:50 offset:300 %}
    <li>
      {{ memory.author }}:<br><a href="{{ memory.url }}"><i>{{ memory.title }}</i></a>
    </li>
  {% endfor %}
</ul>

<nav class="pagination">
  <a href="/memories-6/">Previous</a>
  <span>Page 7 of 45</span>
  <a href="/memories-8/">Next</a>
</nav>
