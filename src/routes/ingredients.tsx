import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/ingredients")({
  head: () => ({
    meta: [
      { title: "Ingredients — Sahaja Natural Ubtan Powder" },
      { name: "description", content: "Eleven sun-dried botanicals in every jar of Sahaja. Turmeric, sandalwood, neem, rose, saffron and more — sourced from organic farms in South India." },
      { property: "og:title", content: "Ingredients — Sahaja" },
      { property: "og:description", content: "Eleven sun-dried botanicals. Nothing else." },
    ],
  }),
  component: Page,
});

const items = [
  { t: "Turmeric", o: "Erode, Tamil Nadu", d: "The golden root. Lifts pigmentation and tan, calms inflammation." },
  { t: "Sandalwood", o: "Mysore, Karnataka", d: "Cooling and brightening. The reason your skin feels glassy after." },
  { t: "Neem", o: "Andhra Pradesh", d: "Nature's antibacterial. Clears blemishes without drying skin." },
  { t: "Rose Petals", o: "Kannauj, UP", d: "Tones pores and adds the soft floral scent — no synthetic fragrance." },
  { t: "Liquorice Root", o: "Gujarat", d: "Brightens dark spots, fades old tan from years of sun exposure." },
  { t: "Saffron", o: "Pampore, Kashmir", d: "A few precious threads per batch. Pure radiance." },
  { t: "Chickpea Flour", o: "Maharashtra", d: "Stone-ground. The gentle base that lifts dirt and dead skin." },
  { t: "Oats", o: "Himachal Pradesh", d: "Soothes sensitive skin and locks in moisture." },
  { t: "Tulsi", o: "Tamil Nadu", d: "Holy basil. Antioxidant-rich, fights premature ageing." },
  { t: "Vetiver", o: "Kerala", d: "Cooling root. Balances oil production naturally." },
  { t: "Wild Honey Powder", o: "Nilgiris", d: "Spray-dried raw honey. Softens and humectant." },
];

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-clay">The Recipe</span>
        <h1 className="font-display text-5xl md:text-7xl mt-3 max-w-3xl">Eleven plants. Nothing else.</h1>
        <p className="mt-6 max-w-xl text-muted-foreground text-lg">
          We name every single ingredient, and where it grew. Because skincare shouldn't need a chemistry degree to read.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {items.map((it, i) => (
            <div key={i} className="bg-background p-8 hover:bg-card transition">
              <div className="font-display text-5xl text-clay/80 mb-4">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-display text-2xl mb-1">{it.t}</h3>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">{it.o}</div>
              <p className="text-sm text-foreground/80 leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-muted-foreground text-sm">
          That's the entire list. No preservatives, no fragrance, no fillers, no surfactants.
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
