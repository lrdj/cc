---
layout: default
title: Submit a Memory
---

<h1>{{ page.title }}</h1>

<form action="https://formspree.io/f/your-form-id" method="POST">
  <label for="name">Your name</label><br>
  <input type="text" name="name" required><br><br>

  <label for="email">Email (optional)</label><br>
  <input type="email" name="_replyto"><br><br>

  <label for="memory">Your memory</label><br>
  <textarea name="memory" rows="10" required></textarea><br><br>

  <button type="submit">Send</button>
</form>
