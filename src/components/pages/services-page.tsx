"use client";

import { ShoppingBag, Layers, Globe, Target, TrendingUp, ShieldCheck } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useApplyModal } from "@/hooks/use-apply-modal";
import { ScrollRevealText } from "@/components/scroll-reveal-text";

export function ServicesPage() {
  useReveal();
  const { open: openApplyModal } = useApplyModal();

  const services = [
    {
      Icon: ShoppingBag,
      t: "Amazon Dropshipping Automation",
      p: "Over 50% of Amazon sales come from 3rd-party sellers. We tap that channel for you, end to end.",
    },
    {
      Icon: Layers,
      t: "Amazon FBA Automation",
      p: "Leverage Amazon's fulfillment centers to scale a truly passive, prime-eligible store.",
    },
    {
      Icon: Globe,
      t: "eBay Automation",
      p: "Reach 187M+ active eBay buyers with a fully managed listing, sourcing and support engine.",
    },
    {
      Icon: Target,
      t: "Facebook Shops Automation",
      p: "Target 240M US consumers inside the world's largest social commerce surface.",
    },
    {
      Icon: TrendingUp,
      t: "Walmart Dropshipping Automation",
      p: "100M unique monthly visitors. We build your Walmart catalog and run it daily.",
    },
    {
      Icon: ShieldCheck,
      t: "Walmart WFS Automation",
      p: "Streamlined Walmart application, approval and Walmart Fulfillment Services setup.",
    },
  ];

  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24">
        <div className="container-x reveal text-center">
          <span className="eyebrow">Services</span>
          <h1 className="mt-5 text-4xl sm:text-6xl">Every channel that matters. Fully managed.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Six battle-tested service lines across the world&apos;s largest marketplaces — all run
            by our in-house operations team.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, t, p }) => (
            <div
              key={t}
              className="card-surface reveal p-7 transition hover:-translate-y-1 hover:border-primary/40 flex flex-col justify-between"
            >
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/50">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  In-House Operations
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-x card-surface flex flex-col items-start gap-6 p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl">
              <ScrollRevealText text="Ready to acquire your store?" />
            </h2>
            <p className="mt-2 text-muted-foreground">
              We&apos;ll walk you through capital requirements, expected timelines and the
              marketplaces best suited to you.
            </p>
          </div>
          <button onClick={openApplyModal} className="btn-primary shrink-0">
            Apply for a Store
          </button>
        </div>
      </section>
    </>
  );
}
