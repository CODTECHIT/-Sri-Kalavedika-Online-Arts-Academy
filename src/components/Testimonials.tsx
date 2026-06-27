"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
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

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleNext = () => setCurrent((p) => (p + 1) % testimonials.length);
  const handlePrev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(handleNext, 4500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, current]);

  const t = testimonials[current];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            Stories of{" "}
            <span style={{ color: "#f5c842" }}>Artistic</span> Growth
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

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="p-8 md:p-12 rounded-3xl relative overflow-hidden"
              style={{
                background: "#2a1040",
                borderTop: "3px solid #c4882a",
                border: "1px solid rgba(196,136,42,0.2)",
                borderTopWidth: "3px",
              }}
            >
              {/* Quote watermark */}
              <Quote
                className="absolute top-8 right-8 w-16 h-16 pointer-events-none"
                style={{ color: "rgba(196,136,42,0.15)" }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5" fill="#f5c842" color="#f5c842" />
                ))}
              </div>

              {/* Quote text */}
              <p
                className="text-base md:text-lg italic leading-relaxed mb-8"
                style={{ color: "rgba(253,246,227,0.82)" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-4 pt-6"
                style={{ borderTop: "1px solid rgba(196,136,42,0.15)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-base shrink-0"
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
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mt-1 inline-block"
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
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90"
              style={{
                background: "rgba(196,136,42,0.15)",
                border: "1px solid rgba(196,136,42,0.3)",
                color: "#f5c842",
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className="rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    width: current === idx ? "24px" : "10px",
                    height: "10px",
                    background: current === idx ? "#f5c842" : "rgba(196,136,42,0.3)",
                  }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90"
              style={{
                background: "rgba(196,136,42,0.15)",
                border: "1px solid rgba(196,136,42,0.3)",
                color: "#f5c842",
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
