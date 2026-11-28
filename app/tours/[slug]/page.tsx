import Link from "next/link";
import { Suspense } from "react";

/*
  Tour detail — minimal shell. No tour data is invented here: the client's real
  Packages and Custom tours land in a later ticket. Any slug renders the same
  shell, with the slug shown as a logged placeholder.

  instant = false: the dynamic segment is a fallback param (no generateStaticParams),
  so the pathname cannot be resolved at prerender time and the whole route must
  render per request (the shell is static content, so the blocking is honest).
*/

export const instant = false;

async function TourSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <p className="t-lead measure" data-placeholder="">
      Tour <b>{slug}</b>. This page is a shell — the tour details, inclusions,
      duration and reference price are being built. In the meantime, ask a
      driver-guide on WhatsApp for the current options.
    </p>
  );
}

export default function TourDetail({ params }: PageProps<"/tours/[slug]">) {
  return (
    <section className="section" aria-labelledby="tour-h">
      <div className="wrap">
        <div className="section-head">
          <h1 id="tour-h">Tour</h1>
          <Suspense fallback={null}>
            <TourSlug params={params} />
          </Suspense>
        </div>
        <Link className="btn btn--primary" href="/tours">
          Back to tours
        </Link>
      </div>
    </section>
  );
}
