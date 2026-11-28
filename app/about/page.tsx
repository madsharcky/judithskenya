/*
  About — minimal shell. No personal biography, names, stats or photos — the
  full story, credentials section and photography land in #7. The business is
  presented as RECAP Tours and Travel, not as a personal brand (brief Q13).
*/

import { COPY } from "@/lib/content";

export const metadata = { title: "About — RECAP Tours and Travel" };

export default function About() {
  return (
    <section className="section" aria-labelledby="about-h">
      <div className="wrap">
        <div className="section-head">
          <h1 id="about-h">{COPY.about.h1}</h1>
          <p className="t-lead measure">{COPY.about.lead}</p>
        </div>
        <p className="muted">{COPY.about.credentialsNote}</p>
      </div>
    </section>
  );
}
