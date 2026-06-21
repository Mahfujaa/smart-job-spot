"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useApplyModal } from "@/hooks/use-apply-modal";

export function ApplyModal() {
  const { isOpen, close } = useApplyModal();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    message: "",
    existingAccounts: [] as string[],
    servicesInterested: [] as string[],
    creditLimit: "",
    trafficSource: "Search Engine (Google, Bing, etc.)",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const toggleExistingAccount = (account: string) => {
    setForm((prev) => ({
      ...prev,
      existingAccounts: prev.existingAccounts.includes(account)
        ? prev.existingAccounts.filter((a) => a !== account)
        : [...prev.existingAccounts, account],
    }));
  };

  const toggleServiceInterested = (service: string) => {
    setForm((prev) => ({
      ...prev,
      servicesInterested: prev.servicesInterested.includes(service)
        ? prev.servicesInterested.filter((s) => s !== service)
        : [...prev.servicesInterested, service],
    }));
  };

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!form.fullName.trim()) errs.fullName = "Name required";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) {
      errs.email = "Valid email required";
    }
    if (!form.phone.trim()) errs.phone = "Phone/WhatsApp required";
    if (!form.city.trim()) errs.city = "City required";
    if (!form.country.trim()) errs.country = "Country required";
    if (!form.creditLimit) errs.creditLimit = "Select a credit card limit";

    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      // Reset form on success
      setTimeout(() => {
        setForm({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          country: "",
          message: "",
          existingAccounts: [],
          servicesInterested: [],
          creditLimit: "",
          trafficSource: "Search Engine (Google, Bing, etc.)",
        });
        setSent(false);
        close();
      }, 3000);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-background/80 p-4 backdrop-blur-sm overflow-y-auto"
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="card-surface relative w-full max-w-xl my-8 p-6 sm:p-8 bg-card max-h-[90vh] overflow-y-auto scrollbar-thin"
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-secondary hover:bg-muted text-foreground transition"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {sent ? (
          <div className="py-12 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/20 text-4xl text-primary animate-bounce">
              ✓
            </div>
            <h3 className="mt-6 text-3xl font-black text-foreground">Thank You!</h3>
            <p className="mt-3 text-muted-foreground text-lg">
              We will contact you within 12 hours.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl sm:text-3xl font-black text-foreground">Apply for a Store</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about you and we&apos;ll match you with the right service.
            </p>

            <form onSubmit={submit} className="mt-6 space-y-5 text-left">
              {/* Personal Details */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                    Full Name *
                  </label>
                  <input
                    placeholder="John Doe"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary text-foreground transition"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary text-foreground transition"
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                    Phone / WhatsApp *
                  </label>
                  <input
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary text-foreground transition"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                    City *
                  </label>
                  <input
                    placeholder="New York"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary text-foreground transition"
                  />
                  {errors.city && <p className="mt-1 text-xs text-destructive">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                    Country *
                  </label>
                  <input
                    placeholder="United States"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary text-foreground transition"
                  />
                  {errors.country && (
                    <p className="mt-1 text-xs text-destructive">{errors.country}</p>
                  )}
                </div>
              </div>

              {/* Existing Accounts */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                  Existing Accounts (Select all that apply)
                </label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Amazon Seller Account",
                    "Walmart Seller Account",
                    "Facebook/Meta Shop",
                    "eBay Seller Account",
                  ].map((acc) => (
                    <label
                      key={acc}
                      className="flex items-center gap-3 rounded-xl border border-border bg-input/50 px-4 py-3 text-sm cursor-pointer select-none hover:bg-input transition text-foreground"
                    >
                      <input
                        type="checkbox"
                        checked={form.existingAccounts.includes(acc)}
                        onChange={() => toggleExistingAccount(acc)}
                        className="h-4 w-4 rounded border-border text-primary focus:ring-primary accent-primary"
                      />
                      <span>{acc}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Services Interested In */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                  Services Interested In
                </label>
                <div className="grid gap-2 sm:grid-cols-1">
                  {[
                    "Amazon Dropshipping Automation",
                    "Amazon FBA Automation",
                    "Walmart Dropshipping Automation",
                    "Facebook or Meta Shop Automation",
                    "eBay Dropshipping Automation",
                  ].map((srv) => (
                    <label
                      key={srv}
                      className="flex items-center gap-3 rounded-xl border border-border bg-input/50 px-4 py-3 text-sm cursor-pointer select-none hover:bg-input transition text-foreground"
                    >
                      <input
                        type="checkbox"
                        checked={form.servicesInterested.includes(srv)}
                        onChange={() => toggleServiceInterested(srv)}
                        className="h-4 w-4 rounded border-border text-primary focus:ring-primary accent-primary"
                      />
                      <span>{srv}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Credit Card Limit (Radio) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                  Credit Card Limit *
                </label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {["Under $5000", "$5000 - $20000", "$20000 - $50000", "Above $50000"].map(
                    (lim) => (
                      <label
                        key={lim}
                        className="flex items-center gap-3 rounded-xl border border-border bg-input/50 px-4 py-3 text-sm cursor-pointer select-none hover:bg-input transition text-foreground"
                      >
                        <input
                          type="radio"
                          name="creditLimit"
                          value={lim}
                          checked={form.creditLimit === lim}
                          onChange={() => setForm({ ...form, creditLimit: lim })}
                          className="h-4 w-4 border-border text-primary focus:ring-primary accent-primary"
                        />
                        <span>{lim}</span>
                      </label>
                    ),
                  )}
                </div>
                {errors.creditLimit && (
                  <p className="mt-1 text-xs text-destructive">{errors.creditLimit}</p>
                )}
              </div>

              {/* Traffic Source Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                  How did you hear about us?
                </label>
                <select
                  value={form.trafficSource}
                  onChange={(e) => setForm({ ...form, trafficSource: e.target.value })}
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary text-foreground transition"
                >
                  <option value="Search Engine (Google, Bing, etc.)">
                    Search Engine (Google, Bing, etc.)
                  </option>
                  <option value="Referral (from a friend)">Referral (from a friend)</option>
                  <option value="Social (Facebook, Instagram, LinkedIn)">
                    Social (Facebook, Instagram, LinkedIn)
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                  Message
                </label>
                <textarea
                  placeholder="Anything you'd like us to know…"
                  value={form.message}
                  rows={3}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary text-foreground transition"
                />
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-center">
                Submit Information
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
