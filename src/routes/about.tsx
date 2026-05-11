import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import modelImg from "@/assets/glow-model.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tulasi Botanicals" },
      { name: "description", content: "Tulasi is a small, women-led botanical skincare studio crafting hand-blended ubtan powder from organic herbs sourced across India." },
      { property: "og:title", content: "About — Tulasi" },
      { property: "og:description", content: "A small, women-led botanical studio." },
    ],
  }),
  component: Page,
});

const values = [
  { t: "Honestly natural", d: "If we can't pronounce it, it's not in the jar. Eleven plants — that's the entire formula." },
  { t: "Slow & small", d: "Every batch is hand-pounded. We make 50 jars at a time, never more." },
  { t: "Fair to farmers", d: "We pay above-market for organic herbs and name every farm we source from." },
  { t: "Plastic-free", d: "Glass jars, recycled paper, jute twine. Even our shipping tape is paper." },
];

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pt-10 pb-14 md:pt-16 md:pb-20 grid lg:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-clay">About Us</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl mt-3 leading-[0.95]">
            Skincare made the <em className="text-primary not-italic">slow</em> way.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
            Tulasi is a four-woman studio in Bengaluru, blending ubtan from a recipe that's older than any of us. We don't do launches, trends, or seasonal collections. We make one thing — and we make it well.
          </p>
        </div>
        <img
          src={modelImg}
          alt="Tulasi founder"
          loading="lazy"
          width={1024}
          height={1280}
          className="rounded-3xl shadow-soft w-full max-w-md mx-auto"
        />
      </section>

      <section className="bg-warm py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-clay">Our promise</span>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl mt-4 leading-tight">
            "We will never add a chemical, a filler, or a fragrance to make this powder cheaper, brighter, or longer-lasting than what nature already made it."
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-card border border-border/60 rounded-2xl p-7">
              <div className="font-display text-3xl text-clay mb-3">0{i + 1}</div>
              <h3 className="font-display text-2xl mb-2">{v.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid md:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
        {[
          { n: "2021", t: "First batch", d: "Twelve jars, made in a home kitchen for friends." },
          { n: "4,200+", t: "Jars shipped", d: "To every state in India and 14 countries." },
          { n: "11", t: "Plants. Always.", d: "The recipe hasn't changed since the envelope." },
        ].map((s, i) => (
          <div key={i} className="bg-background p-10">
            <div className="font-display text-5xl text-clay">{s.n}</div>
            <div className="font-display text-xl mt-3">{s.t}</div>
            <p className="text-sm text-muted-foreground mt-2">{s.d}</p>
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
