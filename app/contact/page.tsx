import type { Metadata } from "next";

import { ContactPage } from "@/components/pages/contact-page";

export const metadata: Metadata = {
  title: "Contact — Aigent",
  description: "Get in touch with the Aigent team.",
};

export default function Page() {
  return <ContactPage />;
}
