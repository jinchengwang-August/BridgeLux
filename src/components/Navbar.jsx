import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/businesses", label: "Businesses" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/news", label: "News" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ onSearchClick }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        solid
          ? "bg-white shadow-sm border-b border-gray-200"
          : "bg-white/90 border-b border-gray-200/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-md shadow-sky-500/40">
            <span className="text-xs font-semibold tracking-wide">B</span>
          </div>
          <div className="leading-tight">
            <div className="text-[0.62rem] uppercase tracking-[0.26em] text-sky-700">
              BridgeLux
            </div>
            <div className="text-[0.82rem] font-semibold text-gray-900">
              Global Holdings Ltd
            </div>
          </div>
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden items-center gap-5 text-[0.82rem] md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "pb-0.5 border-b-2 border-transparent transition-colors",
                  isActive
                    ? "border-sky-600 text-sky-700 font-semibold"
                    : "text-gray-700 hover:text-sky-700 hover:border-sky-400",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* 搜索框样式的按钮 */}
          {onSearchClick && (
            <button
              type="button"
              onClick={onSearchClick}
              className="flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-3 py-1.5 text-[0.75rem] text-gray-500 hover:border-sky-400 hover:bg-white"
            >
              <span className="text-xs">🔍</span>
              <span>Search</span>
            </button>
          )}

          <Link
            to="/contact"
            className="ml-1 inline-flex items-center rounded-full border border-sky-600 bg-sky-600 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white hover:bg-sky-700"
          >
            Get in touch
          </Link>
        </nav>

        {/* 手机端按钮 */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="relative block h-[1.5px] w-4 bg-gray-800">
            <span className="absolute -top-[5px] block h-[1.5px] w-4 bg-gray-800" />
            <span className="absolute top-[5px] block h-[1.5px] w-4 bg-gray-800" />
          </span>
        </button>
      </div>

      {/* 手机端菜单 */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "py-2 border-b border-gray-100 last:border-b-0",
                    isActive
                      ? "text-sky-700 font-semibold"
                      : "text-gray-700 hover:text-sky-700",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            {onSearchClick && (
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onSearchClick();
                }}
                className="mt-2 flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-3 py-2 text-[0.8rem] text-gray-700"
              >
                <span className="text-xs">🔍</span>
                <span>Search site</span>
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
