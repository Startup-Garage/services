import type { Metadata } from "next";
import { SITE } from "./site";

// A page-level `openGraph` replaces the root one entirely, so the shared image is repeated here.
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: SITE.title };

/** Per-page metadata with canonical URL and matching Open Graph / Twitter tags. */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const fullTitle = `${title} — ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: SITE.locale, siteName: SITE.name, url: path, title: fullTitle, description, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [OG_IMAGE.url] },
  };
}
