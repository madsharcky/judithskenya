/* eslint-disable @next/next/no-img-element -- the kit's icons are plain SVG files in public/assets, not images to optimise */
import Link from "next/link";

/*
  The kit's closing footer (assets/system.css .footer.closing): row 1 the close,
  row 2 the directory and the legal row. No credits line yet — the site shows no
  photographs until the client supplies them (copy.md).

  Placeholder contacts (brief Q18: the official contacts arrive before launch):
  the WhatsApp number and the social links are stand-ins, marked data-placeholder,
  never a real-format number or address (CODING_STANDARDS). The legal row carries
  the brand, the year and the social links — no line about the placeholder state.
*/

const YEAR = new Date().getFullYear();

type FooterLink = { href: string; label: string; placeholder?: boolean };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Tours",
    links: [{ href: "/tours", label: "All tours" }],
  },
  {
    title: "About",
    links: [{ href: "/about", label: "About RECAP" }],
  },
  {
    title: "Contact",
    links: [
      { href: "/contact", label: "Contact us" },
      { href: "/contact", label: "Get a quote" },
    ],
  },
  {
    title: "Follow",
    links: [
      {
        href: "https://www.instagram.com/",
        label: "Instagram",
        placeholder: true,
      },
      {
        href: "https://www.facebook.com/",
        label: "Facebook",
        placeholder: true,
      },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="footer closing" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">Plan a tour with RECAP</h2>
            <p>Tell us your dates and your budget; we reply on WhatsApp.</p>
          </div>
          <Link className="btn btn--primary btn--xl btn--wide" href="/contact">
            Get a quote
            <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
              <path className="m-arrow__stem" d="M1 6h8" />
              <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
            </svg>
          </Link>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <Link className="nav__logo" href="/">
                RECAP
              </Link>
              <p className="footer__lede">
                Tours and travel from Nairobi, planned around your schedule and
                your budget.
              </p>
            </div>
            {COLUMNS.map((column) => (
              <div className="span-2 footer__col" key={column.title}>
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        data-placeholder={link.placeholder ? "" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer__legal">
            <span>&copy; {YEAR} RECAP Tours and Travel</span>
            <div className="socials">
              <a
                href="https://www.instagram.com/"
                aria-label="RECAP on Instagram"
                data-placeholder=""
              >
                <img
                  src="/assets/icons/demo/instagram.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="https://www.facebook.com/"
                aria-label="RECAP on Facebook"
                data-placeholder=""
              >
                <img
                  src="/assets/icons/demo/facebook.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}