import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
        <Link href="/" className="flex items-center gap-2.5 font-bold" aria-label={SITE.name}>
          <span className="grid grid-cols-2 gap-0.5" aria-hidden>
            <i className="size-2.5 rounded-full bg-[#00A6D6]" />
            <i className="size-2.5 rounded-full bg-[#D81B72]" />
            <i className="size-2.5 rounded-full bg-[#FFC800]" />
            <i className="size-2.5 rounded-full bg-neutral-900" />
          </span>
          <span className="text-lg">Satghumti</span>
          <span className="hidden text-sm font-normal text-muted-foreground sm:inline">Printing Press</span>
        </Link>
        <nav className="ml-auto hidden gap-6 text-sm font-medium md:flex" aria-label="Main">
          <a href="#services" className="hover:text-[#D81B72]">Services</a>
          <a href="#process" className="hover:text-[#D81B72]">How it works</a>
          <a href="#contact" className="hover:text-[#D81B72]">Visit us</a>
        </nav>
        <Button asChild size="sm" className="ml-auto md:ml-0">
          <a href={SITE.tel}><Phone /> <span className="hidden sm:inline">{SITE.phone}</span><span className="sm:hidden">Call</span></a>
        </Button>
      </div>
    </header>
  );
}
