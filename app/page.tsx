import type { Metadata } from "next";

import { HomePage } from "@/components/pages/home-page";

export const metadata: Metadata = {
  title: "Aigent — Empower your recruiting flow",
  description:
    "AI-powered recruitment that automates outreach, scores candidates, and accelerates hiring.",
};

export default function Page() {
  return <HomePage />;
}
