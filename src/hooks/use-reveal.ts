import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const observeElements = () => {
      const els = document.querySelectorAll(".reveal:not(.in)");
      els.forEach((el) => io.observe(el));
    };

    // Initial observation
    observeElements();

    // Observe DOM changes to catch dynamically inserted or hydrated elements
    const observer = new MutationObserver(() => {
      observeElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      io.disconnect();
      observer.disconnect();
    };
  }, []);
}
