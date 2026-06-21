import type { Metadata } from "next";

import { FAQPage } from "@/components/pages/faq-page";

export const metadata: Metadata = {
  title: "FAQ — Ecom Solutions",
  description: "Frequently asked questions about e-commerce dropshipping and FBA store automation.",
};

export default function Page() {
  return <FAQPage />;
}
