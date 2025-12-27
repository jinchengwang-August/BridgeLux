import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';

export default function News() {
  const items = [
    { type: 'Press release', title: 'Sample announcement headline', date: 'Month DD, 20XX' },
    { type: 'Statement', title: 'Sample company statement title', date: 'Month DD, 20XX' },
    { type: 'Feature', title: 'Sample feature story about people or projects', date: 'Month DD, 20XX' },
  ];

  return (
    <section className="border-b border-slate-800 bg-slate-950/95">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          eyebrow="News"
          title="Newsroom & insights (placeholder)"
          description="Replace these sample entries with your real press releases, statements, and feature articles."
        />
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-4 shadow-md shadow-slate-950/80">
          {items.map((item, idx) => (
            <article
              key={idx}
              className="border-b border-slate-800 py-3 last:border-b-0"
            >
              <div className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
                {item.type} · Placeholder
              </div>
              <h3 className="mt-1 text-sm font-medium text-slate-50">
                {item.title}
              </h3>
              <div className="mt-1 text-[0.7rem] text-slate-400">
                {item.date} — Replace this summary with real context around the
                announcement.
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
