import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Contact() {
  return (
    <section className="border-b border-slate-800 bg-slate-950/95">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          eyebrow="Contact"
          title="Get in touch with BridgeLux"
          description="Replace these contact details with your official channels for general inquiries, investors, media, and suppliers."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3 text-sm text-slate-300">
            <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3">
              <h3 className="text-sm font-semibold text-slate-50">
                General inquiries
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Email:{' '}
                <a
                  href="mailto:info@bridgelux-global.example"
                  className="text-cyan-300"
                >
                  info@bridgelux-global.example
                </a>
                <br />
                Phone: +0 (000) 000-0000
                <br />
                Address: Placeholder headquarters address, City, Country.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3 text-xs text-slate-300">
              <h3 className="text-sm font-semibold text-slate-50">
                Media & investors
              </h3>
              <p className="mt-1">
                Create dedicated email addresses, forms, or portals for media,
                investor, and supplier inquiries so stakeholders can reach the
                right teams efficiently.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3 text-xs text-slate-300">
            <h3 className="mb-2 text-sm font-semibold text-slate-50">
              Simple contact form (visual only)
            </h3>
            <p className="mb-3 text-[0.7rem] text-slate-400">
              This demo form is not connected to any backend. Wire it up to your
              preferred form service or API once you&apos;re ready.
            </p>
            <form className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 outline-none focus:border-cyan-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 outline-none focus:border-cyan-400"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 outline-none focus:border-cyan-400"
              />
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-cyan-500/40 hover:brightness-105"
              >
                Submit (inactive demo)
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}