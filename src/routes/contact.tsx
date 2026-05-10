import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sahaja Botanicals" },
      { name: "description", content: "Get in touch with Sahaja. Questions about ingredients, orders, or your skin — we read and reply to every message." },
      { property: "og:title", content: "Contact — Sahaja" },
      { property: "og:description", content: "We read and reply to every message." },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-clay">Contact</span>
          <h1 className="font-display text-5xl md:text-7xl mt-3 leading-[0.95]">
            Say <em className="text-primary not-italic">hello.</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
            Questions about your skin, an order, or a wholesale enquiry? Drop us a note. We reply within a day, often two.
          </p>

          <div className="mt-12 space-y-6">
            <Item label="Email">
              <a href="mailto:hello@sahaja.co" className="hover:text-primary transition">hello@sahaja.co</a>
            </Item>
            <Item label="WhatsApp">
              <a href="https://wa.me/919876543210" className="hover:text-primary transition">+91 98765 43210</a>
            </Item>
            <Item label="Studio">
              42, Malleshwaram 8th Cross<br />Bengaluru 560003, India
            </Item>
            <Item label="Hours">Mon–Sat · 10am to 6pm IST</Item>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-card border border-border/60 rounded-3xl p-8 md:p-10 shadow-card h-fit"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="font-display text-3xl mb-3">Thank you.</div>
              <p className="text-muted-foreground">We've received your note and will reply soon.</p>
            </div>
          ) : (
            <div className="space-y-5">
              <Field label="Your name"><input required className="w-full bg-transparent border-b border-border py-2.5 outline-none focus:border-primary transition" /></Field>
              <Field label="Email"><input type="email" required className="w-full bg-transparent border-b border-border py-2.5 outline-none focus:border-primary transition" /></Field>
              <Field label="Subject">
                <select className="w-full bg-transparent border-b border-border py-2.5 outline-none focus:border-primary transition">
                  <option>General question</option>
                  <option>Order or shipping</option>
                  <option>Skin concern</option>
                  <option>Wholesale</option>
                </select>
              </Field>
              <Field label="Message"><textarea required rows={4} className="w-full bg-transparent border-b border-border py-2.5 outline-none focus:border-primary transition resize-none" /></Field>
              <button type="submit" className="w-full mt-4 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium hover:opacity-90 transition">
                Send message
              </button>
            </div>
          )}
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-clay mb-1.5">{label}</div>
      <div className="font-display text-xl text-foreground">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
