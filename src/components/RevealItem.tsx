"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealItemProps = {
  id?: string;
  className?: string;
  /** Seconds to wait after the item enters the viewport. */
  delay?: number;
  children: ReactNode;
};

/**
 * A list item that fades in out of a blur once, the moment it scrolls into view (a one-shot,
 * time-based animation — it does not follow the scroll position afterwards).
 * Items that are already on screen at load, and users with reduced motion, are left untouched.
 * The hidden state is applied from the effect, so without JS everything stays visible.
 */
export function RevealItem({ id, className, delay = 0, children }: RevealItemProps) {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.dataset.reveal = "hidden";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = "shown";
        io.disconnect();
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <li ref={ref} id={id} className={className} style={{ "--reveal-delay": `${delay}s` } as CSSProperties}>
      {children}
    </li>
  );
}
