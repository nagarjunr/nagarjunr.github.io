"""Check that GitHub Pages serves the reviewed public files after deployment."""
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
    docs = Path(__file__).resolve().parents[1] / 'docs'
    paths = [
        'index.html',
        'profile.json',
        'llms.txt',
        'assets/nagarjun-rajendran-profile.pdf',
        'assets/nagarjun-rajendran-profile.txt',
        'assets/fonts/ArbutusSlab-Regular.ttf',
        'fieldnotes/connection.html',
    ]
    expected = {path: hashlib.sha256((docs / path).read_bytes()).digest() for path in paths}
    for attempt in range(1, args.attempts + 1):
        problems = []
        for path in paths:
            try:
                request = Request(urljoin(base_url, path), headers={'User-Agent': 'Portfolio-Pages-Verification', 'Cache-Control': 'no-cache'})
                with urlopen(request, timeout=20) as response:
                    data = response.read()
                if hashlib.sha256(data).digest() != expected[path]:
                    problems.append(path + ': published content differs from this commit')
            except Exception as error:
                problems.append(path + ': ' + str(error))
        if not problems:
            print('Verified public website, structured profile, fieldnote, font, PDF and text download.')
            print('Published URL: ' + base_url)
            return
        print('Attempt ' + str(attempt) + ': ' + '; '.join(problems))
        if attempt < args.attempts:
            time.sleep(15)
    raise SystemExit('Published files could not be verified. Check Pages source and deployment status.')


if __name__ == '__main__':
    main()
