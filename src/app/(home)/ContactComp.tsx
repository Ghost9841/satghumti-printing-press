import { MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto grid max-w-6xl scroll-mt-16 items-center gap-10 px-5 py-20 md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Visit the press</h2>
        <p className="mb-5 mt-2 text-muted-foreground">Bring your files or your idea. We will walk you through the options.</p>
        <a href={SITE.tel} className="text-3xl font-bold">{SITE.phone}</a>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild><a href={SITE.map}><MapPin /> Open in Google Maps</a></Button>
          <Button asChild variant="outline"><a href={SITE.whatsapp}><MessageCircle /> WhatsApp</a></Button>
        </div>
      </div>
      {/* Replace with a Google Maps <iframe> embed URL */}
      <div aria-hidden className="grid min-h-72 place-items-center rounded-xl border-2 border-dashed text-center text-sm text-muted-foreground">
        <span><MapPin className="mx-auto mb-1" />Map embed goes here</span>
      </div>
    </section>
  );
}
