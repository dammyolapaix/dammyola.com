# Landing Page for dammyola.com (Revised)

## Scope

- **Route:** `/` — replace `src/app/page.tsx` (currently renders `ComponentExample`).
- **Content source:** All sections and copy from `src/documents/homepage.md`.
- **Brand:** Use **Dammy Ola** (not "Dammyola") everywhere.
- **Booking URL:** `https://cal.com/dammyola/mvp` for all "Book a Free Consultation" / "Get Started" / "Book a Call" CTAs.
- **Placeholders:** Copy uses `[Client name]`; use placeholder text (e.g. "A Founder") for testimonials/case studies until real names are provided.

---

## Marketing skills to apply

The original plan did **not** explicitly use the marketing-related skills. For this landing page, these skills should be applied:

| Skill | How to use it |
|-------|----------------|
| **page-cro** | Treat the homepage as the main conversion point; ensure primary CTA (Book consultation) is clear, above the fold, and repeated; secondary paths (packages, case studies, FAQ) are obvious; risk reversal and trust signals are present per the doc. |
| **seo-audit** | SEO is **required**. Implement: crawlable structure, semantic HTML, meta title/description, Open Graph/Twitter tags, optional JSON-LD (e.g. LocalBusiness or Organization). No "optional SEO" — all baseline SEO items are in scope. |
| **schema-markup** | Add structured data (e.g. Organization, Service, FAQPage) where it fits the content; improves SERP appearance and clarity for search engines. |
| **copywriting** | The doc already follows strong copy principles; when implementing, preserve voice (professional but friendly, founder-friendly, no jargon) and avoid deviating into feature-speak. |
| **frontend-design** | Use for visual direction: distinctive typography, cohesive palette, clear hierarchy, and a non-generic aesthetic so the page feels intentionally designed. |

Implementation should explicitly check against page-cro (conversion clarity, CTAs, trust) and seo-audit (technical + on-page) so the landing page is both conversion- and SEO-ready.

---

## Architecture

- **Root page:** Server Component composing section components + sticky header. No data fetching; copy is static.
- **Sections:** Server Components (or minimal client only where needed). Recommended: `src/components/landing/` (e.g. `hero.tsx`, `social-proof.tsx`, …).
- **Sticky header:** Client Component. Logo/site name + "Get Started" or "Book a Call" linking to `https://cal.com/dammyola/mvp`.
- **Exit-intent popup:** Client Component; optional in first iteration. If included: headline/body from doc, email (required) + optional name, "Download Free Template" CTA.

---

## Section mapping (homepage.md → implementation)

| Doc section | Implementation notes |
|-------------|----------------------|
| Hero | Headline Option A, subheadline, primary CTA → `https://cal.com/dammyola/mvp`, secondary "See our packages →" → `#packages` |
| Social proof | "Trusted by founders…", 20+ founders, 6–8 weeks, one testimonial (placeholder name) |
| Problem | "You Have the Idea. But You're Stuck." + bullet list |
| Solution | "We Build Software for Founders…" + What we do / How we're different |
| How it works | 3 steps (Discovery, Proposal, Build & Launch) + CTA → cal.com link |
| Services | "Packages for Founders…" — 4 packages with price ranges, "Get a Quote" → cal.com |
| Case studies | 2 previews (placeholder client names) + "Read Full Case Study" / "See All Case Studies" |
| FAQ | 4 questions + "See All FAQs" / "Book a free consultation" → cal.com |
| Final CTA | "Ready to Build Your Product?" + primary CTA → cal.com, secondary → packages/case studies/FAQ |
| Sticky header | "Get Started" or "Book a Call" → `https://cal.com/dammyola/mvp` |
| Exit popup (optional) | Per doc: headline, body, email/name form, "Download Free Template" |

---

## Links and CTAs (final)

- **Primary CTA "Book a Free Consultation" / "Get Started" / "Book a Call":** `https://cal.com/dammyola/mvp` (open in same tab or new tab per preference; recommend same tab).
- **"See our packages" / "See Our Packages":** `#packages` (same-page).
- **"Get a Quote" (per package):** `https://cal.com/dammyola/mvp`.
- **"See All Case Studies" / "Read Full Case Study":** `#case-studies` (or future `/case-studies` when it exists).
- **"See All FAQs" / "See our packages" (in FAQ):** `#faq`, `#packages`.
- **"Download Product Brief Template":** Placeholder (e.g. `#download` or mailto) until asset/form exists.

Use Next.js `Link` for internal routes/anchors; `<a href="...">` for `https://cal.com/dammyola/mvp` and other external URLs.

---

## SEO (required)

SEO is **not optional**. Implement the following:

1. **Metadata (page or layout)**
   - **Title:** `Build Your Product Without Learning to Code | Dammy Ola`
   - **Description:** `We build software and AI products for non-technical founders. From idea to launch in 6-8 weeks. No technical co-founder needed. Book a free consultation.`

2. **Open Graph & Twitter**
   - `openGraph.title`, `openGraph.description`, `openGraph.url` (canonical), `openGraph.type` (e.g. `website`).
   - Twitter card: `twitter.card`, `twitter.title`, `twitter.description` (or use defaults from main metadata).

3. **Canonical**
   - Set canonical URL for `/` (e.g. `https://dammyola.com/` or your production domain).

4. **Semantic structure**
   - One `<h1>` per page (hero headline).
   - Logical heading hierarchy (`h2` for section titles, `h3` where needed).
   - Landmarks: `<header>`, `<main>`, `<section>` with accessible structure.

5. **Structured data (schema-markup skill)**
   - At least: Organization (or Person) for Dammy Ola.
   - Consider: FAQPage for the FAQ section, Service for packages if desired.

6. **Technical**
   - No blocking of `/` in robots.txt; sitemap includes `/` (if sitemap exists).
   - Fast, server-rendered content (already the case with RSC).

Reference the **seo-audit** and **schema-markup** skills for the full checklist and JSON-LD examples.

---

## Design direction

- **Tone:** Professional but friendly; founder-friendly, no jargon (per doc).
- **Guidance:** Use **frontend-design** skill: one clear visual direction (e.g. refined minimal + strong typography), avoid generic AI look.
- **Stack:** Existing `globals.css`, Tailwind, shadcn theme, `Button`, `Card`. Semantic HTML and accessibility (focus, contrast, headings).

---

## File changes summary

| Action | File |
|--------|------|
| Replace | `src/app/page.tsx` — compose all sections + sticky header (+ optional exit popup). |
| Update | `src/app/layout.tsx` — default `metadata` (title, description) for site; override on home if needed. |
| Create | `src/components/landing/` — section components (hero, social-proof, problem, solution, how-it-works, packages, case-studies, faq, final-cta) + `sticky-header.tsx` (+ optional `exit-intent-popup.tsx`). |
| Create/update | `src/lib/constants.ts` (or similar) — `CONSULTATION_URL = "https://cal.com/dammyola/mvp"`, `SITE_NAME = "Dammy Ola"`. |

---

## Implementation order

1. Add constants: `CONSULTATION_URL`, `SITE_NAME` ("Dammy Ola"). Update root layout metadata (title, description, OG, Twitter, canonical).
2. Build section components in order (Hero → … → Final CTA), using copy from homepage.md and section IDs for anchor links (`#packages`, `#how-it-works`, `#case-studies`, `#faq`). All primary/secondary CTAs use cal.com or anchors as above.
3. Build sticky header (client component) with "Get Started" or "Book a Call" → `https://cal.com/dammyola/mvp`. Integrate into `page.tsx`.
4. Compose full page in `page.tsx` with semantic structure and anchor IDs.
5. Add required SEO: metadata export, OG/Twitter, canonical, JSON-LD (Organization/Person + optional FAQPage).
6. Optional: exit-intent popup; add to page if in scope.
7. Final pass: replace any "Dammyola" with "Dammy Ola" in UI and metadata; verify all CTAs and links; run a quick CRO and SEO check against the skills.
