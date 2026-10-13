import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE.url, lastModified: "2026-10-13", changeFrequency: "monthly", priority: 1 }];
}
