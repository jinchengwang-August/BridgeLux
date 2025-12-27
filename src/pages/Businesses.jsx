import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Businesses() {
  const segments = [
    {
      name: 'Upstream & resource development',
      body: 'Placeholder narrative for exploration and production activities. Replace with basin names, resource types, and project examples.',
    },
    {
      name: 'Midstream & infrastructure',
      body: 'Describe pipelines, terminals, storage, and logistics networks supporting secure energy delivery.',
    },
    {
      name: 'Downstream & marketing',
      body: 'Use this for refining, fuels, lubricants, and marketing activities across retail and commercial channels.',
    },
    {
      name: 'New energies & innovation',
      body: 'Placeholder for low-carbon solutions, renewables, carbon management, and technology ventures.',
    },
  ];

  return (
    <section className="border-b border-slate-800 bg-slate-950/95">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          eyebrow="Businesses"
          title="Operating segments & key activities"
          description="Summarize each business segment, then link to deeper pages for assets, projects, and regional details."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {segments.map((seg) => (
            <article
              key={seg.name}
              className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 shadow-md shadow-slate-950/80"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {seg.name}
              </h3>
              <p className="mt-2 text-xs text-slate-400">{seg.body}</p>
              <p className="mt-2 text-[0.7rem] text-slate-500">
                You can add project spotlights, asset maps, and financial
                metrics once you connect this page to your data sources.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
