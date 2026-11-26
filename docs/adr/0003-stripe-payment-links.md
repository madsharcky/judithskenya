# Stripe payment links for deposits

Status: superseded by ADR 0004 for the hosting and admin-panel portion — the site deploys to Vercel (not static GitHub Pages) and an in-site, owner-only admin panel generates the payment links. The choice of Stripe Payment Links with Stripe-hosted checkout stands.

The brief requires a deposit to confirm a booking (Q16) and an "online enquiry and reservations system" (Q31); ADR 0002 originally scoped out all online payment from v1. On review, the client directed that online payment be included: Stripe, with the business generating a payment link per customer (tied to the customer's email or phone) and sending it to them via WhatsApp. Decided: v1 uses Stripe Payment Links — Stripe-hosted checkout pages the business creates per customer, with no custom payment UI or API on the site. The site's role is to tell the customer that a deposit payment link follows by WhatsApp.

**Considered options**

- In-site payment-link generator (small admin panel) — deferred: the review hosting (GitHub Pages) is a static export with no API routes, and a custom generator duplicates what Stripe provides natively. Revisit if the site later moves to a server host.
- Embedded Stripe Checkout on the site — rejected: v1 has no self-service booking (ADR 0002); payment is owner-initiated per customer, not customer-initiated.
- No online payment in v1 (the original ADR 0002 position) — superseded by the client's direction.

**Consequences**

The site stays fully static and deployable to GitHub Pages; the deposit flow lives in the Stripe dashboard plus WhatsApp. A Stripe account registered in RECAP's name is an open item for the client. Supersedes the "no online payment step" portion of ADR 0002; that ADR's WhatsApp-first and no-self-service-booking decisions stand.
