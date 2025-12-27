import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} BridgeLux Global Holdings Ltd. All rights
          reserved. Placeholder corporate website template.
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/legal" className="hover:text-slate-100">
            Legal notice
          </Link>
          <Link to="/privacy" className="hover:text-slate-100">
            Privacy
          </Link>
          <Link to="/cookies" className="hover:text-slate-100">
            Cookies
          </Link>
          <Link to="/contact" className="hover:text-slate-100">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
