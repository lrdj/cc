#!/usr/bin/env python3
"""Generate a YAML file of tag counts from all Markdown files in _memories."""
import os
import re
import yaml

MEM_DIR = '_memories'
DATA_DIR = '_data'
OUTPUT_FILE = os.path.join(DATA_DIR, 'memory_tags.yml')

def extract_frontmatter(text):
    m = re.match(r'^---\s*\n(.*?)\n---', text, re.S)
    if not m:
        return {}
    try:
        return yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError:
        return {}

def main():
    counts = {}
    for fname in os.listdir(MEM_DIR):
        if not fname.endswith('.md'):
            continue
        path = os.path.join(MEM_DIR, fname)
        with open(path, 'r', encoding='utf-8') as f:
            text = f.read()
        meta = extract_frontmatter(text)
        tags = meta.get('tags', []) or []
        for tag in tags:
            counts[tag] = counts.get(tag, 0) + 1
    os.makedirs(DATA_DIR, exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        yaml.dump(counts, f, sort_keys=True)
    print(f"Wrote tag counts for {len(counts)} tags to {OUTPUT_FILE}")

if __name__ == '__main__':
    main()