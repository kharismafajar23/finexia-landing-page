"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "hero",
  "testimoni",
  "keunggulan",
  "use-case",
  "insight",
  "faq",
  "order",
];

export function useActiveSection() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 80;
      let closest = "hero";
      let closestDist = Infinity;

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - headerHeight);
        if (dist < closestDist) {
          closestDist = dist;
          closest = id;
        }
      }

      setActive((prev) => (prev !== closest ? closest : prev));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
}
