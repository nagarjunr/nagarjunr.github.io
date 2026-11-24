"""Render data/blog.json into every place the blog is listed.

Usage:
  python3 -I scripts/sync_blog.py          apply changes
  python3 -I scripts/sync_blog.py --check  exit 1 if any file is out of date

Targets: index.html (between blog markers), llms.txt, the text profile and,
when present, the private twin knowledge file (commit that repo separately).
"""

from __future__ import annotations

import html
import json
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
DATA = json.loads((ROOT / 'data' / 'blog.json').read_text(encoding='utf-8'))
TWIN = ROOT / 'nagarjun-digital-twin' / 'vercel' / 'knowledge' / 'profile.md'
WORDS = {3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten'}
def sr(url: str) -> str:
    site = 'Medium' if 'medium.com' in url else 'Silicon to Systems'
    return f'<span class="sr-only">Read on {site}, opens in a new tab</span>'


def esc(text: str) -> str:
    return html.escape(text, quote=False)


def tile(label: str, title: str, description: str, url: str) -> str:
    return (f'<a href="{html.escape(url)}" target="_blank" rel="noopener noreferrer">'
            f'<span>{esc(label)}</span><h3>{esc(title)}</h3><p>{esc(description)}</p>{sr(url)}</a>')


def series_note() -> str:
    parts, total = len(DATA['series']['parts']), DATA['series']['total']
    if parts >= total:
        return f'{DATA["series"]["intro"][0].upper()}{DATA["series"]["intro"][1:]}. All {WORDS.get(total, total)} parts are published.'
    return (f'{DATA["series"]["intro"][0].upper()}{DATA["series"]["intro"][1:]}. '
            f'Parts 1 to {parts} are published, with the rest to follow.')


def html_blocks() -> tuple[str, str]:
    s = DATA['series']
    series = (f'<div class="newsletter-topics newsletter-series"><p class="mono">{esc(s["name"])}</p>'
              f'<p class="topics-note">{esc(series_note())}</p>')
    for number, part in enumerate(s['parts'], 1):
        series += tile(f'Part {number} / {part["label"]}', part['title'], part['description'], part['url'])
    series += '</div>'
    more = '<div class="newsletter-topics newsletter-more"><p class="mono">More writing</p>'
    for post in DATA['more'] + [DATA['archive']]:
        more += tile(post['label'], post['title'], post['description'], post['url'])
    more += '</div>'
    return series, more


def replace_block(text: str, name: str, body: str) -> str:
    pattern = re.compile(rf'(<!-- blog:{name}:start -->)(.*?)(<!-- blog:{name}:end -->)', re.S)
    if not pattern.search(text):
        raise SystemExit(f'marker blog:{name} missing in index.html')
    return pattern.sub(lambda m: m.group(1) + body + m.group(3), text, count=1)


def render_index(text: str) -> str:
    series, more = html_blocks()
    return replace_block(replace_block(text, 'series', series), 'more', more)


def render_llms(text: str) -> str:
    lines = ['- [Silicon to Systems](https://nagarjun.beehiiv.com/): Nagarjun Rajendran on edge AI, cloud architecture, '
             'and the engineering behind systems that scale.']
    for number, part in enumerate(DATA['series']['parts'], 1):
        lines.append(f'- [Agentic Architecture Arc, Part {number}]({part["url"]}): {part["llms"]}')
    for post in DATA['more']:
        if post.get('llms') is False:
            continue
        note = post.get('llms_note')
        lines.append(f'- [{post.get("llms_title", post["title"])}]({post["url"]})' + (f': {note}' if note else ''))
    block = '\n'.join(lines)
    pattern = re.compile(r'(## Blog\n\n).*?(\n\n## )', re.S)
    return pattern.sub(lambda m: m.group(1) + block + m.group(2), text, count=1)


def render_profile_text(text: str) -> str:
    n, total = len(DATA['series']['parts']), DATA['series']['total']
    status = f'parts 1 to {n} published' if n < total else 'all parts published'
    return re.sub(r'(The Agentic Architecture Arc, a [a-z]+-part series on production agent systems )\([^)]*\)',
                  lambda m: f'{m.group(1)}({status})', text)


def join(items: list[str]) -> str:
    return items[0] if len(items) == 1 else ', '.join(items[:-1]) + ', and ' + items[-1]


def render_twin(text: str) -> str:
    s = DATA['series']
    n = len(s['parts'])
    state = f'parts 1 to {n} are published' if n < s['total'] else 'all parts are published'
    arc = f'the Agentic Architecture Arc ({s["intro"]}; {state}: {join([p["twin"] for p in s["parts"]])})'
    posts = [p.get('twin_title', p['title']) for p in DATA['more'] if p.get('twin') is not False and p.get('llms') is not False]
    posts += [p.get('twin_title', p['title']) for p in DATA['more'] if p.get('llms') is False and p.get('twin') is not False]
    bullet = ('- Blog Silicon to Systems, published as a newsletter on beehiiv (subtitle: The Anatomy of Scale) on edge AI, '
              'cloud architecture, and the engineering behind systems that scale. Posts include '
              + join([arc] + posts) + '.')
    return re.sub(r'^- Blog Silicon to Systems.*$', lambda m: bullet, text, count=1, flags=re.M)


TARGETS = [
    (ROOT / 'index.html', render_index),
    (ROOT / 'llms.txt', render_llms),
    (ROOT / 'assets' / 'nagarjun-rajendran-profile.txt', render_profile_text),
    (TWIN, render_twin),
]


def main() -> int:
    check = '--check' in sys.argv
    stale = []
    for path, render in TARGETS:
        if not path.exists():
            print(f'skip (not found): {path.relative_to(ROOT)}')
            continue
        old = path.read_text(encoding='utf-8')
        new = render(old)
        if new != old:
            stale.append(path)
            if not check:
                path.write_text(new, encoding='utf-8')
        print(('would update' if check and new != old else 'updated' if new != old else 'ok') + f': {path.relative_to(ROOT)}')
    if TWIN in stale and not check:
        print('note: commit the twin repo separately and release it via main -> vercel')
    return 1 if check and stale else 0


if __name__ == '__main__':
    raise SystemExit(main())
