"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { assets } from "@/assets/assets";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";


export default function NavBar() {
  const path = usePathname();
  const active = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={SITE.name}>
          <Image src={assets.logo} alt="" className="h-8 w-auto" />
          <span className="text-lg font-bold">Satghumti</span>
          <span className="hidden text-sm text-muted-foreground sm:inline">Printing Press</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active(n.href) ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[#D81B72]",
                active(n.href) && "text-[#D81B72] underline decoration-2 underline-offset-8"
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" className="ml-auto hidden bg-[#D81B72] hover:bg-[#D81B72]/90 md:ml-2 md:inline-flex">
          <Link href="/contact">Get a quote</Link>
        </Button>

        <Sheet>
          <SheetTrigger >
            <Button variant="outline" size="icon" className="ml-auto md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="px-4 pt-4">{SITE.name}</SheetTitle>
            <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
              {NAV.map((n) => (
                <SheetClose key={n.href}>
                  <Link href={n.href} className={cn("rounded-md px-3 py-2.5 font-medium hover:bg-muted", active(n.href) && "bg-muted text-[#D81B72]")}>
                    {n.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-4 grid gap-2 px-4">
              <Button asChild className="bg-[#D81B72] hover:bg-[#D81B72]/90"><Link href="/contact">Get a quote</Link></Button>
              <Button asChild variant="outline"><a href={SITE.tel}><Phone /> {SITE.phone}</a></Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
