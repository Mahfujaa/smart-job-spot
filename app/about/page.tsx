import type { Metadata } from "next";

import { AboutPage } from "@/components/pages/about-page";

export const metadata: Metadata = {
  title: "About — Aigent",
  description:
    "Aigent is on a mission to make recruiting feel less like guesswork and more like signal.",
};

export default function Page() {
  return <AboutPage />;
}
