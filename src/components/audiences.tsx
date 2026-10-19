import { AUDIENCES } from "@/data/services";

const BORDER = ["border-[#00A6D6]", "border-[#D81B72]", "border-[#FFC800]", "border-neutral-900"];

export default function Audiences() {
  return (
    <section className="bg-muted/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Made for the people who order from us</h2>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a, i) => (
            <div key={a.who} className={`border-t-4 pt-3.5 ${BORDER[i]}`}>
              <h3 className="font-semibold">{a.who}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.need}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
