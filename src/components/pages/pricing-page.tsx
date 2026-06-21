"use client";

import { Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useApplyModal } from "@/hooks/use-apply-modal";

export function PricingPage() {
  useReveal();
  const { open: openApplyModal } = useApplyModal();

  const tiers = [
    {
      name: "Starter Store",
      price: "$3,500",
      per: " setup fee",
      desc: "For investors starting on secondary channels.",
      feats: [
        "Single Marketplace (eBay or FB Shops)",
        "In-house sourcing & inventory setup",
        "70/30 Profit Share (70% to investor)",
        "Daily 8-hour monitoring",
        "Monthly reporting & dashboards",
      ],
      cta: "Apply for Starter Store",
    },
    {
      name: "Growth Store",
      price: "$7,500",
      per: " setup fee",
      desc: "Our most popular managed option for Amazon FBA & Walmart.",
      feats: [
        "Amazon FBA or Walmart WFS setup",
        "Dedicated Account Manager",
        "65/35 Profit Share (65% to investor)",
        "Optimal repricing & buy box strategy",
        "Full returns & customer support",
        "Real-time reporting & analytics",
      ],
      cta: "Apply for Growth Store",
      featured: true,
    },
    {
      name: "Enterprise Multi-Channel",
      price: "Custom",
      per: " licensing",
      desc: "Full portfolio diversification across all e-commerce channels.",
      feats: [
        "Amazon, Walmart, eBay & FB Shops",
        "Priority product sourcing lanes",
        "Custom Profit Share split",
        "Direct Slack / WhatsApp channel with Ops",
        "Custom entity & tax structure support",
      ],
      cta: "Book Consultation",
    },
  ];

  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24">
        <div className="container-x reveal text-center">
          <span className="eyebrow">Pricing & Setup Plans</span>
          <h1 className="mt-5 text-4xl sm:text-6xl text-foreground">
            Clear setup fees. Shared alignment.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            We win when you win. All of our plans combine a upfront store creation fee with a
            monthly performance-based profit split.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`card-surface reveal flex flex-col p-8 bg-card justify-between ${
                t.featured ? "border-primary/60 shadow-[0_0_60px_-20px_var(--color-primary)]" : ""
              }`}
            >
              <div>
                {t.featured && (
                  <span className="self-start rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-widest text-primary-foreground uppercase">
                    Most Popular
                  </span>
                )}
                <h3 className="mt-4 text-xl font-bold text-foreground">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                <p className="mt-6 text-5xl font-black text-foreground">
                  {t.price}
                  <span className="text-sm font-medium text-muted-foreground">{t.per}</span>
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {t.feats.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={openApplyModal}
                className={`mt-8 w-full text-center ${t.featured ? "btn-primary" : "btn-ghost"}`}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
