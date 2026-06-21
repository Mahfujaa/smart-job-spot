"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { useApplyModal } from "@/hooks/use-apply-modal";
import { ScrollRevealText } from "@/components/scroll-reveal-text";

const faqs = [
  {
    q: "What is dropshipping?",
    a: "Dropshipping is a retail model where you sell products without holding inventory. We source from vetted suppliers and they ship directly to your customer under your store brand.",
  },
  {
    q: "What does FBA stand for?",
    a: "FBA is Fulfilled by Amazon. You send (or we source) inventory to Amazon's warehouses and they handle storage, packing, shipping and customer service for you.",
  },
  {
    q: "How much profit can I expect?",
    a: "Returns depend on store type, capital and ramp time. Most managed stores hit consistent monthly profit after 60–120 days. We share realistic projections during your consultation.",
  },
  {
    q: "How will I get paid?",
    a: "All revenue flows into your store payout account directly from the marketplace. We invoice our management fee monthly — you never wire us your sales.",
  },
  {
    q: "What will be my level of involvement?",
    a: "After the initial setup and verification calls, your involvement drops to effectively zero. We run operations end-to-end and report to you monthly.",
  },
  {
    q: "Can I manage multiple stores on different channels?",
    a: "Yes. Many of our clients diversify across Amazon FBA, Walmart WFS, eBay, and Facebook Shops. We handle multi-channel setups and assign dedicated staff to each storefront.",
  },
  {
    q: "What capital is required to start?",
    a: "You will need capital for setup/registration fees and operating capital for inventory purchasing. During our strategy call, we match you with marketplaces that align with your budget.",
  },
  {
    q: "Are the stores fully owned by me?",
    a: "Absolutely. All business entities, seller accounts, domain names, and payment accounts are opened under your name or LLC. You retain 100% ownership of your store.",
  },
];

export function FAQPage() {
  useReveal();
  const [open, setOpen] = useState(0);
  const { open: openApplyModal } = useApplyModal();

  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24">
        <div className="container-x reveal text-center">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h1 className="mt-5 text-4xl sm:text-6xl text-foreground">Questions, answered.</h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Clear, transparent answers about e-commerce store automation and passive investment with
            Ecom Solutions.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x max-w-3xl space-y-3">
          {faqs.map((f, idx) => (
            <div key={f.q} className="card-surface reveal bg-card/25">
              <button
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-bold sm:text-lg text-foreground">{f.q}</span>
                {open === idx ? (
                  <Minus className="h-5 w-5 shrink-0 text-primary" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-muted-foreground hover:text-primary" />
                )}
              </button>
              {open === idx && (
                <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-1">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-border mt-12">
        <div className="container-x reveal text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl">
            <ScrollRevealText text="Still have questions?" />
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Book a consultation and we will answer any details about credit limits, LLC setup, and
            profit margins.
          </p>
          <button onClick={openApplyModal} className="btn-primary mt-4">
            Apply & Speak to an Expert
          </button>
        </div>
      </section>
    </>
  );
}
