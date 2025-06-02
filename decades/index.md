---
layout: default
title: Explore by decade
permalink: /decades/
---
<style>

.decade-card {
  background-size: cover;
  background-position: center 30%;
  background-repeat: no-repeat;
}

.decade-card a {
  text-decoration: none;
  color: black;
}

.decade-card h2 {
  font-size: 2.5rem;
  line-height:66%;
  color: black;
}

mark { background-color: #eee; padding: 5px; }

</style>

# {{ page.title }}

<p class="intro">
  Browse all submitted memories grouped by the decade the author graduated. Each era captures a distinct cultural and campus mood.
</p>

<div class="decade-grid">
  {% assign decades = 
    "1920s:The roaring twenties: Prohibition, flappers, and the postwar campus;
     1930s:Depression-era resilience and radical thought;
     1940s:War, women on campus, and the GI Bill;
     1950s:Postwar growth, Cold War tensions, and Core curriculum classics;
     1960s:Activism, civil rights, sit-ins, and student power;
     1970s:New journalism, disillusionment, punk, and protest;
     1980s:AIDS, apartheid divestment, and the long shadow of Reagan;
     1990s:Grunge, activism, and the rise of the internet;
     2000s:9/11, community, and campus response;
     2010s:Occupy, climate protest, and digital life on campus;
     2020s:Pandemic, Black Lives Matter, and the return to campus"
    | split: ";" 
  %}

  {% for item in decades %}
    {% assign clean    = item | strip %}
    {% assign parts    = clean | split: ":" %}
    {% assign decade   = parts[0] %}
    {% assign subtitle = parts[1] %}

    <div class="decade-card" style="background-image: url('/images/decades/{{ decade | downcase | strip }}.jpg');">
      <a href="/decades/{{ decade | downcase | strip }}/">
        <h2><mark>{{ decade }}</mark></h2>
        <p><mark>{{ subtitle }}</mark></p>
      </a>
    </div>

  {% endfor %}
</div>
