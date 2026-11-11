# Pawzipp — Internship Submission

Three product surfaces built as one Next.js app: an animal-care discovery MVP, an AI education landing page, and a founder-owned carousel system with a downloadable sample deck.

## Routes

| Route | Deliverable |
| --- | --- |
| `/` | **Practo for Animals** — homepage/search MVP with live filters, sorting and provider detail sheets |
| `/ai-studio` | **AI Studio** — course landing page with programmes, curriculum, enquiry form and FAQ |
| `/content-os` | **Content OS** — idea-to-carousel workflow, editable sample deck, handoff rationale and stack |

The sample carousel is also available as a print-ready PDF: `/practical-ai-playbook.pdf` (6 pages, 1080 × 1350).

## Stack

- **Next.js 16** (App Router, static rendered)
- **Tailwind CSS 4** with brand tokens in `src/app/globals.css`
- **shadcn/ui** primitives (Base UI) in `src/components/ui`
- **Fraunces / Inter / DM Sans** via `next/font`
- **CSS + IntersectionObserver** motion — no animation library, so the client bundle stays small

## Structure

```
src/
  app/                 routes, metadata, global styles, icon
  components/
    practo/            hero, search, filters, directory, provider sheet
    studio/            hero, programmes, curriculum, enquiry form, FAQ
    content/           pipeline, workspace, deck, slides, handoff
    shared/            reveal animation, deliverable switcher
    ui/                shadcn primitives
  lib/
    data/              typed demo content per surface
```

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Build with `npm run build`.

## Notes

- All provider data, reviews, fees, programme details and timelines are illustrative demo content.
- Interactions are real on-page behaviour (filters, sorting, provider sheets, form validation, carousel navigation); no backend is connected.
- Every page is responsive down to 390 px and respects `prefers-reduced-motion`.
