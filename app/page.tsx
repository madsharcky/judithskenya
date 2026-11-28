import Link from "next/link";
import { COPY } from "@/lib/content";

/*
  Home — shell. The copy comes from the content module (RECAP's business voice,
  brief Q17). The full home page (the seven sections, imagery) lands in #6.
*/

export default function Home() {
  return (
    <section className="section" aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text">
          <div className="section-head">
            <h1 id="hero-h">{COPY.home.h1}</h1>
          </div>
          <p className="t-lead measure">{COPY.home.lead}</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href={COPY.home.primary.href}>
              {COPY.home.primary.label}
            </Link>
            <Link className="btn btn--secondary" href={COPY.home.secondary.href}>
              {COPY.home.secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
