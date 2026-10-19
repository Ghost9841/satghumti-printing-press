import { MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const PROOF = ["Design help included", "Small and bulk orders", "Proof before printing"];

export default function HeroWithAH() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.2fr_.8fr] md:py-24">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight [text-shadow:-3px_2px_0_rgba(0,166,214,.55),3px_-2px_0_rgba(216,27,114,.45)] sm:text-5xl lg:text-6xl">
          Print that looks the way you pictured it.
        </h1>
        <p className="mt-5 max-w-[46ch] text-lg text-muted-foreground">{SITE.tagline}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-[#D81B72] hover:bg-[#D81B72]/90">
            <a href="#quote">Get a free quote</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={SITE.whatsapp}><MessageCircle /> Chat on WhatsApp</a>
          </Button>
        </div>
        <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {PROOF.map((p) => (
            <li key={p} className="flex items-center gap-1.5"><Check className="size-4 text-[#00A6D6]" />{p}</li>
          ))}
        </ul>
      </div>

      {/* Print-sheet mockup with registration marks */}
      <div aria-hidden className="relative mx-auto grid aspect-[3/4] w-full max-w-xs place-items-center rounded-sm border bg-white shadow-[8px_8px_0_#13203A]">
        {["left-2.5 top-2.5", "right-2.5 top-2.5", "left-2.5 bottom-2.5", "right-2.5 bottom-2.5"].map((p) => (
          <span key={p} className={`absolute ${p} size-5 rounded-full border-2 border-neutral-900 before:absolute before:left-1/2 before:-top-1.5 before:h-8 before:w-0.5 before:bg-neutral-900 after:absolute after:top-1/2 after:-left-1.5 after:h-0.5 after:w-8 after:bg-neutral-900`} />
        ))}
        <div className="-rotate-[4deg] rounded-md bg-[#13203A] px-6 py-5 text-white">
          <p className="text-xl font-bold">Your Name</p>
          <p className="text-[#FFC800]">Your Business</p>
        </div>
        <div className="absolute bottom-11 flex">
          {["bg-[#00A6D6]", "bg-[#D81B72]", "bg-[#FFC800]", "bg-neutral-900"].map((c) => (
            <i key={c} className={`h-3.5 w-8 ${c}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
