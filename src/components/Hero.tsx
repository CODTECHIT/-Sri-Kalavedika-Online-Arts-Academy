"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Floating particle symbols (Indian classical + music)
const PARTICLES = [
  { symbol: "♪", x: "10%", y: "20%", dur: 5, delay: 0 },
  { symbol: "♫", x: "85%", y: "15%", dur: 7, delay: 1 },
  { symbol: "ॐ", x: "75%", y: "60%", dur: 6, delay: 0.5 },
  { symbol: "♪", x: "20%", y: "70%", dur: 8, delay: 2 },
  { symbol: "❈", x: "50%", y: "85%", dur: 5.5, delay: 1.5 },
  { symbol: "♫", x: "30%", y: "35%", dur: 6.5, delay: 3 },
  { symbol: "ॐ", x: "65%", y: "80%", dur: 7.5, delay: 0.8 },
  { symbol: "♪", x: "90%", y: "45%", dur: 4.5, delay: 2.5 },
  { symbol: "❈", x: "8%", y: "50%", dur: 9, delay: 1.2 },
  { symbol: "♫", x: "55%", y: "25%", dur: 6, delay: 3.5 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 50, damping: 15 },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 120]);
  const mandalaOpacity = useTransform(scrollY, [0, 600], [0.15, 0]);

  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20"
      style={{ background: "#1a0a2e" }}
    >
      {/* ── Mandala watermark (right side) ── */}
      <motion.div
        style={{ opacity: mandalaOpacity }}
        className="mandala-watermark right-[-5vw] top-1/2 -translate-y-1/2 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px]"
      >
        <Image
          src="/mandalas/hero-mandala.svg"
          alt=""
          aria-hidden="true"
          fill
          style={{ filter: "sepia(1) saturate(2) hue-rotate(10deg)", opacity: 1 }}
        />
      </motion.div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute select-none text-2xl"
            style={{
              left: p.x,
              top: p.y,
              color: i % 3 === 0 ? "#f5c842" : i % 3 === 1 ? "#e8a020" : "rgba(253,246,227,0.5)",
              animationName: "float-particle",
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              fontSize: p.symbol === "ॐ" ? "2rem" : "1.5rem",
            }}
          >
            {p.symbol}
          </span>
        ))}
      </div>

      {/* ── Subtle glow blobs ── */}
      <div
        className="absolute w-[40vw] h-[40vw] rounded-full blur-[120px] -z-0"
        style={{
          background: "radial-gradient(circle, rgba(196,136,42,0.12) 0%, transparent 70%)",
          top: "20%",
          left: "-10%",
        }}
      />
      <div
        className="absolute w-[30vw] h-[30vw] rounded-full blur-[100px] -z-0"
        style={{
          background: "radial-gradient(circle, rgba(92,26,26,0.3) 0%, transparent 70%)",
          bottom: "10%",
          right: "5%",
        }}
      />

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[80vh]">

          {/* Left — Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0"
          >
            {/* Eyebrow */}
            <motion.div variants={item} className="mb-6 inline-flex items-center gap-2">
              <span
                className="text-xs tracking-[0.22em] uppercase px-4 py-2 rounded-full"
                style={{
                  fontFamily: "var(--font-cinzel)",
                  color: "#f5c842",
                  background: "rgba(196,136,42,0.12)",
                  border: "1px solid rgba(196,136,42,0.3)",
                }}
              >
                ✦ Where Tradition Meets Creativity
              </span>
            </motion.div>

            {/* Headlines */}
            <div className="space-y-1 mb-8">
              <motion.h1
                variants={item}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.08]"
                style={{ fontFamily: "var(--font-playfair)", color: "#fdf6e3" }}
              >
                Nurturing{" "}
                <span className="text-gold-gradient">Talent</span>
              </motion.h1>
              <motion.h1
                variants={item}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.08]"
                style={{ fontFamily: "var(--font-playfair)", color: "#fdf6e3" }}
              >
                Preserving{" "}
                <span style={{ color: "#e8a020" }}>Tradition</span>
              </motion.h1>
              <motion.h1
                variants={item}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.08]"
                style={{ fontFamily: "var(--font-playfair)", color: "#fdf6e3" }}
              >
                Inspiring{" "}
                <span className="text-gold-gradient">Excellence</span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-base md:text-lg max-w-xl mb-10 leading-relaxed"
              style={{ color: "rgba(253,246,227,0.72)" }}
            >
              Experience India&apos;s rich cultural heritage through premium
              online education in music, dance, and fine arts. Connect with
              master Gurus for a personalized learning journey.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="/admissions">
                <button className="btn-shimmer text-base px-8 py-4 w-full sm:w-auto">
                  Book Free Demo
                </button>
              </Link>
              <Link href="/services">
                <button className="btn-ghost-gold text-base px-8 py-4 w-full sm:w-auto">
                  Explore Courses
                </button>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={item} className="flex items-center gap-6 mt-10 flex-wrap justify-center lg:justify-start">
              {[
                { value: "500+", label: "Learners" },
                { value: "25+", label: "Expert Gurus" },
                { value: "15+", label: "Art Forms" },
              ].map((badge) => (
                <div key={badge.label} className="flex flex-col items-center lg:items-start">
                  <span
                    className="text-xl font-extrabold"
                    style={{ fontFamily: "var(--font-playfair)", color: "#f5c842" }}
                  >
                    {badge.value}
                  </span>
                  <span className="text-[11px]" style={{ color: "rgba(253,246,227,0.55)" }}>
                    {badge.label}
                  </span>
                </div>
              ))}
              <div
                className="hidden lg:block h-8 w-px"
                style={{ background: "rgba(196,136,42,0.3)" }}
              />
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} style={{ color: "#f5c842", fontSize: "0.9rem" }}>★</span>
                ))}
                <span className="text-xs ml-1" style={{ color: "rgba(253,246,227,0.55)" }}>
                  Top Rated
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Image with mandala frame */}
          <motion.div
            style={{ y: y1 }}
            className="relative w-full h-[480px] lg:h-[640px] flex items-center justify-center"
          >
            {/* Decorative gold rings */}
            <div
              className="absolute inset-[5%] rounded-[2rem]"
              style={{
                border: "1px solid rgba(196,136,42,0.3)",
                transform: "rotate(2deg)",
              }}
            />
            <div
              className="absolute inset-[3%] rounded-[2rem]"
              style={{
                border: "1px solid rgba(196,136,42,0.15)",
                transform: "rotate(-1deg)",
              }}
            />

            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
              className="relative z-20 w-[82%] sm:w-[70%] lg:w-[80%] aspect-[3/4] rounded-[2rem] overflow-hidden"
              style={{
                boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 3px rgba(196,136,42,0.3)",
                outline: "2px solid rgba(196,136,42,0.4)",
                outlineOffset: "8px",
              }}
            >
              <div
                className="absolute inset-0 z-10"
                style={{ background: "rgba(26,10,46,0.15)", mixBlendMode: "multiply" }}
              />
              <Image
                src="/atrist.jpeg"
                alt="Classical arts student"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Bottom gradient overlay */}
              <div
                className="absolute inset-0 z-20"
                style={{
                  background: "linear-gradient(to top, rgba(26,10,46,0.85) 0%, transparent 60%)",
                }}
              />
              {/* Bottom badge */}
              <div className="absolute bottom-5 left-5 right-5 z-30">
                <div
                  className="rounded-xl p-3 flex items-center gap-3"
                  style={{
                    background: "rgba(26,10,46,0.8)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(196,136,42,0.3)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #c4882a, #f5c842)",
                      color: "#fff",
                    }}
                  >
                    ★
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#f5c842", fontFamily: "var(--font-playfair)" }}>
                      Top Rated Academy
                    </p>
                    <p className="text-xs" style={{ color: "rgba(253,246,227,0.6)" }}>
                      5000+ Happy Students Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating ornament circles */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-1/4 z-30 w-14 h-14 rounded-full flex items-center justify-center text-xl"
              style={{
                background: "rgba(26,10,46,0.8)",
                border: "2px solid rgba(196,136,42,0.5)",
                backdropFilter: "blur(8px)",
                color: "#f5c842",
              }}
            >
              ♪
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 top-1/3 z-30 w-12 h-12 rounded-full flex items-center justify-center text-lg"
              style={{
                background: "rgba(26,10,46,0.8)",
                border: "2px solid rgba(196,136,42,0.5)",
                backdropFilter: "blur(8px)",
                color: "#e8a020",
              }}
            >
              ॐ
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute left-8 bottom-1/4 z-30 w-16 h-16 rounded-full flex items-center justify-center text-2xl"
              style={{
                background: "rgba(26,10,46,0.8)",
                border: "2px solid rgba(196,136,42,0.5)",
                backdropFilter: "blur(8px)",
                color: "#f5c842",
              }}
            >
              ♫
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[10px] uppercase tracking-[0.25em]"
          style={{ fontFamily: "var(--font-cinzel)", color: "rgba(245,200,66,0.5)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} color="rgba(245,200,66,0.5)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
