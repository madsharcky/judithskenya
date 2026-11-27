/*
  Proposal C proof page. The design system (public/assets, linked in
  app/layout.tsx) is the only styling source; this page is a single section on
  the kit's classes and tokens. The nav, footer and the real home page land in
  #15 (site shell) and #16 (route shells).
*/

export default function Home() {
  return (
    <main id="top">
      <section className="section" aria-labelledby="hero-h">
        <div className="wrap">
          <div className="section-head">
            <h1 id="hero-h">Tours from Nairobi into the wild</h1>
          </div>
          <p className="t-lead measure">
            RECAP Tours and Travel plans day trips and safaris around your
            schedule and your budget, and a driver-guide answers every enquiry
            on WhatsApp.
          </p>
          <div className="btn-row">
            <a className="btn btn--primary" href="/tours">
              Explore our tours
            </a>
            <a className="btn btn--secondary" href="/contact">
              Get a quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}