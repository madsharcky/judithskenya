/*
  About — minimal shell. No personal biography, names, stats or photos: the
  real story lands in a later ticket. The business is presented as RECAP Tours
  and Travel, not as a personal brand (brief Q13).
*/

export const metadata = { title: "About — RECAP Tours and Travel" };

export default function About() {
  return (
    <section className="section" aria-labelledby="about-h">
      <div className="wrap">
        <div className="section-head">
          <h1 id="about-h">About RECAP</h1>
          <p className="t-lead measure" data-placeholder="">
            RECAP Tours and Travel is a professional tour operator based near
            Nairobi, building a tour business for local and international
            travellers. The full story — story, credentials and photography —
            is being written and is not live yet.
          </p>
        </div>
        <p className="muted" data-placeholder="">
          A driver-guide will answer any questions on WhatsApp in the meantime.
        </p>
      </div>
    </section>
  );
}
