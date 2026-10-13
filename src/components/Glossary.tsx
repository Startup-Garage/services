import { Fragment } from "react";
import { GLOSSARY } from "@/content/glossary";
import { Term } from "./Term";

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Longest spelling first so "Venture Building" wins over any shorter overlap. A match must start
// at a word boundary and runs to the end of the word, so "mandatingizga" is caught by "Mandat".
const SPELLINGS = GLOSSARY.flatMap((entry) => entry.match.map((spelling) => ({ spelling, entry }))).sort(
  (a, b) => b.spelling.length - a.spelling.length,
);
const PATTERN = new RegExp(
  `(?<![\\p{L}\\p{N}])(?:${SPELLINGS.map((s) => escape(s.spelling)).join("|")})[\\p{L}\\p{N}]*`,
  "giu",
);

function entryFor(word: string) {
  const lower = word.toLowerCase();
  return SPELLINGS.find((s) => lower.startsWith(s.spelling.toLowerCase()))?.entry;
}

/** Renders a string with its jargon words turned into click-to-explain terms. */
export function Glossary({ children }: { children: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of children.matchAll(PATTERN)) {
    const entry = entryFor(m[0]);
    if (!entry) continue;
    if (m.index > last) parts.push(children.slice(last, m.index));
    parts.push(
      <Term key={m.index} label={entry.label} text={entry.text}>
        {m[0]}
      </Term>,
    );
    last = m.index + m[0].length;
  }
  if (parts.length === 0) return <>{children}</>;
  if (last < children.length) parts.push(children.slice(last));
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>{p}</Fragment>
      ))}
    </>
  );
}
