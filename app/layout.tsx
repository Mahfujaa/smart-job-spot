import type { Metadata } from "next";

import { Footer, Header } from "@/components/site-chrome";
import { ApplyModal } from "@/components/apply-modal";

import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ecom Solutions — Full-Service Amazon & E-commerce Store Management",
    template: "%s | Ecom Solutions",
  },
  description:
    "We build, operate, and scale your Amazon, Walmart, eBay & Facebook stores — hands-free passive income for investors.",
  authors: [{ name: "Ecom Solutions" }],
  openGraph: {
    title: "Ecom Solutions — Hands-Free E-commerce Store Management",
    description:
      "Full-service Amazon, Walmart, eBay & Facebook store automation. We do the heavy lifting so you can do the easy living.",
    type: "website",
    siteName: "Ecom Solutions",
  },
  twitter: {
    card: "summary_large_image",
    site: "@EcomSolutions",
    title: "Ecom Solutions — Hands-Free E-commerce Store Management",
    description:
      "Full-service Amazon, Walmart, eBay & Facebook store automation. We do the heavy lifting so you can do the easy living.",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ApplyModal />
        </Providers>
      </body>
    </html>
  );
}
