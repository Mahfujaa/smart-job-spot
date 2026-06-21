"use client";

import {
  TrendingUp,
  BarChart3,
  ShoppingBag,
  Layers,
  Globe,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Briefcase,
  Users,
  Award,
  ArrowRight,
  Plus,
  Minus,
  MessageSquare,
  Shield,
  BarChart,
  Target,
  FileSpreadsheet,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { useReveal } from "@/hooks/use-reveal";
import { useApplyModal } from "@/hooks/use-apply-modal";
import { ScrollRevealText } from "@/components/scroll-reveal-text";

export function HomePage() {
  useReveal();
  const { open: openApplyModal } = useApplyModal();

  return (
    <>
      <Hero onApply={openApplyModal} />
      <ServicesSection />
      <ValueProp />
      <BenefitsSection />
      <Process />
      <StickyRevealSection />
      <Stats />
      <ReviewCarousel />
      <FAQSection onApply={openApplyModal} />
      <FinalCTA onApply={openApplyModal} />
    </>
  );
}

function Hero({ onApply }: { onApply: () => void }) {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-36">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url('/grad-scaled.png')",
        }}
      />
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold backdrop-blur">
              <span className="text-primary">✱</span> Full-Service E-commerce Agency
            </div>

            <h1 className="reveal text-4xl sm:text-6xl leading-[1.05] tracking-tight">
              <ScrollRevealText
                text="We do the heavy lifting so you can do the easy living."
                highlightText="easy living."
              />
            </h1>

            <p className="reveal max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              We are a full-service Amazon seller store management agency. We build, operate, and
              scale your store from the ground up — producing passive income with aggressive tactics
              at Ecom Solutions.
            </p>

            {/* CTAs */}
            <div className="reveal flex flex-wrap gap-4 pt-2">
              <button onClick={onApply} className="btn-primary rounded-[6px] px-8 py-4">
                Apply for a Store
              </button>
              <a
                href="#services"
                className="relative p-[1px] overflow-hidden rounded-[6px] inline-flex items-center justify-center bg-transparent group shadow-[0_0_15px_-3px_rgba(80,118,246,0.2)] hover:shadow-[0_0_25px_rgba(80,118,246,0.5)] transition-all duration-300"
              >
                {/* Rotating border beam */}
                <span
                  className="absolute top-1/2 left-1/2 min-w-[200px] min-h-[200px] w-[150%] aspect-square bg-[conic-gradient(from_0deg,transparent_40%,var(--color-primary)_50%,transparent_60%)] animate-border-beam pointer-events-none"
                  style={{
                    transform: "translate(-50%, -50%)",
                  }}
                />
                {/* Inner button surface */}
                <span className="relative z-10 btn-ghost rounded-[5px] px-8 py-4 inline-flex items-center gap-2 bg-[#15171d] hover:bg-[#1b1e26] w-full h-full transition-all duration-200">
                  Explore our services{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="reveal pt-6 border-t border-border/60">
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-foreground/80">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-primary" /> No outsourcing
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-primary" /> Monthly reporting
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-primary" /> 100% managed
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Mobile Mockup / Floating proof labels */}
          <div className="lg:col-span-5 relative flex justify-center reveal">
            <div className="absolute -top-6 -left-6 z-10 bg-card border border-border p-4 rounded-2xl shadow-xl backdrop-blur flex items-center gap-3 animate-bounce duration-[4000ms]">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Proof of Scale</p>
                <p className="text-sm font-bold text-foreground">Trusted by 400+ Investors</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 z-10 bg-card border border-border p-4 rounded-2xl shadow-xl backdrop-blur flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Expert Team</p>
                <p className="text-sm font-bold text-foreground">100% In-House Team</p>
              </div>
            </div>

            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [entryProgress, setEntryProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      if (totalHeight <= 0) return;

      const distanceToTop = rect.top;
      const currentEntry = 1 - Math.max(0, Math.min(1, distanceToTop / window.innerHeight));
      setEntryProgress(currentEntry);

      const scrolled = -rect.top;
      const currentProgress = Math.max(0, Math.min(1, scrolled / totalHeight));
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const services = [
    {
      num: "01",
      eyebrow: "Amazon Store Automation",
      title: "Hands-Free Amazon Business Scaling",
      desc: "We build, scale, and fully operate your Amazon store. Leveraging advanced sourcing, inventory management, and 24/7 account health monitoring to maximize returns.",
      points: [
        { label: "Optimal Buy Box Win Strategies", val: "Continuous dynamic pricing adjustments." },
        {
          label: "100% In-House Account Operations",
          val: "Dhaka operations team, zero outsourcing.",
        },
        {
          label: "Amazon FBA & WFS Sourcing",
          val: "Direct supplier relationships and fast shipping.",
        },
      ],
    },
    {
      num: "02",
      eyebrow: "Walmart Marketplace Automation",
      title: "Tap into Walmart's Rapidly Growing WFS",
      desc: "Launch your store on Walmart Marketplace. Leverage Walmart Fulfillment Services (WFS) and direct dropshipping channels to capture millions of unique monthly buyers.",
      points: [
        { label: "Walmart WFS Integration", val: "Complete inventory prep and shipment tracking." },
        {
          label: "Fast Application Approval",
          val: "Expert approval process with Walmart compliance.",
        },
        {
          label: "Catalog Expansion & Sourcing",
          val: "Daily catalog updates with trending products.",
        },
      ],
    },
    {
      num: "03",
      eyebrow: "Multi-Channel Automation",
      title: "Scale Across eBay and Facebook Shops",
      desc: "Diversify your e-commerce portfolio. We establish and automate fully-managed stores on eBay and Facebook Shops to capture organic buyer traffic from multiple surfaces.",
      points: [
        { label: "Organic Facebook Traffic", val: "Leveraging direct social media checkouts." },
        {
          label: "eBay Bulk Listing Setup",
          val: "Automated listing, inventory Sync and seller feedback.",
        },
        {
          label: "Risk Mitigation and Health",
          val: "Compliance guards to protect your store assets.",
        },
      ],
    },
  ];

  // Determine opacities and transforms of Left/Right images based on entryProgress and progress
  let sideOpacity = 0;
  let sideTranslateY = -100;

  if (progress === 0) {
    sideOpacity = entryProgress;
    sideTranslateY = -100 + entryProgress * 100;
  } else if (progress < 0.08) {
    const p2Progress = progress / 0.08;
    sideOpacity = 1 - p2Progress;
    sideTranslateY = 0;
  } else {
    sideOpacity = 0;
    sideTranslateY = 0;
  }

  // Middle image crossfades
  let img1Opacity = 0;
  let img2Opacity = 0;
  let img3Opacity = 0;

  if (progress < 0.35) {
    img1Opacity = 1;
  } else if (progress < 0.4) {
    const t = (progress - 0.35) / 0.05;
    img1Opacity = 1 - t;
    img2Opacity = t;
  } else if (progress < 0.65) {
    img2Opacity = 1;
  } else if (progress < 0.7) {
    const t = (progress - 0.65) / 0.05;
    img2Opacity = 1 - t;
    img3Opacity = t;
  } else {
    img3Opacity = 1;
  }

  // Calculate local fade/slide progress for each service's text content
  const getContentStyles = (idx: number) => {
    let opacity = 0;
    let translateY = 40;

    if (idx === 0 && progress >= 0.08 && progress < 0.4) {
      if (progress < 0.13) {
        const t = (progress - 0.08) / 0.05;
        opacity = t;
        translateY = 40 - t * 40;
      } else if (progress < 0.35) {
        opacity = 1;
        translateY = 0;
      } else {
        const t = (progress - 0.35) / 0.05;
        opacity = 1 - t;
        translateY = -t * 40;
      }
    } else if (idx === 1 && progress >= 0.4 && progress < 0.7) {
      if (progress < 0.45) {
        const t = (progress - 0.4) / 0.05;
        opacity = t;
        translateY = 40 - t * 40;
      } else if (progress < 0.65) {
        opacity = 1;
        translateY = 0;
      } else {
        const t = (progress - 0.65) / 0.05;
        opacity = 1 - t;
        translateY = -t * 40;
      }
    } else if (idx === 2 && progress >= 0.7) {
      if (progress < 0.75) {
        const t = (progress - 0.7) / 0.05;
        opacity = t;
        translateY = 40 - t * 40;
      } else {
        opacity = 1;
        translateY = 0;
      }
    }

    return {
      opacity,
      top: "50%",
      transform: `translateY(calc(-50% + ${translateY}px))`,
      transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
    };
  };

  return (
    <section ref={containerRef} id="services" className="relative h-[400vh] bg-transparent">
      {/* Sticky Container viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-[#07080a] border-t border-border">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#15171d_1px,transparent_1px),linear-gradient(to_bottom,#15171d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="container-x relative w-full h-[85vh] flex flex-col justify-center">
          {/* Main 3-Column Interactive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full relative">
            {/* LEFT COLUMN */}
            <div className="hidden lg:block lg:col-span-4 h-full flex flex-col justify-center relative">
              {/* Phase 1 & 2: Left mockup image */}
              {progress < 0.08 && (
                <div
                  className="w-full flex justify-center transition-all duration-300"
                  style={{
                    opacity: sideOpacity,
                    transform: `translateY(${sideTranslateY}px)`,
                  }}
                >
                  <div className="relative w-[320px] sm:w-[350px] aspect-[9/19.5] rounded-[2rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] bg-transparent">
                    <img
                      src="/service2.png"
                      className="w-full h-full object-cover"
                      alt="Service 2 Preview"
                    />
                  </div>
                </div>
              )}

              {/* Phase 3-5: Service content */}
              {progress >= 0.08 &&
                services.map((s, idx) => (
                  <div
                    key={s.num}
                    className="absolute inset-x-0 py-8 space-y-6 text-left"
                    style={getContentStyles(idx)}
                  >
                    <span className="eyebrow uppercase tracking-wider">{s.eyebrow}</span>
                    <h3 className="text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                    <button className="btn-primary rounded-[6px] px-8 py-3.5 mt-2 shadow-[0_0_20px_rgba(80,118,246,0.2)]">
                      Explore {s.eyebrow.split(" ")[0]}
                    </button>
                  </div>
                ))}
            </div>

            {/* MIDDLE COLUMN: Always static centered mockup phone */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-center h-full relative z-20">
              <div className="relative w-[320px] sm:w-[350px] aspect-[9/19.5] rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden bg-transparent">
                {/* Service 1 Screenshot */}
                <img
                  src="/service1.png"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                  style={{ opacity: img1Opacity }}
                  alt="Service 1 Screen"
                />
                {/* Service 2 Screenshot */}
                <img
                  src="/service2.png"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                  style={{ opacity: img2Opacity }}
                  alt="Service 2 Screen"
                />
                {/* Service 3 Screenshot */}
                <img
                  src="/service3.png"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                  style={{ opacity: img3Opacity }}
                  alt="Service 3 Screen"
                />
              </div>

              {/* Mobile Viewport Service Content Stacked Below Mockup */}
              <div className="block lg:hidden mt-6 w-full max-w-sm px-4 relative h-[180px] overflow-hidden text-center">
                {progress >= 0.08 ? (
                  services.map((s, idx) => (
                    <div
                      key={s.num}
                      className="absolute inset-x-0 py-2 space-y-3"
                      style={getContentStyles(idx)}
                    >
                      <span className="text-[10px] eyebrow uppercase tracking-wider">
                        {s.eyebrow}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mx-auto">
                        {s.desc}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center h-full space-y-2 opacity-80">
                    <span className="text-xs eyebrow uppercase tracking-wider">
                      Marketplace Channels
                    </span>
                    <p className="text-xs text-muted-foreground">
                      Scroll down to see our fully-managed automation services.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="hidden lg:block lg:col-span-4 h-full flex flex-col justify-center relative">
              {/* Phase 1 & 2: Right mockup image */}
              {progress < 0.08 && (
                <div
                  className="w-full flex justify-center transition-all duration-300"
                  style={{
                    opacity: sideOpacity,
                    transform: `translateY(${sideTranslateY}px)`,
                  }}
                >
                  <div className="relative w-[320px] sm:w-[350px] aspect-[9/19.5] rounded-[2rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] bg-transparent">
                    <img
                      src="/service3.png"
                      className="w-full h-full object-cover"
                      alt="Service 3 Preview"
                    />
                  </div>
                </div>
              )}

              {/* Phase 3-5: Service points */}
              {progress >= 0.08 &&
                services.map((s, idx) => (
                  <div
                    key={s.num}
                    className="absolute inset-x-0 py-8 space-y-6 text-left"
                    style={getContentStyles(idx)}
                  >
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest border-b border-border/55 pb-2">
                      Key Program Features
                    </h4>
                    <div className="space-y-6">
                      {s.points.map((p, pIdx) => (
                        <div key={pIdx} className="flex gap-4 items-start group">
                          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary shrink-0 border border-primary/20 group-hover:scale-110 transition-transform">
                            ✓
                          </span>
                          <div>
                            <p className="font-bold text-foreground text-sm sm:text-base leading-tight">
                              {p.label}
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-normal">
                              {p.val}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Scrolling progress indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Scroll to explore
            </span>
            <div className="w-1.5 h-6 bg-border/40 rounded-full relative overflow-hidden">
              <div
                className="w-full bg-primary rounded-full absolute top-0 left-0 transition-all duration-300"
                style={{ height: `${progress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueProp() {
  const checklist = [
    "Managing supplier relationships",
    "Optimal pricing & repricing strategies",
    "Facilitating returns & customer service",
    "Account health & risk mitigation",
    "Real-time reporting & analytics",
    "Daily 8-hour active store monitoring",
  ];

  const pillars = [
    {
      Icon: MessageSquare,
      title: "Communication",
      desc: "Transparent updates, direct channels, no account managers in the dark.",
    },
    {
      Icon: BarChart,
      title: "Accountability",
      desc: "Monthly reports, live analytics dashboards, KPIs you can actually verify.",
    },
    {
      Icon: Shield,
      title: "Integrity",
      desc: "Honesty and collaboration — internal teams only, never outsourced.",
    },
  ];

  return (
    <section className="border-t border-border py-24 bg-card/10">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column - Checklist */}
          <div className="lg:col-span-6 space-y-6 reveal">
            <span className="eyebrow">What we handle</span>
            <h2 className="text-3xl sm:text-5xl">
              <ScrollRevealText text="We put your money to work, so you can put your mind at ease." />
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From the first supplier handshake to the last shipped order, our internal team owns
              every step — so you don&apos;t have to think about it.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 pt-4">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-foreground/90"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map(({ Icon, title, desc }, idx) => {
              const isOdd = idx % 2 === 0;
              if (isOdd) {
                return (
                  <div
                    key={title}
                    className="relative p-[1px] overflow-hidden rounded-[1.25rem] bg-transparent group reveal transition duration-300 shadow-[0_0_30px_-12px_rgba(80,118,246,0.08)] hover:shadow-[0_0_30px_-5px_rgba(80,118,246,0.2)]"
                  >
                    {/* Rotating border beam */}
                    <span
                      className="absolute top-1/2 left-1/2 min-w-[300px] min-h-[300px] w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_40%,var(--color-primary)_50%,transparent_60%)] animate-border-beam pointer-events-none"
                      style={{
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                    {/* Inner content container */}
                    <div className="relative z-10 w-full h-full bg-card rounded-[1.2rem] p-6 flex gap-5 items-start">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={title}
                  className="card-surface reveal p-6 flex gap-5 items-start transition hover:border-primary/20"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      Icon: ShieldCheck,
      title: "Stress-Free Onboarding",
      desc: "Guided entity configuration, merchant registration, and professional approval coordination — we manage the legal paperwork.",
    },
    {
      Icon: DollarSign,
      title: "Hands-Free Passive Income",
      desc: "100% operational store automation. Sourcing, inventory lists, client services, and logistics fully owned by our agency.",
    },
    {
      Icon: BarChart,
      title: "Real-Time Transparency",
      desc: "Live dashboards, shared accountability matrices, and verify-ready monthly performance analytics.",
    },
    {
      Icon: TrendingUp,
      title: "Aggressive Scale Strategies",
      desc: "Dynamic pricing engines, supplier updates, and catalog growth optimization to maximize Buy Box wins.",
    },
  ];

  return (
    <section id="benefits" className="border-t border-border py-24">
      <div className="container-x">
        <div className="reveal text-center max-w-3xl mx-auto space-y-4">
          <span className="eyebrow">Why Investors Choose Us</span>
          <h2 className="text-3xl sm:text-5xl">
            <ScrollRevealText text="Redefine Passive Income with Ecom Solutions" />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
            Stay in control while Ecom Solutions&apos; professional operational team manages your
            store inventory, shipments, and health with absolute precision.
          </p>
        </div>

        {/* Masonry/Staggered Layout Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 items-start">
          {/* Column 1 */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="reveal relative p-[1px] overflow-hidden rounded-[1.25rem] bg-transparent shadow-[0_0_50px_-12px_rgba(80,118,246,0.08)] hover:shadow-[0_0_30px_-5px_rgba(80,118,246,0.3)] transition-all duration-300 group hover:-translate-y-1">
              {/* Rotating border beam */}
              <span
                className="absolute top-1/2 left-1/2 min-w-[300px] min-h-[300px] w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_40%,var(--color-primary)_50%,transparent_60%)] animate-border-beam pointer-events-none"
                style={{
                  transform: "translate(-50%, -50%)",
                }}
              />
              {/* Inner Content Container */}
              <div className="relative z-10 w-full h-full bg-[#1a1c22] rounded-[1.2rem] p-8 text-left">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-6">{benefits[0].title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {benefits[0].desc}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="reveal relative p-[1px] overflow-hidden rounded-[1.25rem] bg-transparent shadow-[0_0_50px_-12px_rgba(80,118,246,0.08)] hover:shadow-[0_0_30px_-5px_rgba(80,118,246,0.3)] transition-all duration-300 group hover:-translate-y-1">
              {/* Rotating border beam */}
              <span
                className="absolute top-1/2 left-1/2 min-w-[300px] min-h-[300px] w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_40%,var(--color-primary)_50%,transparent_60%)] animate-border-beam pointer-events-none"
                style={{
                  transform: "translate(-50%, -50%)",
                }}
              />
              {/* Inner Content Container */}
              <div className="relative z-10 w-full h-full bg-[#1a1c22] rounded-[1.2rem] p-8 text-left">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary group-hover:scale-110 transition-transform duration-300">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-6">{benefits[2].title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {benefits[2].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 - Staggered offset */}
          <div className="space-y-6 md:mt-12">
            {/* Card 2 */}
            <div className="reveal card-surface p-8 text-left bg-[#1a1c22]/40 border border-border/80 rounded-2xl shadow-[0_0_50px_-12px_rgba(80,118,246,0.08)] hover:shadow-[0_0_30px_-5px_rgba(80,118,246,0.25)] hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mt-6">{benefits[1].title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {benefits[1].desc}
              </p>
            </div>

            {/* Card 4 */}
            <div className="reveal card-surface p-8 text-left bg-[#1a1c22]/40 border border-border/80 rounded-2xl shadow-[0_0_50px_-12px_rgba(80,118,246,0.08)] hover:shadow-[0_0_30px_-5px_rgba(80,118,246,0.25)] hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mt-6">{benefits[3].title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {benefits[3].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      num: "01",
      title: "Acquire & Build Your Business Structure",
      desc: "Groundwork, legal entity, staffing and a dedicated account manager assigned to your store.",
      Icon: Briefcase,
    },
    {
      num: "02",
      title: "Managing Your Account",
      desc: "Daily 8-hour monitoring, sourcing, listing, customer service and a clear monthly progression report.",
      Icon: ShoppingBag,
    },
    {
      num: "03",
      title: "Scaling Your Account",
      desc: "Building customer loyalty and increasing long-term ROI through aggressive, data-led growth.",
      Icon: TrendingUp,
    },
  ];

  return (
    <section id="how-it-works" className="border-t border-border py-24 bg-card/5">
      <div className="container-x">
        <div className="reveal text-center max-w-3xl mx-auto space-y-4">
          <span className="eyebrow">How it works</span>
          <h2 className="text-3xl sm:text-5xl">
            <ScrollRevealText text="Three steps from signup to scale." />
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 relative">
          {/* Desktop horizontal connecting arrows in column gaps */}
          <div className="hidden lg:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-[31.5%] z-20 h-10 w-10 rounded-full border border-border/80 bg-[#16181e] shadow-[0_0_15px_rgba(80,118,246,0.15)] text-primary select-none pointer-events-none">
            <ArrowRight className="h-5 w-5" />
          </div>
          <div className="hidden lg:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-[65%] z-20 h-10 w-10 rounded-full border border-border/80 bg-[#16181e] shadow-[0_0_15px_rgba(80,118,246,0.15)] text-primary select-none pointer-events-none">
            <ArrowRight className="h-5 w-5" />
          </div>

          {steps.map((s, idx) => {
            const isMiddle = idx === 1;
            const isLast = idx === steps.length - 1;
            const Icon = s.Icon;

            return (
              <div key={s.num} className="contents">
                {/* Step Card */}
                {isMiddle ? (
                  /* Highlighted Center Card (Step 2) */
                  <div className="reveal relative p-8 text-left bg-[#13151a] border-2 border-primary/60 rounded-2xl flex flex-col justify-between min-h-[220px] shadow-[0_0_45px_-5px_rgba(80,118,246,0.25)] transition duration-300 transform scale-[1.03] hover:scale-[1.05] z-10 group">
                    <div className="flex justify-between items-center w-full">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="text-5xl font-black text-primary/25 select-none font-mono">
                        {s.num}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">{s.desc}</p>
                    </div>
                  </div>
                ) : (
                  /* Transparent Side Cards (Step 1 and Step 3) */
                  <div className="reveal p-8 text-left bg-transparent border border-border/40 rounded-2xl flex flex-col justify-between min-h-[220px] transition duration-300 hover:border-primary/30 group">
                    <div className="flex justify-between items-center w-full">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary/80 border border-primary/10 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="text-5xl font-black text-muted-foreground/15 select-none font-mono">
                        {s.num}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">{s.desc}</p>
                    </div>
                  </div>
                )}

                {/* Mobile vertical down arrow indicator in between cards */}
                {!isLast && (
                  <div className="flex lg:hidden justify-center my-2 text-primary/40 animate-pulse py-2">
                    <ArrowRight className="h-6 w-6 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { label: "Happy Clients", n: "400", s: "+", desc: "Passive store investors" },
    { label: "Team Members", n: "300", s: "+", desc: "In-house operational staff" },
    { label: "Net Margin Average", n: "18", s: "%", desc: "Consistent store performance" },
    { label: "Completed Projects", n: "700", s: "+", desc: "Automated e-commerce stores" },
  ];

  return (
    <section className="border-t border-border py-24 bg-card/5">
      <div className="container-x">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => {
            const isOdd = idx % 2 === 0;
            if (isOdd) {
              return (
                <div
                  key={s.label}
                  className="reveal relative p-[1px] overflow-hidden rounded-[1.25rem] bg-transparent group shadow-[0_0_50px_-12px_rgba(80,118,246,0.08)] transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Rotating border beam */}
                  <span
                    className="absolute top-1/2 left-1/2 min-w-[300px] min-h-[300px] w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_40%,var(--color-primary)_50%,transparent_60%)] animate-border-beam pointer-events-none"
                    style={{
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  {/* Inner content container */}
                  <div className="relative z-10 w-full h-full bg-[#1a1c22] rounded-[1.2rem] p-8 text-left flex flex-col justify-between min-h-[218px]">
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                      {s.label}
                    </span>
                    <p className="text-5xl sm:text-6xl font-black text-foreground mt-4 flex items-baseline">
                      {s.n}
                      <span className="text-primary text-3xl font-bold ml-0.5">{s.s}</span>
                    </p>
                    <p className="text-sm text-foreground/80 mt-6 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            }
            return (
              <div
                key={s.label}
                className="reveal card-surface p-8 text-left bg-[#1a1c22]/40 border border-border/80 rounded-2xl flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-primary/45 hover:-translate-y-1"
              >
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                  {s.label}
                </span>
                <p className="text-5xl sm:text-6xl font-black text-foreground mt-4 flex items-baseline">
                  {s.n}
                  <span className="text-primary text-3xl font-bold ml-0.5">{s.s}</span>
                </p>
                <p className="text-sm text-foreground/80 mt-6 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    rating: "4.9",
    text: "The automated dropshipping setup is flawless. Ecom Solutions handled everything from LLC filing to supplier relations. I'm seeing consistent 18% profit margins, completely passive.",
    name: "Marcus Vance",
    role: "Amazon FBA Investor",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    logo: (
      <svg
        className="h-6 text-foreground/80 fill-current"
        viewBox="0 0 120 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 5 L20 15 L10 25 L0 15 Z M25 15 L35 5 L35 25 Z" className="fill-primary" />
        <text
          x="45"
          y="20"
          className="font-mono font-black text-sm uppercase tracking-wider fill-current text-foreground"
        >
          AIGENT
        </text>
      </svg>
    ),
  },
  {
    rating: "4.8",
    text: "Walmart automation has exceeded all my expectations. The inventory sourcing algorithms they use are top tier. Sourcing from verified domestic distributors is a game-changer.",
    name: "Sarah Jenkins",
    role: "Walmart WFS Partner",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    logo: (
      <svg
        className="h-6 text-foreground/80 fill-current"
        viewBox="0 0 120 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="15" r="8" className="stroke-primary stroke-2 fill-none" />
        <circle cx="10" cy="15" r="4" className="fill-primary" />
        <text
          x="25"
          y="20"
          className="font-mono font-black text-sm uppercase tracking-wider fill-current text-foreground"
        >
          LOGOIPSUM
        </text>
      </svg>
    ),
  },
  {
    rating: "4.9",
    text: "As a busy executive, I didn't want to manage inventory or customer support. Ecom Solutions does the heavy lifting. I receive my net profits directly. Exceptional service!",
    name: "David Chen",
    role: "eBay & FBA Store Owner",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    logo: (
      <svg
        className="h-6 text-foreground/80 fill-current"
        viewBox="0 0 120 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="5" width="8" height="8" rx="1" className="fill-primary/60" />
        <rect x="12" y="5" width="8" height="8" rx="1" className="fill-primary" />
        <rect x="2" y="15" width="8" height="8" rx="1" className="fill-primary" />
        <rect x="12" y="15" width="8" height="8" rx="1" className="fill-primary/60" />
        <text
          x="28"
          y="20"
          className="font-mono font-black text-sm uppercase tracking-wider fill-current text-foreground"
        >
          FLEXSPACE
        </text>
      </svg>
    ),
  },
  {
    rating: "5.0",
    text: "They built my store from scratch. The transition to Walmart Fulfillment Services WFS was handled guide-by-guide by their Dhaka operations team. Solid passive asset.",
    name: "Elena Rostova",
    role: "E-commerce Asset Investor",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    logo: (
      <svg
        className="h-6 text-foreground/80 fill-current"
        viewBox="0 0 120 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 5 L20 22 L0 22 Z" className="fill-primary" />
        <text
          x="28"
          y="20"
          className="font-mono font-black text-sm uppercase tracking-wider fill-current text-foreground"
        >
          NEXUS
        </text>
      </svg>
    ),
  },
];

function ReviewCarousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = visibleCards === 1 ? 88 : 49;

  const next = () => {
    setSlideIndex((prev) => (prev >= reviews.length - visibleCards ? 0 : prev + 1));
  };
  const prev = () => {
    setSlideIndex((prev) => (prev === 0 ? reviews.length - visibleCards : prev - 1));
  };

  return (
    <section className="border-t border-border py-24 bg-card/10 relative overflow-hidden">
      <div className="container-x">
        {/* Testimonial Header with Controls */}
        <div className="reveal flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div className="text-left space-y-4 max-w-2xl">
            <span className="eyebrow">What Our Investors Say</span>
            <h2 className="text-3xl sm:text-5xl text-foreground">
              <ScrollRevealText text="Real testimonial from our investors" />
            </h2>
          </div>
          {/* Circular control buttons */}
          <div className="flex gap-3 self-start md:self-auto">
            <button
              onClick={prev}
              className="h-12 w-12 rounded-full border border-border bg-card/45 flex items-center justify-center hover:bg-secondary text-foreground hover:border-primary/45 transition-all duration-300"
              aria-label="Previous review"
            >
              ←
            </button>
            <button
              onClick={next}
              className="h-12 w-12 rounded-full border border-border bg-card/45 flex items-center justify-center hover:bg-secondary text-foreground hover:border-primary/45 transition-all duration-300"
              aria-label="Next review"
            >
              →
            </button>
          </div>
        </div>

        {/* Peeking Cards Carousel track */}
        <div className="overflow-hidden px-3 -mx-3">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${slideIndex * cardWidth}%)`,
            }}
          >
            {reviews.map((r, idx) => {
              const isOdd = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`shrink-0 px-3 ${visibleCards === 1 ? "w-[88%]" : "w-[49%]"}`}
                >
                  {/* Testimonial Card Wrapper */}
                  {isOdd ? (
                    <div className="relative p-[1px] overflow-hidden rounded-[1.25rem] bg-transparent group shadow-[0_0_30px_-12px_rgba(80,118,246,0.08)]">
                      {/* Rotating border beam */}
                      <span
                        className="absolute top-1/2 left-1/2 min-w-[300px] min-h-[300px] w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_40%,var(--color-primary)_50%,transparent_60%)] animate-border-beam pointer-events-none"
                        style={{
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                      {/* Inner Content Surface */}
                      <div className="relative z-10 p-8 bg-[#1a1c22] rounded-[1.2rem] flex flex-col justify-between h-[318px] sm:h-[298px]">
                        {/* Logo at top & Quote */}
                        <div>
                          <div className="h-6 flex items-center">{r.logo}</div>
                          <p className="mt-6 text-sm sm:text-base text-foreground/90 font-medium leading-relaxed text-left">
                            &ldquo;{r.text}&rdquo;
                          </p>
                        </div>

                        {/* Footer Profile */}
                        <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-between gap-4">
                          {/* Left: Avatar & Info */}
                          <div className="flex items-center gap-3">
                            <img
                              src={r.avatar}
                              alt={r.name}
                              className="h-10 w-10 rounded-full object-cover shrink-0"
                            />
                            <div className="text-left">
                              <p className="font-bold text-foreground text-sm leading-tight">
                                {r.name}
                              </p>
                              <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                                {r.role}
                              </p>
                            </div>
                          </div>

                          {/* Right: Stars */}
                          <div className="text-right shrink-0">
                            <div className="flex text-amber-400 text-[10px] gap-0.5 justify-end">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i}>★</span>
                              ))}
                            </div>
                            <p className="text-[10px] text-muted-foreground font-semibold mt-1">
                              ({r.rating} / 5.0)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="card-surface p-8 bg-[#1a1c22]/40 border border-border/60 rounded-2xl flex flex-col justify-between h-[320px] sm:h-[300px]">
                      {/* Logo at top & Quote */}
                      <div>
                        <div className="h-6 flex items-center">{r.logo}</div>
                        <p className="mt-6 text-sm sm:text-base text-foreground/90 font-medium leading-relaxed text-left">
                          &ldquo;{r.text}&rdquo;
                        </p>
                      </div>

                      {/* Footer Profile */}
                      <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-between gap-4">
                        {/* Left: Avatar & Info */}
                        <div className="flex items-center gap-3">
                          <img
                            src={r.avatar}
                            alt={r.name}
                            className="h-10 w-10 rounded-full object-cover shrink-0"
                          />
                          <div className="text-left">
                            <p className="font-bold text-foreground text-sm leading-tight">
                              {r.name}
                            </p>
                            <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                              {r.role}
                            </p>
                          </div>
                        </div>

                        {/* Right: Stars */}
                        <div className="text-right shrink-0">
                          <div className="flex text-amber-400 text-[10px] gap-0.5 justify-end">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                          <p className="text-[10px] text-muted-foreground font-semibold mt-1">
                            ({r.rating} / 5.0)
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Autoplaying Cozy Room Laptop Video Section with primary border beam */}
        <div className="reveal w-full mt-20 relative group">
          {/* Border beam container */}
          <div className="relative p-[2px] overflow-hidden rounded-[1.5rem] bg-transparent shadow-[0_0_30px_-5px_rgba(80,118,246,0.15)] group-hover:shadow-[0_0_40px_rgba(80,118,246,0.3)] transition-all duration-500">
            {/* Rotating border beam */}
            <span
              className="absolute top-1/2 left-1/2 min-w-[120%] aspect-square bg-[conic-gradient(from_0deg,transparent_40%,var(--color-primary)_50%,transparent_60%)] animate-border-beam pointer-events-none"
              style={{
                width: "150%",
                height: "150%",
                transform: "translate(-50%, -50%)",
              }}
            />
            {/* Inner Video Container */}
            <div className="relative z-10 rounded-[1.4rem] overflow-hidden bg-black aspect-video">
              <iframe
                src="https://www.youtube.com/embed/fIQ6lxQOZ2M?autoplay=1&mute=1&loop=1&playlist=fIQ6lxQOZ2M&playsinline=1&controls=0&rel=0&modestbranding=1"
                title="Ecom Solutions Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
];

function FAQSection({ onApply }: { onApply: () => void }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 card-surface reveal p-8 h-fit space-y-6">
            <span className="eyebrow">FAQ</span>
            <h2 className="text-3xl text-foreground leading-[1.1]">
              <ScrollRevealText text="Frequently asked questions." />
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Have something specific in mind? Book a consultation, and we&apos;ll ensure your
              questions are handled promptly.
            </p>
            <button
              onClick={onApply}
              className="relative p-[1px] overflow-hidden rounded-[6px] inline-flex items-center justify-center bg-transparent group shadow-[0_0_15px_-3px_rgba(80,118,246,0.2)] hover:shadow-[0_0_25px_rgba(80,118,246,0.5)] transition-all duration-300 w-full"
            >
              {/* Rotating border beam */}
              <span
                className="absolute top-1/2 left-1/2 min-w-[280px] min-h-[280px] w-[160%] aspect-square bg-[conic-gradient(from_0deg,transparent_40%,var(--color-primary)_50%,transparent_60%)] animate-border-beam pointer-events-none"
                style={{
                  transform: "translate(-50%, -50%)",
                }}
              />
              {/* Inner button surface */}
              <span className="relative z-10 w-full py-3 inline-flex items-center justify-center rounded-[5px] font-bold text-sm uppercase tracking-wider bg-[#15171d] text-foreground hover:bg-primary hover:text-white transition-all duration-200">
                Book a Consultation
              </span>
            </button>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((f, idx) => {
              const isOdd = idx % 2 === 0;
              if (isOdd) {
                return (
                  <div
                    key={f.q}
                    className="reveal relative p-[1px] overflow-hidden rounded-[1.25rem] bg-transparent group shadow-[0_0_15px_-3px_rgba(80,118,246,0.1)] hover:shadow-[0_0_25px_rgba(80,118,246,0.3)] transition-all duration-300"
                  >
                    {/* Rotating border beam */}
                    <span
                      className="absolute top-1/2 left-1/2 min-w-[300px] min-h-[300px] w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_40%,var(--color-primary)_50%,transparent_60%)] animate-border-beam pointer-events-none"
                      style={{
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                    {/* Inner content container */}
                    <div className="relative z-10 w-full h-full bg-[#15171d] rounded-[1.2rem]">
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
                  </div>
                );
              }
              return (
                <div key={f.q} className="card-surface reveal bg-card/20">
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onApply }: { onApply: () => void }) {
  return (
    <section className="border-t border-border py-24 relative overflow-hidden bg-transparent">
      <div className="container-x">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-border/40 px-6 py-20 sm:py-24 md:px-12 lg:px-20 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0d0f12]">
          {/* Corner glow effects matching sample layout */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 0% 0%, var(--color-primary) 0%, transparent 45%), radial-gradient(circle at 100% 100%, var(--color-primary) 0%, transparent 45%)",
            }}
          />
          {/* Centered Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 flex flex-col items-center">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.1] text-center">
              <ScrollRevealText text="Ready to own a passive e-commerce store?" />
            </h2>
            <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
              Book a no-pressure consultation. We&apos;ll walk you through capital requirements,
              expected timelines and the marketplaces best suited to you.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
              <button onClick={onApply} className="btn-primary rounded-[6px] px-8 py-4">
                Apply for a Store
              </button>
              <Link
                href="/contact"
                className="relative p-[1px] overflow-hidden rounded-[6px] inline-flex items-center justify-center bg-transparent group shadow-[0_0_15px_-3px_rgba(80,118,246,0.2)] hover:shadow-[0_0_25px_rgba(80,118,246,0.5)] transition-all duration-300"
              >
                {/* Rotating border beam */}
                <span
                  className="absolute top-1/2 left-1/2 min-w-[200px] min-h-[200px] w-[150%] aspect-square bg-[conic-gradient(from_0deg,transparent_40%,var(--color-primary)_50%,transparent_60%)] animate-border-beam pointer-events-none"
                  style={{
                    transform: "translate(-50%, -50%)",
                  }}
                />
                {/* Inner button surface */}
                <span className="relative z-10 btn-ghost rounded-[5px] px-8 py-4 inline-flex items-center gap-2 bg-[#15171d] hover:bg-[#1b1e26] w-full h-full transition-all duration-200">
                  Or contact us{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[300px] rounded-[3rem] border-[10px] border-foreground/90 bg-[#0a0a0a] p-3 shadow-2xl sm:w-[340px] select-none">
      <div className="overflow-hidden rounded-[2.2rem] bg-background">
        <div className="px-5 pt-5 pb-4">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <span>08:57</span>
            <span>📶 🔋 100%</span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                Store Dashboard
              </p>
              <p className="text-lg font-bold text-foreground">Amazon FBA US</p>
            </div>
            <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xs text-primary">
              ES
            </div>
          </div>

          {/* Active stats */}
          <div className="card-surface mt-4 p-4 bg-primary/5 border-primary/20">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
              Net Revenue (MTD)
            </p>
            <p className="text-2xl font-black text-foreground mt-1">$48,250.80</p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-bold mt-1">
              <span>+12.4%</span>
              <span className="text-[10px] text-muted-foreground font-normal">vs last month</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="card-surface p-3 text-left">
              <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-semibold">
                Net Profit
              </p>
              <p className="text-sm font-bold text-emerald-500 mt-1">$8,685.14</p>
              <p className="text-[9px] text-muted-foreground mt-0.5">18% Net Margin</p>
            </div>
            <div className="card-surface p-3 text-left">
              <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-semibold">
                Active Listings
              </p>
              <p className="text-sm font-bold text-foreground mt-1">1,420</p>
              <p className="text-[9px] text-muted-foreground mt-0.5">100% Sourced</p>
            </div>
          </div>

          {/* Account health */}
          <div className="card-surface mt-3 p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-[11px] font-bold text-foreground">Account Health</span>
            </div>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-500 font-bold px-2 py-0.5 rounded-full">
              Compliant
            </span>
          </div>

          {/* Sourcing logs */}
          <div className="mt-4">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-foreground">Recent Shipments</span>
              <span className="text-muted-foreground text-[10px]">View all</span>
            </div>

            <div className="space-y-2 mt-2">
              <div className="card-surface p-2.5 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-foreground text-[11px]">Supplier Order #892</p>
                  <p className="text-[9px] text-muted-foreground">FBA Warehouse Arrival</p>
                </div>
                <span className="text-[10px] text-primary font-bold">In Transit</span>
              </div>
              <div className="card-surface p-2.5 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-foreground text-[11px]">Supplier Order #887</p>
                  <p className="text-[9px] text-muted-foreground">Walmart Dropshipping SKU</p>
                </div>
                <span className="text-[10px] text-emerald-500 font-bold">Delivered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom virtual buttons */}
        <div className="mx-3 mb-3 mt-2 flex items-center justify-around rounded-full bg-foreground/95 py-2.5 text-background text-sm">
          <span className="text-primary font-bold">🏠</span>
          <span>📦</span>
          <span>📈</span>
          <span>💬</span>
        </div>
      </div>
    </div>
  );
}

function StickyRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // We only want the intersection observer to run on desktop where we have the sticky scroll behavior
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const sections = container.querySelectorAll("[data-step]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = parseInt(entry.target.getAttribute("data-step") || "0", 10);
            setActiveStep(step);
          }
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0.1,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const steps = [
    {
      num: "01",
      title: "Entity Registration",
      desc: "We form your custom LLC, secure your EIN, connect business banking accounts, and prepare all necessary corporate documentation.",
      subFeatureTitle: "100% Owned by You",
      subFeatureDesc:
        "You maintain complete legal and financial ownership. All corporate accounts are registered in your name.",
      screen: (
        <div className="flex flex-col h-full bg-[#0a0a0a] p-4 text-left justify-between select-none">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                Registration Status
              </span>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-500 font-bold px-2 py-0.5 rounded-full">
                Active
              </span>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-emerald-500">✓</span>
                <span className="font-semibold text-foreground">LLC Articles Filed</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-emerald-500">✓</span>
                <span className="font-semibold text-foreground">IRS EIN Assigned</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-emerald-500">✓</span>
                <span className="font-semibold text-foreground">Merchant Account Linked</span>
              </div>
            </div>
          </div>
          <div className="card-surface p-3 bg-primary/5 border-primary/20 text-center">
            <p className="text-[10px] text-muted-foreground">Entity Name</p>
            <p className="text-xs font-bold text-foreground mt-0.5">Ecom Client Venture LLC</p>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      title: "Store Activation",
      desc: "Our onboarding managers guide you through credentials verification, verify your storefront, and establish official API connectivity.",
      subFeatureTitle: "Secure API Access",
      subFeatureDesc:
        "We connect utilizing secure developer APIs, ensuring we never require your master passwords.",
      screen: (
        <div className="flex flex-col h-full bg-[#0a0a0a] p-4 text-left justify-between select-none">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                API Sync Portal
              </span>
              <span className="text-[9px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full">
                Connected
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-card p-2 rounded-lg border border-border/60">
                <span className="text-[11px] text-foreground font-semibold">Amazon Central</span>
                <span className="text-[10px] text-emerald-500 font-bold">Live</span>
              </div>
              <div className="flex justify-between items-center bg-card p-2 rounded-lg border border-border/60">
                <span className="text-[11px] text-foreground font-semibold">Walmart WFS</span>
                <span className="text-[10px] text-emerald-500 font-bold">Live</span>
              </div>
              <div className="flex justify-between items-center bg-card p-2 rounded-lg border border-border/60">
                <span className="text-[11px] text-foreground font-semibold">eBay Partner</span>
                <span className="text-[10px] text-emerald-500 font-bold">Live</span>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-muted-foreground text-center">Last synced: Just now</div>
        </div>
      ),
    },
    {
      num: "03",
      title: "Inventory Sourcing",
      desc: "Our sourcing algorithms analyze demand, locate vetted direct suppliers, list profitable inventory, and coordinate initial shipping.",
      subFeatureTitle: "Vetted Distributors Only",
      subFeatureDesc:
        "We interface exclusively with verified domestic distributors to maintain strict brand compliance.",
      screen: (
        <div className="flex flex-col h-full bg-[#0a0a0a] p-4 text-left justify-between select-none">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                Inventory & Supply
              </span>
              <span className="text-[9px] bg-amber-500/10 text-amber-500 font-bold px-2 py-0.5 rounded-full">
                1,420 SKUs
              </span>
            </div>
            <div className="space-y-2">
              <div className="text-[11px] border border-border p-2 rounded-lg bg-card flex justify-between">
                <div>
                  <p className="font-bold text-foreground">SKU-A928 (Home)</p>
                  <p className="text-[9px] text-muted-foreground">Supplier Cost: $12.40</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-emerald-500">$29.99</p>
                  <p className="text-[9px] text-muted-foreground">58% Margin</p>
                </div>
              </div>
              <div className="text-[11px] border border-border p-2 rounded-lg bg-card flex justify-between">
                <div>
                  <p className="font-bold text-foreground">SKU-B114 (Kitchen)</p>
                  <p className="text-[9px] text-muted-foreground">Supplier Cost: $8.20</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-emerald-500">$19.99</p>
                  <p className="text-[9px] text-muted-foreground">59% Margin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] py-1 px-2 rounded-lg text-center font-bold">
            Suppliers connected: 12 Vetted
          </div>
        </div>
      ),
    },
    {
      num: "04",
      title: "Store Operations",
      desc: "Our in-house operations team takes over daily customer service, order processing, tracking uploads, and account health monitoring.",
      subFeatureTitle: "Daily Active Monitoring",
      subFeatureDesc:
        "Monitor every sale, margin, and payment cycle in real-time through your mobile store tracker.",
      screen: (
        <div className="flex flex-col h-full bg-[#0a0a0a] p-4 text-left justify-between select-none">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                Live Metrics Dashboard
              </span>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-500 font-bold px-2 py-0.5 rounded-full">
                Optimal Health
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="card-surface p-2 bg-card">
                <p className="text-[8px] text-muted-foreground font-semibold uppercase">
                  MTD Revenue
                </p>
                <p className="text-sm font-black text-foreground mt-0.5">$48,250.80</p>
              </div>
              <div className="card-surface p-2 bg-card">
                <p className="text-[8px] text-muted-foreground font-semibold uppercase">
                  Net Profit
                </p>
                <p className="text-sm font-black text-emerald-500 mt-0.5">$8,685.14</p>
              </div>
            </div>

            <div className="border border-border/60 p-2.5 rounded-xl bg-card space-y-1">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-muted-foreground">Buy Box Wins</span>
                <span className="font-bold text-foreground">84%</span>
              </div>
              <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[84%]" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-around border-t border-border/40 pt-2 text-[10px] text-muted-foreground">
            <span>Orders MTD: 894</span>
            <span>·</span>
            <span>AOS Health: 100%</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section ref={containerRef} className="border-t border-border py-24 bg-card/5">
      <div className="container-x">
        {/* Header Title */}
        <div className="reveal text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="eyebrow">A Closer Look Inside Your Store</span>
          <h2 className="text-3xl sm:text-5xl text-foreground">
            <ScrollRevealText text="The Interactive Store Automation Journey" />
          </h2>
          <p className="text-muted-foreground">
            Watch how our internal team handles entity setup, activations, daily inventory, and live
            operation metrics in real-time.
          </p>
        </div>

        {/* 1. Layout Structure (3-Column Grid) for Desktop */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start relative min-h-[250vh]">
          {/* Left Column: Scrolling Main Text */}
          <div className="col-span-4 space-y-[60vh] py-[30vh]">
            {steps.map((s, idx) => (
              <div
                key={idx}
                data-step={idx}
                className={`transition-all duration-500 transform space-y-4 ${
                  activeStep === idx
                    ? "opacity-100 scale-100 translate-x-2 text-foreground font-semibold"
                    : "opacity-25 scale-95 translate-x-0 text-muted-foreground"
                }`}
              >
                <div className="text-xs font-bold text-primary uppercase tracking-widest animate-pulse">
                  Step {s.num}
                </div>
                <h3 className="text-3xl font-black">{s.title}</h3>
                <p className="text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Center Column: Sticky Mobile Phone Mockup */}
          <div className="col-span-4 sticky top-[20vh] h-[60vh] flex items-center justify-center">
            <div className="relative w-[280px] sm:w-[320px] rounded-[3rem] border-[10px] border-foreground/90 bg-[#0a0a0a] p-3 shadow-2xl">
              {/* Camera Notch / Sensor Bar */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-5 bg-[#0a0a0a] rounded-full z-20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-800 mr-2 animate-pulse" />
                <span className="h-1 w-8 rounded-full bg-slate-900" />
              </div>

              <div className="relative overflow-hidden rounded-[2.2rem] bg-[#0d0d0d] border border-border/40 h-[480px]">
                {/* Simulated status bar */}
                <div className="h-9 px-5 pt-3 pb-1 flex justify-between items-center text-[10px] text-muted-foreground/80 font-semibold border-b border-border/10">
                  <span>10:13</span>
                  <span className="flex items-center gap-1.5">5G 📶 🔋 100%</span>
                </div>

                {/* 3. Scroll-Triggered Screen Swap with Smooth Crossfade */}
                <div className="relative h-[435px]">
                  {steps.map((s, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        activeStep === idx
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      {s.screen}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Sub-Features */}
          <div className="col-span-4 space-y-[60vh] py-[30vh]">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 transform space-y-4 ${
                  activeStep === idx
                    ? "opacity-100 scale-100 -translate-x-2 text-foreground"
                    : "opacity-25 scale-95 translate-x-0 text-muted-foreground"
                }`}
              >
                <div
                  className={`h-10 w-10 rounded-xl flex items-center justify-center font-bold text-sm transition-colors duration-500 ${
                    activeStep === idx
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  ✓
                </div>
                <h4 className="text-xl font-bold">{s.subFeatureTitle}</h4>
                <p className="text-sm leading-relaxed">{s.subFeatureDesc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Mobile Responsiveness Layout: Stacks Vertically */}
        <div className="block lg:hidden space-y-16">
          {steps.map((s, idx) => (
            <div key={idx} className="card-surface p-6 sm:p-8 space-y-6 bg-card/30">
              {/* Step info */}
              <div className="space-y-3 text-left">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  Step {s.num}
                </span>
                <h3 className="text-2xl font-black text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>

              {/* Inline phone mockup screen */}
              <div className="flex justify-center">
                <div className="w-[280px] rounded-[2.5rem] border-[8px] border-foreground/90 bg-[#0a0a0a] p-2 shadow-lg">
                  <div className="overflow-hidden rounded-[1.8rem] bg-[#0d0d0d] border border-border/40 h-[380px]">
                    <div className="h-8 px-4 pt-2.5 pb-0.5 flex justify-between items-center text-[9px] text-muted-foreground/80 font-semibold border-b border-border/10">
                      <span>10:13</span>
                      <span>5G 📶 🔋 100%</span>
                    </div>
                    <div className="h-[340px]">{s.screen}</div>
                  </div>
                </div>
              </div>

              {/* Sub-feature info */}
              <div className="pt-4 border-t border-border/50 flex gap-4 items-start text-left">
                <div className="h-8 w-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground">{s.subFeatureTitle}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {s.subFeatureDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
