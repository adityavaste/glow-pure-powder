import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import heroImg from "@/assets/hero-powder.jpg";

export const Route = createFileRoute("/ritual")({
  head: () => ({
    meta: [
      { title: "How to Use — The Ubtan Ritual | Sahaja" },
      { name: "description", content: "A simple four-step guide to using Sahaja ubtan powder. Mix, massage, rest, reveal — for soft, glowing, de-tanned skin." },
      { property: "og:title", content: "The Sahaja Ritual" },
      { property: "og:description", content: "Four quiet minutes. Every morning." },
    ],
  }),
  component: Page,
});

const steps = [
  { n: "01", t: "Scoop a teaspoon", d: "Open the jar — yes, that's the powder. Take about a teaspoon (5g) into a small bowl or your palm. A little goes a long way." },
  { n: "02", t: "Mix into a paste", d: "Add a tablespoon of rosewater for normal skin, raw milk for dry skin, or plain yogurt for oily skin. Stir into a smooth, spreadable paste." },
  { n: "03", t: "Apply gently", d: "Massage onto a clean, damp face and neck in slow upward circles. Avoid the eyes. Leave it on for 8–10 minutes — long enough to read a poem." },
  { n: "04", t: "Wash & glow", d: "Rinse with cool water, gently rolling the paste off in circles — that's the natural exfoliation. Pat dry. Notice how soft your skin feels." },
];

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-clay">Daily Practice</span>
          <h1 className="font-display text-5xl md:text-7xl mt-3 leading-[0.95]">A ritual older than skincare itself.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">For 2,000 years, ubtan has been the morning ceremony of Indian women preparing for weddings, festivals, and ordinary tuesdays. Here's how.</p>
        </div>
        <img src={heroImg} alt="Natural ubtan powder ritual" loading="lazy" width={1536} height={1280} className="rounded-3xl shadow-soft w-full" />
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        {steps.map((s, i) => (
          <div key={i} className="grid md:grid-cols-[120px_1fr] gap-8 py-10 border-t border-border">
            <div className="font-display text-6xl text-clay">{s.n}</div>
            <div>
              <h2 className="font-display text-3xl mb-3">{s.t}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{s.d}</p>
            </div>
          </div>
        ))}
        <div className="border-t border-border pt-10 mt-4 text-center">
          <p className="text-muted-foreground mb-6">Use 3–4 times a week. Visible glow in two weeks. Tan reduction in four.</p>
          <Link to="/" hash="order" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium hover:opacity-90 transition">
            Order your jar — ₹499
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
