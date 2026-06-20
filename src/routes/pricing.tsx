import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Aigent" },
      { name: "description", content: "Simple, transparent pricing for teams of every size." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  useReveal();
  const tiers = [
    { name: "Starter", price: "$0", per: "/forever", desc: "For solo recruiters trying Aigent.", feats: ["Up to 25 candidates / mo", "AI screening", "Email outreach", "Community support"], cta: "Get Started" },
    { name: "Growth", price: "$49", per: "/seat/mo", desc: "For growing in-house hiring teams.", feats: ["Unlimited candidates", "Multi-channel outreach", "ATS integrations", "Priority support"], cta: "Start Free Trial", featured: true },
    { name: "Enterprise", price: "Custom", per: "", desc: "For organizations hiring at scale.", feats: ["SSO & SCIM", "Bias audits & DPA", "Dedicated CSM", "Custom data residency"], cta: "Contact Sales" },
  ];
  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24">
        <div className="container-x text-center reveal">
          <span className="eyebrow">Pricing</span>
          <h1 className="mt-5 text-4xl font-black sm:text-6xl">Pick the plan that fits your team.</h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">No hidden fees. Cancel any time. Every plan includes the core Aigent intelligence layer.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container-x grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`card-surface reveal p-8 flex flex-col ${t.featured ? "border-primary/60 shadow-[0_0_60px_-20px_var(--color-primary)]" : ""}`}>
              {t.featured && <span className="self-start rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">Most Popular</span>}
              <h3 className="mt-4 text-xl font-bold">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              <p className="mt-6 text-5xl font-black">{t.price}<span className="text-sm font-medium text-muted-foreground">{t.per}</span></p>
              <ul className="mt-6 space-y-3 text-sm">
                {t.feats.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary shrink-0" /><span>{f}</span></li>
                ))}
              </ul>
              <Link to="/contact" className={`mt-8 ${t.featured ? "btn-primary" : "btn-ghost"}`}>{t.cta}</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
