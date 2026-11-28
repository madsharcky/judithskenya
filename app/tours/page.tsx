/*
  Tours index — minimal shell. The four categories are the client's own tour
  groupings (brief Q1), not an invented tour list: no package names, prices or
  itineraries until the real tour data lands in a later ticket.
*/

export const metadata = { title: "Tours — RECAP Tours and Travel" };

const CATEGORIES = [
  "Wildlife safaris and national parks",
  "Lake, nature and adventure",
  "Coastal Kenya and beach holidays",
  "Cultural, historical and unique experiences",
];

export default function ToursIndex() {
  return (
    <section className="section" aria-labelledby="tours-h">
      <div className="wrap">
        <div className="section-head">
          <h1 id="tours-h">Tours</h1>
          <p className="t-lead measure">
            RECAP Tours and Travel plans safaris, nature escapes and coastal
            stays around Kenya — every tour tailored to your schedule and budget.
          </p>
        </div>
        <div className="grid">
          {CATEGORIES.map((category) => (
            <div className="span-6 stack-2" key={category} data-placeholder="">
              <h2>{category}</h2>
              <p className="muted">
                Tour list for this category is coming soon — ask a driver-guide
                on WhatsApp for current options.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
