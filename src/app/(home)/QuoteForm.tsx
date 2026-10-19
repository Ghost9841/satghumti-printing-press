"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/site";

export default function QuoteForm() {
  const [f, setF] = useState({ name: "", phone: "", service: SERVICES[0].title, qty: "", note: "" });
  const [err, setErr] = useState("");
  const on = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim()) return setErr("Enter your name and phone number so we can reply.");
    setErr("");
    const msg = `Hello, I want a quote.\nName: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}\nQuantity: ${f.qty || "not sure"}\nDetails: ${f.note || "-"}`;
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <section id="quote" className="scroll-mt-16 bg-muted/60 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get a quote</h2>
          <p className="mt-2 max-w-prose text-muted-foreground">Fill this in and WhatsApp opens with your request ready to send. We reply with a price and timeline.</p>
        </div>
        <form onSubmit={send} noValidate className="grid gap-4 rounded-xl border bg-background p-6 sm:grid-cols-2">
          <div className="grid gap-1.5"><Label htmlFor="name">Your name</Label><Input id="name" autoComplete="name" value={f.name} onChange={on("name")} /></div>
          <div className="grid gap-1.5"><Label htmlFor="phone">Phone</Label><Input id="phone" inputMode="tel" autoComplete="tel" value={f.phone} onChange={on("phone")} /></div>
          <div className="grid gap-1.5">
            <Label htmlFor="service">Service</Label>
            <Select value={f.service || ""} onValueChange={(v) => setF({ ...f, service: v ?? "" })}>
              <SelectTrigger id="service" className="w-full"><SelectValue /></SelectTrigger>
              <SelectContent>{SERVICES.map((s) => <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="grid gap-1.5"><Label htmlFor="qty">Quantity</Label><Input id="qty" placeholder="e.g. 500 cards" value={f.qty} onChange={on("qty")} /></div>
          <div className="grid gap-1.5 sm:col-span-2"><Label htmlFor="note">Details</Label><Textarea id="note" rows={3} placeholder="Size, paper, deadline" value={f.note} onChange={on("note")} /></div>
          {err && <p role="alert" className="text-sm text-destructive sm:col-span-2">{err}</p>}
          <Button type="submit" size="lg" className="bg-[#D81B72] hover:bg-[#D81B72]/90 sm:col-span-2"><Send /> Send quote request on WhatsApp</Button>
        </form>
      </div>
    </section>
  );
}
