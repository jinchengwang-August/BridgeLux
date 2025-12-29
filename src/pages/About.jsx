// src/pages/About.jsx
import React from "react";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

export default function About() {
  return (
    <div className="bg-white">
      {/* 顶部标题 */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <Reveal>
            <p className="text-[0.8rem] uppercase tracking-[0.24em] text-sky-700">
              About us
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
              BridgeLux Global Holdings Ltd
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-gray-700 sm:text-[0.95rem]">
              We are a professional solid-waste resource recovery enterprise dedicated to the treatment and reutilization of incineration slag and industrial solid waste. Our business spans project development, system design, facility construction, and long-term operation, with solutions tailored to regional waste characteristics and regulatory requirements.
Our work is grounded in the core principles of reduction, harmless treatment, and resource utilization. By applying proven engineering methods and continuously optimizing process systems, we convert solid-waste residues into environmentally compliant construction materials and industrial resources, while ensuring strict control of emissions, wastewater, and secondary pollution.
With operating projects in multiple provinces in China and in Vietnam, we have accumulated extensive experience in managing complex waste streams, including high-moisture and high-impurity materials common in urban and industrial environments. We position ourselves as a long-term infrastructure partner rather than a short-term service provider, focusing on stability, compliance, and sustainable value creation.

            </p>
          </Reveal>
        </div>
      </section>

      {/* 两个小图片卡片 */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionHeader
            eyebrow="Snapshots"
            title="Who we are in pictures"
            description="Use these slots to highlight your history, culture, and global reach."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {/* 卡片 1 */}
            <Reveal>
              <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/assets/about-01.jpg"
                    alt="About placeholder 01"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-[0.7rem] uppercase tracking-[0.2em] text-sky-100">
                      Our heritage
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      Reserve this image for an important moment in your
                      company&apos;s history.
                    </div>
                  </div>
                </div>
                <div className="px-4 py-4 text-sm text-gray-700">
                  Use this card to talk about your origin story, founding
                  region, or early milestones that shaped BridgeLux Global
                  Holdings Ltd.
                </div>
              </article>
            </Reveal>

            {/* 卡片 2 */}
            <Reveal delay={120}>
              <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/assets/about-02.jpg"
                    alt="About placeholder 02"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-[0.7rem] uppercase tracking-[0.2em] text-sky-100">
                      Our people & culture
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      Use this image to represent teams, collaboration, and the
                      culture you&apos;re building.
                    </div>
                  </div>
                </div>
                <div className="px-4 py-4 text-sm text-gray-700">
                  Describe your people, values, and the ways you work with
                  partners, communities, and stakeholders around the world.
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
