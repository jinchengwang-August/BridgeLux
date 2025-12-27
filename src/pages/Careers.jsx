import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Careers() {
  return (
    <section className="border-b border-slate-800 bg-slate-950/95">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          eyebrow="Careers"
          title="Grow your career at BridgeLux (placeholder)"
          description="Introduce your employee value proposition, development programs, and culture. Link to your applicant tracking system or careers portal."
        />
        <div className="grid gap-4 md:grid-cols-[1.7fr,1.3fr]">
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              Use this space to describe what it&apos;s like to build a career
              with your company across different regions and disciplines. You
              can highlight engineering roles, operations, corporate functions,
              and early-career opportunities.
            </p>
            <p>
              Consider adding real employee stories, videos, and links to open
              roles grouped by location or discipline once your job data is
              connected.
            </p>
          </div>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="rounded-xl border border-cyan-500/60 bg-slate-950/90 p-3">
              <div className="text-[0.7rem] uppercase tracking-[0.2em] text-cyan-100/90">
                Example focus areas
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  'Engineering roles',
                  'Operations & safety',
                  'Corporate functions',
                  'Early-career programs',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-cyan-500/10 px-3 py-1 text-[0.7rem] text-cyan-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-cyan-500/40 hover:brightness-105">
              Explore career opportunities (demo)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
