import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { instagramUrl, linkedinUrl, MAIN_SITE_URL, SITE, telegramUrl } from "@/lib/site";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s — Startup Garage" },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: SITE.locale, url: "/", siteName: SITE.name, title: SITE.title, description: SITE.description },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#5458FF",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: MAIN_SITE_URL,
  logo: `${SITE.url}/brand/sg-logo.svg`,
  description: SITE.description,
  email: SITE.contacts.email,
  sameAs: [telegramUrl, instagramUrl, linkedinUrl],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" className={onest.variable}>
      <body className="bg-white font-sans text-base leading-[1.55] text-ink antialiased">
        <a
          href="#main"
          className="absolute -top-16 left-4 z-[100] rounded-xl bg-black px-4 py-2.5 font-semibold text-white focus:top-4"
        >
          Asosiy kontentga o‘tish
        </a>
        <JsonLd data={organizationJsonLd} />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
