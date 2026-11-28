<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Agent skills

### Issue tracker

Issues live in GitHub Issues (madsharcky/judithskenya), managed via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five canonical labels: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `GLOSSARY.md` at the repo root + `docs/adr/`. See `docs/agents/domain.md`. Coding rules the review stage enforces: `CODING_STANDARDS.md`.

### Client brief and research

`docs/customer/to-questionnaire-judiths-kenya-tours.md` — the client's verbatim answers; the source of truth for requirements and copy. `docs/research/styling-guide-research.md` — the visual direction: palette, fonts, page structure.

### Next.js route authoring

After adding or deleting a route, run `npx next typegen` before relying on the `PageProps`/`LayoutProps` helpers (or the build) — the route literal types only exist once the generator has run, otherwise you get a confusing constraint error. For an unresolved fallback segment (`/tours/[slug]` with no `generateStaticParams`), the page needs `export const instant = false` and `params` accessed inside a `<Suspense>` boundary.

### Design kit

The kit is served as plain CSS from `public/assets/`, linked in `app/layout.tsx` (never imported through the bundler) — that file's ordered `<link>` notes are the index. `backgrounds.css` is linked but `backgrounds.js` is NOT loaded: ground tints (`--g-k`, `--g-kl`, `--g-kd`) keep the CSS default (`1`), so grounds render at full strength and no contrast-headroom detection runs. If a palette is ever swapped or a dark ground is used, check that before adding/editing one.

### Hindsight (persistent memory)

Use Hindsight (hindsight_retain / hindsight_recall / hindsight_reflect) as well as the local Memory tool — the bank is the cross-session source for client, project and environment facts, not just per-session state. Memory entries are retained asynchronously ("Memory queued for storage") and may take up to ~10 minutes before a recall/reflect can reliably return them — don't claim a fact is stored until a recall confirms it or the wait is sufficient.
