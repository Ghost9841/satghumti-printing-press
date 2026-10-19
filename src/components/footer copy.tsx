import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#13203A] py-6 text-sm text-slate-300">
      <div className="mx-auto max-w-6xl px-5">© {new Date().getFullYear()} {SITE.name} · {SITE.phone}</div>
    </footer>
  );
}
