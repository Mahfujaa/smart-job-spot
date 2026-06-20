import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aigent" },
      { name: "description", content: "Aigent is on a mission to make recruiting feel less like guesswork and more like signal." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  const values = [
    { t: "Signal over noise", p: "We surface the candidates that matter — not the loudest ones." },
    { t: "Human in the loop", p: "AI removes the busywork. Recruiters keep the judgement." },
    { t: "Built for trust", p: "Bias audits, transparent scoring, and data residency by default." },
    { t: "Outcome obsessed", p: "We measure ourselves by your time-to-hire and offer-accept rate." },
  ];
  return (
    <>
      <section className="pt-16 pb-20 sm:pt-24">
        <div className="container-x text-center reveal">
          <span className="eyebrow">About Aigent</span>
          <h1 className="mt-5 text-4xl font-black sm:text-6xl">Hiring, rebuilt around the people doing it.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            We started Aigent because the best recruiters were drowning in dashboards. So we built an AI teammate that handles the busywork — and amplifies their craft.
          </p>
        </div>
      </section>
      <section className="py-16 border-t border-border">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="reveal">
            <h2 className="text-3xl font-black sm:text-4xl">Our story</h2>
            <p className="mt-5 text-muted-foreground">
              Founded in 2022 in Bristol, Aigent grew from a small research project into a recruiting platform trusted by teams in 180+ countries. We obsess over one number: the time between a job opening and a great hire saying yes.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today our team spans engineering, talent science, and design — united by a belief that great hiring is great storytelling.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="card-surface reveal p-6">
                <h3 className="text-lg font-bold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-x text-center reveal">
          <h2 className="text-3xl font-black sm:text-4xl">Want to see it in action?</h2>
          <Link to="/contact" className="btn-primary mt-6 inline-flex">Talk to us</Link>
        </div>
      </section>
    </>
  );
}
