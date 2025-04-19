---
layout: default
title: Alumni Memories
permalink: /memories-2/
---

<h1>{{ page.title }}</h1>

<nav class="memory-nav">
  <a href="/" class="pill-nav prev">&larr; Previous</a>
  <span>{{ site.memory-label }} 2 of {{ site.memory-indices }}</span>
  <a href="/memories-3/" class="pill-nav next">Next &rarr;</a>
</nav>


{% include memory-index-loop.html limit=50 offset=50 %}


<nav class="memory-nav">
  <a href="/" class="pill-nav prev">&larr; Previous</a>
  <span>{{ site.memory-label }} 2 of {{ site.memory-indices }}</span>
  <a href="/memories-3/" class="pill-nav next">Next &rarr;</a>
</nav>
