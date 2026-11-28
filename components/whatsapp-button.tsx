/* eslint-disable @next/next/no-img-element -- the kit's icon is a plain SVG file in public/assets, not an image to optimise */

import { CONTACTS } from "@/lib/content";

/*
  The persistent WhatsApp element (brief Q18: WhatsApp is the primary enquiry
  channel, visible throughout). It is the only place the WhatsApp green appears
  (CODING_STANDARDS, #15) — the glyph is the kit's own full-colour icon
  (assets/ui/icons/whatsapp.svg), never redrawn.

  The number is a stand-in until the client supplies the official one; the
  placeholder value comes from the content module, 0000000000 — deliberately
  not a real-format number.
*/

export default function WhatsAppButton() {
  return (
    <a
      className="wa"
      href={CONTACTS.whatsapp.href}
      aria-label="Chat with RECAP on WhatsApp (number to be confirmed)"
      data-placeholder=""
    >
      <img src="/assets/ui/icons/whatsapp.svg" alt="" width={30} height={30} />
    </a>
  );
}