import Link from "next/link";
import { CATEGORIES, TOURS, COPY } from "@/lib/content";

/*
  Tours index — the four categories and the archetype tours come from the
  content module, the single source of tour data. The real page build (cards,
  price slots, photography) lands in #5; this shell reads the module so there
  is no second source of tour data anywhere.
*/

export const metadata = { title: "Tours — RECAP Tours and Travel" };

export default function ToursIndex() {
  return (
    <section className="section" aria-labelledby="tours-h">
      <div className="wrap">
        <div className="section-head">
          <h1 id="tours-h">{COPY.toursIndex.h1}</h1>
          <p className="t-lead measure">{COPY.toursIndex.lead}</p>
        </div>
        <div className="grid">
          {CATEGORIES.map((category) => {
            const tours = TOURS.filter((t) => t.category === category.id);
            return (
              <div className="span-6 stack-2" key={category.id}>
                <h2>{category.name}</h2>
                <p className="muted">{category.blurb}</p>
                {tours.length > 0 ? (
                  <ul className="stack-2">
                    {tours.map((tour) => (
                      <li key={tour.slug}>
                        <Link href={`/tours/${tour.slug}`}>{tour.name}</Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="muted">
                    Tour list for this category is coming soon — ask a
                    driver-guide on WhatsApp for current options.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
