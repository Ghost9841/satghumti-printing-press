import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/data/services";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What we print</h2>
      <p className="mb-9 mt-2 max-w-prose text-muted-foreground">Eight services, one press. Pick one to start a quote.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <a key={s.slug} href="#quote" className={cn("group", i === 3 && "lg:col-span-2")}>
            <Card className="relative h-full transition-colors group-hover:border-[#D81B72]">
              {s.badge && <Badge className="absolute -top-2.5 right-4 bg-[#FFC800] text-neutral-900 hover:bg-[#FFC800]">{s.badge}</Badge>}
              <CardHeader>
                <span className={cn("mb-2 grid size-10 place-items-center rounded-lg text-white", s.accent, s.accent === "bg-[#FFC800]" && "text-neutral-900")}>
                  <s.icon className="size-5" />
                </span>
                <CardTitle className="flex items-start justify-between gap-2 text-lg leading-tight">
                  {s.title}
                  <ArrowUpRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </CardTitle>
                <CardDescription>{s.blurb}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-0.5 pl-4 text-sm">{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
