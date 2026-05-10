import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-clay grid place-items-center text-primary-foreground font-display text-lg">S</span>
          <span className="font-display text-xl tracking-tight">Sahaja</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          <Link to="/" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition">Home</Link>
          <Link to="/about" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition">About</Link>
          <Link to="/ingredients" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition">Ingredients</Link>
          <Link to="/ritual" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition">Ritual</Link>
          <Link to="/contact" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition">Contact</Link>
        </nav>
        <a href="#order" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:opacity-90 transition">
          Order ₹499
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-display text-2xl mb-2">Sahaja</div>
          <p className="text-muted-foreground max-w-xs">Hand-blended ubtan powder. Rooted in tradition, made for modern skin.</p>
        </div>
        <div className="space-y-2">
          <div className="font-medium mb-2">Explore</div>
          <Link to="/about" className="block text-muted-foreground hover:text-foreground">About Us</Link>
          <Link to="/ingredients" className="block text-muted-foreground hover:text-foreground">Ingredients</Link>
          <Link to="/ritual" className="block text-muted-foreground hover:text-foreground">The Ritual</Link>
          <Link to="/contact" className="block text-muted-foreground hover:text-foreground">Contact</Link>
        </div>
        <div className="space-y-2">
          <div className="font-medium mb-2">Contact</div>
          <a href="mailto:hello@sahaja.co" className="block text-muted-foreground hover:text-foreground">hello@sahaja.co</a>
          <p className="text-muted-foreground">Bengaluru, India</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sahaja Botanicals. All rights reserved.
      </div>
    </footer>
  );
}
