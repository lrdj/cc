# Purpose

This site's first purpose was to preserve the stories that were input by alumni in an online tool that is no longer maintained. Those memories appear on the site's index page at https://cualumni.alcove.net and are viewable in a range of filtered static views.

Currently, the site is also doing some gentle activism. Please read the blog to get up to speed with the issues.


# Stack

The site is a static Jekyll site on GH-Pages published via branch push to github (branch: `main`, custom domain `cualumni.alcove.net` via CNAME).

## Content structure

- `_memories/` — the rescued alumni stories (~450 markdown files), a Jekyll collection with permalink `/memories/:slug/`, front matter includes `title`, `author`, `tags`, `school`, `date`. `_memories-rev/` is a reverse-ordered variant.
- `_posts/` — the blog ("Thoughts"), listed at `/thoughts/`. This is where the activism pamphlets live.
- `alum-reports-rev/` — the original scraped HTML reports the memories were converted from.
- `index.md` and `memories-2.md` … `memories-9.md` — paginated index views, 50 memories per page (`site.memory-indices` in `_config.yml` says how many pages exist; `_future-memory-indices/` holds pre-built pages 10+ ready to promote as the collection grows).
- `tags/` — 66 static tag pages (one `.md` per tag, layout `tag`) for filtered views (dorms, decades, themes such as activism, food, professors).
- `decades/` — per-decade filtered views (1920s–2020s, layout `decade`).
- `_data/` — `memory_tags.yml` (tag counts), `memory_tags_list.yml`, `cc-tags.yml`, `schoolcodes.yml`.
- `_layouts/` — `default`, `memory`, `tag`, `decade`. `_includes/memory-index-loop.html` renders the paginated memory lists.
- `submit/` — "Submit a memory" form posting to Formspree (form id `xzzrppyr`).
- `CU-memory-archive.zip` — downloadable structured archive of the memories for other volunteers/archivists.

## Data pipeline scripts (Python, run manually as needed)

- `convert_alum-reports.py` — converts the scraped HTML in `alum-reports` to Jekyll markdown, extracting content between the "non-editable section" comments and applying a fixed tag vocabulary (dorms, halls, themes).
- `rename-report.py` — slugifies filenames from front-matter titles.
- `update_memories_front_matter.py` — auto-tags memories via a keyword→tags map (e.g. "snow" → Winter, Weather).
- `generate_tag_data.py` — regenerates `_data/memory_tags.yml` tag counts from `_memories/`. Run after adding or retagging memories.
- `add-layout.py` — ensures every memory has `layout: memory`.

Typical flow for new/edited memories: convert → rename → tag → `generate_tag_data.py` → check the relevant `tags/` page exists → push.

## Miscellaneous

- `_cc-data/urls.txt`, `_imports/columbia-text.md`, `032c.com/`, `innovation-map/` — scraped/imported side material, not part of the main build flow.
- Local preview: `bundle exec jekyll serve` (Gemfile pins `jekyll` and `webrick`).


# The Columbia College Core Curriculum

As part of the activism (open the gates, stop letting a promise of security crush intellectual freedom and centuries of Columbia teachings) I have asked LLM's to write commentary in the style of Core authors. You will see how this works when you read the blog pages.

Please ensure you have a good understanding of the core, imagining the voice of it's authors and be ready to write the next pamphlet...

## Pamphlet conventions (learned from the existing posts)

- File: `_posts/YYYY-MM-DD-short-slug.md`, front matter `layout: default`, `tags:` always include `corecurriculum` and `protest`, plus optional author/topic tags (`locke`, `rousseau`, `openthegates`, `claireshipman`).
- Each pamphlet responds to a specific, linked announcement from Columbia's Office of the President (or related press coverage), introduced with an italicised context line before the main heading.
- Formats used so far: open letters (Locke ×3, Rousseau, Weil, Kant to President Mnookin), satirical letters and pastiche (Voltaire ×2, including a Candide excerpt), sermons (Augustine), staged dialogues (Freud/Gandhi/Fanon/Arendt on Low Steps), and a hypothetical Core professor's statement.
- The voice must be a faithful pastiche of the author's actual style and philosophical framework, applied precisely to the specifics of the announcement — not generic outrage. Sign off in character, with a wry biographical postscript.
- Recurring themes: the locked 116th Street gates (open since 1967), consent of the governed vs institutional force, "safety" as substitute for justice, the $221m settlement with the Trump administration (July 2025), the IHRA definition's chilling effect, disruption ≠ harm, the Core's own texts indicting the administration.
