# Hindsight Mental Models — Best Practices & Bank Audit

Research notes for the rewrite of the six mental models in the `judithskenya` bank.
Date: 2026-11-18. Method: primary sources (Hindsight official docs + source-adjacent
deep dive, empirical soul.md guide with its cited studies), plus a full audit of the
local bank via its API. No sub-agents used; all lookups done sequentially.

---

## 1. How mental models work (official docs)

A mental model is "a standing answer to a question about a bank": you define the
question once (`source_query`); Hindsight writes the answer, stores it, and rewrites
it in the background as the bank learns more. Retrieval hierarchy during reflect:
**mental models → observations → raw facts** (each tier cheaper/more settled than the
one below). A fresh mental model covering the question lets reflect answer without
descending.
Source: https://hindsight.vectorize.io/developer/mental-models (accessed 2026-11-18)

Schema (one row per model): `id`, `source_query`, `content`, `trigger` (JSONB),
`tags`, `max_tokens`, `structured_content` (AST — enables delta edits),
`last_refreshed_source_query`, `reflect_response` (provenance), `history`.
Source: https://hindsight.vectorize.io/blog/2026/06/05/mental-models-deep-dive

### full vs delta — "the single most important choice"

- `full` (default): every refresh re-runs the reflect pipeline and **regenerates the
  document from scratch**. Right for short docs or models whose shape still shifts.
- `delta`: refresh emits typed operations (add section / append bullet / replace
  block / remove stale paragraph). Untouched sections are copied **byte-identical**
  — "no paraphrasing, no whitespace drift, no list-style normalization". Right for
  long-lived playbook-style documents you want to evolve incrementally.
- Delta only looks at facts newer than `last_refreshed_at`.
- Changing `source_query` invalidates the delta baseline → next refresh falls back
  to full synthesis (automatic and silent).
- Gotcha: "Many small delta refreshes can accumulate small inaccuracies. Periodic
  clear + refresh rebuilds a clean baseline" (the docs recommend e.g. every 48 h for
  long-lived delta models).
Source: deep dive, sections "The Two Refresh Modes" and "What to Watch For".

### Pages (document-mode models)

A page is a mental model with document-oriented defaults:
- `fact_types: ["observation"]` — reads consolidated, deduplicated, evidence-backed
  beliefs, not raw conversational detail.
- `exclude_mental_models: true` — a page never reads sibling pages (prevents
  citation feedback loops).
- `mode: "delta"` — edits, doesn't regenerate, so hand-tuned structure survives.
- `max_tokens` default 4096 (plain models default 2048).
Source: https://hindsight.vectorize.io/developer/api/knowledge-pages and
https://hindsight.vectorize.io/developer/pages

### Tags — the foot-gun

Model tags do two things: (1) they filter which memories the refresh path may read,
(2) they gate which recall/reflect calls can see the model. Default matching is
`all_strict`: a refresh only sees memories carrying **all** of the model's tags, and
untagged memories are excluded. Consequence: tag a model with a tag nothing in the
bank carries, and refresh returns empty (the empty-content guard then keeps the old
content, and the model silently never regenerates). Fix: backfill tags onto source
memories first, or override via `trigger.tags_match` (`any`, `any_strict`).
Source: deep dive, "The Tag-Matching Foot-Gun".

---

## 2. Official best-practices page — what applies here

Source: https://hindsight.vectorize.io/best-practices (accessed 2026-11-18)

- **When to create models**: repeated high-traffic queries; "user profiles or
  personas read on every request"; "cross-session state that changes slowly
  (preferences, skills, background)"; "knowledge summaries reviewed or approved by
  humans". All four match this bank's intended use.
- **Granularity**: "Create narrow, scoped models — one per knowledge dimension. A
  mental model titled 'Everything about the user' is as useful as none." Anti-
  pattern table: "One mental model for everything → low accuracy, slow refresh, hard
  to scope."
- **Missions must match the data type**: "Misconfigured missions are the single
  biggest cause of low-quality memories." retain/observations/reflect missions are
  free-text; list what to extract **and** what to ignore.
- **Disposition traits** (affect reflect only): skepticism, literalism, empathy on
  1–5 scales. "Code review: skepticism 4, literalism 5, empathy 1" is the most
  literal profile; the guide's point is to set them deliberately per use case.
- **Retain hygiene**: always set `context` ("high-impact on extraction quality");
  use stable `document_id` (upsert, no duplicates); always set `timestamp`; never
  pre-summarize (loses entity relationships and temporal markers).
- **Observation scopes** and `recall_prefer_observations` exist to lean retrieval on
  consolidated beliefs instead of raw facts.

---

## 3. soul.md best practices (empirical guide + example)

Source: https://github.com/Twynzen/soul-md (README, templates/base.md,
examples/elena-financial.md; accessed 2026-11-18). Empirical guide based on 27+
production agents, academic research 2024–2026, 15+ frameworks.

- A SOUL.md is the persistent identity file injected into the system prompt: who
  the agent is, what it values, how it communicates, what it will never do.
  Pattern has converged across runtimes: Hermes Agent uses `~/.hermes/SOUL.md`;
  OpenClaw `workspace/SOUL.md`; Claude Code `CLAUDE.md`; Cursor `.cursorrules`.
- **Structure (8 layers)**: frontmatter (name/description/model/tools/version) →
  2. Identity ("You are X, role of Y. You exist so that [beneficiary] can
  [concrete benefit]. You are NOT …" + NEVER-lines with explicit reasons) →
  3. Values (3–5 principles, each with an operational reason) → 4. Personality
  (stable) vs Tone (context-dependent) → 5. Authority Bounds (what the agent may
  not commit to, without escalation) → 6. Behavioral Examples (3–5 concrete
  `<example>` blocks — "behavioral examples > abstract descriptions") → Guardrails
  → Security Covenant (reinforces critical bounds; the `## Guardrails` heading and
  file-end placement get extra model attention).
- **Budget: 800–2,500 tokens.** The annotated production example (Elena, financial
  planner) is ~1,250 tokens and deploys the key techniques: limits repeated in the
  first 50 words AND in the bounds section; discovery-before-recommendation
  methodology; three failure-mode examples.
- **Research findings that shape design**:
  1. *Persona drift is mathematically guaranteed* (Li et al., COLM 2024 — measured
     within ~8 turns, attention decay over initial system-prompt tokens). Design
     for recovery (re-anchoring blocks), not prevention.
  2. *Personas don't improve factual accuracy* (Zheng et al., EMNLP 2024 — 162
     personas, effect largely random). The justification for soul.md is brand
     consistency, tone alignment, and behavior traceability — not raw capability.
  3. *SOUL.md is an attack vector, not a defense* (Zhang et al. 2025 — adversarial
     persona modulation). Real security needs architectural controls, not prose.

---

## 4. Audit of the `judithskenya` bank (2026-11-18, local API)

### Inventory

| # | name | id | mode | fact_types | max_tokens | tags | notes |
|---|------|----|------|-----------|-----------|------|-------|
| 1 | ToDo's | `todo` | full | world, experience, observation | 2048 | none | duplicates; stale risk |
| 2 | soul.md | `mm-3cd12…` | full | experience, world, observation | 4096 | none | meta-doc, not a soul |
| 3 | Client | `mm-3b8f7…` | full | world, experience, observation | (4096) | none | heavy confabulation |
| 4 | clientConversation | `mm-3a35d…` | full | observation, experience, world | 4096 | none | mostly sound, invented precision |
| 5 | developer preferences | `developer` | full | world, experience, observation | 2048 | none | near-zero evidence base |
| 6 | Project context | `context` | full | world, experience, observation | 2048 | none | factually ok, wrong framing |

All six: untagged (read the whole bank), `refresh_after_consolidation: true`,
`exclude_mental_models: true` except `context` and `developer` (false — they read
sibling models).

### Bank statistics

- 19 memories total (10 experience, 9 world), **0 observations**
  (`total_observations: 0`), auto-consolidation on, 10 documents.
- Config: `disposition_literalism: 5` (already maxed), `skepticism: 3`,
  `empathy: 3`; `enable_observations: true`; `recall_prefer_observations: false`.
- Missions: retain/reflect/observations missions are all **code-focused**
  ("Extract technical decisions…", "Senior Software Architect Agent") while the
  bank's actual payload is client-communication facts — the exact mismatch the
  best-practices page warns about.
- **No directives** in the bank (0).

### The actual evidence base

The entire client conversation is **three messages** (WhatsApp export, doc
`whatsapp_judith_kenya`):

1. Nov 16, 10:00 — Judith: "Hello Jonathan, I'm Judith from Kenya. I got your
   number from Nicole and I was hoping to chat with you about the tour website.
   First, thank you so much for agreeing to do this for me. Please let me know
   what information you'd want from me for this to happen."
2. Nov 18, 12:08 — Jonathan: (apology for the wait; "the biggest part is to find
   out what you picture in your mind as good as I can"; preparing a comprehensive
   list of questions, will send when done; once most are answered he'll have a
   general direction, then "make some prototypes where we can discuss details and
   changes").
3. Nov 18, 12:56 — Judith: "That's very okay… I'll be waiting. I really appreciate
   this."

Plus one 171-char doc: "Judith got Jonathan's contact number from Nicole, a mutual
contact who introduced them, when she reached out on 16 November 2026…"

### Per-model findings

1. **ToDo's** — Three near-duplicate lines about the question list; "build the
   website" listed as a pending action (it's the whole project, not an action).
   Status risk: a memory claims the question list was *sent* at 12:56 on Nov 18,
   but at 12:56 the primary source shows Judith replying — the list does not appear
   in the export. Whether it was ever sent is unverified; the model needs the real
   status.
2. **Client** — The worst offender. Unsupported claims (nothing in the 3-message
   chat supports them): "Technical proficiency: Familiar with web development
   concepts (Next.js, React, TypeScript)" (that's Jonathan's stack, not Judith's
   knowledge); "Does not like: … Technical issues with Hindsight plugin (e.g., port
   typos…)", "Duplicate or redundant documents in the knowledge base", "Overly
   technical details…", "Delayed or incomplete ingestion of meeting notes" — the
   client has never seen Hindsight. Also invented: "Seamless integration with
   existing communication channels", "Reliable performance and responsiveness"
   (reasonable defaults, but not her words). What IS evidenced: independent tour
   guide near Nairobi; met Jonathan via Nicole; warm, appreciative tone; asked him
   to tell her what he needs (delegates process to him); waiting for the question
   list; agrees to the questions → prototypes workflow.
3. **clientConversation** — Largely correct. Problems: "Timeline: Jonathan will send
   the questions on or shortly after November 18, 2026, based on the conversation
   timeline" (invented precision — he said "as soon as it's done"); "Judith will
   provide her responses and wait patiently" ("patiently" is editorial).
4. **developer preferences** — Almost nothing evidenced. Hindsight API endpoints and
   file-format support are listed as "preferences" (they're tool capabilities);
   "coding style: standard conventions" (no stated preference); "iterative,
   client-driven review" (plausible, not stated). New real evidence now exists:
   no sub-agents (local LLM, concurrent requests extremely slow) — 2026-11-18.
5. **Project context** — Facts check out against the repo (verified: Next.js
   16.4.6, React 19.3.0, Tailwind 4.3.3, TS; `app/page.tsx` landing page; layout
   metadata still "Create Next App"). Framing errors: calls the setup a
   "client-server architecture" and makes the Hindsight plugin a site component
   (it's a development tool, not part of the website); calls it a "single-page
   application" (it's an app-router Next.js site with one route so far, planned
   to grow); "Key Conventions" mixes nonexistent code conventions with
   Hindsight-ingest workflow rules. Missing real conventions from the repo's
   AGENTS.md: read `node_modules/next/dist/docs/` before writing Next.js code
   ("This is NOT the Next.js you know"); issues tracked in GitHub Issues
   `madsharcky/judithskenya` via `gh`; triage label scheme; domain docs =
   `GLOSSARY.md` + `docs/adr/` (neither exists yet).
6. **soul.md** — Answers "how to write soul.md" instead of *being* the soul.
   Duplicates Project context facts (stack, current state). The profile's actual
   `SOUL.md` (`~/.hermes/profiles/judithskenya/SOUL.md`) is a single boilerplate
   paragraph with no project fit — the model was created to fix that, and
   missed.

### Systemic causes (why the LLM produced this)

1. **`full` mode on thin evidence.** Every refresh regenerates from scratch, so
   the synthesizer must fill the document with *something*; with 3 messages of
   evidence it invents the rest. `delta` mode on hand-written content would keep
   the parts that don't change byte-identical and only edit against new facts.
2. **No observations exist** (0), so the doc-recommended `fact_types:
   ["observation"]` source would be empty; models read raw world/experience
   strings, which carry the bank's own "WHY it matters" padding — the LLM then
   treats that padding as evidence.
3. **No scope isolation.** All six models are untagged → each reads the whole
   bank, so developer-tooling facts leak into the client profile and vice versa.
4. **No directives.** Nothing instructs the synthesizer to refuse speculation or
   to mark gaps.
5. **Missions mismatched to the data** (code-focused missions, client-conversation
   bank).

---

## 5. Recommended rewrite plan (for grilling/decision)

Per model: (a) rewrite `source_query` to one tight question per model (the docs:
a page "answers one question"); (b) hand-write evidence-only content with explicit
`UNKNOWN:` gaps; (c) switch `trigger.mode` to `delta` so the rewrite survives
refreshes; (d) keep `fact_types` as-is until observations exist (0 in bank —
switching to `[observation]` would starve the model); (e) optionally tag memories +
models for scope isolation (mind the all_strict foot-gun).

Bank-level: (f) add directives: evidence-only synthesis, mark unknowns, never
infer unexpressed preferences/attitudes; (g) consider re-pointing
retain/reflect/observations missions at the bank's real data type (client
communication + project state); (h) schedule periodic clear + full refresh to
reset delta drift (docs: ~48 h for long-lived delta models); (i) if observations
stay at 0, accept raw-fact sourcing and rely on (f).

The `soul.md` model should become the *actual* project SOUL.md (8-layer structure,
800–2,500 tokens, identity/values/bounds/examples) for the `judithskenya` profile,
with the same text written to `~/.hermes/profiles/judithskenya/SOUL.md` — not
meta-guidance about writing souls.

---

## Sources

- Hindsight docs — Mental Models: https://hindsight.vectorize.io/developer/mental-models
- Hindsight docs — Knowledge Pages API: https://hindsight.vectorize.io/developer/api/knowledge-pages
- Hindsight docs — Pages: https://hindsight.vectorize.io/developer/pages
- Hindsight blog — "How Hindsight Learns: A Deep Dive Into Mental Models" (B. Bartholomew, 2026-06-05): https://hindsight.vectorize.io/blog/2026/06/05/mental-models-deep-dive
- Hindsight docs — Best Practices: https://hindsight.vectorize.io/best-practices
- soul-md (empirical guide, 27+ production agents): https://github.com/Twynzen/soul-md
  - 8-layer base template: `templates/base.md`
  - annotated production example: `examples/elena-financial.md`
- Local bank: `http://localhost:8888` (judithskenya) — mental-models, documents,
  chunks, memories, stats, config, directives endpoints, queried 2026-11-18.
- Repo: `/home/mad/code/judithskenya` — package.json, app/*.tsx, AGENTS.md,
  docs/agents/*.md, README.md, inspected 2026-11-18.
