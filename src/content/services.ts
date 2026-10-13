// Paid Startup Garage services shown on /services.
// Prices and contents follow the internal service documents; do not add claims that are not there.

export type ServiceGroup = "founders" | "investors" | "international";

export type PaidService = {
  id: string;
  group: ServiceGroup;
  title: string;
  tagline: string;
  price: string;
  priceNote?: string;
  audience?: string;
  includes: string[];
  /** Small print under the list (what is not included, etc.). */
  note?: string;
};

export const SERVICE_GROUPS: { id: ServiceGroup; title: string }[] = [
  { id: "founders", title: "Asoschilar uchun" },
  { id: "investors", title: "Investorlar va korporatsiyalar uchun" },
  { id: "international", title: "Xalqaro kompaniyalar uchun" },
];

export const PAID_SERVICES: PaidService[] = [
  {
    id: "diagnostic",
    group: "founders",
    title: "Startup Diagnostic",
    tagline: "Startapning 360° auditi.",
    price: "$500–1,500",
    includes: ["Mahsulot", "Traction", "Jamoa", "GTM", "Fundraising tayyorgarligi"],
  },
  {
    id: "fundraising",
    group: "founders",
    title: "Fundraising Readiness",
    tagline: "Investorlarga chiqishga tayyorgarlik.",
    price: "$1,500–5,000",
    priceNote: "fiksirlangan narx",
    includes: ["Pitch-dek", "Moliyaviy model", "Data room", "Investor narrativi", "Mock IC"],
  },
  {
    id: "cfo",
    group: "founders",
    title: "Startup CFO",
    tagline: "Startap uchun moliya funksiyasi.",
    price: "$1,000–3,000",
    priceNote: "oyiga",
    includes: ["Byudjetlash", "Runway", "Unit-iqtisodiyot", "Investorlarga hisobotlar"],
  },
  {
    id: "a9r",
    group: "founders",
    title: "A9R by Ali Hasanov",
    tagline: "Bitta asoschi, bitta ekspert, bitta strategik sessiya.",
    price: "$1,000",
    priceNote: "sessiya uchun",
    audience: "Startap asoschilari, SME egalari, yangi biznes yoki yangi bozorga chiqayotgan rahbarlar",
    includes: [
      "Sessiyadan oldin biznes-diagnostika",
      "Ali Hasanov bilan 60–90 daqiqalik 1:1 konsultatsiya",
      "Strategik tavsiyalar va keyingi harakatlar ustuvorligi",
      "Harakat rejasi: 7 kun / 30–90 kun / 6–12 oy",
    ],
  },
  {
    id: "scouting",
    group: "investors",
    title: "Talent Scouting",
    tagline: "Investitsiya mandatingizga mos asoschilar va startaplarni qidirish.",
    price: "$3,000",
    priceNote: "yiliga + 2% success fee · alohida mandat $5,000–20,000+",
    audience: "VC fondlar, korporativ venchur, family office, biznes-farishtalar, akseleratorlar",
    includes: [
      "Mandatni aniqlash: sektor, geografiya, bosqich, raund",
      "Skrining va asoschilar bilan intervyu",
      "Tekshiruv — mahsulot, mijozlar, daromad, kompaniya",
      "5–10 ta mos kompaniyadan iborat shortlist",
      "Asoschilar bilan tanishtiruv va kuzatuv",
    ],
  },
  {
    id: "venture-building",
    group: "investors",
    title: "Corporate Venture Building",
    tagline: "Korporativ aktivlardan yangi mustaqil kompaniya yaratamiz.",
    price: "$10,000",
    priceNote: "boshlang‘ich majburiyat + NewCo’da 30–50% ulush",
    audience: "Mijozlar bazasi, brendi yoki tarqatish kanallari bor kompaniyalar — ta’lim va B2C yo‘nalishlari",
    includes: [
      "Korporativ aktivlar auditi",
      "10–20 imkoniyat, 3–5 konsept",
      "50–100 mijoz intervyusi bilan validatsiya",
      "MVP, jamoa va NewCo tashkil etish",
    ],
  },
  {
    id: "soft-landing",
    group: "international",
    title: "Uzbekistan Soft Landing",
    tagline: "Bozorga kirish va IT viza — bitta fiksirlangan paketda.",
    price: "$5,000",
    priceNote: "fiksirlangan narx",
    audience: "Xalqaro startaplar, IT kompaniyalar, investorlar va korporatsiyalar",
    includes: [
      "Bozor brifi va ekotizim xaritasi",
      "5–10 ta maqsadli tanishtiruv",
      "Kompaniya ochishni muvofiqlashtirish",
      "IT viza bo‘yicha yordam",
      "90 kunlik O‘zbekistondagi o‘sish rejasi",
    ],
    note: "Davlat yig‘imlari, yuridik, buxgalteriya, bank, ofis, tarjima va boshqa uchinchi tomon xarajatlari narxga kirmaydi.",
  },
  {
    id: "innovation-tour",
    group: "international",
    title: "Uzbekistan Innovation Tour",
    tagline: "Tanlab olingan 2–3 kunlik biznes-delegatsiya.",
    price: "$2,000–5,000",
    priceNote: "ishtirokchiga · yoki korporativ paket",
    includes: ["2–3 kunlik dastur", "Tanlab olingan biznes-delegatsiya", "Korporativ paket"],
  },
];
