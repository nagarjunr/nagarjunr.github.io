"""Check that GitHub Pages serves the staged website and its public files."""

from __future__ import annotations

import argparse
import hashlib
from pathlib import Path
import time
from urllib.parse import urljoin
from urllib.request import Request, urlopen


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base-url', required=True)
    parser.add_argument('--attempts', type=int, default=8)
    args = parser.parse_args()
    base_url = args.base_url.rstrip('/') + '/'
    public = Path(__file__).resolve().parents[1] / '_site'
    if not (public / 'index.html').is_file():
        raise SystemExit('Run python3 scripts/prepare_pages.py first.')
    expected = {
        path.relative_to(public).as_posix(): hashlib.sha256(path.read_bytes()).digest()
        for path in public.rglob('*') if path.is_file() and path.name != '.nojekyll'
    }
    expected[''] = expected['index.html']
    expected['portfolio/'] = expected['portfolio/index.html']
    for attempt in range(1, args.attempts + 1):
        problems = []
        for path, digest in expected.items():
            try:
                request = Request(urljoin(base_url, path), headers={
                    'User-Agent': 'Portfolio-Pages-Verification', 'Cache-Control': 'no-cache',
                })
                with urlopen(request, timeout=20) as response:
                    data = response.read()
                if hashlib.sha256(data).digest() != digest:
                    problems.append((path or '/') + ': published content differs from this commit')
            except Exception as error:
                problems.append((path or '/') + ': ' + str(error))
        if not problems:
            print(f'Verified {len(expected)} public URLs against this commit.')
            print('Published URL: ' + base_url)
            return
        print('Attempt ' + str(attempt) + ': ' + '; '.join(problems), flush=True)
        if attempt < args.attempts:
            time.sleep(15)
    raise SystemExit('Published files could not be verified. Check Pages source and deployment status.')


if __name__ == '__main__':
    main()
