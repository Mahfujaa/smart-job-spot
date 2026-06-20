import type { Metadata } from "next";

import { BlogPage } from "@/components/pages/blog-page";

export const metadata: Metadata = {
  title: "Blog — Aigent",
  description: "Notes on hiring, AI, and the future of talent operations.",
};

export default function Page() {
  return <BlogPage />;
}
