"use client";

import { useSyncExternalStore } from "react";

/*
  Prototype-only palette switcher (#2 / #17). Lets the client compare the three
  proposals — A "Savanna & Shuka", B "Coast & Coral", C "Clean Operator" (default) —
  on the same layout and content; only the tokens change. The whole component, the
  :root[data-palette] blocks in app/layout.tsx and the head script there are the
  removal path: delete this file, those blocks and that script and set the surviving
  proposal as the plain :root block in app/layout.tsx, once the client picks.
*/

type PaletteId = "a" | "b" | "c";

const KEY = "recap-palette";

const PALETTES: { id: PaletteId; name: string }[] = [
  { id: "a", name: "Savanna & Shuka" },
  { id: "b", name: "Coast & Coral" },
  { id: "c", name: "Clean Operator" },
];

const listeners = new Set<() => void>();

const readStored = (): PaletteId => {
  try {
    const v = localStorage.getItem(KEY);
    return v === "a" || v === "b" || v === "c" ? v : "c";
  } catch {
    return "c";
  }
};

const getSnapshot = (): PaletteId => readStored();
const getServerSnapshot = (): PaletteId => "c";

const subscribe = (cb: () => void) => {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
};

const setPalette = (id: PaletteId) => {
  try {
    localStorage.setItem(KEY, id);
  } catch {
    /* private browsing: the swap still works for the session */
  }
  document.documentElement.dataset.palette = id;
  listeners.forEach((l) => l());
};

export default function PaletteSwitcher() {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div
      className="palette-switcher"
      role="group"
      aria-label="Prototype palette picker — removed once the client picks a palette"
    >
      <span className="palette-switcher__tag">Prototype</span>
      <span className="palette-switcher__label">Palette</span>
      {PALETTES.map((p) => (
        <button
          key={p.id}
          type="button"
          className="palette-switcher__btn"
          aria-pressed={current === p.id}
          aria-label={`Proposal ${p.id.toUpperCase()} — ${p.name}`}
          title={`Proposal ${p.id.toUpperCase()} — ${p.name}`}
          onClick={() => setPalette(p.id)}
        >
          {p.id.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
