// src/components/SectionHeader.jsx
import React from "react";
import Reveal from "./Reveal.jsx";

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <Reveal>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {eyebrow && (
            <div className="text-[0.8rem] uppercase tracking-[0.24em] text-sky-700">
              {eyebrow}
            </div>
          )}
          {/* 板块标题：再大一档 */}
          <h2 className="mt-1 text-2xl font-semibold text-gray-900 sm:text-3xl md:text-[2rem]">
            {title}
          </h2>
        </div>
        {description && (
          <p className="max-w-md text-sm text-gray-600 sm:text-[0.95rem]">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
