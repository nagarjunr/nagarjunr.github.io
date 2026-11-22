# Nagarjun Rajendran. Personal website

Public website: https://nagarjunr.github.io/

This repository must be named `nagarjunr.github.io` for GitHub Pages to serve the site at the account root. The previous `/portfolio/` address redirects to the homepage, preserving query strings and section fragments.

## Website structure

The finished static website lives at the repository root. `index.html` contains the visible page, its styles, and its interactions. `assets/` contains the portrait, locally bundled Arbutus Slab font and license, and public PDF and text career profiles. `fieldnotes/` contains complete article pages. `profile.json`, `llms.txt`, `sitemap.xml`, and `robots.txt` provide structured information and crawler entry points.

No package installation, JavaScript framework, API key, or build tool is required. The previous React/Vite source is preserved in Git history. A direct request to the site root renders the complete static page, including when JavaScript is disabled.

## Publishing

In repository Settings, Pages, choose **GitHub Actions** as the source. Each push to `main` validates local page links, stages only public files in `_site/`, uploads that directory, and deploys it. The workflow checks every published file against the deployed commit, including the homepage, font, articles, structured profile, downloads, and legacy redirect.

The `.nojekyll` file also supports branch publishing from **main / (root)** if needed. Use one publishing method at a time.

## Local preview

```sh
python3 scripts/prepare_pages.py
python3 -m http.server --directory _site 8080
```

Open http://localhost:8080. To verify the served files, run `python3 scripts/verify_pages.py --base-url http://localhost:8080/` in another terminal.

## Content and presentation

The site retains the reviewed professional content, Arbutus Slab typography, and Teal Cyan Sky Slate palette. Career facts follow the supplied October 2026 resume. Employer information is limited to broad roles, responsibilities, and resume-backed personal achievements. Internal architecture, customer identities, operating details, security findings, budgets, funding, and strategy are excluded. The e-scooter device figure is design capacity; the AI twin is a personal prototype; the energy advisor is planned.

The public profile PDF contains selectable text in a single column, with standard headings, explicit skills and dates, and an embedded font. It is a public summary, with no private phone number. Career changes should be reflected consistently in the homepage, structured profile, PDF, and plain-text profile.
