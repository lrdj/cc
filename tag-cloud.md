---
layout: page
title: "Tag Cloud"
---

# Tag Cloud

This page lists all tags used in the Memories collection, sized by their frequency.

<ul class="tag-cloud">
{% assign tags = site.data.memory_tags | sort_natural %}
{% for tag in tags %}
  {% assign count = site.data.memory_tags[tag] %}
  <li style="display: inline-block; margin: 0.2em; font-size: {{ count | plus: 100 }}%;">
    <a href="/tags/{{ tag | slugify }}">{{ tag }}</a>
  </li>
{% endfor %}
</ul>