import type { Metadata } from "next";

import { PricingPage } from "@/components/pages/pricing-page";

export const metadata: Metadata = {
  title: "Pricing — Aigent",
  description: "Simple, transparent pricing for teams of every size.",
};

export default function Page() {
  return <PricingPage />;
}
