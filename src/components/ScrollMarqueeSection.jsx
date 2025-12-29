// src/components/ScrollMarqueeSection.jsx
import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal.jsx";

export default function ScrollMarqueeSection() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0); // 0~1

  useEffect(() => {
    const handle = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      const total = rect.height + vh;
      const passed = vh - rect.top;
      const p = Math.min(Math.max(passed / total, 0), 1);
      setProgress(p);
    };
    handle();
    window.addEventListener("scroll", handle);
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  const offset = (base) => `translateX(${(1 - progress) * base}%)`;
  const offsetRev = (base) => `translateX(${(1 - progress) * -base}%)`;
  const opacity = 0.2 + progress * 0.8;

  return (
    <section
      id="what-we-do"
      ref={ref}
      className="relative overflow-hidden bg-sky-600 py-16 text-sky-50"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sky-600 via-sky-600/95 to-sky-700" />
      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-sky-100/90">
            what we do
          </p>
        </Reveal>

        {/* 这里标题更接近截图里的感觉 */}
        <div className="space-y-3 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          <div
            className="whitespace-nowrap"
            style={{ transform: offset(50), opacity }}
          >
            energy that fuels
          </div>
          <div
            className="whitespace-nowrap"
            style={{ transform: offsetRev(50), opacity }}
          >
            the world
          </div>
        </div>

        <p className="mt-6 max-w-xl text-sm text-sky-50/90 sm:text-base">
          By integrating proven engineering systems with circular-economy principles, we convert incineration residues and industrial solid waste into reusable materials for infrastructure and construction.
        </p>

        <div className="mt-6">
          <button className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-50 hover:bg-sky-50/20">
            → see our solutions
          </button>
        </div>
      </div>
    </section>
  );
}
