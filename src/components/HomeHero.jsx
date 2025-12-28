// src/components/HomeHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import homePhoto from '../assets/homePhoto.jpg';

export default function HomeHero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-900 text-black">
      {/* 背景视频/图片层 */}
      <div className="absolute inset-0">
        <img
          src={homePhoto}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
        {/* <img src="/assets/bridgelux-hero.jpg" className="h-full w-full object-cover" alt="" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/20" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-4 pb-24 pt-24 lg:min-h-[72vh] lg:flex-row lg:items-end">
        {/* 左侧主标题 */}
        <Reveal className="max-w-2xl">
          <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-[0.75rem] uppercase tracking-[0.22em] text-sky-100">
            Global energy &amp; infrastructure
          </div>

          {/* 标题字号大幅提高 */}
          <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Bridging today&apos;s energy needs with{" "}
            <span className="text-sky-200">
              tomorrow&apos;s global solutions.
            </span>
          </h1>

          {/* 正文也稍微放大 */}
          <p className="mb-5 text-base text-slate-100/90">
            BridgeLux Global Holdings Ltd is a placeholder corporate website
            inspired by large-scale energy companies. Replace this copy with
            your real strategy, portfolio, and commitments to customers and
            communities.
          </p>

          <div className="mb-5 flex flex-wrap gap-2 text-[0.8rem]">
            <span className="rounded-full bg-white/10 px-3.5 py-1.5">
              Integrated energy &amp; infrastructure
            </span>
            <span className="rounded-full bg-white/10 px-3.5 py-1.5">
              Global presence
            </span>
            <span className="rounded-full bg-white/10 px-3.5 py-1.5">
              Future-focused portfolio
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/businesses"
              className="inline-flex items-center rounded-full bg-sky-500 px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-sky-500/40 hover:bg-sky-600"
            >
              Explore our businesses
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-[0.78rem] uppercase tracking-[0.2em] text-sky-100 hover:bg-white/20"
            >
              Company overview (placeholder)
            </Link>
          </div>

          <p className="mt-5 max-w-md text-[0.8rem] text-slate-100/80">
            All metrics and statements on this demo site are generic
            placeholders. Replace them with verified disclosures before any
            real-world use.
          </p>
        </Reveal>

        {/* 右侧 info 卡片 */}
        <Reveal delay={220} className="mt-10 w-full max-w-sm lg:ml-auto lg:mt-0">
          <div className="rounded-2xl bg-white/10 px-5 py-5 backdrop-blur-md shadow-lg">
            <div className="mb-2 text-[0.8rem] uppercase tracking-[0.2em] text-sky-100">
              Corporate overview video
            </div>
            <p className="text-sm text-slate-100/90">
              Placeholder footage representing key operations and projects
              across upstream, midstream, downstream, and new energies.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-[0.8rem] text-slate-100/90">
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-sky-100/80">
                  Regions
                </div>
                <div className="text-sm font-semibold text-white">Global</div>
              </div>
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-sky-100/80">
                  Portfolio
                </div>
                <div className="text-sm font-semibold text-white">
                  Diversified
                </div>
              </div>
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-sky-100/80">
                  Status
                </div>
                <div className="text-sm font-semibold text-white">
                  Placeholder
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
