import { RevealItem } from "@/components/RevealItem";
import { ServicesHero } from "@/components/ServicesHero";
import { PAID_SERVICES, SERVICE_GROUPS } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { SITE, telegramUrl } from "@/lib/site";
import { button, cn, container, sectionTitle } from "@/lib/ui";

// Tighter than the shared `section` rhythm: this page stacks many short blocks.
const sectionY = "py-[clamp(48px,6vw,88px)]";

export const metadata = pageMetadata({
  title: "Xizmatlar — diagnostika, fundraising, scouting, bozorga kirish",
  description:
    "Startup Garage xizmatlari: Startup Diagnostic, Fundraising Readiness, Startup CFO, A9R, Talent Scouting, Corporate Venture Building, Uzbekistan Soft Landing va Innovation Tour.",
  path: "/",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <div id="xizmatlar" className="scroll-mt-28">
        {SERVICE_GROUPS.map((group, gi) => {
          const items = PAID_SERVICES.filter((s) => s.group === group.id);
          return (
            <section
              key={group.id}
              aria-labelledby={`g-${group.id}`}
              className={cn(sectionY, gi % 2 === 0 ? "bg-g-100" : "bg-white")}
            >
              <div className={container}>
                <h2 id={`g-${group.id}`} className={cn(sectionTitle, "mb-10")}>
                  {group.title}
                </h2>
                <ul className="grid gap-3.5 md:grid-cols-2">
                  {items.map((s, si) => (
                    <RevealItem
                      key={s.id}
                      id={s.id}
                      delay={si % 2 === 1 ? 0.12 : 0}
                      className="row-span-5 grid scroll-mt-28 grid-rows-subgrid gap-y-0"
                    >
                      <article className="row-span-5 grid grid-rows-subgrid gap-y-0 rounded-4xl bg-white p-[clamp(22px,2.6vw,34px)] ring-1 ring-g-200">
                        <header>
                          <h3 className="text-[clamp(22px,2.2vw,28px)] font-semibold tracking-[-0.04em]">{s.title}</h3>
                          <p className="mt-2 text-[16px] text-g-600">{s.tagline}</p>
                        </header>
                        <p className="mt-6 flex flex-wrap items-baseline gap-x-2.5">
                          <span className="text-[clamp(28px,3vw,38px)] font-bold tracking-[-0.05em] text-brand">{s.price}</span>
                          {s.priceNote && <span className="text-[14px] font-medium text-g-500">{s.priceNote}</span>}
                        </p>
                        <ul className="mt-6 grid content-start gap-2.5">
                          {s.includes.map((item) => (
                            <li key={item} className="flex gap-3 border-t border-g-200 pt-2.5 text-[15px] text-g-700">
                              <span aria-hidden="true" className="mt-[9px] size-1.5 flex-none rounded-full bg-brand" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 grid content-start gap-3">
                          {s.note && <p className="text-[13.5px] text-g-500">{s.note}</p>}
                          {s.audience && (
                            <p className="text-[14px] text-g-500">
                              <span className="font-semibold text-g-700">Kimlar uchun: </span>
                              {s.audience}
                            </p>
                          )}
                        </div>
                        <a
                          href={`${telegramUrl}?text=${encodeURIComponent(`Salom! ${s.title} xizmati bo‘yicha qiziqaman.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(button("dark", "sm"), "mt-6 self-end justify-self-start")}
                        >
                          Ariza qoldirish
                        </a>
                      </article>
                    </RevealItem>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </div>

      <section id="ariza" aria-labelledby="ariza-title" className={cn(sectionY, "scroll-mt-28")}>
        <div className={container}>
          <div className="grid items-center gap-[clamp(28px,4vw,56px)] rounded-5xl bg-brand p-[clamp(28px,5vw,64px)] text-white lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h2 id="ariza-title" className="max-w-[20ch] text-[clamp(30px,4.4vw,54px)] font-semibold leading-[1.08] tracking-[-0.04em]">
                Qaysi xizmat sizga mos?
              </h2>
              <p className="mt-4 max-w-[46ch] text-[17px] text-white/85">
                Qaysi xizmat kerakligini aniq bilmasangiz ham yozing — jamoamiz sizga javob beradi.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-stretch">
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className={button("white")}>
                Telegramda yozish
              </a>
              <a href={`mailto:${SITE.contacts.email}`} className={button("ghostWhite")}>
                {SITE.contacts.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
