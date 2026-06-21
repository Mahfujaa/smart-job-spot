import type { Metadata } from "next";

import { PricingPage } from "@/components/pages/pricing-page";

export const metadata: Metadata = {
  title: "Pricing — Ecom Solutions",
  description: "Clear setup fees and performance-aligned profit splits.",
};

export default function Page() {
  return <PricingPage />;
}
