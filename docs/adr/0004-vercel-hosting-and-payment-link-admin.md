# Vercel hosting with in-site payment-link admin panel

The client directed that Stripe payment-link generation happen "on an admin panel only she sees" — not in the Stripe dashboard, which ADR 0003 had assumed when it deferred an in-site generator to keep the site static on GitHub Pages. Vercel hosting makes server API routes possible, so the deferral is lifted. Decided: the site deploys to Vercel; a private /admin area — single-user password auth (owner only, password in a Vercel env var, cookie session) — lets the business owner create a Stripe Payment Link per customer (name, email or phone, amount, note), copy it to send, and review read-only site analytics (visitors, page views, sources) fetched server-side from the Vercel Analytics API. The Stripe secret key is server-side only.

**Considered options**

- GitHub Pages + Stripe dashboard links (the earlier recommendation) — rejected by the client's instruction: the generator must be in-site and owner-only.
- Vercel + Stripe dashboard links — possible, but does not meet the instruction.
- Full booking backend (customer accounts, cart, self-service checkout) — overkill for v1; self-service booking stays out (ADR 0002).

**Consequences**

- The admin panel is a functional area outside the public design system and outside the design gate's checks.
- Public pages can remain fully static/cached; only /admin and the Stripe API routes need the server.
- The review runs on the free `*.vercel.app` URL; the custom domain — registered in RECAP's name per brief Q29 — is attached at launch, not before.
- Analytics (brief Q33) comes from Vercel Web Analytics rather than third-party scripts.
- Supersedes the "static / GitHub Pages" consequence of ADR 0003 and its "in-site generator — deferred" option. The choice of Stripe Payment Links with Stripe-hosted checkout stands.
