#!/usr/bin/env python3
import os
import yaml
import re

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

    # Extract affiliations → build new schools hash
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

    if not schools:
        print(f"⚠️ No valid affiliations in {path}; skipping.")
        continue

    # Compute the primary (max) year
    primary_year = max(schools.values())

    # Update front matter
    data.pop('affiliations', None)
    data['schools'] = schools
    data['primary_year'] = primary_year

    # Dump back to YAML and reconstruct file
    new_fm = yaml.dump(data, sort_keys=False)
    new_text = f"---\n{new_fm}---\n{body}"

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_text)
    print(f"✅ Updated {path}")

print("🎉 All memory files have been updated.")
