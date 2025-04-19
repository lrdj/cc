import os
import re
import yaml
import unicodedata
from pathlib import Path

CONTENT_DIR = "/Users/dug/Sites/cc/alum-reports"

def slugify(title):
    title = unicodedata.normalize('NFKD', title)
    title = re.sub(r'[^\w\s-]', '', title)  # remove punctuation
    title = re.sub(r'\s+', '-', title)      # replace spaces with hyphens
    return title.strip().lower()

def extract_front_matter_safe(md_text):
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n', md_text, re.DOTALL)
    if not match:
        return {}, md_text
    front_matter = yaml.safe_load(match.group(1)) or {}
    content = md_text[match.end():]
    return front_matter, content

def parse_school_entry(entry):
    pattern = r'(?P<school>.+?)\s+(?P<class_year>\d{4})'
    match = re.match(pattern, entry)
    if match:
        return {
            'school': match.group('school').strip(),
            'class_year': int(match.group('class_year')),
            'role': 'Alum'
        }
    return {'school': entry.strip(), 'role': 'Alum'}

def enrich_front_matter(front_matter):
    if 'schools' in front_matter:
        front_matter['affiliations'] = [parse_school_entry(s) for s in front_matter['schools']]
        del front_matter['schools']
    return front_matter

def enrich_and_rename_all_markdown(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".md"):
            filepath = os.path.join(directory, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                raw = f.read()

            front_matter, content = extract_front_matter_safe(raw)
            enriched = enrich_front_matter(front_matter)

            # Create new slug-based filename from title
            if 'title' in enriched:
                slug = slugify(enriched['title'])
                new_filename = f"{slug}.md"
            else:
                print(f"⚠️ No title found in {filename}, skipping rename.")
                continue

            # Write new file with updated content and name
            new_md = f"---\n{yaml.dump(enriched, sort_keys=False)}---\n\n{content}"
            new_filepath = os.path.join(directory, new_filename)

            with open(new_filepath, 'w', encoding='utf-8') as f:
                f.write(new_md)

            # Remove the old file if it's not the same as the new one
            if new_filepath != filepath:
                os.remove(filepath)

            print(f"✅ Renamed and updated: {filename} → {new_filename}")

if __name__ == "__main__":
    enrich_and_rename_all_markdown(CONTENT_DIR)
