/*
  Admin login — minimal shell. No credentials, no working form: the single-user
  password auth and Stripe Payment Links land in later tickets (ADR 0004). The
  page makes clear that nothing is live yet.
*/

import Link from "next/link";
import { COPY } from "@/lib/content";

export const metadata = { title: "Admin — RECAP Tours and Travel" };

export default function AdminLogin() {
  return (
    <section className="section" aria-labelledby="admin-login-h">
      <div className="wrap">
        <div className="section-head">
          <h1 id="admin-login-h">{COPY.adminLogin.h1}</h1>
          <p className="t-lead measure" data-placeholder="">
            {COPY.adminLogin.lead}
          </p>
        </div>
        <p>
          <Link className="btn btn--secondary" href="/">
            Back to the homepage
          </Link>
        </p>
      </div>
    </section>
  );
}
