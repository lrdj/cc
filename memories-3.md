---
layout: default
title: Alumni Memories
permalink: /memories-3/
---

<h1>{{ page.title }}</h1>

<nav class="memory-nav">
  <a href="/memories-2/" class="pill-nav prev">&larr; Previous</a>
  <span>{{ site.memory-label }} 3 of {{ site.memory-indices }}</span>
  <a href="/memories-4/" class="pill-nav next">Next &rarr;</a>
</nav>


{% include memory-index-loop.html limit=50 offset=100 %}


<nav class="memory-nav">
  <a href="/memories-2/" class="pill-nav prev">&larr; Previous</a>
  <span>{{ site.memory-label }} 3 of {{ site.memory-indices }}</span>
  <a href="/memories-4/" class="pill-nav next">Next &rarr;</a>
</nav>
