"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Wait briefly for client-side hydration, then start fade out
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 150);

    // Completely unmount the component after the fade-out transition (300ms)
    const unmountTimer = setTimeout(() => {
      setVisible(false);
    }, 450);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fdf6e3] transition-all duration-300 ease-in-out ${
        isFading
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
    >
      {/* Background mandala watermark */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/mandalas/hero-mandala.svg"
          alt=""
          className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] object-contain animate-[spin_120s_linear_infinite]"
        />
      </div>

      <div className="relative flex flex-col items-center z-10">
        {/* Glow behind logo */}
        <div className="absolute w-36 h-36 rounded-full bg-[#f5c842]/10 blur-xl animate-pulse" />

        {/* Logo container with spinning gold ring */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Spinning decorative border */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#c4882a]/50 animate-[spin_20s_linear_infinite]" />
          {/* Inner solid border */}
          <div className="absolute inset-2 rounded-full border border-[#c4882a]/30" />
          {/* Actual Logo */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#c4882a]">
            <Image
              src="/logo/logo.jpeg"
              alt="Sri Kalavedika Logo"
              fill
              sizes="80px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        {/* Text loading indicators */}
        <div className="mt-6 flex flex-col items-center text-center">
          <h2
            className="text-2xl font-bold tracking-wide text-[#1a0a2e] animate-pulse"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Sri Kalavedika
          </h2>
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c4882a] mt-1"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Online Arts Academy
          </p>
        </div>

        {/* Premium subtle loading bar */}
        <div className="w-40 h-[2px] bg-[#1a0a2e]/10 rounded-full mt-8 overflow-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-[#c4882a] to-[#f5c842] rounded-full animate-shimmer-bar" />
        </div>
      </div>
    </div>
  );
}
