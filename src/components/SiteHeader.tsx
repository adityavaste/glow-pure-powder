import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/benefits", label: "Benefits" },
  { to: "/ingredients", label: "Ingredients" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0" onClick={() => setOpen(false)}>
          <span className="h-8 w-8 shrink-0 rounded-full bg-clay grid place-items-center text-primary-foreground font-display text-lg">T</span>
          <span className="leading-tight min-w-0">
            <span className="block font-display text-lg sm:text-xl tracking-tight truncate">Tulasi</span>
            <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-muted-foreground -mt-0.5">Glow, the slow way</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition whitespace-nowrap">{l.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Link to="/order" className="hidden sm:inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium hover:opacity-90 transition whitespace-nowrap">
            Order ₹499
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-border/60 text-foreground hover:bg-muted transition"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-30 transition-opacity duration-200 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" />
        <div
          className={`absolute top-0 right-0 h-[calc(100vh-4rem)] w-[82%] max-w-sm bg-background border-l border-border/60 shadow-soft transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col p-6 gap-1 text-base">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-muted text-foreground" }}
                className="px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/order"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Order ₹499
            </Link>
            <div className="mt-8 pt-6 border-t border-border/60 text-xs text-muted-foreground">
              <div className="uppercase tracking-[0.2em] text-clay mb-2">Glow, the slow way</div>
              <a href="mailto:hello@tulasi.co" className="block hover:text-foreground">hello@tulasi.co</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-display text-2xl">Tulasi</div>
          <div className="text-xs uppercase tracking-[0.2em] text-clay mb-3">Glow, the slow way</div>
          <p className="text-muted-foreground max-w-xs">Hand-blended ubtan powder. Rooted in tradition, made for modern skin.</p>
        </div>
        <div className="space-y-2">
          <div className="font-medium mb-2">Explore</div>
          <Link to="/about" className="block text-muted-foreground hover:text-foreground">About Us</Link>
          <Link to="/benefits" className="block text-muted-foreground hover:text-foreground">Benefits</Link>
          <Link to="/ingredients" className="block text-muted-foreground hover:text-foreground">Ingredients</Link>
          <Link to="/ritual" className="block text-muted-foreground hover:text-foreground">The Ritual</Link>
          <Link to="/testimonials" className="block text-muted-foreground hover:text-foreground">Reviews</Link>
          <Link to="/order" className="block text-muted-foreground hover:text-foreground">Order</Link>
          <Link to="/contact" className="block text-muted-foreground hover:text-foreground">Contact</Link>
        </div>
        <div className="space-y-2">
          <div className="font-medium mb-2">Contact</div>
          <a href="mailto:hello@tulasi.co" className="block text-muted-foreground hover:text-foreground">hello@tulasi.co</a>
          <p className="text-muted-foreground">Bengaluru, India</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tulasi Botanicals. All rights reserved.
      </div>
    </footer>
  );
}
