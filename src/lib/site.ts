export const SITE = {
  name: "Startup Garage",
  // Production domain of this landing — set NEXT_PUBLIC_SITE_URL in the deploy environment.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://services.startupgarage.uz").replace(/\/$/, ""),
  title: "Startup Garage xizmatlari — diagnostika, fundraising, scouting, bozorga kirish",
  description:
    "Startup Garage xizmatlari: Startup Diagnostic, Fundraising Readiness, Startup CFO, A9R, Talent Scouting, Corporate Venture Building, Uzbekistan Soft Landing va Innovation Tour.",
  locale: "uz_UZ",
  contacts: {
    telegram: "startupgarage_uz",
    email: "hello@startupgarage.uz",
    instagram: "startupgarage.uz",
    linkedin: "company/startupgarage",
  },
} as const;

/** The main Startup Garage site this landing belongs to. */
export const MAIN_SITE_URL = "https://startupgarage.uz";

export const telegramUrl = `https://t.me/${SITE.contacts.telegram}`;
export const instagramUrl = `https://instagram.com/${SITE.contacts.instagram}`;
export const linkedinUrl = `https://www.linkedin.com/${SITE.contacts.linkedin}`;
