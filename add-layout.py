import os
import re
import yaml

CONTENT_DIR = "/Users/dug/Sites/cc/alum-reports/_memories"

def extract_front_matter_safe(md_text):
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n', md_text, re.DOTALL)
    if not match:
        return {}, md_text
    front_matter = yaml.safe_load(match.group(1)) or {}
    content = md_text[match.end():]
    return front_matter, content

def ensure_layout(front_matter):
    front_matter['layout'] = 'memory'
    return front_matter

def process_all_markdown(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".md"):
            path = os.path.join(directory, filename)
            with open(path, 'r', encoding='utf-8') as f:
                raw = f.read()

            front_matter, content = extract_front_matter_safe(raw)
            updated_front_matter = ensure_layout(front_matter)

            new_content = f"---\n{yaml.dump(updated_front_matter, sort_keys=False)}---\n\n{content}"

            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)

            print(f"✅ Updated layout in: {filename}")

if __name__ == "__main__":
    process_all_markdown(CONTENT_DIR)
