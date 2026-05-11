import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-powder.jpg";
import jarImg from "@/assets/product-jar.jpg";
import modelImg from "@/assets/glow-model.jpg";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Benefits />
      <ProductSection />
      <Ritual />
      <Testimonials />
      <Order />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
            100% Natural · Chemical Free
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] text-foreground">
            Wash away the tan.<br />
            <em className="text-primary not-italic">Wake up</em> your glow.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Tulasi is a hand-blended botanical <strong className="text-foreground font-medium">ubtan powder</strong> — not a soap, not a cream. Just sun-dried herbs, roots, and flowers that gently lift tan and reveal soft, luminous skin.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/order" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium hover:opacity-90 transition shadow-soft">
              Get yours — ₹499
            </a>
            <Link to="/ingredients" className="inline-flex items-center rounded-full border border-border px-7 py-3.5 font-medium hover:bg-card transition">
              See the recipe →
            </Link>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <Stat n="0" l="Chemicals" />
            <div className="h-8 w-px bg-border" />
            <Stat n="11" l="Pure herbs" />
            <div className="h-8 w-px bg-border" />
            <Stat n="14d" l="Visible glow" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-clay opacity-20 blur-3xl rounded-full" />
          <div className="relative grain rounded-3xl overflow-hidden shadow-soft">
            <img
              src={heroImg}
              alt="Bowl of natural turmeric ubtan powder with herbs and rose petals"
              width={1536}
              height={1280}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-4 max-w-[200px] hidden md:block">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Made in</div>
            <div className="font-display text-lg">Small batches of 50</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl text-foreground">{n}</div>
      <div className="text-xs uppercase tracking-wider">{l}</div>
    </div>
  );
}

function Marquee() {
  const items = ["Turmeric", "Sandalwood", "Neem", "Rose", "Liquorice", "Oats", "Saffron", "Chickpea", "Tulsi"];
  return (
    <div className="border-y border-border/60 bg-secondary/40 py-5 overflow-hidden">
      <div className="flex gap-8 md:gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap font-display text-2xl text-muted-foreground">
        {[...items, ...items, ...items].map((i, k) => (
          <span key={k} className="flex items-center gap-8 md:gap-12">
            {i} <span className="text-clay">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }`}</style>
    </div>
  );
}

function Benefits() {
  const items = [
    { t: "Removes tan", d: "Turmeric and liquorice gently lift sun damage and even out stubborn tan lines." },
    { t: "Reveals glow", d: "Sandalwood and saffron brighten dull skin for a soft, lit-from-within radiance." },
    { t: "Zero side effects", d: "No SLS, no parabens, no fragrance, no preservatives. Safe for daily use." },
    { t: "Not a soap", d: "Mix with water, milk, or rosewater into a paste. The way your grandmother did." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="max-w-2xl mb-16">
        <span className="text-xs uppercase tracking-[0.2em] text-clay">Why Tulasi</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-3">Skincare your great-grandmother would recognise.</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <div key={i} className="bg-card rounded-2xl p-7 border border-border/60 hover:shadow-card transition">
            <div className="font-display text-3xl text-clay mb-4">0{i + 1}</div>
            <h3 className="font-display text-2xl mb-2">{it.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="bg-warm py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <img src={jarImg} alt="Tulasi ubtan powder in glass jar" loading="lazy" width={1024} height={1280} className="rounded-3xl shadow-soft w-full" />
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-clay">The Product</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">A 200-year-old recipe in a 100g jar.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Each jar is hand-pounded in small batches from sun-dried roots, herbs, and flowers — sourced from organic farms across South India. Nothing is heat-processed. Nothing is synthetic. The colour, the scent, the texture — all entirely from the plants themselves.
          </p>
          <ul className="space-y-3 text-sm">
            {["100g resealable glass jar", "Lasts 6–8 weeks with daily use", "Vegan · Cruelty-free · Plastic-free", "Free shipping across India"].map((x) => (
              <li key={x} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                <span className="text-foreground">{x}</span>
              </li>
            ))}
          </ul>
          <a href="/order" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium hover:opacity-90 transition">
            Add to cart — ₹499
          </a>
        </div>
      </div>
    </section>
  );
}

function Ritual() {
  const steps = [
    { n: "01", t: "Scoop", d: "Take a teaspoon of Tulasi powder into your palm." },
    { n: "02", t: "Mix", d: "Add rosewater, raw milk, or yogurt to form a smooth paste." },
    { n: "03", t: "Massage", d: "Gently apply to face and neck. Let it rest for 10 minutes." },
    { n: "04", t: "Reveal", d: "Wash off with cool water in soft circular motions. Glow." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-start">
        <div className="lg:sticky lg:top-24">
          <span className="text-xs uppercase tracking-[0.2em] text-clay">The Ritual</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-3 mb-6">Four quiet minutes. Every morning.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ubtan isn't a product. It's a ritual older than memory — a small, deliberate pause before the day begins.
          </p>
        </div>
        <div className="space-y-2">
          {steps.map((s, i) => (
            <div key={i} className="grid grid-cols-[auto_1fr] gap-6 py-6 border-b border-border last:border-0">
              <div className="font-display text-5xl text-clay/70">{s.n}</div>
              <div>
                <h3 className="font-display text-2xl mb-1">{s.t}</h3>
                <p className="text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-center">
        <div className="space-y-8">
          <span className="text-xs uppercase tracking-[0.2em] text-clay">Loved by 4,200+ women</span>
          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight text-foreground">
            "After two weeks my tan from a beach holiday just… faded. My skin feels softer than when I used a ₹2000 cream."
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-clay" />
            <div>
              <div className="font-medium">Aanya Reddy</div>
              <div className="text-sm text-muted-foreground">Verified buyer · Hyderabad</div>
            </div>
          </div>
        </div>
        <img src={modelImg} alt="Customer with glowing natural skin" loading="lazy" width={1024} height={1280} className="rounded-3xl shadow-soft w-full max-w-sm mx-auto" />
      </div>
    </section>
  );
}

function Order() {
  return (
    <section id="order" className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
      <span className="text-xs uppercase tracking-[0.2em] text-clay">Begin your ritual</span>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3 mb-6">Glow, the slow way.</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-10">
        One jar. Free shipping. 30-day skin promise — if you don't love it, we'll refund every rupee.
      </p>
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card border border-border rounded-2xl p-6 shadow-card">
        <div className="text-left">
          <div className="font-display text-2xl">Tulasi Ubtan · 100g</div>
          <div className="text-sm text-muted-foreground">Hand-blended · Glass jar</div>
        </div>
        <div className="font-display text-3xl text-clay">₹499</div>
        <a href="/order" className="rounded-full bg-primary text-primary-foreground px-8 py-3.5 font-medium hover:opacity-90 transition">
          Order now
        </a>
      </div>
    </section>
  );
}
