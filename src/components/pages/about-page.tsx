"use client";

import { useReveal } from "@/hooks/use-reveal";
import { useApplyModal } from "@/hooks/use-apply-modal";
import { ScrollRevealText } from "@/components/scroll-reveal-text";

export function AboutPage() {
  useReveal();
  const { open: openApplyModal } = useApplyModal();

  const values = [
    {
      t: "Communication",
      p: "Transparent updates, direct channels, and no account managers keeping you in the dark.",
    },
    {
      t: "Accountability",
      p: "Monthly reports, live analytics dashboards, and KPIs that you can actually verify.",
    },
    {
      t: "Integrity",
      p: "Honesty and collaboration — run entirely by our internal teams, never outsourced.",
    },
    {
      t: "Performance",
      p: "Aggressive, data-led growth strategies to scale store valuation and maximize ROI.",
    },
  ];

  return (
    <>
      <section className="pt-16 pb-20 sm:pt-24">
        <div className="container-x reveal text-center">
          <span className="eyebrow">About Ecom Solutions</span>
          <h1 className="mt-5 text-4xl sm:text-6xl max-w-4xl mx-auto leading-tight">
            Passive income, built around investors who value their time.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg leading-relaxed">
            We started Ecom Solutions because passive e-commerce shouldn&apos;t require an
            operational headache. We build, operate, and scale your stores from the ground up, so
            you can focus on what matters to you.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="reveal space-y-6">
            <h2 className="text-3xl sm:text-4xl">
              <ScrollRevealText text="Our Story" />
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded as a specialized e-commerce operations group, Ecom Solutions grew from a small
              catalog management team into a full-scale automation partner trusted by over 400+
              investors worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, our organization spans over 300+ dedicated, in-house team members handling
              sourcing, listing, shipping, customer service, and store health daily. We do the heavy
              lifting so you can enjoy stress-free cash flow.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.t}
                className="card-surface reveal p-6 space-y-2 hover:border-primary/30 transition"
              >
                <h3 className="text-lg font-bold text-foreground">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="container-x reveal text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl">
            <ScrollRevealText text="Ready to build your passive income asset?" />
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Apply for a managed store and speak to one of our e-commerce consultants today.
          </p>
          <button onClick={openApplyModal} className="btn-primary mt-6 inline-flex">
            Apply for a Store
          </button>
        </div>
      </section>
    </>
  );
}
