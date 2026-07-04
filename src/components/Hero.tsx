"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBgImage from "../../background-template-with-mandala-pattern-design/43584.jpg";

const PHOTOS = [
  {
    src: "/photos/Dr. Devagupthapu Sai Lahari, Kuchipudi.jpeg",
    name: "Dr. Devagupthapu Sai Lahari, Kuchipudi",
  },
  { src: "/photos/Kum. Pakhi, Kathak.jpeg", name: "Kum. Pakhi, Kathak" },
  {
    src: "/photos/Kum. Pragya Tyagi, Kathak.jpeg",
    name: "Kum. Pragya Tyagi, Kathak",
  },
  {
    src: "/photos/Kum. Riya, Bollywood dance & Zumba.jpeg",
    name: "Kum. Riya, Bollywood dance & Zumba",
  },
  {
    src: "/photos/Shri Chembai Srinivas, Carnatic Violin Keerthanams.jpeg",
    name: "Shri Chembai Srinivas, Carnatic Violin Keerthanams",
  },
  {
    src: "/photos/Shri Dhruval Shah, Chess.jpeg",
    name: "Shri Dhruval Shah, Chess",
  },
  {
    src: "/photos/Shri Ganesh Singh, Flute.jpeg",
    name: "Shri Ganesh Singh, Flute",
  },
  {
    src: "/photos/Shri Joel Mathew, Bollywood dance Hip-hop Locking Beatboxing.jpeg",
    name: "Shri Joel Mathew, Bollywood dance Hip-hop Locking Beatboxing",
  },
  {
    src: "/photos/Shri Venkat Narayana, Carnatic Vocal Keyboard.jpeg",
    name: "Shri Venkat Narayana, Carnatic Vocal Keyboard",
  },
  {
    src: "/photos/Shri. Rahul Sukun, Guitar.jpeg",
    name: "Shri. Rahul Sukun, Guitar",
  },
  {
    src: "/photos/Smt. Sandhya Saki, Kuchipudi.jpeg",
    name: "Smt. Sandhya Saki, Kuchipudi",
  },
  {
    src: "/photos/Smt. Shubha Dixit, Hindustani Vocal.jpeg",
    name: "Smt. Shubha Dixit, Hindustani Vocal",
  },
  {
    src: "/photos/Smt. Vyshnavi Nambiar, Kuchipudi.jpeg",
    name: "Smt. Vyshnavi Nambiar, Kuchipudi",
  },
];

// Floating particle symbols (Indian classical + music)
const PARTICLES = [
  { symbol: "\u266A", x: "10%", y: "20%", dur: 5, delay: 0 },
  { symbol: "\u266B", x: "85%", y: "15%", dur: 7, delay: 1 },
  { symbol: "\u0950", x: "75%", y: "60%", dur: 6, delay: 0.5 },
  { symbol: "\u266A", x: "20%", y: "70%", dur: 8, delay: 2 },
  { symbol: "\u2748", x: "50%", y: "85%", dur: 5.5, delay: 1.5 },
  { symbol: "\u266B", x: "30%", y: "35%", dur: 6.5, delay: 3 },
  { symbol: "\u0950", x: "65%", y: "80%", dur: 7.5, delay: 0.8 },
  { symbol: "\u266A", x: "90%", y: "45%", dur: 4.5, delay: 2.5 },
  { symbol: "\u2748", x: "8%", y: "50%", dur: 9, delay: 1.2 },
  { symbol: "\u266B", x: "55%", y: "25%", dur: 6, delay: 3.5 },
  { symbol: "\u266C", x: "15%", y: "85%", dur: 6.2, delay: 0.3 },
  { symbol: "\u266A", x: "45%", y: "10%", dur: 5.8, delay: 1.8 },
  { symbol: "\u266B", x: "78%", y: "75%", dur: 7.2, delay: 2.2 },
  { symbol: "\u266C", x: "60%", y: "55%", dur: 6.8, delay: 3.8 },
  { symbol: "\u266A", x: "35%", y: "55%", dur: 5.2, delay: 0.9 },
  { symbol: "\u266B", x: "88%", y: "88%", dur: 7.8, delay: 1.4 },
  { symbol: "\u266C", x: "5%", y: "10%", dur: 6.5, delay: 2.8 },
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

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % PHOTOS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 bg-cover bg-[position:20%_center] lg:bg-[position:right_center]"
      style={{
        backgroundImage: `url(${heroBgImage.src})`,
      }}
    >
      {/* Readability overlay for mobile/tablet screens */}
      <div className="absolute inset-0 bg-[#faf6eb]/85 lg:bg-transparent pointer-events-none z-0 transition-all duration-300" />

      {/* Mobile-only soft rotating mandala watermark */}
      <div
        className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] lg:hidden aspect-square opacity-[0.08] pointer-events-none z-0"
        aria-hidden="true"
      >
        <img
          src="/mandalas/hero-mandala.svg"
          alt=""
          className="w-full h-full object-contain opacity-40 animate-[spin_180s_linear_infinite]"
        />
      </div>

      {/* ── Floating particles ── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {PARTICLES.map((p, i) => {
          const isMusicalNote = ["\u266A", "\u266B", "\u266C"].includes(
            p.symbol,
          );
          return (
            <span
              key={i}
              className="absolute select-none text-2xl"
              style={{
                left: p.x,
                top: p.y,
                color:
                  i % 3 === 0
                    ? "#f5c842"
                    : i % 3 === 1
                      ? "#e8a020"
                      : "rgba(253,246,227,0.5)",
                animationName: isMusicalNote
                  ? "float-particle, note-shine"
                  : "float-particle",
                animationDuration: isMusicalNote
                  ? `${p.dur}s, 2s`
                  : `${p.dur}s`,
                animationDelay: `${p.delay}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                fontSize: p.symbol === "\u0950" ? "2rem" : "1.5rem",
              }}
            >
              {p.symbol}
            </span>
          );
        })}
      </div>

      {/* ── Subtle glow blobs ── */}
      <div
        className="absolute w-[40vw] h-[40vw] rounded-full blur-[120px] -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(196,136,42,0.12) 0%, transparent 70%)",
          top: "20%",
          left: "-10%",
        }}
      />
      <div
        className="absolute w-[30vw] h-[30vw] rounded-full blur-[100px] -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(92,26,26,0.3) 0%, transparent 70%)",
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
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2"
            >
              <span
                className="text-xs tracking-[0.22em] uppercase px-4 py-2 rounded-full font-bold"
                style={{
                  fontFamily: "var(--font-cinzel)",
                  color: "#1a0a2e",
                  background: "rgba(196,136,42,0.15)",
                  border: "1px solid rgba(196,136,42,0.6)",
                }}
              >
                ✦ Where Tradition Meets Creativity
              </span>
            </motion.div>

            {/* Headlines */}
            <div className="flex flex-col lg:flex-row lg:gap-3 lg:flex-wrap lg:items-start items-center justify-center lg:justify-start mb-8 gap-4 lg:gap-3">
              <motion.h1
                variants={item}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08]"
                style={{ fontFamily: "var(--font-playfair)", color: "#1a0a2e" }}
              >
                Nurturing <span className="text-gold-gradient" style={{ WebkitTextStroke: "0.5px rgba(0, 0, 0, 0.5)" }}>Talent</span>
              </motion.h1>
              <motion.h1
                variants={item}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08]"
                style={{ fontFamily: "var(--font-playfair)", color: "#1a0a2e" }}
              >
                Preserving <span style={{ color: "#c4882a", WebkitTextStroke: "0.5px rgba(0, 0, 0, 0.5)" }}>Tradition</span>
              </motion.h1>
              <motion.h1
                variants={item}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08]"
                style={{ fontFamily: "var(--font-playfair)", color: "#1a0a2e" }}
              >
                Inspiring <span className="text-gold-gradient" style={{ WebkitTextStroke: "0.5px rgba(0, 0, 0, 0.5)" }}>Excellence</span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-base md:text-lg max-w-xl mb-10 leading-relaxed font-medium"
              style={{ color: "#4a3b5c" }}
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
                <button
                  className="btn-shimmer text-base px-8 py-4 w-full sm:w-auto font-bold"
                  style={{ color: "#1a0a2e" }}
                >
                  Book Free Demo
                </button>
              </Link>
              <Link href="/services">
                <button
                  className="text-base px-8 py-4 w-full sm:w-auto rounded-full font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ border: "2px solid #1a0a2e", color: "#1a0a2e" }}
                >
                  Explore Courses
                </button>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={item}
              className="flex items-center gap-6 mt-10 flex-wrap justify-center lg:justify-start"
            >
              {[
                { value: "500+", label: "Learners" },
                { value: "25+", label: "Expert Gurus" },
                { value: "15+", label: "Art Forms" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center lg:items-start"
                >
                  <span
                    className="text-xl font-extrabold"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      color: "#c4882a",
                    }}
                  >
                    {badge.value}
                  </span>
                  <span
                    className="text-[11px] font-bold"
                    style={{ color: "rgba(26,10,46,0.6)" }}
                  >
                    {badge.label}
                  </span>
                </div>
              ))}
              <div
                className="hidden lg:block h-8 w-px"
                style={{ background: "rgba(196,136,42,0.3)" }}
              />
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    style={{ color: "#c4882a", fontSize: "0.9rem" }}
                  >
                    {"\u2605"}
                  </span>
                ))}
                <span
                  className="text-xs ml-1 font-bold"
                  style={{ color: "rgba(26,10,46,0.6)" }}
                >
                  Top Rated
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Mandala Art */}
          <div className="hidden lg:block w-full h-[480px] lg:h-[640px] pointer-events-none" />
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
          style={{
            fontFamily: "var(--font-cinzel)",
            color: "rgba(245,200,66,0.5)",
          }}
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
