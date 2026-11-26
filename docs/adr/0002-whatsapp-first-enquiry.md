# WhatsApp-first enquiry; no self-service booking in v1

Status: superseded by ADR 0003 for the payment portion only — v1 does include Stripe payment links for deposits. The WhatsApp-first and no-self-service-booking decisions stand.

The brief names WhatsApp as the primary enquiry channel (Q18) and asks for "an online enquiry and reservations system" (Q31); a deposit is required to confirm (Q16) but is handled off-site, and the business's legal paperwork is still in progress (Q20). Decided: v1 ships persistent WhatsApp access on every page plus an enquiry form; reservations, deposits and payment happen via WhatsApp / mobile money, with no online payment step in the site.

**Considered options**

- Full online booking with payment in v1 — rejected: no payment provider, no verifiable deposit workflow, paperwork incomplete; it would be a booking engine the business cannot actually operate.
- WhatsApp only, no form — rejected: Q31 explicitly asks for an online system, and international clients prefer a form.

**Consequences**

The form is lead capture, not a booking engine: "Get a quote" lands on the form or on WhatsApp, and the deposit policy is copy on the tour pages, not code. A payment step can be added later without restructuring.
