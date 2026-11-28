import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

/*
  The design kit is served as plain files from public/assets and linked here —
  never imported through the bundler. Keep the order: system.css, ui/cards.css,
  motion/motion.css, backgrounds/backgrounds.css, layout/layout.css,
  icons/icon.css, then the :root palette block (layout.css resets --ly-scale,
  so the block stays after the links).
*/

export const metadata: Metadata = {
  title: "RECAP Tours and Travel",
  description:
    "Tours and travel from Nairobi into the wild, planned around your schedule and budget.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-type="service"
      data-radius="soft"
      data-buttons="solid"
      data-motion
      data-palette="c"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400..600&family=Playfair+Display:wght@400..700&display=swap"
        />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/backgrounds/backgrounds.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
/* Proposal C — "Clean Operator": near-monochrome base, one warm accent (Serena-style
   burnt orange) for CTAs, prices and active states. WhatsApp green (#25d366) is
   reserved for the WhatsApp element and appears nowhere else. */
:root {
  --p-bg: #ffffff; --p-surface: #f2f2f2; --p-ink: #1a1a1a; --p-muted: #69727d;
  --p-accent: #cd6100; --p-accent-ink: #111111; --p-action: #cd6100; --p-action-ink: #111111;
  --p-inv-bg: #1a1a1a; --p-inv-surface: #272727; --p-inv-ink: #ffffff; --p-inv-muted: #9f9f9f;
  --p-inv-accent: #cd6100; --p-inv-accent-ink: #111111; --p-inv-action: #cd6100; --p-inv-action-ink: #111111;
  --font-display: "Playfair Display", Georgia, serif;
  --font-text: "Inter", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.018em;
  --display-tracking-xl: -0.025em;
  --ly-scale: 1.06;
}
/* the serif is for large display headings only (h1, h2); h3 and below are Inter */
h3 { font-family: var(--font-text); letter-spacing: -0.01em; }
/* Proposal A — "Savanna & Shuka": warm cream base, deep shuka red for CTAs and active
   states, gold (#edc969) reserved for highlights and action buttons on dark surfaces. */
:root[data-palette="a"] {
  --p-bg: #faf6ef; --p-surface: #f1e9db; --p-ink: #1c1c1c; --p-muted: #6e6257;
  --p-accent: #a63a2b; --p-accent-ink: #faf6ef; --p-action: #a63a2b; --p-action-ink: #faf6ef;
  --p-inv-bg: #1c1c1c; --p-inv-surface: #2b2b2b; --p-inv-ink: #faf6ef; --p-inv-muted: #b5a99a;
  --p-inv-accent: #edc969; --p-inv-accent-ink: #1c1c1c; --p-inv-action: #edc969; --p-inv-action-ink: #1c1c1c;
}
/* Proposal B — "Coast & Coral": warm white base, dark teak-brown ink, coral-stone
   beige surfaces, deep cobalt accent/CTA. */
:root[data-palette="b"] {
  --p-bg: #fbf9f4; --p-surface: #f0e7d7; --p-ink: #4a352a; --p-muted: #756453;
  --p-accent: #1f3a5f; --p-accent-ink: #fbf9f4; --p-action: #1f3a5f; --p-action-ink: #fbf9f4;
  --p-inv-bg: #1f3a5f; --p-inv-surface: #2a4763; --p-inv-ink: #fbf9f4; --p-inv-muted: #b8c4d6;
  --p-inv-accent: #d8c3a5; --p-inv-accent-ink: #4a352a; --p-inv-action: #d8c3a5; --p-inv-action-ink: #4a352a;
}
`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try { var p = localStorage.getItem("recap-palette"); if (p === "a" || p === "b" || p === "c") document.documentElement.dataset.palette = p; } catch (e) {}`,
          }}
        />
      </head>
      <body>
        <SiteHeader />
        <main id="top">{children}</main>
        <SiteFooter />
        <Script src="/assets/system.js" type="module" strategy="afterInteractive" />
        <Script src="/assets/motion/motion.js" type="module" strategy="afterInteractive" />
        <Script src="/assets/layout/layout.js" type="module" strategy="afterInteractive" />
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}