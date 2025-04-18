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

        # prepare output path
        md_path = os.path.splitext(html_path)[0] + '.md'
        # helper to quote YAML strings
        def yaml_q(s): return '"' + s.replace('"', '\\"') + '"'
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
            f.write('---\n\n')
            f.write(md_body)
        print(f"Converted {fname} -> {os.path.basename(md_path)}")


if __name__ == '__main__':
    main()