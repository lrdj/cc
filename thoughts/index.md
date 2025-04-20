---
layout: default
title: Remembering memories
---

<h1>Thoughts (ie blog posts)</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a><br>
      <small>{{ post.date | date: "%B %e, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
