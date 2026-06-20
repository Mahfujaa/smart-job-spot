import type { Metadata } from "next";

import { FAQPage } from "@/components/pages/faq-page";

export const metadata: Metadata = {
  title: "FAQ — Aigent",
  description: "Answers to the questions teams ask before adopting Aigent.",
};

export default function Page() {
  return <FAQPage />;
}
