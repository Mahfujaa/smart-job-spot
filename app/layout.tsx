import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer, Header } from "@/components/site-chrome";

import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Aigent — AI Recruitment Platform",
    template: "%s",
  },
  description:
    "Aigent empowers your recruiting flow with intelligent automation, smarter matching, and real-time insight.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
