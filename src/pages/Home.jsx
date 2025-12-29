import React from "react";
import { Link } from "react-router-dom";
import HomeHero from "../components/HomeHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx";
import ScrollMarqueeSection from "../components/ScrollMarqueeSection.jsx";
import TypingHeadline from "../components/TypingHeadline.jsx";
import FancyVerticalGallery from "../components/FancyVerticalGallery.jsx";
import About from "../pages/About";
import technology1 from "../assets/technology1.jpg";
import technology2 from "../assets/technology2.jpg";
import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/partner2.jpg";
import partner3 from "../assets/partner3.jpg";
import partner4 from "../assets/partner4.jpg";

export default function Home() {
  return (
    <div>
      <HomeHero />

      <ScrollMarqueeSection />

      {/* core solutions */}
      <section id="businesses" className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <SectionHeader
            eyebrow="Our portfolio"
            title="Core Solutions"
            description="High-level placeholder overview of core business segments. Replace with actual descriptions and regional detail."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                label: "Segment 01",
                title: "WTE Slag Resource Recovery",
                description: "We provide comprehensive solutions for the treatment and resource utilization of waste-to-energy incineration bottom ash. Through multi-stage crushing, screening, separation, and purification processes, incineration slag is transformed into clean aggregates and reusable materials, while ferrous and non-ferrous metals are efficiently recovered."
              },
              {
                label: "Segment 02",
                title: "Industrial Solid Waste Utilization",
                description: "In addition to municipal incineration slag, we offer tailored treatment solutions for industrial solid waste such as biomass slag and coal-derived residues. Process configurations are adapted to material composition, moisture levels, and local environmental standards to ensure safe handling and effective reuse."
              },
              {
                label: "Segment 03",
                title: "Environmental Control Systems",
                description: "All processing lines are designed with fully enclosed material handling, odor control, dust suppression, and closed-loop water circulation systems. These measures ensure zero wastewater discharge, minimize fugitive emissions, and prevent secondary environmental impacts during both construction and operation phases."
              },
              {
                label: "Segment 04",
                title: "Resource-Based End Products",
                description: "Recovered materials are processed into stable, quality-controlled products suitable for use in green building materials, road base layers, municipal engineering applications, and other infrastructure projects, supporting local circular economy objectives."
              }
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
                    {seg.description}
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
            title="Technology & Process"
            description="Reserve these image positions for key assets, regions, or projects across your portfolio."
          />
          <Reveal>
            <div className="grid gap-4 md:grid-cols-[1.6fr,1.4fr]">
              {/* 左侧：两大一小 */}
              <div className="grid gap-4">
                <div className="relative h-150 overflow-hidden rounded-2xl bg-slate-900 text-gray-200">
                  <img
                    src="/assets/technology1.jpg"
                    alt="place"
                    className="h-full w-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 pr-4">
                    <div className="text-[1.0rem] font-s text-justify backdrop-blur-md text-sky-100" >
                      Our technology framework is built around a modular, end-to-end processing system that covers pre-treatment, separation, purification, and product formation. Incineration slag first undergoes controlled aging and conditioning, followed by multi-level crushing and screening to achieve particle size differentiation.
Advanced physical separation techniques—including magnetic separation, eddy current separation, and gravity-based sorting—are applied to recover metals and remove impurities. Fine tailings are further purified to meet material reuse standards, while recycled aggregates are processed for consistent quality and performance.

                    </div>
                  </div>
                </div>


                <div className="grid gap-4 sm:grid-cols-2">

                  <div className="relative h-150 overflow-hidden rounded-2xl bg-slate-900 text-white shadow-md">
                    <img
                      src="/assets/technology2.jpg"
                      alt="Midstream placeholder"
                      className="h-full w-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-2 left-2 pr-4 text-[1.0rem] font-s text-justify backdrop-blur-md text-sky-100">
                      All facilities incorporate integrated environmental protection systems, including sealed conveyors, odor treatment units, and internal water recycling. Process designs are optimized for local conditions, such as high humidity, high organic content, or plateau climates, ensuring stable operation and compliance with applicable environmental regulations.
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
            text="Projects & References"
            className="text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl"
          />

          {/* 右侧：文字内容 */}
              <div className="flex flex-col gap-4 mt-8 mb-20">
                {/* 第一段 */}
                <p className="text-sm text-gray-700">
                  We have developed and operated multiple solid-waste resource recovery projects across different regions, serving as practical demonstrations of scalable and compliant WTE slag utilization.
                </p>

                {/* 第二段 */}
                <p className="text-sm text-gray-700">
                  In Vietnam, our projects in Ho Chi Minh City support major municipal waste-to-energy facilities by providing dedicated slag resource recovery lines, enabling the transition from simple disposal to systematic reuse. These projects play a key role in advancing integrated “incineration plus resource recovery” models in Southeast Asia.
                </p>

                {/* 第三段 */}
                <p className="text-sm text-gray-700">
                  In Mainland China, we have participated in and operated WTE slag treatment and industrial solid-waste utilization projects across provinces including Shandong, Guizhou, Jilin, Hebei, Guangxi, and Henan. These facilities serve both urban and regional waste streams, with processing capacities adapted to local demand and policy frameworks.
                </p>

                {/* 第四段 */}
                <p className="text-sm text-gray-700">
                  Collectively, our project portfolio reflects our ability to deliver reliable, regulation-aligned solutions under diverse environmental and operational conditions, and to support municipalities and industrial partners in building modern, sustainable solid-waste management systems.
                </p>
              </div>
        </div>
      </section>

{/* 伙伴 */}
      <section id="partner" className="bg-white2">
        <div className="mx-auto max-w-6xl px-4 py-10">
          
          <Reveal>

          <div className="relevant bottom-3 mb-10 left-3 w-full z-10">
            <div className="text-[1.5rem] font-s text-justify backdrop-blur-md text-black">
    Partners 
            </div>
          </div>


          <div className="relevant bottom-3 left-3 w-full z-10">
            <div className="text-[1.0rem] font-s mb-40 text-justify text-black">
    BridgeLux partners with leading regional players including Vietstar, BCG Energy, SUS Environment, and other global energy innovators, building circular systems that convert waste into valuable materials for a low-carbon future.
            </div>
          </div>

          <div className="absolute" style={{ top: '150px', left: '10px' }}>
            <img 
             src="/assets/partner1.jpg" 
             alt="Left Bottom Image" 
             className="w-32 h-32" />
          </div>

          <div className="absolute" style={{ top: '150px', left: '250px' }}>
            <img 
             src="/assets/partner2.jpg" 
             alt="Left Bottom Image" 
             className="w-32 h-32" />
          </div>

          <div className="absolute" style={{ top: '150px', left: '490px' }}>
            <img 
             src="/assets/partner3.jpg" 
             alt="Left Bottom Image" 
             className="w-60 h-32" />
          </div>

          <div className="absolute" style={{ top: '150px', left: '840px' }}>
            <img 
             src="/assets/partner4.jpg" 
             alt="Left Bottom Image" 
             className="w-60 h-32" />
          </div>

          </Reveal>
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
