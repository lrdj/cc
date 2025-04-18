#!/usr/bin/env python3
"""
Script to convert HTML files in 'alum-reports' directory to Jekyll markdown files.
Extracts content between <!-- Begin non-editable section --> and <!-- End non-editable section -->.
Writes .md files with minimal YAML front matter.
"""
import os
import re
import html
import argparse

TAGS = [
    "Carman Hall",
    "Furnald Hall",
    "John Jay",
    "Hartley",
    "Wallach",
    "Wien Hall",
    "River Hall",
    "East Campus",
    "Ruggles",
    "McBain",
    "Senior Walk",
    "Residence Life",
    "Core Curriculum",
    "Lit Hum",
    "Contemporary Civilization",
    "Frontiers of Science",
    "Columbia College",
    "SEAS",
    "Barnard",
    "Spectator",
    "WKCR",
    "Blue & White",
    "Bacchanal",
    "Varsity Show",
    "Homecoming",
    "Class Day",
    "Low Library",
    "Butler Library",
    "Alma Mater",
    "College Walk",
    "Hamilton Hall",
    "Philosophy Hall",
    "Dodge Fitness Center",
    "Roone Arledge Auditorium",
    "St. Paul's Chapel",
    "Miller Theatre",
    "Avery Hall",
    "Pulitzer Hall",
    "Mudd",
    "Havemeyer",
    "Riverside Park",
    "The Sundial",
    "The West End",
    "Tom’s Restaurant",
    "Milano Market",
    "Amir’s",
    "Koronet Pizza",
    "Hungarian Pastry Shop",
    "JJ’s Place",
    "Ferris Booth",
    "Morningside Deli",
    "Symposium",
    "Ollie’s",
    "1980s",
    "Reagan era",
    "Anti-apartheid protests",
    "Great blackout",
    "Spring Weekend",
    "Commencement",
    "Reunion",
    "Campus traditions",
    "Class Notes",
    "CC’85",
    "Reunion updates",
    "Alumni spotlight",
    "Mentorship",
    "Giving Day",
    "Columbia College Fund",
    "Dean’s Circle",
    "NYC alumni",
    "Regional clubs",
]


def convert_fragment(fragment: str) -> str:
    """
    Convert HTML fragment to Markdown.
    """
    text = fragment.replace('\r\n', '\n').replace('\r', '\n')
    # Header conversion
    def repl_header(m):
        inner = m.group(1).strip()
        inner = html.unescape(inner)
        return '# ' + inner + '\n\n'
    text = re.sub(
        r'<span[^>]*class=["\']header["\'][^>]*>(.*?)</span>',
        repl_header,
        text, flags=re.DOTALL | re.IGNORECASE
    )
    # List item conversion
    def repl_li(m):
        inner = m.group(1).strip()
        inner = html.unescape(inner)
        inner = re.sub(r'<br\s*/?>', ' ', inner, flags=re.IGNORECASE)
        return '- ' + inner + '\n'
    text = re.sub(
        r'<li[^>]*>(.*?)</li>',
        repl_li,
        text, flags=re.DOTALL | re.IGNORECASE
    )
    # Remove list wrappers
    text = re.sub(r'<(/)?ul[^>]*>', '', text, flags=re.IGNORECASE)
    text = re.sub(r'<(/)?ol[^>]*>', '', text, flags=re.IGNORECASE)
    # Remove non-header span tags
    text = re.sub(
        r'<span[^>]*class=["\']text["\'][^>]*>',
        '', text, flags=re.IGNORECASE
    )
    text = re.sub(r'</span>', '', text, flags=re.IGNORECASE)
    # Line breaks
    text = re.sub(r'<br\s*/?>', '  \n', text, flags=re.IGNORECASE)
    # Paragraphs
    text = re.sub(r'<p[^>]*>', '', text, flags=re.IGNORECASE)
    text = re.sub(r'</p>', '\n\n', text, flags=re.IGNORECASE)
    # Strip any other HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # Unescape HTML entities
    text = html.unescape(text)
    # Trim trailing spaces on each line
    text = re.sub(r'[ \t]+$', '', text, flags=re.MULTILINE)
    # Collapse multiple blank lines
    text = re.sub(r'\n{3,}', '\n\n', text)
    # Remove leading whitespace from each line
    lines = text.split('\n')
    lines = [line.lstrip() for line in lines]
    text = '\n'.join(lines)
    return text.strip() + '\n'


def main():
    parser = argparse.ArgumentParser(
        description='Convert HTML alumni report files to Jekyll markdown.'
    )
    parser.add_argument(
        'input_dir', nargs='?', default='alum-reports',
        help='Directory containing HTML files to convert.'
    )
    args = parser.parse_args()
    input_dir = args.input_dir
    if not os.path.isdir(input_dir):
        print(f"Error: '{input_dir}' is not a directory.")
        return

    # Pattern to capture content between non-editable markers
    pattern = r'<!-- Begin non-editable section -->(.*?)<!-- End non-editable section -->'
    html_files = sorted(
        f for f in os.listdir(input_dir)
        if f.lower().endswith('.html')
    )

    for fname in html_files:
        html_path = os.path.join(input_dir, fname)
        with open(html_path, 'r', encoding='iso-8859-1') as f:
            content = f.read()
        # extract content sections
        matches = re.findall(pattern, content, flags=re.DOTALL)
        if len(matches) < 2:
            print(f"Skipping {fname}: content markers not found or incomplete.")
            continue
        fragment = matches[1]

        # extract document title from <title> tag
        title_match = re.search(r'<title>(.*?)</title>', content, flags=re.IGNORECASE|re.DOTALL)
        page_title = html.unescape(title_match.group(1).strip()) if title_match else ''
        # remove any backslashes before quotes (from HTML-escaped quotes)
        page_title = page_title.replace('\\"', '"')

        # extract header text from first span.header (for body H1)
        header_match = re.search(r'<span[^>]*class=["\']header["\'][^>]*>(.*?)</span>', fragment, flags=re.IGNORECASE|re.DOTALL)
        header_text = html.unescape(header_match.group(1).strip()) if header_match else ''

        # extract author and schools from span.text block
        author = ''
        schools = []
        text_span = re.search(r'<span[^>]*class=["\']text["\'][^>]*>(.*?)</span>', fragment, flags=re.IGNORECASE|re.DOTALL)
        if text_span:
            # split on <br> to lines
            raw = text_span.group(1)
            parts = [html.unescape(p).strip() for p in re.split(r'<br\s*/?>', raw) if p.strip()]
            if parts:
                # first line is author, e.g. 'Name, Alum'
                author = parts[0].split(',')[0].strip()
                # remaining lines are school/year entries
                schools = parts[1:]

        # remove author block (span.text) from fragment before conversion
        clean_frag = re.sub(r'<span[^>]*class=["\']text["\'][^>]*>.*?</span>\s*(?:<br\s*/?>\s*)*', '', fragment, flags=re.IGNORECASE|re.DOTALL)
        # convert remaining HTML fragment to markdown
        md_body = convert_fragment(clean_frag)

        # detect tags from markdown body
        found_tags = []
        for tag in TAGS:
            if re.search(r'\b' + re.escape(tag) + r'\b', md_body, flags=re.IGNORECASE):
                found_tags.append(tag)

        # prepare output path
        md_path = os.path.splitext(html_path)[0] + '.md'
        # helper to quote YAML strings (single-quoted style)
        def yaml_q(s): return "'" + s.replace("'", "''") + "'"
        # write markdown with front matter
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write('---\n')
            if page_title:
                f.write(f'title: {yaml_q(page_title)}\n')
            if author:
                f.write(f'author: {yaml_q(author)}\n')
            if schools:
                f.write('schools:\n')
                for s in schools:
                    f.write(f'  - {yaml_q(s)}\n')
            if found_tags:
                f.write('tags:\n')
                for t in found_tags:
                    f.write(f'  - {yaml_q(t)}\n')
            f.write('---\n\n')
            f.write(md_body)
        print(f"Converted {fname} -> {os.path.basename(md_path)}")
    # After HTML conversion (or if no HTML), update tags on existing markdown files
    md_files = sorted(
        f for f in os.listdir(input_dir)
        if f.lower().endswith('.md')
    )
    for fname in md_files:
        md_path = os.path.join(input_dir, fname)
        with open(md_path, 'r', encoding='utf-8') as f:
            text = f.read()
        # split front matter and body
        m = re.match(r'(---\s*\n)(.*?)(\n---\s*\n)(.*)', text, flags=re.DOTALL)
        if not m:
            print(f"Skipping {fname}: no valid front matter.")
            continue
        fm_text = m.group(2)
        body = m.group(4)
        # parse existing front matter fields (author and schools only; title from body H1)
        author = None
        schools = []
        for line in fm_text.splitlines():
            l = line.strip()
            if l.startswith('author:'):
                v = l[len('author:'):].strip().strip('"').strip("'")
                author = v
            elif l.startswith('-') and schools is not None:
                v = l.lstrip('-').strip().strip('"').strip("'")
                schools.append(v)
        # extract title from first H1 in body
        title = None
        for bl in body.splitlines():
            bl_strip = bl.lstrip()
            if bl_strip.startswith('# '):
                title = bl_strip[2:].strip()
                break
        # sanitize title: remove any backslashes before quotes
        if title:
            title = re.sub(r'\\+"', '"', title)
        # detect tags in body
        found_tags = []
        for tag in TAGS:
            if re.search(r'\b' + re.escape(tag) + r'\b', body, flags=re.IGNORECASE):
                found_tags.append(tag)
        # rebuild front matter
        # helper to quote YAML strings (single-quoted style)
        def yaml_q(s): return "'" + s.replace("'", "''") + "'"
        fm_lines = ['---']
        if title:
            fm_lines.append(f'title: {yaml_q(title)}')
        if author:
            fm_lines.append(f'author: {yaml_q(author)}')
        if schools:
            fm_lines.append('schools:')
            for s in schools:
                fm_lines.append(f'  - {yaml_q(s)}')
        if found_tags:
            fm_lines.append('tags:')
            for t in found_tags:
                fm_lines.append(f'  - {yaml_q(t)}')
        fm_lines.append('---')
        new_content = '\n'.join(fm_lines) + '\n\n' + body
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated tags in {fname}: {found_tags}")


if __name__ == '__main__':
    main()