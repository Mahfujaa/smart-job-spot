import type { Metadata } from "next";

import { HomePage } from "@/components/pages/home-page";

export const metadata: Metadata = {
  title: "Ecom Solutions — Full-Service Amazon & E-commerce Store Management",
  description:
    "We build, operate, and scale your Amazon, Walmart, eBay & Facebook stores — hands-free passive income for investors.",
};

export default function Page() {
  return <HomePage />;
}
