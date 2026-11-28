"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import WhatsAppButton from "./whatsapp-button";

/*
  The kit's nav (assets/system.css .nav, assets/system.js): fixed bar, the logo on
  the left line, the main action ending on the right one. Under 640 system.js opens
  .nav__links as a full-screen sheet and flips aria-expanded on .nav__toggle — no
  script of our own.
*/

const LINKS = [
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        <Link className="nav__logo" href="/">
          RECAP
        </Link>
        <nav className="nav__links" aria-label="Main">
          {LINKS.map((link) => (
            <div className="nav__item" key={link.href}>
              <Link
                className="nav__link"
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <Link className="btn btn--primary" href="/contact">
            Get a quote
          </Link>
        </div>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded="false"
          aria-label="Menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              d="M2 5h14M2 13h14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <WhatsAppButton />
    </header>
  );
}