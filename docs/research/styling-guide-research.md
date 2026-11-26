# RECAP Styling Guide — Research

Research notes for the RECAP Tours and Travel website styling guide.
Date: 2026-11-26. Method: primary-source HTML/CSS forensics (fetched and parsed
locally) on the 5 client-named sites plus 3 East African luxury brands, plus
cited web research on national and cultural branding. Forensics scripts and raw
JSON kept in the profile scratch dir (`forensics_client5_out.json`,
`forensics_ea4_out.json`, `forensics_ea_retry_out.json`).

Client constraints (from the brief, 2026-11-26): mobile-first; clean, no
clutter, no endless pop-ups; English primary (i18n-ready); brand must read as a
professional travel business, not a personal brand; built to flex beyond Kenya.

---

## 1. Design forensics — the 5 client-named sites

Extracted from actual HTML/CSS on 2026-11-26. Hex counts = occurrences in
fetched CSS + inline HTML. "Brand" colours are the non-neutral hexes that recur.

### 1.1 Oribi Expeditions — oribiexpeditions.co

- Platform: Wix
- Brand colours: deep green `#0c5135` (10), red `#ff6161` (9) / `#9c2426`,
  gold `#ffe473` / `#edc969` (3–6), on white/black base.
- Fonts: `'poppins'` (16), `'poppins-semibold'` (8), `'lato'` (8), DIN Next
  Light, Open Sans.
```css
/* Oribi */
--oribi-green: #0c5135;
--oribi-red: #9c2426;
--oribi-gold: #edc969;
font-family: 'Poppins', sans-serif; /* body */
font-family: 'Lato', sans-serif;    /* secondary */
```
- Structure: H1s are offer-led ("From 195,300 KES Per Person Sharing",
  "Self-Drive Experiences from Naivasha, Kajiado, Nakuru…"); H2s are trust
  markers ("Lowest Rates", "Travel Experts", "Customer Service"); CTA buttons
  are price-led: "from 7,000 Per Couple", "from 4,000 Per Person Sharing",
  "from 950 USD PPs". 39 images.
- Tone: price-first, practical, tour-operator catalogue.

### 1.2 Bonfire Adventures — bonfireadventures.com

- Platform: WordPress 7.1.5 + Elementor 4.1.2 (LiteSpeed CSS bundle, 1.2 MB)
- Brand colours: near-monochrome — white `#fff` (181), black `#000` (55),
  greys `#f1f1f1`/`#1a1a1a`/`#2d2d2d`; accents red `#ea4335` (12), blue
  `#0077b5` (10), gold `#ffc402` (8), WhatsApp green `#25d366` (7).
- Fonts: `"poppins",sans-serif` (34) dominant, Montserrat/Quicksand minor.
```css
/* Bonfire */
--bonfire-ink: #1a1a1a;
--bonfire-red: #ea4335;
--bonfire-gold: #ffc402;
font-family: 'Poppins', sans-serif;
```
- Structure: homepage is a category grid — H2s "Beach Holidays", "Safari",
  "Stay Cations", "Coastal Escapes", "Safari Tours", "International",
  "Seasonal & Special Deals"; then "WHY TRAVEL WITH BONFIRE", "OUR PROMISE",
  "REVIEWS & TESTIMONIALS". CTAs: "Explore All" (x4), "Book via WhatsApp",
  "Contact Us". 29 images.
- Tone (verbatim, homepage): "For years, we've helped travelers plan seamless
  beach holidays, safari experiences, and international journeys with clarity
  and reliable support. Our focus remains simple: structured planning,
  transparent pricing, and dependable execution."
- This is the closest structural match to what the brief asks for:
  category-first homepage, WhatsApp-first CTA, clean monochrome base.

### 1.3 Adequate Safaris — adequatesafaris.com

- Platform: WordPress + Slider Revolution 6.8.1 (no Elementor detected)
- Brand colours: white/black base; recurring non-neutrals are mostly plugin
  defaults (Facebook blue `#038`/`#039`, WhatsApp green `#2db742`, red
  `#dc3232`); brand-specific signal is weak in CSS.
- Fonts: system stacks — `arial,helvetica,sans-serif`, `-apple-system,
  blinkmacsystemfont, "segoe ui", roboto…`.
- Structure: H1/H2 not captured (slider-driven); CTAs "View All Destinations",
  "View All International Packages", "Our Recent Articles". 108 images — the
  heaviest imagery of the five.
- Tone: corporate tour-operator catalogue ("Kenya's Leading Tours & Travel
  Company" — site title).

### 1.4 Bountiful Safaris — bountifulsafaris.com

- Platform: WordPress 7.1.5 + WooCommerce 10.3.7 + Elementor 3.21.5, custom
  "bountiful" theme with booking plugin ("ba-book-everything")
- Brand colours: white/black/grey base; theme variables expose
  `#E46D30` (burnt orange) and `#db5d1c` as the theme's primary accents,
  `#73880A`/`#9CB61C` greens; plugin blues/greens elsewhere.
- Fonts: minimal in CSS — `arial,sans-serif` (theme loads fonts via JS).
```css
/* Bountiful theme vars (as extracted) */
--bountiful-primary: #E46D30;
--bountiful-dark: #db5d1c;
```
- Structure: H2s "Dream . Explore . Discover", "Our Popular Destinations",
  "Popular Beach Tours", "Popular Tours", "Why an African Safari? Why
  Bountiful?", "Best of Masai Mara Safaris", "Latest Travel Guides"; CTAs
  "Create Tour Plan", "Contact us for Customized Tour", "book now",
  "Get In touch". 105 images.
- Tone (verbatim, homepage): "Bountiful Safaris & Tours is your portal to
  Kenya's vibrant symphony, a canvas of its wildest dreams and the earth's
  untamed beauty. We are the storytellers, weavers of authentic experiences,
  and custodians of this awe-inspiring land." — the most literary voice of
  the five.

### 1.5 Spoton Vacations — spotonvacations.com

- Platform: WordPress 7.1.5 + WooCommerce 11.1.0 + Elementor 4.1.1 + Slider
  Revolution 6.6.13
- Brand colours: white `#fff` (207)/black base; brand accent purple
  `#720eec` (20) + magenta `#bf1765` (20) repeated as the site's identity
  pair; gold `#ffc83e`/`#ffba00`, green `#028a0f` (12), blue `#2575fc` (11).
- Fonts: Elementor global vars dominate; named: `"hk grotesk"` (7),
  `"roboto"` (6), `"archivo"`, `"poppins"`, `"chivo"`, `"lato"`, `"karla"`.
```css
/* Spoton identity pair (as extracted) */
--spoton-purple: #720eec;
--spoton-magenta: #bf1765;
--spoton-gold: #ffc83e;
```
- Structure: H1 "Last Minute Deals & Holiday Packages, Safaris & Tours"; H2s
  are package cards ("Tsavo National Park", "Nakuru Weekend Getaway Safari",
  "Nairobi National Park Family Experience", "Maasai Mara Offers", plus
  Rwanda/Uganda cross-border products); CTAs "Book a Flight", "Explore All
  Deals", "Book Now", "Explore". 62 images.
- Tone (verbatim, about page): "Our Mission: To continuously develop premium
  travel products that cater to every type of tourist, from the budget to the
  luxury providing an opportunity to combine bush and beach adventures with
  East Africa's spectacular scenery."

### 1.6 Cross-site observations

- 4 of 5 sites are WordPress + Elementor; all are slider- or grid-driven
  homepages with package cards. None uses a class-named hero (all
  `hero: false`) — heroes are sliders or full-bleed images.
- Recurring CTA vocabulary: "Explore All" / "View all" / "Book Now" /
  "Contact Us" / "Book via WhatsApp". Bonfire's "Book via WhatsApp" is the
  only explicit WhatsApp CTA — the brief wants WhatsApp primary everywhere,
  so this is a differentiator RECAP can own.
- Price-led CTAs (Oribi) and category-led cards (Bonfire, Spoton) are the two
  working patterns. The brief wants "Explore our tours", "Get a quote",
  "Contact us" — closest match: Bonfire's structure + Oribi's price honesty.
- Imagery load: 29–108 `<img>` per homepage. RECAP should stay lean (client
  dislikes clutter); target ~15–25 images with strong alt text.

---

## 2. Regional palette and branding research

### 2.1 Kenya Tourism Board / "Magical Kenya" national brand

- The Magical Kenya logo is "a colourful semi-circle shaped pattern of blue,
  red and green triangles and black geometric shapes over the words Magical
  Kenya in black and red script".
  Source: https://www.open.edu/openlearn/nature-environment/can-tourism-be-both-responsible-and-sustainable/content-section-5.2.1
- KTB launched a new visual and brand identity in 2018 (destination and
  corporate logos); coastal sub-brands exist for Mombasa, Malindi, Lamu,
  Tana River, Diani, Watamu — directly relevant to RECAP's coastal tours.
  Source: https://magicalkenya.com/wp-content/uploads/2025/03/KTB-FS-23-Compressed-2_250322_111924.pdf (KTB annual report & financial statements, FY2023)
- Official destination site visitkenya.com leads with "Where Safari Was Born"
  / "JAMBO KENYA – HELLO WORLD!" and video-first storytelling.
  Source: https://www.visitkenya.com/
- Implication: the national palette (red/green/blue + black/white) is a safe,
  instantly Kenyan anchor, but it is crowded — RECAP should borrow one or two
  of these hues as accents, not the full rainbow.

### 2.2 Maasai shuka and beadwork colour symbolism

Core meanings (consistent across sources): red = bravery/courage/unity;
blue = the sky and rain; white = purity, peace, milk; black = wisdom and the
people; yellow/orange = hospitality and generosity; green = the land (after
rain). Meanings vary between clans and regions, so any use should be
respective, not decorative-literal.

- https://www.visitnatives.com/post/what-do-the-colors-of-maasai-beads-mean-explore-the-traditions-of-color-symbolism-in-authentic-maas
- https://nativeafrikavoyages.com/blog/2026/09/08/maasai-beadwork-meaning-colors-patterns-symbols/
- https://culturalheritagetz.com/blog/maasai-beadwork-colours-speak/
- https://trunktrailssafaris.com/maasai-traditional-clothing-beadwork-guide/ (shuka = woven cotton wrap, most often red check)

### 2.3 Swahili coast visual culture (Lamu / Mombasa)

Lamu Old Town (UNESCO World Heritage Site) is the region's defining visual
heritage: coral-stone houses, carved teak doors, seven centuries of African,
Arab, Persian and Indian design exchange.

- "The architecture and urban structure of Lamu graphically demonstrate the
  cultural influences that have come together over 700 years from Europe,
  Arabia, and India, utilizing traditional Swahili techniques that produced a
  distinct culture."
  Source: https://whc.unesco.org/en/list/1055
- Coral stone is a warm pale stone (cream/tan); doors are dark carved teak;
  walls whitewashed; dhows add white sails.
  Sources: https://www.emkp.org/coral-stone-house-construction-on-the-swahili-coast-lamu-kenya/ ;
  https://ourkenya.com/Counties/Lamu/Lamu-Architecture ;
  https://fairtravels.ai/blog/lamu-architecture-history-oldest-swahili-town
- Translated to a palette: warm white, coral-stone beige, dark teak brown,
  with a deep indigo/cobalt accent (dhow sky/sea) — a calm counterpoint to
  savanna reds and greens.

### 2.4 East African luxury travel brands (forensics, 2026-11-26)

#### Asilia Africa — asiliaafrica.com

- Palette: white base, deep navy `#112337` (17) as the dominant brand colour,
  grey `#686e77`, blue accent `#204ce5` (9, partly form-plugin default).
- Fonts: behind Gravity-Form CSS variables — exact families not extractable
  from static CSS (JS-driven). Noted as a limitation.
- Structure: minimal — H2s "The Journey Begins Here", "Let's connect…";
  CTAs "ENQUIRE", "JOIN HERE". 20 images. The quietest site of the set.
```css
/* Asilia (extracted) */
--asilia-navy: #112337;
```

#### Elewana Collections — elewana.com

- Palette: white `#ffffff` (231) + muted bronze/gold `#b69e68` (109) +
  neutral greys. No saturated colours.
- Fonts: `"roboto"` (9), `"helvetica neue",helvetica,arial,sans-serif`.
- Structure: minimal luxury — H2s "Any Questions", "Stay Connected".
```css
/* Elewana (extracted) */
--elewana-bronze: #b69e68;
font-family: 'Roboto', sans-serif; /* body */
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

#### Serena Hotels — serenahotels.com

- Palette: the strongest earth-tone identity of the set — warm brown
  `#614743` (319), burnt orange `#cd6100` (122), cream `#f1ebdf` (114).
- Fonts: Inter (500/700) for UI/body + Playfair Display (400) for display.
  A proven modern-luxury pairing for African hospitality.
```css
/* Serena (extracted) */
--serena-brown: #614743;
--serena-orange: #cd6100;
--serena-cream: #f1ebdf;
font-family: 'Inter', sans-serif;          /* body/UI */
font-family: 'Playfair Display', serif;    /* display */
```

#### &Beyond — www.&beyond.com

- INACCESSIBLE from this machine: DNS does not resolve `www.&beyond.com` /
  `&beyond.com` locally (gaierror), and web extract backends are
  search-only. `beyondtravel.com` (old domain) is a parked WordPress 4.7
  site ("Just another WordPress site") — not the brand. Recorded as a
  failure per task constraints; no data extracted.

### 2.5 Local Kenyan design studios (legitimate local references)

- Design Village — multi-award-winning Nairobi studio (logo, brand identity,
  web). https://www.designvillage.co.ke/
- Niko Creative — multi-award-winning Nairobi studio (brand identity, UI/UX,
  motion). https://www.nikocreative.co.ke/
- Lebu Studio — Nairobi brand-identity studio (brand immersion, style
  guides, logo concepts). Listed on Clutch. https://clutch.co/ke/agencies/graphic-designers/nairobi
- Directory of Kenyan design agencies for further vetting:
  https://www.sortlist.com/design/kenya-ke

---

## 3. Synthesis — PROPOSALS for prototype-time discussion

Clearly PROPOSALS, not client decisions. Each direction is grounded in the
extracted evidence above and the brief's constraints (mobile-first, clean,
no popups, professional-business brand, WhatsApp primary).

### Proposal A — "Savanna & Shuka" (cultural warmth)

- Palette: deep shuka red `#a63a2b` family (grounded in Maasai red =
  bravery, and Oribi's `#9c2426` / Bonfire's `#ea4335` proving reds work on
  Kenyan operator sites), charcoal `#1c1c1c`, warm cream `#faf6ef`
  (Serena's `#f1ebdf` proves cream reads premium), gold accent `#edc969`
  (Oribi) for highlights/prices.
- Typography: Playfair Display (display) + Inter (body) — Serena's
  proven pairing, modern enough to stay clean.
- Character: warm, Kenyan-first, hospitality-forward. Best fit if RECAP
  leads with the story and the guide's credentials section.

### Proposal B — "Coast & Coral" (Swahili calm)

- Palette: warm white `#fbf9f4`, coral-stone beige `#d8c3a5` (Lamu coral
  stone), dark teak brown `#4a352a` (carved doors), deep cobalt `#1f3a5f`
  accent (dhow sky/sea; Asilia's navy `#112337` shows deep blue works in
  luxury East African travel).
- Typography: Playfair Display or a lighter serif for display + Inter/
  Karla for body (Karla appears on Spoton and reads well at mobile sizes).
- Character: calm, premium, coastal. Suits a split-brand site where safari
  pages carry Proposal A's reds and coast pages carry these tones — a
  possible long-term "flex beyond Kenya" pattern.

### Proposal C — "Clean Operator" (neutral modern, recommended first)

- Palette: near-monochrome like Bonfire — white, ink `#1a1a1a`, warm grey
  `#69727d` — with ONE warm accent: Serena-style burnt orange `#cd6100`
  (or brown `#614743`) for CTAs, prices, and active states; WhatsApp green
  `#25d366` reserved strictly for the WhatsApp button (as Bonfire does).
- Typography: Inter throughout, with a serif (Playfair Display) only for
  large display headings.
- Structure: Bonfire's category grid (Safari / Beach / Day Trips /
  Cultural) + Oribi's price honesty on tour cards + Bonfire's "Book via
  WhatsApp" made the primary CTA on every page.
- Character: clean, fast, uncluttered — closest to the client's stated
  dislikes (clutter, popups) and her liked sites' structure; safest first
  prototype, and the accent hue can later be swapped to A or B without
  restructuring.

All three proposals keep: English primary, mobile-first, no popups, a
growable credentials/accreditation section, and a testimonials section that
can start empty.
