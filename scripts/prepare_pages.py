"""Validate and stage the static public website for GitHub Pages."""

from __future__ import annotations

import json
from html.parser import HTMLParser
from pathlib import Path
import re
import shutil
import subprocess
import sys
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / '_site'
PUBLIC_FILES = (
    'index.html', '.nojekyll', 'profile.json', 'llms.txt',
    'robots.txt', 'sitemap.xml',
)
PUBLIC_DIRECTORIES = ('assets', 'fieldnotes')


class Links(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.references: list[str] = []
        self.headings = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag == 'h1':
            self.headings += 1
        for name, value in attrs:
            if value and name in {'href', 'src', 'poster'}:
                self.references.append(value)


def main() -> None:
    subprocess.run([sys.executable, '-I', str(ROOT / 'scripts' / 'sync_blog.py'), '--check'], check=True)
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    OUTPUT.mkdir()
    for name in PUBLIC_FILES:
        shutil.copy2(ROOT / name, OUTPUT / name)
    for name in PUBLIC_DIRECTORIES:
        shutil.copytree(ROOT / name, OUTPUT / name)
    json.loads((OUTPUT / 'profile.json').read_text())
    for page in OUTPUT.rglob('*.html'):
        content = page.read_text()
        parser = Links()
        parser.feed(content)
        if not parser.headings:
            raise ValueError(f'{page.relative_to(OUTPUT)} has no visible heading')
        if '/src/main.jsx' in content or '<div id="root"></div>' in content:
            raise ValueError(f'{page.name} is an unbuilt application shell')
        for reference in parser.references + re.findall(r'url\([\'\"]?([^\)\'\"]+)', content):
            parts = urlsplit(reference)
            if parts.scheme or parts.netloc or not parts.path:
                continue
            target = (OUTPUT / unquote(parts.path.lstrip('/')) if parts.path.startswith('/')
                      else page.parent / unquote(parts.path)).resolve()
            if not target.is_relative_to(OUTPUT.resolve()):
                raise ValueError(f'{page.name}: link escapes public site: {reference}')
            if target.is_dir():
                target /= 'index.html'
            if not target.is_file():
                raise ValueError(f'{page.name}: missing local file: {reference}')
    count = sum(path.is_file() for path in OUTPUT.rglob('*'))
    print(f'Validated and staged {count} public files in _site/.')


if __name__ == '__main__':
    main()
