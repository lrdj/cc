---
layout: default
title: Submit a Memory
---


<style>

  form { background: #fafafa;padding: 1.5rem; }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1.25rem;
    border: 1px solid #ced4da;
    border-radius: 6px;
    font-size: 1rem;
    box-sizing: border-box;
  }

  input:focus,
  textarea:focus {
    border-color: #80bdff;
    outline: none;
    box-shadow: 0 0 0 0.15rem rgba(0,123,255,.25);
  }

  button {
    background-color: #007bff;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>


<h1>{{ page.title }}</h1>

<form action="https://formspree.io/f/xzzrppyr" method="POST">

  <label for="name">Your name</label>
  <input type="text" name="name" required>
  

  <label for="email">Email (add if you're OK with me asking you questions)</label>
  <input type="email" name="_replyto">

  <label for="memory">Your memory</label>
  <textarea name="memory" rows="12" required></textarea>

  <label for="tags">Comma-separated list of tags (if you want to)</label>
  <input type="text" name="tags">
  
  <button type="submit">Send your memory</button>
</form>
