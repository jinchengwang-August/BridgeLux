// src/components/ImageCarousel.jsx
import React, { useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";

const slides = [
  {
    src: "/assets/gallery-01.jpg",
    title: "Offshore platform (placeholder)",
    desc: "Use this space for a key offshore or upstream project image.",
  },
  {
    src: "/assets/gallery-02.jpg",
    title: "Refining & downstream operations",
    desc: "Feature refining complexes, terminals, or integrated plants.",
  },
  {
    src: "/assets/gallery-03.jpg",
    title: "New energies & future technologies",
    desc: "Highlight low-carbon, renewables, or innovation hubs.",
  },
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  // 自动轮播
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i) => setIndex(i);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white shadow-lg">
        <div className="relative h-80 sm:h-96">
          <div
            className="flex h-full w-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.title}
                className="relative h-full w-full flex-shrink-0"
              >
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent" />
              </div>
            ))}
          </div>

          {/* 左右切换按钮 */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur hover:bg-black/50"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur hover:bg-black/50"
          >
            ›
          </button>

          {/* 底部文字说明 */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-4">
            <div className="max-w-md rounded-lg bg-black/35 p-3 backdrop-blur">
              <div className="text-[0.7rem] uppercase tracking-[0.16em] text-sky-100">
                Project gallery · Placeholder
              </div>
              <div className="text-sm font-semibold text-white">
                {slides[index].title}
              </div>
              <div className="mt-1 text-xs text-slate-100/90">
                {slides[index].desc}
              </div>
            </div>
          </div>
        </div>

        {/* 小圆点指示器 */}
        <div className="flex justify-center gap-2 bg-slate-900/95 px-4 py-2">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-sky-400" : "bg-slate-600 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
