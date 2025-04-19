---
layout: default
title: "Tags in memories"
---

# What is everyone talking about?

This page lists all tags used in the Memories collection, sized by their frequency.

<ul class="tag-cloud">
{% for item in site.data.memory_tags_list %}
  {% assign tag = item.tag %}
  {% assign count = item.count %}
  <li style="display: inline-block; margin: 0.2em; font-size: {{ count | plus: 100 }}%;">
    <a href="/tags/{{ tag | slugify }}">{{ tag }}</a>
  </li>
{% endfor %}
</ul>