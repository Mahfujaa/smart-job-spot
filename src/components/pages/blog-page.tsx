"use client";

import Link from "next/link";

import { useReveal } from "@/hooks/use-reveal";

const posts = [
  {
    tag: "Hiring",
    title: "Five signals a candidate is a culture multiplier",
    date: "Jun 12, 2026",
    read: "6 min",
  },
  {
    tag: "AI",
    title: "How we audit Aigent for bias every release",
    date: "May 28, 2026",
    read: "9 min",
  },
  {
    tag: "Operations",
    title: "The hidden cost of an unanswered application",
    date: "May 09, 2026",
    read: "4 min",
  },
  {
    tag: "Product",
    title: "Inside the new outreach composer",
    date: "Apr 22, 2026",
    read: "5 min",
  },
  {
    tag: "Hiring",
    title: "Why time-to-first-response beats time-to-hire",
    date: "Apr 03, 2026",
    read: "7 min",
  },
  {
    tag: "AI",
    title: "Prompting your way to better screening rubrics",
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
          <h1 className="mt-5 text-4xl font-black sm:text-6xl">
            Field notes from the future of hiring.
          </h1>
        </div>
      </section>
      <section className="py-12">
        <div className="container-x grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="card-surface reveal overflow-hidden transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/30 via-secondary to-card" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-secondary px-2 py-0.5 font-semibold text-foreground">
                    {p.tag}
                  </span>
                  <span>· {p.date}</span>
                  <span>· {p.read}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <Link href="/blog" className="mt-4 inline-flex text-sm font-semibold text-primary">
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
