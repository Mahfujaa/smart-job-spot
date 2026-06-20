"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { useReveal } from "@/hooks/use-reveal";

const faqs = [
  {
    q: "What is Aigent and how does it work?",
    a: "Aigent is an AI-powered recruitment system that automates job posting, candidate screening, and shortlisting. It analyzes resumes, skills, and behavioral data to surface the best matches for each role.",
  },
  {
    q: "Can Aigent integrate with our existing HR software?",
    a: "Yes — Aigent connects to all major ATS and HRIS platforms with a few clicks, syncing data in both directions.",
  },
  {
    q: "Is candidate data secure within the system?",
    a: "Absolutely. End-to-end encryption, SOC 2 controls, and region-aware data residency protect candidate information.",
  },
  {
    q: "Does Aigent eliminate human involvement in hiring?",
    a: "No. Aigent augments your team — recruiters keep full decision-making power.",
  },
  {
    q: "Can Aigent help reduce hiring bias?",
    a: "Yes. Structured scoring rubrics and bias audits help your team make more consistent decisions.",
  },
  {
    q: "What kind of support do you provide after setup?",
    a: "Onboarding, a dedicated success manager, and 24/5 chat support are included in every plan.",
  },
  {
    q: "How long does implementation take?",
    a: "Most teams are live within a week. Enterprise rollouts can include data migration and SSO setup.",
  },
  {
    q: "Do you offer custom integrations?",
    a: "On Growth and Enterprise plans, yes — our team will scope the integration with you.",
  },
];

export function FAQPage() {
  useReveal();
  const [open, setOpen] = useState(0);

  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24">
        <div className="container-x reveal text-center">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h1 className="mt-5 text-4xl font-black sm:text-6xl">Questions, answered.</h1>
        </div>
      </section>
      <section className="py-12">
        <div className="container-x max-w-3xl space-y-3">
          {faqs.map((f, idx) => (
            <div key={f.q} className="card-surface reveal">
              <button
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-bold sm:text-lg">{f.q}</span>
                {open === idx ? (
                  <Minus className="h-5 w-5 shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0" />
                )}
              </button>
              {open === idx && <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
