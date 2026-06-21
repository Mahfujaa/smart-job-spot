import type { Metadata } from "next";

import { AboutPage } from "@/components/pages/about-page";

export const metadata: Metadata = {
  title: "About — Ecom Solutions",
  description: "Full-service e-commerce store automation and passive management for investors.",
};

export default function Page() {
  return <AboutPage />;
}
