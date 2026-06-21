"use client";

import React, { useRef, useEffect, useState } from "react";

function capitalizeWords(str: string): string {
  return str
    .split(" ")
    .map((word) => {
      if (!word) return "";
      return word
        .split("-")
        .map((subWord) => subWord.charAt(0).toUpperCase() + subWord.slice(1))
        .join("-");
    })
    .join(" ");
}

export function ScrollRevealText({
  text,
  className,
  highlightText,
  highlightClass = "text-primary",
}: {
  text: string;
  className?: string;
  highlightText?: string;
  highlightClass?: string;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Calculate what the viewport-relative top of the element would be at scroll position 0
      const viewportTopAtScrollZero = rect.top + scrollY;

      let start = windowHeight * 0.85;
      let end = windowHeight * 0.3;

      if (viewportTopAtScrollZero < windowHeight * 0.85) {
        // Element is above the fold on initial load.
        // We start revealing at its initial position (scroll 0) and fully reveal it over 180px of scroll.
        start = viewportTopAtScrollZero;
        end = viewportTopAtScrollZero - 180;
      }

      const total = start - end;
      const current = start - rect.top;

      const p = Math.min(1, Math.max(0, current / total));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run layout-dependent calculation after a short timeout
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const capitalizedText = capitalizeWords(text);
  const capitalizedHighlight = highlightText ? capitalizeWords(highlightText) : undefined;

  const words = capitalizedText.split(" ");
  let globalCharIndex = 0;
  const totalChars = capitalizedText.length;

  const highlightStart = capitalizedHighlight ? capitalizedText.indexOf(capitalizedHighlight) : -1;
  const highlightEnd =
    highlightStart !== -1 && capitalizedHighlight
      ? highlightStart + capitalizedHighlight.length
      : -1;

  return (
    <span ref={containerRef} className={className}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split("");

        return (
          <React.Fragment key={wordIdx}>
            <span className="inline-block whitespace-nowrap">
              {wordChars.map((char) => {
                const charIdx = globalCharIndex++;
                const charStart = charIdx / totalChars;
                const charEnd = (charIdx + 1) / totalChars;
                const charProgress = Math.min(
                  1,
                  Math.max(0, (progress - charStart) / (charEnd - charStart)),
                );
                const isHighlighted =
                  highlightStart !== -1 && charIdx >= highlightStart && charIdx < highlightEnd;

                return (
                  <span key={charIdx} className="relative inline-block">
                    <span className="text-[#5A5C63] transition-colors duration-200">{char}</span>
                    <span
                      className={`absolute top-0 left-0 overflow-hidden select-none pointer-events-none transition-all duration-75 ${
                        isHighlighted ? highlightClass : "text-white"
                      }`}
                      style={{
                        width: `${charProgress * 100}%`,
                      }}
                    >
                      {char}
                    </span>
                  </span>
                );
              })}
            </span>
            {wordIdx < words.length - 1 && (
              <span className="inline-block w-[0.27em] select-none align-middle">
                {(() => {
                  const spaceIdx = globalCharIndex++;
                  const spaceStart = spaceIdx / totalChars;
                  const spaceEnd = (spaceIdx + 1) / totalChars;
                  const spaceProgress = Math.min(
                    1,
                    Math.max(0, (progress - spaceStart) / (spaceEnd - spaceStart)),
                  );
                  const isHighlightedSpace =
                    highlightStart !== -1 && spaceIdx >= highlightStart && spaceIdx < highlightEnd;
                  return (
                    <span className="relative inline-block w-full">
                      <span className="text-[#5A5C63]">&nbsp;</span>
                      <span
                        className={`absolute top-0 left-0 overflow-hidden pointer-events-none transition-all duration-75 ${
                          isHighlightedSpace ? highlightClass : "text-white"
                        }`}
                        style={{
                          width: `${spaceProgress * 100}%`,
                        }}
                      >
                        &nbsp;
                      </span>
                    </span>
                  );
                })()}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </span>
  );
}
