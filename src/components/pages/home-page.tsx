"use client";

import {
  AlarmClock,
  ArrowUpRight,
  BadgeCheck,
  Bell,
  ChevronLeft,
  ChevronRight,
  Eye,
  LayoutDashboard,
  MessageSquare,
  Minus,
  Plus,
  Puzzle,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";

import { useReveal } from "@/hooks/use-reveal";

export function HomePage() {
  useReveal();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <Hero onDemo={() => setDemoOpen(true)} />
      <Features />
      <FlowSection />
      <Stats />
      <Testimonials />
      <AppShowcase />
      <FAQSection onContact={() => setDemoOpen(true)} />
      <FinalCTA onDemo={() => setDemoOpen(true)} />
      {demoOpen && <DemoModal onClose={() => setDemoOpen(false)} />}
    </>
  );
}

function Hero({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32">
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, color-mix(in oklab, var(--color-primary) 18%, transparent), transparent 70%)",
        }}
      />
      <div className="container-x text-center">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold backdrop-blur">
          <span className="text-primary">✱</span> #1 AI System For Recruitment
        </div>
        <h1 className="reveal mt-6 text-4xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
          Recruit Better.
          <br />
          <span className="text-primary">Scale Faster.</span>
        </h1>
        <p className="reveal mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Aigent automates outreach, scores candidates, and routes the right people to your team —
          so hiring feels less like guesswork and more like signal.
        </p>
        <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={onDemo} className="btn-primary">
            Book a Demo
          </button>
          <a href="#features" className="btn-ghost">
            Find a Job
          </a>
        </div>

        <div className="reveal mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Companies that use Aigent
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {["Northwind", "Vacant", "Creatio", "FlexSpace", "DataDesk", "Lumon"].map((b) => (
              <div
                key={b}
                className="grid place-items-center text-lg font-bold text-muted-foreground/70 transition hover:text-foreground"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      Icon: Eye,
      title: "See Beyond the Obvious",
      body: "Our AI scans talent networks, career platforms, and uncovers qualified candidates others overlook.",
    },
    {
      Icon: Puzzle,
      title: "Connect with True Fit",
      body: "Aigent analyzes experience and skills to match each role with talent that aligns in capability and culture.",
    },
    {
      Icon: MessageSquare,
      title: "Authenticity Automation",
      body: "Send outreach that feels personal — human-like communication that reflects your brand voice at scale.",
    },
    {
      Icon: AlarmClock,
      title: "Act Before It's Needed",
      body: "Track hiring workflows, campaign performance, and candidate engagement, all in one live view.",
    },
  ];

  return (
    <section id="features" className="py-24">
      <div className="container-x">
        <div className="reveal text-center">
          <span className="eyebrow">What Makes Us Different</span>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            Redefine Recruitment with Aigent AI
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Stay in control while Aigent&apos;s intelligent recruiting assistant manages the details
            with precision, agility, and measurable impact.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {items.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="card-surface reveal p-8 transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowSection() {
  const rows = [
    {
      h: "Campaigns that move with precision",
      p: "Deliver tailored email and chat messages that adapt in real time — keeping candidates informed, engaged, and ready to connect.",
    },
    {
      h: "Talent pipelines that build momentum",
      p: "Organize, score, and nurture top talent with AI-driven insights that strengthen your hiring funnel over time.",
    },
    {
      h: "Decisions that scale with confidence",
      p: "Surface the signals that matter — from cultural fit to skill depth — so hiring managers move from list to offer faster.",
    },
  ];

  return (
    <section className="border-t border-border py-24">
      <div className="container-x">
        <div className="reveal text-center">
          <span className="eyebrow">Make Hiring Process Easier</span>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            Empower your recruiting flow
            <br />
            with Aigent intelligence
          </h2>
        </div>
        <div className="mt-14 divide-y divide-border border-y border-border">
          {rows.map((r) => (
            <div
              key={r.h}
              className="reveal grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-[1.1fr_1.5fr_auto]"
            >
              <h3 className="text-xl font-bold sm:text-2xl">{r.h}</h3>
              <p className="text-muted-foreground">{r.p}</p>
              <a
                href="#"
                className="grid h-12 w-12 place-items-center justify-self-start rounded-full bg-secondary text-foreground transition hover:bg-primary hover:text-primary-foreground md:justify-self-end"
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: "250K", s: "+", label: "Candidates Screened", sub: "Seamless and fast evaluations" },
    { n: "92", s: "%", label: "Match Accuracy Rate", sub: "AI-driven talent matching" },
    { n: "180", s: "+", label: "Global Clients Served", sub: "Across various industries" },
    { n: "98", s: "%", label: "User Satisfaction", sub: "HR teams trust our system" },
  ];

  return (
    <section className="py-24">
      <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card-surface reveal flex flex-col gap-10 p-7">
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="text-5xl font-black">
              {s.n}
              <span className="text-primary">{s.s}</span>
            </p>
            <p className="font-semibold leading-snug">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  {
    brand: "Logoipsum",
    quote:
      "Our candidate experience has completely transformed. Aigent automates communication while keeping it human. We've seen a measurable increase in offer acceptance.",
    name: "Ryan Matthews",
    role: "Talent Acquisition Manager",
    rating: "4.9",
  },
  {
    brand: "Logoipsum",
    quote:
      "I've tested dozens of email tools — Aigent is easily the smartest. It adapts to user behavior fast and gets better every week. Our email feels alive, not robotic.",
    name: "Liam Brooks",
    role: "Founder, DataDesk AI",
    rating: "4.8",
  },
  {
    brand: "Logoipsum",
    quote:
      "The onboarding sequences are sharp and convert better than anything we've used. Our onboarding series saw a 3x boost in conversions.",
    name: "Adam Reyes",
    role: "CRM Manager, FlexSpace",
    rating: "4.8",
  },
  {
    brand: "Logoipsum",
    quote:
      "The platform's intelligence is genuinely industry-defining. We saved weeks of sourcing in the first month alone.",
    name: "Maya Chen",
    role: "Head of People, Northwind",
    rating: "5.0",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const visible = [testimonials[i], testimonials[(i + 1) % testimonials.length]];

  return (
    <section className="border-t border-border py-24">
      <div className="container-x">
        <div className="card-surface p-6 sm:p-10">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">What Our People Say</span>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                Real testimonial from our users
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="grid h-11 w-11 place-items-center rounded-full bg-secondary hover:bg-muted"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="grid h-11 w-11 place-items-center rounded-full bg-secondary hover:bg-muted"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {visible.map((t, idx) => (
              <article key={idx} className="card-surface reveal bg-background/40 p-7">
                <p className="text-lg font-bold tracking-tight">
                  <span className="text-primary">◆</span> {t.brand}
                </p>
                <p className="mt-6 text-base sm:text-lg">&quot;{t.quote}&quot;</p>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/20 font-bold text-primary">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-0.5 text-primary">
                      {[...Array(5)].map((_, k) => (
                        <Star key={k} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">({t.rating}/ 5.0)</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AppShowcase() {
  const feats = [
    {
      Icon: BadgeCheck,
      t: "Smart Job Matching",
      p: "Get AI-powered job recommendations that perfectly align with your experience, interests, and career goals.",
    },
    {
      Icon: Bell,
      t: "Real-Time Updates",
      p: "Stay ahead with instant notifications on job openings, application status, and employer responses.",
    },
    {
      Icon: LayoutDashboard,
      t: "Personalized Dashboard",
      p: "Manage applications, saved jobs, and updates — all from a clean, easy-to-navigate home screen built for efficiency.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-3">
        <div className="reveal">
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-widest">
            Kick Start
          </span>
          <h2 className="mt-5 text-3xl font-black sm:text-4xl">
            Explore smarter opportunities designed{" "}
            <span className="text-primary">around your unique</span> career path
          </h2>
          <p className="mt-5 text-muted-foreground">
            Track your progress, manage applications, and stay updated with real-time alerts — all
            designed to move your goals forward with clarity and confidence.
          </p>
          <button className="btn-primary mt-8">Start Your Journey</button>
        </div>
        <div className="reveal flex justify-center">
          <PhoneMockup />
        </div>
        <div className="reveal space-y-10">
          {feats.map(({ Icon, t, p }) => (
            <div key={t}>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p}</p>
              <div className="mt-6 h-px bg-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[280px] rounded-[3rem] border-[10px] border-foreground/90 bg-[#0a0a0a] p-3 shadow-2xl sm:w-[320px]">
      <div className="overflow-hidden rounded-[2.2rem] bg-background">
        <div className="px-5 pt-5 pb-4">
          <div className="flex items-center justify-between text-xs">
            <span>9:12</span>
            <span>●●●●</span>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">☀ 29° C Sunny</p>
              <p className="text-lg font-bold">Hi, Richard Moor</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-primary/30" />
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-sm">
            <span className="text-muted-foreground">Search for everything…</span>
            <div className="ml-auto h-7 w-7 rounded-full bg-primary" />
          </div>
          <div className="card-surface mt-4 p-3">
            <p className="text-sm font-bold">Senior Visual Designer</p>
            <p className="text-xs text-muted-foreground">Creatio Studio · Fulltime</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-2/3 bg-primary" />
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
              <span>8/24</span>
              <span>Application Shortlisted</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs">
              <span className="font-bold">Featured Jobs</span>
              <span className="text-muted-foreground">See all ›</span>
            </div>
            <div className="card-surface mt-2 p-3">
              <p className="text-xs text-muted-foreground">Vacant Land</p>
              <p className="text-sm font-bold">Product Designer</p>
              <p className="text-[10px] text-muted-foreground">7363 California, USA</p>
              <div className="mt-2 flex gap-1 text-[10px]">
                <span className="rounded-full bg-secondary px-2 py-0.5">$90K/hr</span>
                <span className="rounded-full bg-secondary px-2 py-0.5">Fulltime</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-3 mb-3 flex items-center justify-around rounded-full bg-foreground/90 py-3 text-background">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            🏠
          </div>
          <span>💼</span>
          <span>💬</span>
          <span>🔔</span>
          <span>👤</span>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "What is Aigent and how does it work?",
    a: "Aigent is an AI-powered recruitment system that automates job posting, candidate screening, and shortlisting. It analyzes resumes, skill sets, and behavioral data to identify the best matches for each position, saving recruiters countless hours while improving accuracy.",
  },
  {
    q: "Can Aigent integrate with our existing HR software?",
    a: "Yes. Aigent connects to all major ATS and HRIS platforms with a few clicks, syncing data in both directions so your existing workflows stay intact.",
  },
  {
    q: "Is candidate data secure within the system?",
    a: "Absolutely. We use end-to-end encryption, SOC 2 controls, and region-aware data residency to keep candidate information protected at every step.",
  },
  {
    q: "Does Aigent eliminate human involvement in hiring?",
    a: "No — Aigent augments your team. Recruiters keep full decision-making power; the AI just removes the busywork.",
  },
  {
    q: "Can Aigent help reduce hiring bias?",
    a: "Yes. Structured scoring rubrics and bias audits help your team make more consistent, evidence-based decisions.",
  },
  {
    q: "What kind of support do you provide after setup?",
    a: "Every plan includes onboarding, a dedicated success manager, and 24/5 chat support to keep your team productive.",
  },
];

function FAQSection({ onContact }: { onContact: () => void }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="border-t border-border py-24">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-lg sm:text-xl">
            Every great hire starts with a conversation — a moment of connection where skills meet
            opportunity, and potential begins to unfold. With the right tools and insight, that
            conversation becomes the foundation for smarter hiring and stronger teams.
          </p>
          <button onClick={onContact} className="btn-primary mt-8">
            Let&apos;s Get Started
          </button>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_2fr]">
          <div className="card-surface reveal h-fit p-8">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="mt-4 text-3xl font-black">We simplify what you need to know</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Have something specific in mind? Email our support, and we&apos;ll ensure your
              questions are handled promptly.
            </p>
            <button onClick={onContact} className="btn-primary mt-6">
              Contact Us
            </button>
          </div>
          <div className="space-y-3">
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
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="border-t border-border py-24">
      <div className="container-x reveal">
        <h2 className="text-[16vw] leading-[0.9] font-black tracking-tight sm:text-[12vw] lg:text-[10rem]">
          let&apos;s get started
        </h2>
        <p className="mt-8 max-w-xl text-lg">
          It&apos;s time to start simplifying the recruitment process efficiently and precisely to
          find the best talent.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={onDemo} className="btn-primary">
            Book a Demo
          </button>
          <a href="#features" className="btn-ghost">
            Find a Job
          </a>
        </div>
      </div>
    </section>
  );
}

function DemoModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.message.trim() || form.message.length < 10)
      errs.message = "Tell us a bit more (min 10 chars)";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  }

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="card-surface relative w-full max-w-lg p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-secondary hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </button>
        {sent ? (
          <div className="py-10 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/20 text-3xl text-primary">
              ✓
            </div>
            <h3 className="mt-4 text-2xl font-bold">Thanks, we&apos;ll be in touch</h3>
            <p className="mt-2 text-muted-foreground">
              Our team will reach out within one business day.
            </p>
            <button onClick={onClose} className="btn-primary mt-6">
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-black">Book a Demo</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us about your team — we&apos;ll tailor the walkthrough.
            </p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              {(["name", "email", "company"] as const).map((k) => (
                <div key={k}>
                  <input
                    placeholder={
                      k[0].toUpperCase() + k.slice(1) + (k === "company" ? " (optional)" : "")
                    }
                    value={form[k]}
                    onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                    className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                  {errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>}
                </div>
              ))}
              <div>
                <textarea
                  placeholder="How can we help?"
                  value={form.message}
                  rows={4}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>
              <button type="submit" className="btn-primary w-full">
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
