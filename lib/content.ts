/*
  The content module — the single source of truth for everything the public
  pages display (spec #1, issue #3). Every category, tour, FAQ entry, route
  copy block and contact placeholder lives here, in English, in RECAP's
  professional-operator voice, so future i18n is a translation pass over one
  file rather than a rewrite.

  Every fact in this file comes from one of three places:
  - the client brief (docs/customer/to-questionnaire-judiths-kenya-tours.md,
    all 33 answers verbatim, 2026-11-26);
  - a logged reference (ADR 0001: each reference price carries its source);
  - a marked placeholder for what the client has not provided yet.

  Nothing is invented: no reviews, no real contacts, no prices beyond the
  logged reference set, no itinerary beyond the client's own words.
*/

export const SITE = {
  businessName: "RECAP Tours and Travel",
  tagline: "Tours and travel from Nairobi, planned around your schedule and your budget.",
  locatedIn: "Nairobi, Kenya",
  // The client brief names no logo, colours or real contact values yet.
  // The logo is the wordmark "RECAP" in the header (spec, branding); logo and
  // colour proposals follow once the client picks a palette.
  logoPlaceholder: true,
} as const;

/* ---------------------------------------------------------------- photos */

/**
  Licensed stand-in photographs of the real destinations. Every frame is a
  STAND-IN for the client's own photograph: the report (docs/content-module-report.md)
  lists each one's photographer, licence and source page, and the client's
  photograph replaces it one for one before launch (spec, imagery). Alt text
  is written new — the file titles name someone else's place.
*/
type Photo = {
  /** public/assets/photos-relative path, as the <img> src */
  src: string;
  /** 2x-ish srcset for the hero */
  srcSet?: string;
  width: number;
  height: number;
  alt: string;
  by: string;
  licence: string;
  licenceUrl: string;
  page: string;
  source: "Wikimedia Commons";
};

const PHOTOS = {
  hero: {
    src: "/assets/photos/photo-f181901610.webp",
    srcSet:
      "/assets/photos/photo-f181901610-500.webp 500w, /assets/photos/photo-f181901610-960.webp 960w, /assets/photos/photo-f181901610-1280.webp 1280w, /assets/photos/photo-f181901610.webp 1920w",
    width: 1920,
    height: 1280,
    alt: "Masai Mara landscape at sunset",
    by: "Daniel Case",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Landscape_of_Masai_Mara,_Kenya,_at_sunset.jpg",
    source: "Wikimedia Commons",
  },
  wildlife: {
    src: "/assets/photos/photo-f124793824.webp",
    srcSet:
      "/assets/photos/photo-f124793824-500.webp 500w, /assets/photos/photo-f124793824-960.webp 960w, /assets/photos/photo-f124793824.webp 1280w",
    width: 1280,
    height: 837,
    alt: "Masai Mara landscape",
    by: "flowcomm",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0",
    page: "https://commons.wikimedia.org/wiki/File:Landscape,_Masai_Mara,_Kenya_(52452028118).jpg",
    source: "Wikimedia Commons",
  },
  lake: {
    src: "/assets/photos/photo-f194876096.webp",
    srcSet:
      "/assets/photos/photo-f194876096-500.webp 500w, /assets/photos/photo-f194876096-960.webp 960w, /assets/photos/photo-f194876096.webp 1280w",
    width: 1280,
    height: 962,
    alt: "Lake Naivasha shoreline",
    by: "Letherian3",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Lake_Naivasha_Kenya_0111.jpg",
    source: "Wikimedia Commons",
  },
  coast: {
    src: "/assets/photos/photo-f25863446.webp",
    srcSet:
      "/assets/photos/photo-f25863446-500.webp 500w, /assets/photos/photo-f25863446-960.webp 960w, /assets/photos/photo-f25863446.webp 1280w",
    width: 1280,
    height: 962,
    alt: "Diani Beach",
    by: "FredD",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    page: "https://commons.wikimedia.org/wiki/File:Diani_beach.JPG",
    source: "Wikimedia Commons",
  },
  cultural: {
    src: "/assets/photos/photo-f172064342-960.webp",
    srcSet:
      "/assets/photos/photo-f172064342-500.webp 500w, /assets/photos/photo-f172064342-960.webp 960w",
    width: 960,
    height: 722,
    alt: "Karen Blixen Museum House in Nairobi",
    by: "さえぼー",
    licence: "CC0",
    licenceUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    page: "https://commons.wikimedia.org/wiki/File:Karen_Blixen_Museum_House.jpg",
    source: "Wikimedia Commons",
  },
  savannaSafari: {
    src: "/assets/photos/photo-f2612785.webp",
    srcSet:
      "/assets/photos/photo-f2612785-500.webp 500w, /assets/photos/photo-f2612785-960.webp 960w, /assets/photos/photo-f2612785.webp 1280w",
    width: 1280,
    height: 883,
    alt: "Elephants in Amboseli National Park",
    by: "Paul Mannix",
    licence: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    page: "https://commons.wikimedia.org/wiki/File:Loxodonta_africana_-Amboseli_National_Park,_Kenya-8.jpg",
    source: "Wikimedia Commons",
  },
  nairobiCity: {
    src: "/assets/photos/photo-f202243592-960.webp",
    srcSet:
      "/assets/photos/photo-f202243592-500.webp 500w, /assets/photos/photo-f202243592-960.webp 960w",
    width: 960,
    height: 722,
    alt: "Nairobi city skyline viewed from Upper Hill",
    by: "Elite Jac",
    licence: "CC BY 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by/4.0",
    page: "https://commons.wikimedia.org/wiki/File:View_of_Nairobi_City,_Kenya._As_taken_from_Upper_Hill.jpg",
    source: "Wikimedia Commons",
  },
} as const satisfies Record<string, Photo>;

export const HERO_PHOTO: Photo = PHOTOS.hero;

/* ---------------------------------------------------------- categories */

export type Category = {
  id: "wildlife" | "lake-nature" | "coastal" | "cultural";
  name: string;
  /** one line, RECAP's voice */
  blurb: string;
  /** the client's own listed destinations (brief Q1) */
  destinations: string[];
  photo: Photo;
};

export const CATEGORIES: Category[] = [
  {
    id: "wildlife",
    name: "Wildlife safaris and national parks",
    blurb:
      "Multi-day safaris and half-day park visits into Kenya's reserve lands.",
    destinations: [
      "Masai Mara National Reserve",
      "Amboseli National Park",
      "Tsavo East National Park",
      "Tsavo West National Park",
      "Lake Nakuru National Park",
      "Nairobi National Park",
    ],
    photo: PHOTOS.wildlife,
  },
  {
    id: "lake-nature",
    name: "Lake, nature and adventure",
    blurb:
      "Full-day water, forest and tea-country escapes, and three-day Lake Victoria journeys.",
    destinations: [
      "Lake Naivasha National Park",
      "Hell's Gate National Park",
      "Lake Victoria Tours",
      "Karura Forest",
      "Tea Farm",
    ],
    photo: PHOTOS.lake,
  },
  {
    id: "coastal",
    name: "Coastal Kenya and beach holidays",
    blurb:
      "From three days on the coast, with beachfront stays and the islands.",
    destinations: [
      "Diani Beach",
      "Watamu",
      "Malindi",
      "Lamu Island",
      "Mombasa",
      "Wasini Island",
    ],
    photo: PHOTOS.coast,
  },
  {
    id: "cultural",
    name: "Cultural, historical and unique experiences",
    blurb:
      "Half-day and full-day tours of Nairobi's museums, reserves and story-telling places.",
    destinations: [
      "Bomas of Kenya",
      "Karen Blixen Museum",
      "Giraffe Centre",
      "Sheldrick Wildlife Trust",
      "Nairobi Museum",
    ],
    photo: PHOTOS.cultural,
  },
];

/* ------------------------------------------------------------- tours */

export type ReferencePrice = {
  /** the "from" price as published by the regional operator */
  from: string;
  currency: "KES" | "CHF";
  perPerson: boolean;
  source: {
    operator: string;
    listing: string;
    url: string;
    checkedAt: string;
  };
};

export type Tour = {
  slug: string;
  name: string;
  /** the two agreed detail archetypes (spec #1) */
  archetype: "multi-day safari Package" | "half-day city tour";
  category: Category["id"];
  duration: string;
  groupSize: string;
  vehicle: string;
  languages: string[];
  /** the client has not provided a meeting point — always marked pending */
  meetingPoint: null;
  itinerary: string[];
  inclusions: string[];
  exclusions: string[];
  referencePrice: ReferencePrice;
  photo: Photo;
  /** every archetype in this module is a draft pending the client's confirmation */
  status: "draft";
};

export const TOURS: Tour[] = [
  {
    slug: "3-day-masai-mara-safari",
    name: "3-Day Masai Mara Safari Package",
    archetype: "multi-day safari Package",
    category: "wildlife",
    duration: "3 days / 2 nights",
    groupSize:
      "No fixed group size — solo, private family and joining tours depend on vehicle capacity",
    vehicle: "4x4 Land Cruiser or Safari Van",
    languages: ["English", "Swahili"],
    meetingPoint: null,
    itinerary: [],
    inclusions: [
      "Transport in a suitable safari vehicle",
      "Professional driver-guide service",
      "Park and conservancy fee",
      "Accommodation",
      "Meals as specified in the itinerary",
      "Scheduled activities",
    ],
    exclusions: [],
    referencePrice: {
      from: "Ksh 23,100",
      currency: "KES",
      perPerson: true,
      source: {
        operator: "Bonfire Adventures",
        listing: "3 Days Samburu",
        url: "https://bonfireadventure.com/packages/3-days-samburu/",
        checkedAt: "2026-11-28",
      },
    },
    photo: PHOTOS.savannaSafari,
    status: "draft",
  },
  {
    slug: "half-day-nairobi-national-park-tour",
    name: "Half-Day Nairobi National Park Tour",
    archetype: "half-day city tour",
    category: "wildlife",
    duration: "Half day (approx. 5 hours, from 6:00 AM to 11:00 AM)",
    groupSize:
      "No fixed group size — solo, private family and joining tours depend on vehicle capacity",
    vehicle: "Toyota Noah / Voxy for city tours",
    languages: ["English", "Swahili"],
    meetingPoint: null,
    itinerary: ["Depart Nairobi at about 6:00 AM", "Explore Nairobi National Park", "Return to Nairobi by about 11:00 AM"],
    inclusions: [
      "Transport in a suitable city vehicle",
      "Professional driver-guide service",
      "Park and conservancy fee",
      "Scheduled activities",
    ],
    exclusions: [],
    referencePrice: {
      from: "CHF 163",
      currency: "CHF",
      perPerson: true,
      source: {
        operator: "Mara Triangle Safaris",
        listing: "½-Day Classic Nairobi National Park",
        url: "https://www.safaribookings.com/tours/t82859",
        checkedAt: "2026-11-28",
      },
    },
    photo: PHOTOS.nairobiCity,
    status: "draft",
  },
];

export const getTour = (slug: string) => TOURS.find((t) => t.slug === slug);

/* -------------------------------------------------------------- FAQ */

export type Faq = { q: string; a: string; placeholder?: boolean };

export const FAQ: Faq[] = [
  {
    q: "What is included in the package?",
    a: "Depending on the package: transport in a suitable safari vehicle, a professional driver-guide, park and conservancy fees, accommodation, meals as specified in the itinerary and scheduled activities. Any exclusions are mentioned in each package.",
  },
  {
    q: "What destinations do you cover?",
    a: "Kenya — wildlife safaris and national parks (Masai Mara, Amboseli, Tsavo East and West, Lake Nakuru, Nairobi National Park); Lake, nature and adventure (Lake Naivasha, Hell's Gate, Lake Victoria, Karura Forest, Tea Farm); Coastal Kenya and beach holidays (Diani Beach, Watamu, Malindi, Lamu Island, Mombasa, Wasini Island); and Cultural, historical and unique experiences (Bomas of Kenya, Karen Blixen Museum, Giraffe Centre, Sheldrick Wildlife Trust, Nairobi Museum).",
  },
  {
    q: "What does the tour cost?",
    a: "The 'from' prices shown on this site are reference prices from similar regional operators, not RECAP's confirmed rates. Every package is confirmed per customer on WhatsApp before anything is booked, and the total cost is quoted in your own message.",
  },
  {
    q: "Can I customise the itinerary?",
    a: "Yes. RECAP offers both standard packages and customised tours — accommodation, activities and travel dates can all be tailored to your preferences. Tell us what you would like and we will reply with a plan.",
  },
  {
    q: "Do you offer private tours?",
    a: "Yes. RECAP runs solo, private, family and joining tours, depending on vehicle capacity. There is no fixed group size for any of them.",
  },
  {
    q: "What accommodation options are available?",
    a: "Accommodation is specified per package — it is not listed on this site. Confirm the accommodation for your trip with a driver-guide on WhatsApp before booking.",
    placeholder: true,
  },
  {
    q: "What vehicles do you use?",
    a: "4x4 Land Cruiser and Safari Vans for safaris, and Toyota Noah or Voxy for city tours, depending on the destination and the number of clients.",
  },
  {
    q: "Are there months when you're fully booked?",
    a: "RECAP is still building its booking calendar, so expect to be able to plan with us through the year. Peak seasons — school holidays, festive seasons and international travel periods — are the times most people ask for.",
  },
  {
    q: "Is a deposit required?",
    a: "Yes, a deposit is required to confirm a booking. There is no online payment step on this site — a deposit is confirmed per customer by WhatsApp, and the card option is a Stripe Payment link the owner sends to you.",
  },
  {
    q: "How do I pay?",
    a: "Local and international clients pay a deposit by card via a Stripe Payment link sent on WhatsApp, or by M-Pesa. Confirm your payment options with a driver-guide on WhatsApp.",
  },
  {
    q: "What is the cancellation and refund policy?",
    a: "RECAP's cancellation and refund policy is being confirmed by the business and is not written on this site yet. Ask a driver-guide on WhatsApp before paying a deposit.",
    placeholder: true,
  },
  {
    q: "Are airport transfers offered?",
    a: "Airport transfer arrangements are being confirmed by the business and are not listed here yet. Confirm them with a driver-guide on WhatsApp.",
    placeholder: true,
  },
  {
    q: "Can you help with hotel or flight bookings?",
    a: "Hotel and flight arrangements are being confirmed by the business and are not listed here yet. Confirm them with a driver-guide on WhatsApp.",
    placeholder: true,
  },
  {
    q: "What should I carry or wear?",
    a: "The items and clothing to carry are confirmed per package — ask a driver-guide on WhatsApp for the list for your trip.",
    placeholder: true,
  },
];

/* ----------------------------------------------------------- copy */

export const COPY = {
  home: {
    h1: "Tours from Nairobi into the wild",
    lead: "RECAP Tours and Travel plans safaris, nature escapes, coastal stays and cultural tours around Kenya — every tour tailored to your schedule and your budget.",
    primary: { label: "Explore our tours", href: "/tours" },
    secondary: { label: "Get a quote", href: "/contact" },
    tertiary: { label: "Contact us", href: "/contact" },
  },
  toursIndex: {
    h1: "Tours",
    lead: "RECAP Tours and Travel plans safaris, nature escapes, coastal stays and cultural experiences around Kenya — every tour tailored to your schedule and your budget.",
  },
  tourDetail: {
    h1Prefix: "",
    leadPlaceholder: "Ask a driver-guide on WhatsApp for this tour's current options.",
  },
  about: {
    h1: "About RECAP",
    lead: "RECAP Tours and Travel is a professional tour operator based near Nairobi, built on a passion for travel, tourism and hospitality — and on a desire to connect people with meaningful experiences.",
    story:
      "The business was born out of a passion for travel, tourism and hospitality and the desire to connect people with meaningful experiences. It is shaped by academic training, hospitality-industry experience and practical exposure to travel operations — including a tourism attachment in Rwanda, where tour operations, destination experiences, cultural tourism and hospitality were learned hands on with international travellers.",
    promises:
      "Professional service, personalised experiences and authentic African hospitality: every client is made to feel that their journey was thoughtfully created for them.",
    credentials: [
      "Individual tour guide licence — held",
      "Tour operator licence — in progress",
    ],
    credentialsNote:
      "The credentials and accreditation section is updated as the business grows.",
  },
  contact: {
    h1: "Contact us",
    lead: "Get a quote from RECAP Tours and Travel. WhatsApp is the fastest way to reach a driver-guide — send your dates and your budget.",
    note: "Official contacts are being confirmed — the WhatsApp number shown in the corner is a placeholder.",
  },
  adminLogin: {
    h1: "Admin",
    lead: "The owner admin panel is being prepared. The password and access are being set up — nothing is live yet.",
  },
  faq: {
    h1: "Frequently asked questions",
    lead: "The questions travellers ask before they book — answered here so you do not have to ask.",
  },
} as const;

/* ---------------------------------------------------------- contacts */

/**
  Placeholder contacts until the client supplies the official values (brief Q18).
  No real-format phone number or email address is rendered anywhere.
*/
export const CONTACTS = {
  whatsapp: {
    value: "0000000000",
    href: "https://wa.me/0000000000",
    display: "WhatsApp",
    placeholder: true,
    note: "Number to be confirmed by the client before launch",
  },
  phone: {
    value: null,
    href: null,
    display: "Phone",
    placeholder: true,
    note: "Phone number to be confirmed by the client before launch",
  },
  email: {
    value: null,
    href: null,
    display: "Email",
    placeholder: true,
    note: "Email to be confirmed by the client before launch",
  },
  instagram: {
    value: "https://www.instagram.com/",
    href: "https://www.instagram.com/",
    display: "Instagram",
    placeholder: true,
    note: "Profile to be confirmed by the client before launch",
  },
  facebook: {
    value: "https://www.facebook.com/",
    href: "https://www.facebook.com/",
    display: "Facebook",
    placeholder: true,
    note: "Profile to be confirmed by the client before launch",
  },
  mpesa: {
    value: null,
    href: null,
    display: "M-Pesa",
    placeholder: true,
    note: "M-Pesa number to be confirmed by the client before launch",
  },
} as const;

export type Contacts = typeof CONTACTS;
