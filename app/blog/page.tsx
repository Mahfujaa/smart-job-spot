import type { Metadata } from "next";

import { BlogPage } from "@/components/pages/blog-page";

export const metadata: Metadata = {
  title: "Blog — Ecom Solutions",
  description:
    "Insights, trends, and compliance strategies for e-commerce automation and store ownership.",
};

export default function Page() {
  return <BlogPage />;
}
