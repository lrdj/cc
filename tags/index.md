---
layout: default
title: "Tags in memories"
---

# What is everyone talking about?

This page lists all tags used in the Memories collection, sized by their frequency.

<style>

ul.tag-cloud { padding:0; margin:0; }
ul.tag-cloud li { display: inline-block; padding:0; margin:0; }
ul.tag-cloud li a { padding:0 0.75rem; margin:0 1rem 0.75rem 0; color:#000; background-color: #C3D9EC; display: block; text-decoration: none; }

</style>

<ul class="tag-cloud">
{% for item in site.data.memory_tags_list %}
  {% assign tag = item.tag %}
  {% assign count = item.count %}
  <li style="font-size: {{ count | plus: 100 }}%;">
    <a href="/tags/{{ tag | slugify }}">{{ tag }}</a>
  </li>
{% endfor %}
</ul>