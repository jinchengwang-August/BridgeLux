// src/components/TypingHeadline.jsx
import React, { useEffect, useRef, useState } from "react";

export default function TypingHeadline({
  text,
  speed = 45,
  className = "",
}) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          // 离开视口，下次再进入重新打字
          setDisplay("");
          setIndex(0);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (index >= text.length) return;
    const id = setTimeout(() => {
      setDisplay((prev) => prev + text[index]);
      setIndex((i) => i + 1);
    }, speed);
    return () => clearTimeout(id);
  }, [index, inView, text, speed]);

  return (
    <h3 ref={ref} className={className}>
      {display}
      <span className="ml-[2px] inline-block h-5 align-middle border-r-2 border-sky-500 animate-pulse" />
    </h3>
  );
}
