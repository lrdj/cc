#!/usr/bin/env python3
import os
import yaml
import re

# Mapping for auto-tagging memories based on keywords in title or body.
KEYWORD_MAP = {
    'dorm': ['Dorm life', 'Campus'],
    'hall': ['Dorm life', 'Campus'],
    'campus': ['Campus'],
    'winter': ['Winter', 'Weather'],
    'snow': ['Winter', 'Weather'],
    'cold': ['Winter', 'Weather'],
    'spiritual': ['Spirituality', 'Religion'],
    'religion': ['Religion', 'Spirituality'],
    'buddhism': ['Buddhism', 'Religion'],
    'chapel': ['Spirituality', 'Religion'],
    'seminar': ['Academics', 'Lectures'],
    'lecture': ['Academics', 'Lectures'],
    'class': ['Academics'],
    'core': ['Academics'],
    'library': ['Library', 'Study spots'],
    'study': ['Library', 'Study spots'],
    'sport': ['Sports', 'Athletics'],
    'football': ['Sports', 'Athletics'],
    'art': ['Arts', 'Culture'],
    'painting': ['Arts', 'Culture'],
    'concert': ['Music'],
    'jazz': ['Music'],
    'music': ['Music'],
    'book': ['Arts', 'Culture'],
    'theater': ['Arts', 'Culture'],
    'food': ['Food', 'Dining'],
    'pastry': ['Food', 'Dining'],
    'dining': ['Food', 'Dining'],
    'abroad': ['Abroad', 'Travel'],
    'travel': ['Abroad', 'Travel'],
    'politic': ['Politics', 'Activism', 'Good trouble'],
    'protest': ['Politics', 'Activism', 'Good trouble'],
    'riot': ['Politics', 'Activism', 'Good trouble'],
    'draft': ['Politics', 'Activism', 'Good trouble'],
    'sds': ['Politics', 'Activism', 'Good trouble'],
    'vietnam': ['Politics', 'Activism', 'Good trouble'],
    'war': ['Politics', 'Activism', 'Good trouble'],
    'dissent': ['Politics', 'Activism', 'Good trouble'],
    'friend': ['Relationships'],
    'wife': ['Relationships'],
    'meeting': ['Relationships'],
    'advice': ['Personal growth', 'Reflection'],
    'planning': ['Personal growth', 'Reflection'],
    'perseverance': ['Personal growth', 'Reflection'],
    'meaning': ['Personal growth', 'Reflection'],
}

# Load mapping from abbreviation → full school name
with open('_data/schoolcodes.yml', 'r', encoding='utf-8') as f:
    codes_map = yaml.safe_load(f)
# Invert: full name → abbreviation
name_to_code = { full_name: abbr for abbr, full_name in codes_map.items() }

def lookup_code(name):
    # exact match first
    if name in name_to_code:
        return name_to_code[name]
    # includes match: affiliation name in full_name or vice versa
    lname = name.lower()
    for full_name, abbr in name_to_code.items():
        if lname in full_name.lower() or full_name.lower() in lname:
            return abbr
    return None

# Directory containing your markdown files
mem_dir = '_memories'

for fname in os.listdir(mem_dir):
    if not fname.endswith('.md'):
        continue
    path = os.path.join(mem_dir, fname)
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()

    # Split front matter and body
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n(.*)', text, re.S)
    if not match:
        print(f"⚠️ No front matter in {path}; skipping.")
        continue
    fm_raw, body = match.groups()
    data = yaml.safe_load(fm_raw)

    # Extract affiliations → build new schools hash if any
    schools = {}
    for aff in data.get('affiliations', []):
        name = aff.get('school')
        year = aff.get('class_year')
        code = lookup_code(name)
        if code and year:
            try:
                schools[code] = int(year)
            except ValueError:
                print(f"⚠️ Bad year “{year}” in {path}; skipping that affiliation.")

    # Migrate affiliations to schools/primary_year if present
    if schools:
        primary_year = max(schools.values())
        data.pop('affiliations', None)
        data['schools'] = schools
        data['primary_year'] = primary_year
    # Otherwise, keep existing schools/primary_year

    # Auto-tag based on content (title, body, filename)
    existing_tags = data.get('tags', []) or []
    full_text = f"{body} {data.get('title','')} {fname}".lower()
    for kw, tlist in KEYWORD_MAP.items():
        # match keyword with optional suffix (e.g., protest/protests, draft/drafted)
        pattern = rf"\b{re.escape(kw)}\w*\b"
        if re.search(pattern, full_text, re.I):
            for tag in tlist:
                if tag not in existing_tags:
                    existing_tags.append(tag)
    data['tags'] = existing_tags

    # Dump back to YAML and reconstruct file
    new_fm = yaml.dump(data, sort_keys=False)
    new_text = f"---\n{new_fm}---\n{body}"

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_text)
    print(f"✅ Updated {path}")

print("🎉 All memory files have been updated.")
