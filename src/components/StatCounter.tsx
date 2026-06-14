"use client";

import { useEffect, useRef, useState } from "react";

type StatProps = {
  value: string;
  label: string;
};

export default function StatCounter({ value, label }: StatProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Extract numeric portion and suffix (e.g. "14000+" -> 14000, "+")
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center px-4">
      <p className="font-data text-4xl sm:text-5xl font-bold text-terracotta">
        {count.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="mt-2 text-sm sm:text-base font-medium text-pine/70 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}
