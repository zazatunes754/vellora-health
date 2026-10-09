# Vellora Health — Premium Multi-Page Hospital Website

**Brand:** Vellora Health · *Healthcare, elevated by humanity.*
A fictional demonstration website showcasing professional healthcare web development. **Not a real hospital.** All clinicians, content, contact details, prices, and imagery contexts are illustrative.

## Technology stack

- **React 19 + TypeScript + Vite** (SPA with client-side routing)
- **React Router** (`BrowserRouter`) — genuine multi-page routing
- **Lucide React** — iconography (only icon dependency; no heavy UI/animation frameworks)
- **Hand-written CSS design system** (`src/styles.css`) — custom properties, no CSS framework
- **Local imagery** (`public/images/`) — 24 licensed Unsplash photos stored locally
- Fonts via Google Fonts (Fraunces display serif + Inter sans), favicon + logo as original SVG

## How to start the site

**Easiest (Windows):** double-click **`start.bat`**.

It checks Node.js, installs dependencies only if missing, starts the Vite dev server in its own window (default `http://localhost:5173/`), waits until it responds, and opens your browser. The server keeps running; close its window (or Ctrl+C) to stop it.

**Manual alternative:**

```powershell
npm install   # first time only
npm run dev   # then open http://localhost:5173/
```

## How to stop the development server

- Close the “Vellora Health Server” terminal window, **or**
- Focus that window and press **Ctrl+C**.

## How to build the site

```powershell
npm run build    # type-checks (tsc) and emits static files to dist/
npm run preview  # serves the production build locally for a final check
```

## Project structure

```
Hospital/
├── start.bat               # double-click launcher
├── index.html              # titles, meta, fonts
├── public/
│   ├── favicon.svg         # original V monogram
│   └── images/             # 24 local healthcare photos (Unsplash, see below)
├── src/
│   ├── main.tsx            # entry point
│   ├── App.tsx             # routes
│   ├── styles.css          # full design system (tokens, components, responsive)
│   ├── data/content.ts     # services, specialists, articles, FAQs (all demo copy)
│   ├── components/         # Header, Footer, ui (Reveal, Accordion, PageHero, CtaBand…)
│   └── pages/              # Home, About, Services, ServiceDetail, Specialists,
│                           # SpecialistDetail, PatientResources, Pricing,
│                           # Appointments, Contact, Faq, Insights, ArticleDetail,
│                           # Careers, NotFound
├── REFERENCE_ANALYSIS.md   # what was learned from the reference site
└── PROJECT_STATUS.md       # build status and known limitations
```

**Routes:** `/`, `/about`, `/services`, `/services/:slug` (10), `/specialists`, `/specialists/:slug` (8), `/patient-resources`, `/pricing-insurance`, `/appointments`, `/contact`, `/faq`, `/insights`, `/insights/:slug` (6), `/careers`, plus a custom 404.

## How to replace images and branding

- **Photos:** drop replacements into `public/images/` keeping the same filenames (see `src/data/content.ts` for which page uses which), or update the paths in `content.ts`. Below-the-fold images use `loading="lazy"`.
- **Logo/favicon:** edit `public/favicon.svg` and the `Logo` component in `src/components/ui.tsx` (forest `#1c3a2e`, brass `#c9a86a`).
- **Colours/type:** all tokens live in `:root` at the top of `src/styles.css`; fonts are loaded in `index.html`.
- **Copy:** every page’s text lives in its page component or `src/data/content.ts` — no CMS, no backend.

**Image licensing:** photos are Unsplash images (`images.unsplash.com`), whose licence permits free use including commercial/demonstration purposes. They were downloaded locally with `?auto=format&fit=crop&w=…&q=70`. Photographers are not credited per-photo (demo); add attribution before any public launch if your policy requires it, and replace any photo whose context misrepresents care.

## Important limitations of the demo forms

Appointment, contact, and careers forms **validate accessibly and show confirmations, but transmit nothing**: no network request, no localStorage, no backend. Entries exist only in the live page session. The UI states this explicitly — do not present submissions as real bookings.

## What must be verified before a real hospital launch

1. Replace **all** fictional content: clinician names/bios, contact details, address, hours, prices, testimonials-equivalents, statistics (none are claimed — keep it that way).
2. Have qualified clinicians review **all medical copy**; current text is illustrative, not advice.
3. Add real accreditations, registration/privacy notices, and cookie/consent handling; connect forms to a compliant backend.
4. Re-verify image licences/attribution and obtain consent for any identifiable photography.
5. Run accessibility (keyboard, screen reader), performance, and cross-browser passes on production hosting.
