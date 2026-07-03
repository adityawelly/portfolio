"use client";
import { useEffect, useRef } from "react";

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = e.clientX + "px";
      ref.current.style.top  = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-0 w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
      style={{
        background: "radial-gradient(circle, rgba(100,255,218,0.07) 0%, transparent 65%)",
      }}
    />
  );
}
