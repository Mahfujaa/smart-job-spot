"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Mail, MapPin, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { useApplyModal } from "@/hooks/use-apply-modal";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1.5 text-2xl font-black tracking-tight select-none"
    >
      <Image src="/logo.png" alt="Logo" width={150} height={150} />
    </Link>
  );
}

type NavItem = { href: string; label: string };
const nav: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/#how-it-works", label: "How it Works" },
  { href: "/#benefits", label: "Benefits" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

function NavLink({
  href,
  label,
  exact = false,
  onClick,
}: {
  href: string;
  label: string;
  exact?: boolean;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-[6px] px-4 py-2 text-lg font-semibold text-foreground/85 hover:text-foreground transition",
        isActive &&
          "bg-primary text-primary-foreground rounded-[6px] hover:bg-primary/80 hover:text-primary-foreground",
      )}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open: openApplyModal } = useApplyModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-200",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container-x flex h-28 items-center justify-between gap-4">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              exact={item.href === "/"}
            />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button onClick={openApplyModal} className="btn-primary rounded-[6px] ">
            Apply for a Store
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-[6px] bg-secondary lg:hidden hover:bg-muted text-foreground transition"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="border-t border-border bg-background lg:hidden animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="container-x flex flex-col gap-2 py-6">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-sm px-4 py-2.5 text-lg font-semibold text-foreground/85 hover:bg-muted transition"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 px-2">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openApplyModal();
                }}
                className="btn-primary rounded-[6px] w-full py-3.5 text-center text-sm font-bold uppercase tracking-wider"
              >
                Apply for a Store
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-base text-muted-foreground leading-relaxed">
              Full-service e-commerce store management for investors who want results without the
              operational headache.
            </p>
            <div className="flex gap-2 pt-2">
              {["f", "▶", "◎", "𝕏"].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition"
                >
                  {i}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="mb-4 text-lg font-bold uppercase tracking-wider text-muted-foreground">
              Quick Links
            </p>
            <ul className="space-y-3 text-base">
              {nav.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <p className="mb-4 text-lg font-bold uppercase tracking-wider text-muted-foreground">
              Contact
            </p>
            <div className="space-y-4 text-base text-foreground/85">
              <p className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>H-68/1, Omor Ali Lane, West Rampura, Dhaka-1219, Bangladesh</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+880 1XXX-XXXXXX</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@ecomsolutionsbd.com</span>
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <p className="mb-4 text-lg font-bold uppercase tracking-wider text-muted-foreground">
              Newsletter
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Insights on e-commerce automation, monthly.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border border-border bg-input px-3.5 py-2.5 text-sm outline-none focus:border-primary text-foreground transition"
                required
              />
              <button
                type="submit"
                className="btn-primary py-2.5 px-4 font-bold rounded-xl text-xs uppercase tracking-wider shrink-0"
              >
                {subscribed ? "Joined" : "Join"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Ecom Solutions. All rights reserved.</p>
          <p className="font-semibold text-foreground/75">
            Built for investors who value their time.
          </p>
        </div>
      </div>
    </footer>
  );
}
