import { instagramUrl, linkedinUrl, MAIN_SITE_URL, SITE, telegramUrl } from "@/lib/site";
import { container } from "@/lib/ui";
import { Logo } from "./Logo";
import { CurrentYear } from "./ui/CurrentYear";

const LINKS = [
  { href: telegramUrl, label: "Telegram" },
  { href: instagramUrl, label: "Instagram" },
  { href: linkedinUrl, label: "LinkedIn" },
  { href: `mailto:${SITE.contacts.email}`, label: SITE.contacts.email },
  { href: MAIN_SITE_URL, label: "startupgarage.uz" },
];

export function Footer() {
  return (
    <footer className="border-t border-g-900 bg-black pt-[clamp(40px,5vw,64px)] text-g-400">
      <div className={container}>
        <div className="flex flex-wrap items-start justify-between gap-8 pb-[clamp(32px,5vw,56px)]">
          <Logo variant="white" className="h-11" />
          <ul className="flex flex-wrap gap-x-6 gap-y-3 font-semibold text-white">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="transition-colors hover:text-brand-light">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-g-900 py-6 text-sm">
          © <CurrentYear fallback={2026} /> Startup Garage
        </div>
      </div>
    </footer>
  );
}
