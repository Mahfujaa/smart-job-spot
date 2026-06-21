"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/use-reveal";

const posts = [
  {
    tag: "Amazon",
    title: "How to scale your Amazon FBA store to $50k/mo MTD",
    date: "Jun 12, 2026",
    read: "6 min",
  },
  {
    tag: "Walmart",
    title: "Walmart Fulfillment Services (WFS) vs FBA in 2026",
    date: "May 28, 2026",
    read: "9 min",
  },
  {
    tag: "Passive Income",
    title: "Why busy investors choose hands-free automation over real estate",
    date: "May 09, 2026",
    read: "5 min",
  },
  {
    tag: "Dropshipping",
    title: "Strict compliance: How to avoid seller account suspension",
    date: "Apr 22, 2026",
    read: "6 min",
  },
  {
    tag: "Operations",
    title: "Why we keep our operations 100% in-house (and avoid outsourcing)",
    date: "Apr 03, 2026",
    read: "7 min",
  },
  {
    tag: "Diversification",
    title: "The power of multi-channel automation: Scale across 4 platforms",
    date: "Mar 18, 2026",
    read: "8 min",
  },
];

export function BlogPage() {
  useReveal();

  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24">
        <div className="container-x reveal text-center">
          <span className="eyebrow">Blog</span>
          <h1 className="mt-5 text-4xl sm:text-6xl text-foreground">
            E-commerce insights for store owners.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Get the latest strategies, comparison reports, and compliance guidelines directly from
            our operations team.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="card-surface reveal overflow-hidden bg-card/45 transition hover:-translate-y-1 hover:border-primary/40 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/30 via-secondary to-card" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 font-semibold text-foreground">
                      {p.tag}
                    </span>
                    <span>· {p.date}</span>
                    <span>· {p.read}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-foreground leading-snug">{p.title}</h3>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <Link
                  href="/blog"
                  className="inline-flex text-sm font-semibold text-primary hover:underline"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
