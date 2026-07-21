# ZORY · Summer Swim School

A Next.js (App Router) rebuild of the ZORY swim-school registration landing page,
broken into small reusable components with a loading skeleton, an empty state, and
a fully responsive layout.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Highlights

- **Reusable components** — UI primitives (`Button`, `Badge`, `Stars`, `Avatar`,
  `Section`) compose the layout, sections, session grid, and the 4-step
  registration wizard. No single mega-file.
- **Loading skeleton** — `SessionsSection` fetches the open sessions on mount
  (`lib/sessions.ts`, simulated latency) and shows `SessionCardSkeleton`
  placeholders while it waits.
- **Empty state** — when the fetch returns no sessions, `SessionsEmptyState`
  ("No sessions open yet") is shown with a notify CTA. Toggle `OPEN_SESSIONS`
  in `lib/sessions.ts` to preview it.
- **Responsive** — CSS custom properties + `clamp()` and per-component media
  queries; the session/coach/pricing grids collapse gracefully and the
  registration modal becomes a bottom sheet on mobile.

## Structure

```
app/                     App Router entry, fonts, global tokens
lib/                     types, static content, sessions fetch, pricing
components/
  ui/                    Button, Badge, Stars, Avatar, Section
  layout/                Header, Footer, Logo
  sections/              Hero, ProgramStats, Pricing, Coaches, Location
  session/               SessionsSection + Card / Skeleton / EmptyState
  registration/          Modal, Stepper, form hook, and step components
```

## Wiring in a real backend

Replace the body of `getSessions()` in `lib/sessions.ts` with a real `fetch()`.
The UI reacts to the returned promise, so the skeleton and empty state keep
working unchanged.
