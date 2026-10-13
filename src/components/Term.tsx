"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type TermProps = {
  label: string;
  text: string;
  children: ReactNode;
};

const BUBBLE_WIDTH = 288;
const GUTTER = 12;

type Placement = { left: number; top: number; arrowLeft: number; above: boolean };

/**
 * A jargon word that explains itself on click. The popover is portalled to <body> and placed in
 * document coordinates, so it is not clipped or re-anchored by the animated card around it.
 */
export function Term({ label, text, children }: TermProps) {
  const id = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [place, setPlace] = useState<Placement | null>(null);

  useLayoutEffect(() => {
    if (!open) return;
    const button = buttonRef.current;
    const bubble = bubbleRef.current;
    if (!button || !bubble) return;

    const rect = button.getBoundingClientRect();
    const width = Math.min(BUBBLE_WIDTH, window.innerWidth - GUTTER * 2);
    const height = bubble.offsetHeight;
    const center = rect.left + rect.width / 2;
    const left = Math.min(Math.max(center - width / 2, GUTTER), window.innerWidth - width - GUTTER);
    const above = rect.bottom + height + 14 > window.innerHeight && rect.top > height + 14;
    const top = above ? rect.top - height - 10 : rect.bottom + 10;
    setPlace({
      left: left + window.scrollX,
      top: top + window.scrollY,
      arrowLeft: Math.min(Math.max(center - left, 18), width - 18),
      above,
    });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (buttonRef.current?.contains(target) || bubbleRef.current?.contains(target)) return;
      close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", close);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        onClick={() => {
          setPlace(null);
          setOpen((v) => !v);
        }}
        className="term"
      >
        {children}
      </button>
      {open &&
        createPortal(
          <div
            ref={bubbleRef}
            id={id}
            role="dialog"
            aria-label={label}
            data-above={place?.above ? "" : undefined}
            className="term-bubble"
            style={{
              width: Math.min(BUBBLE_WIDTH, window.innerWidth - GUTTER * 2),
              left: place?.left ?? 0,
              top: place?.top ?? 0,
              visibility: place ? "visible" : "hidden",
              ["--arrow-left" as string]: `${place?.arrowLeft ?? 0}px`,
            }}
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.04em] text-brand-light">{label}</p>
            <p className="mt-1.5 text-[14.5px] leading-[1.45]">{text}</p>
          </div>,
          document.body,
        )}
    </>
  );
}
