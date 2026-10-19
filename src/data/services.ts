export type Service = { slug: string; title: string; blurb: string; items: string[]; badge?: string };
export const SERVICES: Service[] = [
  { slug: "business-cards", title: "Business & Visiting Cards", blurb: "Matte, gloss, spot-UV and textured stock.", items: ["Standard & premium", "Double-sided", "Quick turnaround"], badge: "Most ordered" },
  { slug: "bill-pads", title: "Bill Pads", blurb: "Numbered, duplicate and triplicate carbonless pads.", items: ["Custom size", "Auto-numbering", "Bulk pricing"] },
  { slug: "brochures", title: "Brochures & Leaflets", blurb: "Folded and flat, for launches, schools and offers.", items: ["A4 / A5 / DL", "Bi-fold & tri-fold", "Art paper"] },
  { slug: "books", title: "Book Design, Setting & Printing", blurb: "From manuscript to bound copy, with layout included.", items: ["Typesetting (Nepali & English)", "Cover design", "Perfect & stitch binding"] },
  { slug: "exam-copy", title: "Exam Copies", blurb: "Schools and colleges: reliable, confidential, on schedule.", items: ["Answer sheets", "Question sets", "Large runs"] },
  { slug: "t-shirts", title: "T-Shirts", blurb: "Team, event and brand shirts in any quantity.", items: ["Screen & transfer print", "Custom designs", "Group orders"] },
  { slug: "merchandise", title: "Pens, Diaries, ID Cards & Calendars", blurb: "Branded items for offices, schools and events.", items: ["Printed pens", "Diaries & calendars", "PVC ID cards"] },
  { slug: "large-format", title: "Canvas, Flex, Banners & Stickers", blurb: "Big, bright and weatherproof.", items: ["Flex & banner", "Canvas prints", "Vinyl stickers"] },
];
export const AUDIENCES = [
  { who: "Shops & businesses", need: "Cards, bill pads, stickers, signboards" },
  { who: "Schools & colleges", need: "Exam copies, ID cards, diaries, calendars" },
  { who: "Authors & publishers", need: "Typesetting, cover design, printing, binding" },
  { who: "Events & individuals", need: "Banners, T-shirts, invitations, one-off prints" },
];
export const STEPS = [
  { t: "Tell us what you need", d: "Send a message or fill the quote form." },
  { t: "Approve the proof", d: "We share a design or sample before printing." },
  { t: "We print and finish", d: "Cutting, binding and packing done in-house." },
  { t: "Pick up or delivery", d: "Collect from the press or get it delivered." },
];
