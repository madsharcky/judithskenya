import Link from "next/link";
import { Suspense } from "react";
import { getTour } from "@/lib/content";

/*
  Tour detail — renders the two archetype tours from the content module
  (the single source of tour data). Unknown slugs render the same shell as
  before, marked as a placeholder. The full page build (hero, photography,
  itinerary block) lands in #4; this shell reads the module so there is no
  second source of tour data anywhere.

  instant = false: the dynamic segment is a fallback param (no generateStaticParams),
  so the pathname cannot be resolved at prerender time and the whole route must
  render per request.
*/

export const instant = false;

async function TourBody({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) {
    return (
      <p className="t-lead measure" data-placeholder="">
        Tour <b>{slug}</b>. This page is a shell — the tour details, inclusions,
        duration and reference price are being built. In the meantime, ask a
        driver-guide on WhatsApp for the current options.
      </p>
    );
  }
  return (
    <>
      <h1 id="tour-h">{tour.name}</h1>
      <p className="t-lead measure">
        {tour.duration} — {tour.category === "wildlife" ? "Wildlife safaris and national parks" : tour.category}
        . From{" "}
        <b>{tour.referencePrice.from}</b> per person (reference price — final cost
        is confirmed per customer).
      </p>
      <p className="muted">
        Group size: {tour.groupSize}. Vehicle: {tour.vehicle}. Guided in{" "}
        {tour.languages.join(" and ")}.
      </p>
      <p className="muted">
        {tour.itinerary.length > 0 ? (
          <>
            <b>Itinerary</b>: {tour.itinerary.join("; ")}
          </>
        ) : (
          <>Itinerary confirmed per customer — ask a driver-guide on WhatsApp.</>
        )}
      </p>
      <p className="muted">
        Inclusions: {tour.inclusions.join("; ")}.
      </p>
    </>
  );
}

export default function TourDetail({ params }: PageProps<"/tours/[slug]">) {
  return (
    <section className="section" aria-labelledby="tour-h">
      <div className="wrap">
        <div className="section-head">
          <Suspense fallback={null}>
            <TourBody params={params} />
          </Suspense>
        </div>
        <Link className="btn btn--primary" href="/tours">
          Back to tours
        </Link>
      </div>
    </section>
  );
}
