import React from "react";
import { Link } from "react-router-dom";
import HomeHero from "../components/HomeHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx";
import ScrollMarqueeSection from "../components/ScrollMarqueeSection.jsx";
import TypingHeadline from "../components/TypingHeadline.jsx";
import FancyVerticalGallery from "../components/FancyVerticalGallery.jsx";

export default function Home() {
  return (
    <div>
      <HomeHero />

      <ScrollMarqueeSection />

      {/* 业务板块 */}
      <section id="businesses" className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <SectionHeader
            eyebrow="Our portfolio"
            title="Businesses & operating segments"
            description="High-level placeholder overview of core business segments. Replace with actual descriptions and regional detail."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                label: "Segment 01",
                title: "Upstream & resource development",
              },
              {
                label: "Segment 02",
                title: "Midstream & infrastructure",
              },
              {
                label: "Segment 03",
                title: "Downstream & new energies",
              },
            ].map((seg, idx) => (
              <Reveal key={seg.label} delay={idx * 90}>
                <article className="group h-full rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="text-[0.7rem] uppercase tracking-[0.2em] text-gray-500">
                    {seg.label}
                  </div>
                  <h3 className="mt-2 text-[0.95rem] font-semibold text-gray-900">
                    {seg.title}
                  </h3>
                  <p className="mt-2 text-[0.8rem] text-gray-600">
                    Placeholder copy describing this segment&apos;s focus,
                    assets, and strategic role. Swap this for real portfolio
                    information and KPIs.
                  </p>
                  <Link
                    to="/businesses"
                    className="mt-3 inline-flex items-center text-[0.7rem] text-sky-700 group-hover:text-sky-800"
                  >
                    Learn more
                    <span className="ml-1 text-base leading-none">›</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ops 图片拼贴区：更多图片位 */}
      <section id="operations" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <SectionHeader
            eyebrow="Operations"
            title="A global operational footprint"
            description="Reserve these image positions for key assets, regions, or projects across your portfolio."
          />
          <Reveal>
            <div className="grid gap-4 md:grid-cols-[1.6fr,1.4fr]">
              {/* 左侧：一大两小 */}
              <div className="grid gap-4">
                <div className="relative h-100 overflow-hidden rounded-2xl bg-slate-900 text-white shadow-md">
                  <img
                    src="/assets/ops-large-01.jpg"
                    alt="Large operations placeholder"
                    className="h-full w-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-sky-100">
                      Flagship asset · Placeholder
                    </div>
                    <div className="text-sm font-semibold">
                      Reserve this space for a key upstream or integrated asset.
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative h-56 overflow-hidden rounded-2xl bg-slate-800 text-white shadow-md">
                    <img
                      src="/assets/ops-small-01.jpg"
                      alt="Midstream placeholder"
                      className="h-full w-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-2 left-2 text-[0.7rem] text-slate-50">
                      Midstream & logistics (placeholder)
                    </div>
                  </div>
                  <div className="relative h-56 overflow-hidden rounded-2xl bg-slate-800 text-white shadow-md">
                    <img
                      src="/assets/ops-small-02.jpg"
                      alt="Downstream placeholder"
                      className="h-full w-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-2 left-2 text-[0.7rem] text-slate-50">
                      Downstream & marketing (placeholder)
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧：文字 + 小卡片 */}
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
                  <div className="text-[0.7rem] uppercase tracking-[0.18em] text-sky-700">
                    Placeholder narrative
                  </div>
                  <p className="mt-2 text-xs text-gray-700">
                    Use this column to describe your global operational
                    footprint, including key basins, refining centers, and
                    future-oriented projects. You can link each theme to a more
                    detailed page.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-500">
                      New energies
                    </div>
                    <p className="mt-1 text-xs text-gray-700">
                      Reserve this tile for low-carbon, renewables, or carbon
                      management projects.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-500">
                      Innovation
                    </div>
                    <p className="mt-1 text-xs text-gray-700">
                      Highlight technology partnerships, digital solutions, or
                      research centers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 创意竖版图片滑块区 */}
      <FancyVerticalGallery />

      {/* 打字机标题区 */}
      <section id="vision" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <TypingHeadline
            text="Design the future of global energy with BridgeLux."
            className="text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl"
          />

          <p className="mt-3 max-w-xl text-sm text-gray-600">
            Replace this paragraph with a key statement about your long-term
            vision, strategy, or promise to customers and communities.
          </p>
        </div>
      </section>

      {/* Sustainability 条 */}
      <section id="sustainability" className="bg-sky-50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Reveal>
            <div className="flex flex-col gap-4 rounded-xl border border-sky-100 bg-white px-4 py-4 shadow-sm md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl text-xs text-gray-800 sm:text-sm">
                <div className="mb-1 text-[0.7rem] uppercase tracking-[0.2em] text-sky-700">
                  Sustainability placeholder
                </div>
                <p>
                  Use this band to summarize your climate, safety, community,
                  and governance priorities. All numbers shown here are generic
                  and should be replaced with verified disclosures aligned with
                  your reporting frameworks.
                </p>
              </div>
              <div className="grid gap-4 text-[0.7rem] text-gray-800 sm:grid-cols-3">
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.2em] text-sky-700">
                    Emissions
                  </div>
                  <div className="text-sm font-semibold">
                    XX% reduction target
                  </div>
                  <div className="mt-0.5 text-gray-700">
                    Placeholder target by 20XX, aligned with your strategy.
                  </div>
                </div>
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.2em] text-sky-700">
                    Safety
                  </div>
                  <div className="text-sm font-semibold">Industry-leading</div>
                  <div className="mt-0.5 text-gray-700">
                    Replace with safety KPIs and commitments.
                  </div>
                </div>
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.2em] text-sky-700">
                    Communities
                  </div>
                  <div className="text-sm font-semibold">Global reach</div>
                  <div className="mt-0.5 text-gray-700">
                    Describe your social investment and partnerships.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 新闻 + 轮播 */}
      <section id="news" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <SectionHeader
            eyebrow="News & insights"
            title="Recent updates & visual stories"
            description="Swap these placeholder items with actual press releases, statements, feature stories, and project imagery."
          />
          <div className="grid gap-6 md:grid-cols-[2.1fr,1.9fr]">
            <Reveal>
              <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                {[
                  "BridgeLux announces sample strategic initiative headline",
                  "Company statement on global operations and long-term outlook",
                  "How BridgeLux explores future-oriented energy solutions",
                ].map((title, idx) => (
                  <article
                    key={idx}
                    className="border-b border-gray-100 py-3 last:border-b-0"
                  >
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-500">
                      {idx === 0
                        ? "Press release · Placeholder"
                        : idx === 1
                        ? "Statement · Placeholder"
                        : "Feature · Placeholder"}
                    </div>
                    <h3 className="mt-1 text-sm font-medium text-gray-900">
                      {title}
                    </h3>
                    <p className="mt-1 text-[0.7rem] text-gray-600">
                      Replace this paragraph with a short summary of the update,
                      including timing, geography, and key themes.
                    </p>
                  </article>
                ))}
                <div className="mt-2 text-right text-[0.7rem] text-sky-700">
                  <Link to="/news">View all news ›</Link>
                </div>
              </div>
            </Reveal>

            <ImageCarousel />
          </div>
        </div>
      </section>
    </div>
  );
}
