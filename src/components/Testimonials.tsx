"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Shri Kumar Kochu Krishnan",
    course: "Carnatic Vocal",
    rating: 5,
    text: "Chembai Srinivas is a great teacher who can impart lessons to any lay man without stressing out much. I was little weak in sticking to swara sthanas due to conceptual problems, but he cleared my queries easily. I am now in a position to sing ragas in the appropriate way.",
    initials: "KK",
  },
  {
    name: "Amrita",
    course: "Dance Classes",
    rating: 5,
    text: "I am really happy with the dance classes, the way sir teaches small kids and even he makes difficult steps really easy for them. My little one looks forward to his dance class everyday.",
    initials: "A",
  },
  {
    name: "Praveen Ji",
    course: "Carnatic Music",
    rating: 5,
    text: "Guru Chembai Srinivas is a repository of knowledge with rich experience. He teaches patiently and keeps the students' spirits high by motivating them constantly. Students from ages 20 to 60 are treated with equal respect.",
    initials: "PJ",
  },
  {
    name: "Swati Suresh",
    course: "Carnatic Vocal",
    rating: 5,
    text: "Chembai Srinivas sir is a wonderful and patient teacher. He has great in-depth knowledge about Carnatic music and his classes are a real joy to attend. I would highly recommend sir's classes to anyone exploring music.",
    initials: "SS",
  },
  {
    name: "Smt. Siva Kalyani",
    course: "Carnatic Music",
    rating: 5,
    text: "A valuable teacher who makes us know what we should truly know before we can sing. Chembai sir has all the efficiencies in his teachings where a student is guided with his full potential.",
    initials: "SK",
  },
  {
    name: "Rahul Sukun",
    course: "Featured Guitarist",
    rating: 5,
    text: "India's Got Talent Season 11 performer. Crafting melodies that touch the soul through sincere and honest musical performances. The academy has been instrumental in refining my craft.",
    initials: "RS",
  },
];

const DISPLAY_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isScrollingRef = useRef(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      isScrollingRef.current = true;
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
      pauseTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 2000);

      const scrollAmount = direction === "left" ? -382 : 382; // Card width + gap
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    let hasInitialized = false;
    const scrollSpeed = 0.7; // Gentle auto-scroll speed (pixels per frame)

    const animate = () => {
      const singleSetWidth = container.scrollWidth / 3;

      if (!hasInitialized && singleSetWidth > 0) {
        container.scrollLeft = singleSetWidth;
        hasInitialized = true;
      }

      if (hasInitialized) {
        const isPaused = isHoveredRef.current || isScrollingRef.current;
        if (!isPaused) {
          container.scrollLeft += scrollSpeed;
        }

        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= singleSetWidth / 2) {
          container.scrollLeft += singleSetWidth;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [mounted]);

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#1a0a2e" }}
    >
      {/* Mandala watermark */}
      <div
        className="mandala-watermark left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px]"
        style={{ opacity: 0.12 }}
        aria-hidden="true"
      >
        <img
          src="/mandalas/hero-mandala.svg"
          alt=""
          className="w-full h-full"
          style={{ filter: "sepia(1) saturate(2) hue-rotate(10deg)" }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs tracking-[0.22em] uppercase"
                style={{
                  fontFamily: "var(--font-cinzel)",
                  color: "#f5c842",
                  background: "rgba(196,136,42,0.12)",
                  border: "1px solid rgba(196,136,42,0.3)",
                }}
              >
                ✦ Testimonials
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "#fdf6e3" }}
            >
              Stories of <span style={{ color: "#f5c842" }}>Artistic</span> Growth
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed"
              style={{ color: "rgba(253,246,227,0.6)" }}
            >
              Hear from our passionate learners who are exploring Indian classical
              music, instruments, dance, and cognitive crafts.
            </motion.p>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-[#f5c842]/30 flex items-center justify-center text-[#f5c842] hover:bg-[#f5c842] hover:text-[#1a0a2e] hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm bg-white/5 backdrop-blur-sm z-20 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-inherit" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-[#f5c842]/30 flex items-center justify-center text-[#f5c842] hover:bg-[#f5c842] hover:text-[#1a0a2e] hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm bg-white/5 backdrop-blur-sm z-20 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-inherit" />
            </button>
          </div>
        </div>

        {/* CSS for hiding scrollbar while preserving scroll functionality */}
        <style dangerouslySetInnerHTML={{ __html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />

        {/* Testimonials Marquee */}
        <div
          ref={scrollRef}
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
          className="no-scrollbar flex gap-6 md:gap-8 overflow-x-auto pb-10 pt-4 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {DISPLAY_TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={`${t.name}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % TESTIMONIALS.length) * 0.05 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col justify-between bg-[#2a1040]/80 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-[0_15px_40px_-15px_rgba(26,10,46,0.2)] hover:shadow-[0_30px_60px_-15px_rgba(196,136,42,0.25)] border border-white/10 transition-all duration-500 relative overflow-hidden min-w-[320px] md:min-w-[350px] max-w-[350px] shrink-0"
            >
              {/* Subtle hover glow inside card */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#f5c842]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"></div>

              <div>
                {/* Quote Icon */}
                <Quote
                  className="absolute top-6 right-6 w-12 h-12 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ color: "#f5c842" }}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" fill="#f5c842" color="#f5c842" />
                  ))}
                </div>

                {/* Quote text */}
                <p
                  className="text-sm md:text-base italic leading-relaxed mb-8 relative z-10"
                  style={{ color: "rgba(253,246,227,0.85)" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div
                className="flex items-center gap-4 pt-6 border-t border-white/10"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-base shrink-0 shadow-md"
                  style={{
                    background: "linear-gradient(135deg, #c4882a, #e8a020)",
                    color: "#fff",
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <h4
                    className="font-bold text-sm md:text-base leading-tight"
                    style={{ fontFamily: "var(--font-playfair)", color: "#fdf6e3" }}
                  >
                    {t.name}
                  </h4>
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mt-1.5 inline-block"
                    style={{
                      background: "rgba(196,136,42,0.15)",
                      color: "#f5c842",
                      border: "1px solid rgba(196,136,42,0.3)",
                      fontFamily: "var(--font-cinzel)",
                    }}
                  >
                    {t.course}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
