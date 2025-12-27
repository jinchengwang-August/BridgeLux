// src/components/VerticalProgressNav.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "what-we-do", label: "What we do" },
  { id: "businesses", label: "Businesses" },
  { id: "operations", label: "Operations" },
  { id: "vision", label: "Vision" },
  { id: "sustainability", label: "Sustainability" },
  { id: "news", label: "News" },
];

export default function VerticalProgressNav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState("hero");

  // 监听滚动进度 —— Hook 始终声明；不在首页时直接 return
  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(Math.max(p, 0), 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  // 观察区块，决定哪个圆点高亮 —— 同理
  useEffect(() => {
    if (!isHome) return;

    const observers = [];
    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(sec.id);
        },
        { threshold: 0.3, rootMargin: "-20% 0px -50% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // 这里再统一返回 null；上面的 Hook 始终按相同顺序调用过了 ✅
  if (!isHome) return null;

  return (
    <div className="fixed left-6 top-28 z-40 hidden lg:flex flex-col items-center">
      <div className="relative h-72 w-[6px] rounded-full bg-gray-200">
        {/* 从上往下增长 */}
        <div
          className="absolute top-0 w-full rounded-full bg-sky-500"
          style={{ height: `${progress * 100}%` }}
        />
        {/* 节点 + 左侧提示 */}
        <div className="absolute inset-y-1 left-1/2 flex -translate-x-1/2 flex-col justify-between">
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => handleClick(sec.id)}
              className="group relative flex -translate-x-[1px] items-center justify-center"
            >
              <span
                className={`h-3.5 w-3.5 rounded-full border-2 transition ${
                  activeId === sec.id
                    ? "border-sky-500 bg-sky-500"
                    : "border-gray-400 bg-white group-hover:border-sky-400"
                }`}
              />
              <span className="pointer-events-none absolute left-5 rounded-full bg-slate-900/90 px-2 py-1 text-[0.65rem] text-slate-50 opacity-0 shadow-md shadow-slate-900/40 transition group-hover:opacity-100">
                {sec.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
