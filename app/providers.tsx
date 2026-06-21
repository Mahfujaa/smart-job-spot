"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { ApplyModalProvider } from "@/hooks/use-apply-modal";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ApplyModalProvider>{children}</ApplyModalProvider>
    </QueryClientProvider>
  );
}
