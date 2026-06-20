import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-0 text-2xl font-black tracking-tight">
      <span className="inline-flex items-center rounded-md bg-primary px-2 py-0.5 text-primary-foreground">ai</span>
      <span className="ml-0.5 text-foreground">gent</span>
    </Link>
  );
}

type NavItem = { to: string; label: string; isDropdown?: boolean };
const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Pages", isDropdown: true },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
];

const pagesMenu = [
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            item.isDropdown ? (
              <div key={item.label} className="relative group">
                <button className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-foreground/85 hover:text-foreground">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="card-surface min-w-[180px] p-2 shadow-xl">
                    {pagesMenu.map((p) => (
                      <Link
                        key={p.to}
                        to={p.to}
                        className="block rounded-lg px-3 py-2 text-sm text-foreground/85 hover:bg-muted hover:text-foreground"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/85 hover:text-foreground"
                activeProps={{ className: "rounded-full px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-foreground/85 hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            {pagesMenu.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 pl-6 text-sm text-muted-foreground hover:bg-muted"
              >
                — {p.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <FooterCol title="Resources" links={["Academy", "eBooks", "Blogs", "Videos"]} />
          <FooterCol title="Company" links={["About", "Careers", "Press", "Partners"]} />
          <FooterCol title="Support" links={["Help Center", "Contact", "Privacy", "Terms"]} />
          <div>
            <p className="text-lg font-semibold">22 Pembroke Lane Bristol</p>
            <p className="text-lg font-semibold mb-6">BS1 5QW United Kingdom</p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><span className="text-primary">📞</span> +1 (415) 555-0198</p>
              <p className="flex items-center gap-2"><span className="text-primary">✉</span> hello@aigent.com</p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>Copyright © 2026 Aigent. All Rights Reserved.</p>
          <div className="flex gap-2">
            {["f", "▶", "◎", "𝕏"].map((i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-md bg-secondary hover:bg-muted">{i}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-muted-foreground text-sm mb-4">{title}</p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l}><a href="#" className="text-foreground/90 hover:text-primary">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
