---
layout: default
title: Alumni Memories
permalink: /
---

<h1>{{ page.title }}</h1>

<nav class="memory-nav">
  <span>{{ site.memory-label }} 1 of {{ site.memory-indices }}</span>
  <a href="/memories-2/" class="pill-nav next">Next &rarr;</a>
</nav>


{% include memory-index-loop.html limit=50 offset=0 %}


<nav class="memory-nav">
  <span>{{ site.memory-label }} 1 of {{ site.memory-indices }}</span>
  <a href="/memories-2/" class="pill-nav next">Next &rarr;</a>
</nav>
