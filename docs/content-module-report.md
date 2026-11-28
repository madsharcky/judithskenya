# RECAP Tours and Travel — content module report (issue #3)

Source of truth: `lib/content.ts` — one typed module holding the four
Categories, the Tours, the FAQ, the site copy and the contact placeholders.
Pages read from it; there is no second source of tour data.

Every fact in the module comes from one of three places: the client brief
(docs/customer/to-questionnaire-judiths-kenya-tours.md, 33/33 answers verbatim,
2026-11-26), a logged reference (ADR 0001), or a marked placeholder.

## Reference prices (stand-ins, logged — replace before launch)

ADR 0001: tour cards and detail pages show "from" prices sourced from similar
regional operator listings; every one of these is a stand-in to be replaced
with a client-confirmed price before launch.

| Tour (archetype) | From | Source | Note |
|---|---|---|---|
| 3-Day Masai Mara Safari Package (multi-day safari Package) | Ksh 23,100 per person | Bonfire Adventures, "3 Days Samburu" — https://bonfireadventure.com/packages/3-days-samburu/ (checked 2026-11-28) | Regional 3-day savanna safari analog for the Mara package; the Mara itself publishes no flat price on that listing. |
| Half-Day Nairobi National Park Tour (half-day city tour) | CHF 163 per person | Mara Triangle Safaris, "½-Day Classic Nairobi National Park" — https://www.safaribookings.com/tours/t82859 (checked 2026-11-28) | Regional half-day Nairobi-area tour listing; marketplace listing (safaribookings.com), not a RECAP price. |

## Stand-in photographs (replace one for one before launch)

All seven frames are stand-ins from Wikimedia Commons, CC0-BY/CC BY-SA/public
domain. Kept as `assets/img`-style files in `public/assets/photos/`.

| Slot | File | Subject shown | Photographer | Licence | Source page |
|---|---|---|---|---|---|
| Hero (home) | photo-f181901610.webp | Masai Mara landscape at sunset | Daniel Case | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Landscape_of_Masai_Mara,_Kenya,_at_sunset.jpg |
| Category: Wildlife safaris & national parks | photo-f124793824.webp | Masai Mara landscape | flowcomm | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Landscape,_Masai_Mara,_Kenya_(52452028118).jpg |
| Category: Lake, nature & adventure | photo-f194876096.webp | Lake Naivasha | Letherian3 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Lake_Naivasha_Kenya_0111.jpg |
| Category: Coastal Kenya & beach holidays | photo-f25863446.webp | Diani beach | FredD | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Diani_beach.JPG |
| Category: Cultural, historical & unique | photo-f172064342-960.webp | Karen Blixen Museum House, Nairobi | さえぼー | CC0 | https://commons.wikimedia.org/wiki/File:Karen_Blixen_Museum_House.jpg |
| Tour detail archetype 1 (safari Package) | photo-f2612785.webp | Elephants, Amboseli National Park | Paul Mannix | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Loxodonta_africana_-Amboseli_National_Park,_Kenya-8.jpg |
| Tour detail archetype 2 (half-day tour) | photo-f202243592-960.webp | Nairobi city skyline, Upper Hill | Elite Jac | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:View_of_Nairobi_City,_Kenya._As_taken_from_Upper_Hill.jpg |

No photograph on the site is RECAP's own. No names, prices or reviews are
shown on the page itself (no captions; the credit block is the report + the
footer credit line once pages use them).

## Placeholder contacts (all marked `data-placeholder`, not real-format)

| Contact | State |
|---|---|
| WhatsApp number | Placeholder `0000000000` (deliberately not a real-format number) |
| Phone | Not provided — marked placeholder |
| Email | Not provided — marked placeholder |
| M-Pesa | Not provided — marked placeholder |
| Instagram / Facebook | Stand-in links to generic profiles — marked placeholders |

## Content-model summary

- Categories (4): Wildlife safaris & national parks; Lake, nature &
  adventure; Coastal Kenya & beach holidays; Cultural, historical & unique
  experiences — client's own groupings (brief Q1), with their listed
  destinations.
- Tours (2 archetypes): both are `status: "draft"` pending the client's
  confirmation — the full tour list lands with #4/#5.
  - `3-day-masai-mara-safari` — multi-day safari Package (3 days/2 nights,
    wildlife, 4x4/Safari Van, English & Swahili). Itinerary intentionally
    empty: no inventory exists beyond the client's own brief; confirmed per
    customer on WhatsApp.
  - `half-day-nairobi-national-park-tour` — half-day tour (approx. 5 hrs,
    ~6:00 AM–11:00 AM; Toyota Noah/Voxy for city tours). Itinerary is a
    paraphrase of the client's own answer (depart ~6:00 AM, Nairobi National
    Park, return ~11:00 AM).
- FAQ (14 entries) — pre-booking questions from brief Q16; four entries
  (accommodation options, cancellation/refund policy, airport transfers,
  hotel/flight assistance, what to carry/wear) are marked `placeholder: true`
  because the client has not answered them.
- Copy — home, tours index, tour detail, about, contact, admin login, FAQ:
  all in RECAP's business voice, all from the client's verbatim answers.

## Open items (client)

- Official WhatsApp / phone / email; M-Pesa number; Instagram and Facebook
  profile handles.
- Real prices to replace the two reference prices.
- Photos and video from the client (all seven frames are stand-ins to be
  replaced one for one).
- Meeting point for each package; per-package exclusions; itinerary
  inventory; cancellation/refund policy; airport transfers; hotel/flight
  arrangements; what to carry/wear.
- Lead credentials to grow the About credentials section (tour-operator
  licence, etc.) — not invented here.
