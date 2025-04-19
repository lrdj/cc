---
layout: default
title: Alumni Memories
permalink: /memories-5/
---

<h1>{{ page.title }}</h1>

<nav class="memory-nav">
  <a href="/memories-4/" class="pill-nav prev">&larr; Previous</a>
  <span>{{ site.memory-label }} 5 of {{ site.memory-indices }}</span>
  <a href="/memories-6/" class="pill-nav next">Next &rarr;</a>
</nav>


{% include memory-index-loop.html limit=50 offset=200 %}


<nav class="memory-nav">
  <a href="/memories-4/" class="pill-nav prev">&larr; Previous</a>
  <span>{{ site.memory-label }} 5 of {{ site.memory-indices }}</span>
  <a href="/memories-6/" class="pill-nav next">Next &rarr;</a>
</nav>
