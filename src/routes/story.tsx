import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Tulasi Botanicals" },
      { name: "description", content: "Tulasi was born from a grandmother's recipe — a hand-blended ubtan powder made for those who want skincare without compromise." },
      { property: "og:title", content: "Our Story — Tulasi" },
      { property: "og:description", content: "A grandmother's recipe, in a small glass jar." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="mx-auto max-w-2xl px-6 pt-20 pb-24">
        <span className="text-xs uppercase tracking-[0.2em] text-clay">Our Story</span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3 mb-10 leading-tight">A small jar with a long memory.</h1>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85 font-display font-light">
          <p>Tulasi began in a small kitchen in Mysore, where my grandmother — Lalitha — kept a brass dabba of yellow powder on the second shelf. Every morning she'd take a pinch, mix it with milk, and leave the kitchen smelling of turmeric and rose.</p>
          <p>"This is all your skin needs," she'd say.</p>
          <p>Years later, after a shelf of expensive serums and one dermatology appointment too many, I came back to that brass dabba. I asked her for the recipe. She wrote it down on the back of an envelope.</p>
          <p>Tulasi — meaning <em>natural, effortless</em> in Sanskrit — is that envelope. We blend the same eleven plants she used. By hand. In small batches. With nothing added and nothing taken away.</p>
          <p>It is not a product. It is a quiet, ordinary ritual. We hope it becomes part of yours.</p>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <div className="font-display text-xl">Meera Iyer</div>
          <div className="text-sm text-muted-foreground">Founder · Tulasi Botanicals</div>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
