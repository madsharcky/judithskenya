# Coding standards

Rules for the review stage. Mechanical violations belong in lint/CI, not here — these are the calls a linter cannot make.

## Brand

- The site sells RECAP Tours and Travel as a professional tour operator. No personal-brand framing: no "Judith's Kenya Tours", no individual-as-brand voice in UI copy.

## Vocabulary

- Use the canonical terms from `GLOSSARY.md` in code, UI copy, and issue bodies: Tour, Category, Joining tour, Private tour, Custom tour, Deposit, Payment link. Do not coin synonyms (a Tour is not a "trip" or "excursion" in user-facing copy).

## No invented data

- Every fact shown on the site comes from the client brief (`docs/customer/`), a logged reference, or a marked placeholder.
- Reference prices show "from" and carry their source (ADR 0001); stand-in photos carry a credit; neither is presented as RECAP's own.
- No invented testimonials, reviews, ratings, client names, or booking counts. An empty state beats a fake.

## Placeholders

- Values the client has not provided (contacts, M-Pesa number, logo, prices) render as marked placeholders — visibly unfinished, never realistic-looking (no real-format phone numbers or email addresses).

## Money and payments

- "From" reference prices only (ADR 0001). No deposit percentage in copy.
- Payment is a Stripe Payment Link created by the owner in `/admin`, or manual M-Pesa (ADR 0003, 0004). No self-service checkout or booking flow (ADR 0002).

## Design

- Follow the `design-taste-frontend` skill: photography leads, flat ground, no shader or scene effects on public pages.
- WhatsApp green (#25D366) is reserved for WhatsApp actions.
- Copy voice: professional operator, warm, mobile-first; no popup modals.

Pointers: `GLOSSARY.md` · `docs/adr/` · spec issue #1 · `docs/customer/to-questionnaire-judiths-kenya-tours.md`
