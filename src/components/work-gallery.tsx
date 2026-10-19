import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImagePlaceholder from "../app/(home)/image-placeholder";

// Replace `label` with { src, alt } and swap ImagePlaceholder for next/image when photos are ready.
const WORK = [
  { label: "Business cards (photo)", span: "md:col-span-2 md:row-span-2" },
  { label: "Bill pads", span: "" },
  { label: "Brochures", span: "" },
  { label: "Book covers", span: "" },
  { label: "T-shirts", span: "" },
  { label: "Flex banner", span: "md:col-span-2" },
];

export default function WorkGallery() {
  return (
    <section className="bg-muted/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Recent work</h2>
            <p className="mt-2 max-w-prose text-muted-foreground">Real jobs from our press, from small cards to large banners.</p>
          </div>
          <Button asChild variant="outline"><Link href="/printing">See our printing <ArrowRight /></Link></Button>
        </div>
        <div className="grid auto-rows-[10rem] gap-4 md:grid-cols-4">
          {WORK.map((w) => (
            <ImagePlaceholder key={w.label} label={w.label} className={`h-full ${w.span}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
