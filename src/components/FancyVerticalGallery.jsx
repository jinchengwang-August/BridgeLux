// src/components/FancyVerticalGallery.jsx
import React from "react";
import Reveal from "./Reveal.jsx";

const GALLERIES = [
  {
    tag: "Upstream",
    title: "Exploration & production",
    cover: "/assets/stack-01-cover.jpg",
    pieces: [
      {
        src: "/assets/stack-01-a.jpg",
        className:
          "absolute top-10 left-8 h-28 w-24 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:-translate-x-6 group-hover:-translate-y-4 group-hover:-rotate-3",
      },
      {
        src: "/assets/stack-01-b.jpg",
        className:
          "absolute top-20 right-8 h-28 w-24 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-2 group-hover:rotate-2",
      },
      {
        src: "/assets/stack-01-c.jpg",
        className:
          "absolute bottom-10 left-1/2 h-28 w-28 -translate-x-1/2 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:translate-y-4 group-hover:rotate-3",
      },
    ],
  },
  {
    tag: "Infrastructure",
    title: "Pipelines & terminals",
    cover: "/assets/stack-02-cover.jpg",
    pieces: [
      {
        src: "/assets/stack-02-a.jpg",
        className:
          "absolute top-12 left-10 h-32 w-24 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:-translate-x-5 group-hover:-translate-y-4 group-hover:-rotate-6",
      },
      {
        src: "/assets/stack-02-b.jpg",
        className:
          "absolute bottom-10 right-10 h-32 w-24 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-3 group-hover:rotate-3",
      },
    ],
  },
  {
    tag: "New energies",
    title: "Future-oriented projects",
    cover: "/assets/stack-03-cover.jpg",
    pieces: [
      {
        src: "/assets/stack-03-a.jpg",
        className:
          "absolute top-8 left-6 h-24 w-24 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:-translate-x-6 group-hover:-translate-y-4 group-hover:-rotate-3",
      },
      {
        src: "/assets/stack-03-b.jpg",
        className:
          "absolute top-24 right-6 h-24 w-24 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:translate-x-5 group-hover:-translate-y-2 group-hover:rotate-2",
      },
      {
        src: "/assets/stack-03-c.jpg",
        className:
          "absolute bottom-10 left-1/2 h-24 w-28 -translate-x-1/2 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:translate-y-4 group-hover:-rotate-2",
      },
      {
        src: "/assets/stack-03-d.jpg",
        className:
          "absolute bottom-6 right-10 h-20 w-20 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-3 group-hover:rotate-6",
      },
    ],
  },
  {
    tag: "Downstream",
    title: "Retail & marketing",
    cover: "/assets/stack-04-cover.jpg",
    pieces: [
      {
        src: "/assets/stack-04-a.jpg",
        className:
          "absolute top-10 left-1/2 h-28 w-24 -translate-x-[55%] rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:-translate-x-10 group-hover:-translate-y-4 group-hover:-rotate-3",
      },
      {
        src: "/assets/stack-04-b.jpg",
        className:
          "absolute bottom-10 left-1/2 h-28 w-24 -translate-x-[45%] rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:translate-x-8 group-hover:translate-y-3 group-hover:rotate-3",
      },
    ],
  },
  {
    tag: "Digital",
    title: "Control rooms & data",
    cover: "/assets/stack-05-cover.jpg",
    pieces: [
      {
        src: "/assets/stack-05-a.jpg",
        className:
          "absolute top-10 left-10 h-24 w-24 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:-translate-x-6 group-hover:-translate-y-4 group-hover:-rotate-6",
      },
      {
        src: "/assets/stack-05-b.jpg",
        className:
          "absolute top-24 right-10 h-24 w-24 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-2 group-hover:rotate-3",
      },
      {
        src: "/assets/stack-05-c.jpg",
        className:
          "absolute bottom-8 left-1/2 h-24 w-28 -translate-x-1/2 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:translate-y-4 group-hover:rotate-2",
      },
    ],
  },
  {
    tag: "People",
    title: "Teams & communities",
    cover: "/assets/stack-06-cover.jpg",
    pieces: [
      {
        src: "/assets/stack-06-a.jpg",
        className:
          "absolute top-12 left-8 h-24 w-22 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:-translate-x-6 group-hover:-translate-y-6 group-hover:-rotate-6",
      },
      {
        src: "/assets/stack-06-b.jpg",
        className:
          "absolute top-20 right-6 h-24 w-24 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-4 group-hover:rotate-3",
      },
      {
        src: "/assets/stack-06-c.jpg",
        className:
          "absolute bottom-8 left-14 h-24 w-24 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:-translate-x-4 group-hover:translate-y-3 group-hover:-rotate-2",
      },
      {
        src: "/assets/stack-06-d.jpg",
        className:
          "absolute bottom-6 right-10 h-20 w-20 rounded-xl overflow-hidden shadow-lg shadow-slate-900/40 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-3 group-hover:rotate-6",
      },
    ],
  },
];

export default function FancyVerticalGallery() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-10">
        <Reveal>
          <div className="mb-8">
            <div className="text-[0.8rem] uppercase tracking-[0.24em] text-sky-700">
              Visual portfolio
            </div>
            <h2 className="mt-1 text-2xl font-semibold text-gray-900 sm:text-3xl md:text-[2rem]">
              Vertical galleries for key themes
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600 sm:text-[0.95rem]">
              Hover over each panel to let the imagery break apart into smaller
              scenes. Move the cursor away and everything snaps back into a
              single, calm cover.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {GALLERIES.map((gallery) => (
            <Reveal key={gallery.title}>
              <article className="group relative h-80 overflow-visible rounded-3xl bg-slate-950 text-white shadow-xl">
                {/* 封面大图：默认显示，悬停时淡出 */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                  <img
                    src={gallery.cover}
                    alt={gallery.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
                </div>

                {/* 碎片：平时透明，悬停时显示并向四周散开 */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {gallery.pieces.map((piece) => (
                    <div key={piece.src} className={piece.className}>
                      <img
                        src={piece.src}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                    </div>
                  ))}
                </div>

                {/* 底部说明一直存在 */}
                <div className="absolute inset-x-0 bottom-0 flex justify-between rounded-b-3xl bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent px-4 pb-4 pt-10">
                  <div>
                    <div className="text-[0.7rem] uppercase tracking-[0.2em] text-sky-200">
                      {gallery.tag}
                    </div>
                    <div className="text-sm font-semibold sm:text-[0.95rem]">
                      {gallery.title}
                    </div>
                  </div>
                  <div className="self-end text-[0.7rem] text-sky-100/90">
                    Hover to explore
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
