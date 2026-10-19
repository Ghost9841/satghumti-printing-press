import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assets } from "@/assets/assets";
import { NAV, SITE, SOCIALS } from "@/lib/site";

const SOCIAL_LIST = [
  { name: "Facebook", icon: Facebook, url: SOCIALS.facebook },
  { name: "Twitter", icon: Twitter, url: SOCIALS.twitter },
  { name: "Instagram", icon: Instagram, url: SOCIALS.instagram },
  { name: "LinkedIn", icon: Linkedin, url: SOCIALS.linkedin },
].filter((s) => s.url);

export default function Footer() {
  return (
    <footer className="bg-[#13203A] text-white">
      <div className="h-1 bg-gradient-to-r from-[#00A6D6] via-[#D81B72] to-[#FFC800]" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <Image src={assets.logo} alt="" className="h-8 w-auto" />
              <h3 className="text-xl font-medium">{SITE.name}</h3>
            </div>
            <p className="mb-4 max-w-md text-slate-300">
              Delivering excellence in printing services since 1990. We combine cutting-edge technology with decades of expertise to bring your ideas to life.
            </p>
            {SOCIAL_LIST.length > 0 && (
              <div className="flex gap-2">
                {SOCIAL_LIST.map(({ name, icon: Icon, url }) => (
                  <Button key={name} asChild variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                    <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer"><Icon className="size-5" /></a>
                  </Button>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}><Link href={n.href} className="text-slate-300 hover:text-white">{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href={SITE.map} className="flex items-start gap-2 hover:text-white"><MapPin className="mt-0.5 size-5 shrink-0" />{SITE.address}</a></li>
              <li><a href={SITE.tel} className="flex items-center gap-2 hover:text-white"><Phone className="size-5 shrink-0" />{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="size-5 shrink-0" />{SITE.email}</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-white/15 pt-8 text-center text-slate-300">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
