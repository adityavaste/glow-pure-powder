import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import jarImg from "@/assets/product-jar.jpg";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order Tulasi Ubtan — ₹499 · Free shipping across India" },
      { name: "description", content: "Order your jar of Tulasi natural ubtan powder. ₹499 for 100g. Free shipping, cash on delivery, and a 30-day skin promise." },
      { property: "og:title", content: "Order Tulasi Ubtan — ₹499" },
      { property: "og:description", content: "Hand-blended natural ubtan powder. Free shipping. 30-day refund." },
    ],
  }),
  component: OrderPage,
});

const PRICE = 499;

function OrderPage() {
  const [qty, setQty] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });
  const [placed, setPlaced] = useState(false);

  const total = qty * PRICE;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (placed) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <section className="mx-auto max-w-2xl px-6 py-32 text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-clay grid place-items-center text-primary-foreground font-display text-3xl mb-6">✓</div>
          <h1 className="font-display text-5xl mb-4">Order placed.</h1>
          <p className="text-muted-foreground mb-2">Thank you, {form.name || "friend"}.</p>
          <p className="text-muted-foreground mb-10">
            We've received your order for {qty} jar{qty > 1 ? "s" : ""} of Tulasi Ubtan. A confirmation will reach you on {form.phone || "your phone"} within an hour. Your jar ships in 2 business days.
          </p>
          <Link to="/" className="inline-flex rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium hover:opacity-90 transition">
            Back to home
          </Link>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-clay">Order</span>
          <h1 className="font-display text-5xl md:text-6xl mt-3">Bring home your glow.</h1>
          <p className="text-muted-foreground mt-4">Free shipping across India · Cash on delivery available · 30-day refund promise.</p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <form onSubmit={handleSubmit} className="space-y-8 bg-card border border-border/60 rounded-3xl p-8 md:p-10 shadow-card">
            <fieldset className="space-y-5">
              <legend className="font-display text-2xl mb-4">Where should we ship it?</legend>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Full name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <Field label="Phone" required type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
              </div>
              <Field label="Email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Field label="Address" required value={form.address} onChange={(v) => setForm({ ...form, address: v })} />
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="City" required value={form.city} onChange={(v) => setForm({ ...form, city: v })} />
                <Field label="Pincode" required value={form.pincode} onChange={(v) => setForm({ ...form, pincode: v })} />
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="font-display text-2xl mb-4">Payment</legend>
              {[
                { id: "cod", label: "Cash on delivery", desc: "Pay when your jar arrives." },
                { id: "upi", label: "UPI / GPay / PhonePe", desc: "We'll send a payment link on WhatsApp." },
                { id: "card", label: "Card / Netbanking", desc: "Secure checkout via Razorpay." },
              ].map((opt) => (
                <label key={opt.id} className={`flex items-start gap-4 rounded-2xl border p-4 cursor-pointer transition ${form.payment === opt.id ? "border-clay bg-secondary/40" : "border-border hover:bg-secondary/20"}`}>
                  <input type="radio" name="payment" value={opt.id} checked={form.payment === opt.id} onChange={(e) => setForm({ ...form, payment: e.target.value })} className="mt-1" />
                  <div>
                    <div className="font-medium">{opt.label}</div>
                    <div className="text-sm text-muted-foreground">{opt.desc}</div>
                  </div>
                </label>
              ))}
            </fieldset>

            <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground px-8 py-4 font-medium hover:opacity-90 transition shadow-soft">
              Place order · ₹{total}
            </button>
          </form>

          <aside className="space-y-6">
            <div className="bg-warm rounded-3xl p-6 border border-border/60">
              <img src={jarImg} alt="Tulasi ubtan jar" className="rounded-2xl w-full mb-5 shadow-card" />
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="font-display text-xl">Tulasi Ubtan · 100g</div>
                  <div className="text-sm text-muted-foreground">Hand-blended glass jar</div>
                </div>
                <div className="font-display text-xl text-clay">₹{PRICE}</div>
              </div>
              <div className="flex items-center justify-between border-t border-border/60 pt-4">
                <span className="text-sm text-muted-foreground">Quantity</span>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} className="h-8 w-8 rounded-full border border-border hover:bg-secondary">−</button>
                  <span className="font-display text-lg w-6 text-center">{qty}</span>
                  <button type="button" onClick={() => setQty(qty + 1)} className="h-8 w-8 rounded-full border border-border hover:bg-secondary">+</button>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-3xl p-6 border border-border/60 space-y-3 text-sm">
              <Row label="Subtotal" value={`₹${total}`} />
              <Row label="Shipping" value="Free" />
              <div className="border-t border-border/60 pt-3 flex justify-between font-display text-xl">
                <span>Total</span>
                <span className="text-clay">₹{total}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center px-4">
              By placing the order you agree to our gentle return policy. Not happy after 30 days? Full refund, no questions.
            </p>
          </aside>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}{required && " *"}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-clay/40 focus:border-clay transition"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-muted-foreground">
      <span>{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}
