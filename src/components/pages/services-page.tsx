"use client";

import Link from "next/link";
import { AlarmClock, Eye, MessageSquare, Puzzle, Shield, Zap } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";

export function ServicesPage() {
  useReveal();
  const services = [
    {
      Icon: Eye,
      t: "Talent Sourcing",
      p: "Scan millions of profiles across networks and surface candidates who match your brief.",
    },
    {
      Icon: Puzzle,
      t: "Smart Screening",
      p: "Score resumes, skills, and behavioral fit so your shortlist arrives pre-ranked.",
    },
    {
      Icon: MessageSquare,
      t: "Outreach Automation",
      p: "Personal, on-brand messaging at scale across email, chat, and SMS.",
    },
    {
      Icon: AlarmClock,
      t: "Pipeline Operations",
      p: "Track every campaign, candidate, and conversion in one live dashboard.",
    },
    {
      Icon: Zap,
      t: "Interview Intelligence",
      p: "Structured scorecards and AI-generated questions tailored to each role.",
    },
    {
      Icon: Shield,
      t: "Compliance & Bias Audit",
      p: "SOC 2, GDPR, and bias audits — built in, not bolted on.",
    },
  ];

  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24">
        <div className="container-x reveal text-center">
          <span className="eyebrow">Services</span>
          <h1 className="mt-5 text-4xl font-black sm:text-6xl">
            Everything your hiring team needs.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            From the first touch to the signed offer — Aigent runs the workflow so your team stays
            focused on the people.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container-x grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, t, p }) => (
            <div
              key={t}
              className="card-surface reveal p-7 transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16">
        <div className="container-x card-surface flex flex-col items-start gap-6 p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-black sm:text-3xl">Not sure where to start?</h2>
            <p className="mt-2 text-muted-foreground">
              We&apos;ll map your current workflow and recommend a setup in under 30 minutes.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Book a Walkthrough
          </Link>
        </div>
      </section>
    </>
  );
}
