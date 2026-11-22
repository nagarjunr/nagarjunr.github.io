# Nagarjun Rajendran. Personal website

The revised personal website is in `docs/`. It focuses on IoT Cloud Solutions Architecture, practical GenAI, and technical leadership.

## Website

- Entry point: `docs/index.html`.
- No package installation or build step is required for the revised site.
- The original React/Vite source remains in `src/`.
- The revised site uses **Teal Cyan Sky Slate** from the personal thematic colour collection.
- Typography uses **Arbutus Slab**, the default in the personal font collection, at its supported regular weight. The original Google Fonts font is bundled locally, with `font-display: swap` and a serif fallback. Its SIL Open Font License is included in `docs/assets/fonts/OFL.txt`.
- The original React site uses **Poppins for body text and buttons**, and **Roboto for headings**, as declared in `src/styles/globals.css` and loaded in the root `index.html`.

## Enable GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes only `docs/` when its files change on `main`.

In Settings, Pages, set the publishing source to **GitHub Actions**. The workflow can also be run manually from the Actions tab. A branch-based source of **main /docs** can serve the same static files.

Expected address after GitHub confirms a successful deployment: `https://nagarjunr.github.io/portfolio/`.

The repository is private. GitHub Pages from a private repository requires an eligible GitHub plan. Publishing the website does not require making the source repository public when the account plan supports private-repository Pages.

## Preview locally

```sh
python3 -m http.server --directory docs 8080
```

Open `http://localhost:8080`. The page also opens directly from disk. The bundled typeface, portrait, and downloadable two-page professional profile are local assets. The website has no runtime API or external asset dependency.

## Content and sources

The page draws on the supplied October 2026 full resume, the original `portfolio`, `rna-website`, the personal AI twin repository, and professional context already provided in the conversation. The current formal job title and career dates follow the supplied resume. The portrait comes from the personal AI twin repository. LinkedIn, Medium, newsletter, and email links follow those sources.

The resume repository's `UNVERIFIED_CLAIMS.md` was checked to resolve differences. The older portfolio's unsupported project metrics and the AI twin persona's conflicting job title were not carried over. Historical certifications are not presented as current credentials. Project stages are explicit, including the personal AI twin prototype and the planned energy advisor. The fieldnotes are new drafts for this website.

At the user's request, employer content is limited to roles, broad responsibilities, and personal achievements. Internal platform and programme details, customer identities, proprietary architecture, operating details, security findings, funding, budgets, and non-public strategy are omitted. The personal achievement metrics retained are supported by the supplied resume. The 100,000-device figure is stated as an architectural design capacity, not as the size of a deployed fleet.

The short downloadable profile is a public summary, not a copy of the full private resume. It omits the phone number and uses the same public-sharing scope as the website.

## ATS and AI readability

- The two-page PDF is a single column of selectable text with an embedded font, standard resume headings, explicit skills, and consistent dates. Its reading order and extraction were checked. It does not use a portrait, layout tables, or text embedded in images.
- `docs/assets/nagarjun-rajendran-profile.txt` provides the same public professional scope in plain text.
- `docs/profile.json` provides the public career history, education, skills, project stages, and ISO-formatted dates as structured data.
- The homepage includes Person, ProfilePage, and WebSite structured data. Important career content is present in the initial HTML.
- The three fieldnotes also have complete static pages under `docs/fieldnotes/`, with canonical URLs and BlogPosting metadata. They are readable without JavaScript and included in the sitemap.
- `docs/llms.txt` provides a plain-text index to the public profile formats and fieldnotes. It is supplementary guidance, not a guarantee that a crawler will use it.
- There is no hidden keyword text or unsupported experience added for ranking.

## Verification

Static checks cover JavaScript syntax, HTML structure, navigation targets, menu ARIA references, article templates, external-link protections, exact palette colours, font loading configuration, single-weight typography, and public-file secret patterns. The PDF was visually reviewed and its text extraction was checked. Browser rendering could not be verified under the workspace's browser process restrictions. The Pages workflow verifies that the public website, profile data, font, article, PDF, and text download match the deployed commit.

## Maintenance

Edit the static website in `docs/index.html`. Its inline CSS contains the theme and responsive layouts; its templates contain the three fieldnotes. The structured profile and downloadable short profile should be updated when the professional background changes.

No API keys or contact-form services are required. The `package.json` repository URL is credential-free. Any credential previously committed to the repository should be revoked, because removing it from the current file does not remove it from Git history.
