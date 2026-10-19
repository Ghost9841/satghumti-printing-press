export const SITE = {
  name: "Satghumti Printing Press",
  phone: "+977 984-1877618",
  tel: "tel:+9779841877618",
  whatsapp: "https://wa.me/9779841877618",
  map: "https://share.google/lNv6JrcujJyrGf65W",
  email: "info@satghumtiprinting.com",
  address: "Kathmandu, Nepal, 44600",
  tagline: "Cards, books, banners, shirts. Printed right, delivered on time.",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Printing", href: "/printing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// Fill in real URLs. Icons with an empty url are hidden.
export const SOCIALS = { facebook: "", instagram: "", twitter: "", linkedin: "" };
