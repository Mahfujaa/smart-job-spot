import type { Metadata } from "next";

import { ServicesPage } from "@/components/pages/services-page";

export const metadata: Metadata = {
  title: "Services — Ecom Solutions",
  description: "Six battle-tested service lines across Amazon, Walmart, eBay & Facebook shops.",
};

export default function Page() {
  return <ServicesPage />;
}
