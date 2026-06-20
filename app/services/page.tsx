import type { Metadata } from "next";

import { ServicesPage } from "@/components/pages/services-page";

export const metadata: Metadata = {
  title: "Services — Aigent",
  description:
    "Sourcing, screening, scoring, and outreach — all powered by Aigent's intelligent recruiting platform.",
};

export default function Page() {
  return <ServicesPage />;
}
