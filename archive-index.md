---
layout: default
title: Alumni Memories
---

<h1>{{ page.title }}</h1>

<ul>
  {% assign sorted = site.memories | sort: 'date' | reverse %}
  {% for memory in sorted %}
    <li>
      <a href="{{ memory.url }}">{{ memory.title }}</a><br>
      <small>{{ memory.author }}, {{ memory.affiliations[0].school }} {{ memory.affiliations[0].class_year }}</small>
    </li>
  {% endfor %}
</ul>
