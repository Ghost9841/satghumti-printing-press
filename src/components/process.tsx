import { STEPS } from "@/data/services";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How an order works</h2>
      <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <li key={s.t}>
            <span className="mb-3 grid size-9 place-items-center rounded-full bg-[#13203A] font-bold text-white">{i + 1}</span>
            <h3 className="font-semibold">{s.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
