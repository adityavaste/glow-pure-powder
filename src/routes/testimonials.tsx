import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Real Tulasi stories" },
      { name: "description", content: "Watch and read real reviews from 4,200+ women who replaced their entire skincare with Tulasi." },
      { property: "og:title", content: "Real reviews · Tulasi Ubtan" },
      { property: "og:description", content: "Video stories and comments from verified buyers across India." },
    ],
  }),
  component: TestimonialsPage,
});

const videos = [
  {
    name: "Aanya Reddy",
    city: "Hyderabad",
    quote: "My beach tan was gone in two weeks.",
    // public sample videos (royalty-free)
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Meera Iyer",
    city: "Chennai",
    quote: "I cancelled my ₹3,000 facial subscription.",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Priya Nair",
    city: "Bengaluru",
    quote: "Even my mother-in-law asked for my secret.",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    poster: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&auto=format&fit=crop",
  },
];

const comments = [
  { n: "Sneha K.", c: "Mumbai", t: "Verified · 3 jars in", body: "I've tried every K-beauty brand under the sun. Nothing made my skin feel as alive as this powder. The smell alone is therapy.", rating: 5 },
  { n: "Divya R.", c: "Pune", t: "Verified · 2 months in", body: "My melasma from pregnancy is finally fading. I cried a little when I noticed. Thank you Tulasi 🌿", rating: 5 },
  { n: "Kavya S.", c: "Kochi", t: "Verified · 6 weeks in", body: "Was sceptical about a powder replacing my entire shelf. Now my shelf has one jar. That's it.", rating: 5 },
  { n: "Riya M.", c: "Delhi", t: "Verified · 1 month in", body: "Acne scars from my teens are noticeably lighter. Slow but real progress, the way good things should be.", rating: 5 },
  { n: "Tara J.", c: "Goa", t: "Verified · 3 weeks in", body: "I live by the beach so tan is constant. Tulasi is the only thing that's ever actually worked. Genuinely.", rating: 5 },
  { n: "Anjali V.", c: "Jaipur", t: "Verified · 2 months in", body: "My husband uses it too now. We fight over the jar. Please make a bigger size 🙏", rating: 5 },
  { n: "Nisha P.", c: "Ahmedabad", t: "Verified · 4 months in", body: "Stopped wearing foundation. My skin is the foundation now. That's the review.", rating: 5 },
  { n: "Lakshmi B.", c: "Coimbatore", t: "Verified · 5 weeks in", body: "Mixed it with raw milk like the instructions said. My skin has never been this soft. It's like rose petals.", rating: 5 },
];

function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-clay">Real stories</span>
        <h1 className="font-display text-5xl md:text-7xl mt-3 max-w-4xl leading-[0.95]">
          4,200+ women. <em className="text-primary not-italic">One quiet ritual.</em>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mt-6 leading-relaxed">
          We don't pay for reviews. We don't run influencer campaigns. Every word here is from a woman who bought a jar with her own money.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl md:text-4xl">Watch their stories</h2>
          <span className="text-sm text-muted-foreground hidden md:block">Tap to play</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <VideoCard key={i} {...v} />
          ))}
        </div>
      </section>

      <section className="bg-warm py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-clay">In their words</span>
              <h2 className="font-display text-3xl md:text-4xl mt-3">Comments from the jar.</h2>
            </div>
            <div className="text-right">
              <div className="font-display text-3xl text-clay">4.9 / 5</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">3,810 reviews</div>
            </div>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {comments.map((c, i) => (
              <div key={i} className="break-inside-avoid mb-6 bg-card border border-border/60 rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-1 text-clay mb-3">
                  {Array.from({ length: c.rating }).map((_, k) => (
                    <span key={k}>★</span>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-5">"{c.body}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-clay grid place-items-center text-primary-foreground font-display">
                    {c.n[0]}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{c.n} <span className="text-muted-foreground font-normal">· {c.c}</span></div>
                    <div className="text-xs text-muted-foreground">{c.t}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-5">Write your own story.</h2>
        <p className="text-muted-foreground mb-8">One jar. Free shipping. 30-day skin promise.</p>
        <Link to="/order" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-8 py-3.5 font-medium hover:opacity-90 transition shadow-soft">
          Order Tulasi — ₹499
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}

function VideoCard({ name, city, quote, src, poster }: { name: string; city: string; quote: string; src: string; poster: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-card shadow-card">
      <div className="relative aspect-[3/4] bg-muted">
        {playing ? (
          <video src={src} controls autoPlay className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <button onClick={() => setPlaying(true)} className="absolute inset-0 w-full h-full text-left">
            <img src={poster} alt={`${name} testimonial`} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="h-16 w-16 rounded-full bg-background/90 backdrop-blur grid place-items-center shadow-soft group-hover:scale-110 transition">
                <span className="ml-1 border-y-[10px] border-y-transparent border-l-[16px] border-l-foreground" />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <p className="font-display text-xl leading-tight mb-2">"{quote}"</p>
              <div className="text-xs uppercase tracking-widest opacity-90">{name} · {city}</div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
