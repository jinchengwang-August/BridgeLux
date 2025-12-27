// src/components/SearchOverlay.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SEARCH_ITEMS = [
  {
    title: "Company overview",
    category: "About",
    to: "/about",
    body: "Placeholder summary of BridgeLux Global Holdings Ltd.",
  },
  {
    title: "Operating segments",
    category: "Businesses",
    to: "/businesses",
    body: "Upstream, midstream, downstream, and new energies.",
  },
  {
    title: "Sustainability priorities",
    category: "Sustainability",
    to: "/sustainability",
    body: "Climate, safety, communities, governance.",
  },
  {
    title: "Newsroom & updates",
    category: "News",
    to: "/news",
    body: "Press releases, statements, and features.",
  },
  {
    title: "Careers at BridgeLux",
    category: "Careers",
    to: "/careers",
    body: "Opportunities across engineering, operations, and corporate roles.",
  },
  {
    title: "Contact & inquiries",
    category: "Contact",
    to: "/contact",
    body: "General, media, and investor contact points.",
  },
];

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  // Esc 关闭
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SEARCH_ITEMS;
    return SEARCH_ITEMS.filter((item) =>
      (item.title + item.category + item.body).toLowerCase().includes(q)
    );
  }, [query]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      navigate(results[0].to);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/70 px-4 pt-24 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <h2 className="text-sm font-semibold text-gray-900">
            Search BridgeLux
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            Esc to close
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-3 border-b border-gray-100 px-4 py-3"
        >
          <span className="text-lg text-gray-400">🔍</span>
          <input
            autoFocus
            type="text"
            placeholder="Search pages, topics, and placeholders…"
            className="flex-1 border-none text-sm text-gray-900 outline-none placeholder:text-gray-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white hover:bg-sky-700"
          >
            Go
          </button>
        </form>

        <div className="max-h-72 overflow-y-auto px-4 py-3 text-sm">
          {results.length === 0 ? (
            <p className="text-xs text-gray-500">
              No matches. Try a different keyword.
            </p>
          ) : (
            <ul className="space-y-2">
              {results.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={onClose}
                    className="block rounded-lg px-2 py-2 hover:bg-gray-50"
                  >
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-500">
                      {item.category}
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-600">{item.body}</div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
