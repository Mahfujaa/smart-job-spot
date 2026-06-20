"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-0 text-2xl font-black tracking-tight">
      <Image src="/logo.png" alt="Aigent" width={100} height={100} />
    </Link>
  );
}

type NavItem = { href: string; label: string; isDropdown?: boolean };
const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Pages", isDropdown: true },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

const pagesMenu = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
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
  const isActive = exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-semibold text-foreground/85 hover:text-foreground",
        isActive && "bg-primary text-primary-foreground",
      )}
    >
      {label}
    </Link>
  );
}

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
      className={cn(
        "sticky top-0 z-50 transition-colors",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.isDropdown ? (
              <div key={item.label} className="group relative">
                <button className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-foreground/85 hover:text-foreground">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="card-surface min-w-[180px] p-2 shadow-xl">
                    {pagesMenu.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="block rounded-lg px-3 py-2 text-sm text-foreground/85 hover:bg-muted hover:text-foreground"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={item.href} href={item.href} label={item.label} exact />
            ),
          )}
        </nav>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-foreground/85 hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            {pagesMenu.map((p) => (
              <Link
                key={p.href}
                href={p.href}
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
    <footer className="mt-24 border-t border-border">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <FooterCol title="Resources" links={["Academy", "eBooks", "Blogs", "Videos"]} />
          <FooterCol title="Company" links={["About", "Careers", "Press", "Partners"]} />
          <FooterCol title="Support" links={["Help Center", "Contact", "Privacy", "Terms"]} />
          <div>
            <p className="text-lg font-semibold">22 Pembroke Lane Bristol</p>
            <p className="mb-6 text-lg font-semibold">BS1 5QW United Kingdom</p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="text-primary">📞</span> +1 (415) 555-0198
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">✉</span> hello@aigent.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>Copyright © 2026 Aigent. All Rights Reserved.</p>
          <div className="flex gap-2">
            {["f", "▶", "◎", "𝕏"].map((i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-md bg-secondary hover:bg-muted"
              >
                {i}
              </a>
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
      <p className="mb-4 text-sm text-muted-foreground">{title}</p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-foreground/90 hover:text-primary">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
