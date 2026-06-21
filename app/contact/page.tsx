import type { Metadata } from "next";

import { ContactPage } from "@/components/pages/contact-page";

export const metadata: Metadata = {
  title: "Contact — Ecom Solutions",
  description: "Apply for store management or reach out to our in-house team in Dhaka, Bangladesh.",
};

export default function Page() {
  return <ContactPage />;
}
