import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import modelImg from "@/assets/glow-model.jpg";

export const Route = createFileRoute("/benefits")({
  head: () => ({
    meta: [
      { title: "Benefits — Tulasi Ubtan" },
      { name: "description", content: "Removes tan, brightens, soothes, exfoliates — discover what 11 herbs do for your skin." },
      { property: "og:title", content: "Benefits of Tulasi Ubtan" },
      { property: "og:description", content: "Eleven plants. Visible glow in 14 days. Zero side effects." },
    ],
  }),
  component: BenefitsPage,
});

const benefits = [
  { t: "Removes tan", d: "Turmeric and liquorice gently lift sun damage and even out stubborn tan lines, even from a beach holiday.", icon: "☀" },
  { t: "Brightens dull skin", d: "Sandalwood and saffron stimulate cellular turnover for a soft, lit-from-within radiance.", icon: "✦" },
  { t: "Deep cleansing", d: "Chickpea flour pulls out dirt, oil, and dead cells from your pores without stripping moisture.", icon: "✧" },
  { t: "Fights acne", d: "Neem and tulsi are nature's antibacterials — they calm breakouts and reduce future ones.", icon: "✿" },
  { t: "Anti-ageing", d: "Antioxidants from rose and saffron slow oxidative damage and soften fine lines over time.", icon: "❀" },
  { t: "Soothes irritation", d: "Oats and sandalwood cool inflamed skin, reduce redness, and calm sensitivity.", icon: "❉" },
  { t: "Even skin tone", d: "Daily use fades pigmentation, dark spots, and post-acne marks — gradually and gently.", icon: "❋" },
  { t: "Zero side effects", d: "No SLS, parabens, fragrance, preservatives, or synthetic colour. Pregnancy-safe. Baby-safe.", icon: "❤" },
];

function BenefitsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-clay">Benefits</span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl mt-3 max-w-3xl leading-[0.95]">
          What 11 plants <em className="text-primary not-italic">do</em> for your skin.
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mt-6 leading-relaxed">
          Every spoonful of Tulasi is a complete skincare routine — cleanse, exfoliate, brighten, soothe, protect.
          One jar replaces face wash, scrub, mask, and brightening cream.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {benefits.map((b, i) => (
          <div key={i} className="bg-card rounded-2xl p-7 border border-border/60 hover:shadow-card transition">
            <div className="text-3xl text-clay mb-4">{b.icon}</div>
            <h3 className="font-display text-2xl mb-2">{b.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-warm py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-clay">The Promise</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-3 mb-6">Visible glow in 14 days.</h2>
            <ul className="space-y-3">
              {[
                "Day 1–3 — skin feels softer, cleaner",
                "Day 4–7 — pores look smaller, tone looks brighter",
                "Day 8–14 — tan lifts visibly, glow returns",
                "Day 30+ — pigmentation fades, skin feels its own",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-clay mt-2.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <Link to="/order" className="inline-flex mt-8 items-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium hover:opacity-90 transition shadow-soft">
              Start your 14 days — ₹499
            </Link>
          </div>
          <img src={modelImg} alt="Glowing natural skin from Tulasi ubtan" loading="lazy" className="rounded-3xl shadow-soft w-full" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
