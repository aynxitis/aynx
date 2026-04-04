"use client";

import { useEffect, useRef } from "react";
import { clsx } from "clsx";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = delay ? `${delay}ms` : "";
          el.classList.add("visible");
          observer.unobserve(el);
          el.addEventListener(
            "transitionend",
            () => { el.style.transitionDelay = ""; },
            { once: true }
          );
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={clsx("fade-up", className)}>
      {children}
    </div>
  );
}