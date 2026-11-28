/*
  Contact / Get a quote — minimal shell. The official business contacts are not
  provided yet (brief Q18), so nothing realistic-looking is shown: the WhatsApp
  number is the same marked stand-in as the persistent element, and the quote
  form is not live yet. WhatsApp is the primary enquiry channel (Q18).
*/

import Link from "next/link";

export const metadata = { title: "Contact — RECAP Tours and Travel" };

export default function Contact() {
  return (
    <section className="section" aria-labelledby="contact-h">
      <div className="wrap">
        <div className="section-head">
          <h1 id="contact-h">Contact us</h1>
          <p className="t-lead measure">
            Get a quote from RECAP Tours and Travel. WhatsApp is the fastest
            way to reach a driver-guide — send your dates and your budget and
            we reply with a custom plan.
          </p>
        </div>
        <p data-placeholder="">
          Official contacts are being confirmed — the WhatsApp number shown in
          the corner is a placeholder. The online quote form is not live yet.
        </p>
        <div className="btn-row">
          <Link className="btn btn--primary" href="/tours">
            Explore our tours
          </Link>
        </div>
      </div>
    </section>
  );
}
