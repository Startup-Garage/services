import type { CSSProperties } from "react";
import { PAID_SERVICES } from "@/content/services";
import { button, cn, container } from "@/lib/ui";

const TITLE_LINES = ["Xizmatlar: startapdan", "investitsiya va", "bozorga kirishgacha"];

// Floating cards around the title (wide screens only): service names, no prices.
// Position and tilt are decoration; the names come straight from the services data.
const TAGS: { id: string; className: string; rotate: number; delay: number }[] = [
  { id: "diagnostic", className: "left-[3%] top-[19%]", rotate: -4, delay: 0 },
  { id: "fundraising", className: "right-[3%] top-[16%]", rotate: 3, delay: 1.2 },
  { id: "cfo", className: "left-[2%] top-[46%]", rotate: 3, delay: 2.1 },
  { id: "a9r", className: "right-[4%] top-[45%]", rotate: -3, delay: 0.7 },
  { id: "scouting", className: "left-[5%] top-[71%]", rotate: -2, delay: 1.7 },
  { id: "soft-landing", className: "right-[3%] top-[69%]", rotate: 4, delay: 2.6 },
];

export function ServicesHero() {
  const tags = TAGS.flatMap((t) => {
    const s = PAID_SERVICES.find((x) => x.id === t.id);
    return s ? [{ ...t, title: s.title }] : [];
  });
  const ticker = PAID_SERVICES.map((s) => s.title);

  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Flat dotted grid, fading out toward the edges */}
      <div aria-hidden="true" className="hero-dots pointer-events-none absolute inset-0" />

      {tags.map((t) => (
        <div
          key={t.id}
          aria-hidden="true"
          className={cn("float-tag absolute hidden xl:block", t.className)}
          style={{ "--tilt": `${t.rotate}deg`, "--float-delay": `${t.delay}s` } as CSSProperties}
        >
          <div className="rounded-full border border-g-200 bg-white px-5 py-3 text-[15px] font-semibold text-g-700">{t.title}</div>
        </div>
      ))}

      <div className={cn(container, "relative flex flex-1 flex-col items-center justify-center gap-6 pb-[clamp(88px,14vh,160px)] pt-[clamp(48px,7vw,96px)] text-center")}>
        <h1
          aria-label={TITLE_LINES.join(" ")}
          className="text-[min(8vw,40px)] font-medium leading-none tracking-[-0.05em] sm:text-[clamp(38px,5.6vw,76px)]"
        >
          {TITLE_LINES.map((line, li) => {
            const before = TITLE_LINES.slice(0, li).reduce((n, l) => n + l.length, 0);
            return (
              <span
                key={line}
                aria-hidden="true"
                className="marker mx-auto block w-fit"
                style={{ "--marker-delay": `${0.2 + li * 0.45}s` } as CSSProperties}
              >
                {Array.from(line).map((ch, ci) => (
                  <span
                    key={ci}
                    className="blur-char"
                    style={{ "--char-delay": `${0.25 + (before + ci) * 0.03}s` } as CSSProperties}
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </span>
                ))}
              </span>
            );
          })}
        </h1>
        <p className="max-w-[52ch] text-[clamp(16px,1.3vw,18px)] text-g-600">
          Asoschilar, investorlar va xalqaro kompaniyalar uchun Startup Garage xizmatlari va narxlari.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#ariza" className={button("primary")}>
            Ariza qoldirish
          </a>
          <a href="#xizmatlar" className={button("ghost")}>
            Xizmatlarni ko‘rish
          </a>
        </div>
      </div>

      {/* Marquee with every service name */}
      <div className="relative border-y border-g-200 bg-white py-4" aria-hidden="true">
        <div className="marquee flex w-max gap-10 whitespace-nowrap text-[15px] font-semibold text-g-700">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex gap-10">
              {ticker.map((name) => (
                <li key={name} className="flex items-center gap-10">
                  {name}
                  <span className="size-1.5 rounded-full bg-brand" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
