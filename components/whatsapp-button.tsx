/* eslint-disable @next/next/no-img-element -- the kit's icon is a plain SVG file in public/assets, not an image to optimise */

/*
  The persistent WhatsApp element (brief Q18: WhatsApp is the primary enquiry
  channel, visible throughout). It is the only place the WhatsApp green appears
  (CODING_STANDARDS, #15) — the glyph is the kit's own full-colour icon
  (assets/ui/icons/whatsapp.svg), never redrawn.

  The number is a stand-in until the client supplies the official one; 0000000000
  is deliberately not a real-format number.
*/

export default function WhatsAppButton() {
  return (
    <a
      className="wa"
      href="https://wa.me/0000000000"
      aria-label="Chat with RECAP on WhatsApp (number to be confirmed)"
      data-placeholder=""
    >
      <img src="/assets/ui/icons/whatsapp.svg" alt="" width={30} height={30} />
    </a>
  );
}