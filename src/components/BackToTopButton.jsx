// src/components/BackToTopButton.jsx
import React, { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY < 120);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg shadow-sky-500/40 transition-all hover:bg-sky-700 ${
        atTop ? "opacity-80" : "opacity-100"
      }`}
      aria-label="Back to top"
    >
      <span className="-mt-[2px] text-lg">↑</span>
    </button>
  );
}
 