import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aigent" },
      { name: "description", content: "Get in touch with the Aigent team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.message.trim() || form.message.length < 10) errs.message = "Min 10 chars";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  }

  return (
    <section className="pt-16 pb-24 sm:pt-24">
      <div className="container-x grid gap-10 lg:grid-cols-2">
        <div className="reveal">
          <span className="eyebrow">Contact Us</span>
          <h1 className="mt-5 text-4xl font-black sm:text-5xl">Let's start a conversation.</h1>
          <p className="mt-5 text-muted-foreground">Tell us what you're hiring for and we'll come back with a tailored walkthrough.</p>
          <div className="mt-10 space-y-5 text-sm">
            <p className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary"><MapPin className="h-5 w-5" /></span> 22 Pembroke Lane Bristol, BS1 5QW United Kingdom</p>
            <p className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary"><Phone className="h-5 w-5" /></span> +1 (415) 555-0198</p>
            <p className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary"><Mail className="h-5 w-5" /></span> hello@aigent.com</p>
          </div>
        </div>
        <div className="card-surface reveal p-8">
          {sent ? (
            <div className="py-10 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/20 text-primary text-3xl">✓</div>
              <h3 className="mt-4 text-2xl font-bold">Message sent</h3>
              <p className="mt-2 text-muted-foreground">We'll be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              {(["name", "email", "company"] as const).map((k) => (
                <div key={k}>
                  <input
                    placeholder={k[0].toUpperCase() + k.slice(1) + (k === "company" ? " (optional)" : "")}
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
                  rows={5}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary"
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
