import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Sustainability() {
  return (
    <section className="border-b border-slate-800 bg-slate-950/95">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          eyebrow="Sustainability"
          title="Environment, safety & communities (placeholder)"
          description="Use this section for climate strategy, safety performance, social investment, and governance disclosures."
        />
        <div className="grid gap-4 md:grid-cols-[1.7fr,1.3fr]">
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              This page is designed as a flexible space for you to bring
              together your sustainability narrative and key metrics. You can
              mirror the structure of your annual sustainability report, or
              create a more data-driven dashboard-style experience.
            </p>
            <p>
              Consider grouping content by climate, safety, people, communities,
              and governance. Each section can include charts, tables, and
              downloadable reports.
            </p>
          </div>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="rounded-xl border border-cyan-500/50 bg-slate-950/90 p-3">
              <div className="text-[0.7rem] uppercase tracking-[0.2em] text-cyan-100/90">
                Example priority
              </div>
              <div className="mt-1 font-semibold text-slate-50">
                Lower-carbon energy and efficiency
              </div>
              <p className="mt-1 text-slate-400">
                Replace with your real priorities, targets, and progress
                updates. Link each area to deeper content or data where
                appropriate.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3">
              <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                Reporting
              </div>
              <p className="mt-1 text-slate-400">
                Add links to your sustainability report, TCFD index, ESG data
                center, or frameworks that you align with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
