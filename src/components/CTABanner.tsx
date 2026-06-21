"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #c4882a 0%, #5c1a1a 60%, #1a0a2e 100%)",
      }}
    >
      {/* Top-left corner mandala ornament */}
      <div
        className="mandala-watermark left-[-40px] top-[-40px] w-[220px] h-[220px]"
        style={{ opacity: 0.18 }}
        aria-hidden="true"
      >
        <img
          src="/mandalas/tile-mandala.svg"
          alt=""
          className="w-full h-full"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Bottom-right corner mandala ornament */}
      <div
        className="mandala-watermark right-[-40px] bottom-[-40px] w-[220px] h-[220px]"
        style={{ opacity: 0.18 }}
        aria-hidden="true"
      >
        <img
          src="/mandalas/tile-mandala.svg"
          alt=""
          className="w-full h-full"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Glow overlay */}
      <div
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(196,136,42,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase"
            style={{
              fontFamily: "var(--font-cinzel)",
              color: "#f5c842",
              background: "rgba(245,200,66,0.12)",
              border: "1px solid rgba(245,200,66,0.3)",
            }}
          >
            ✦ Begin Your Journey
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
          style={{ fontFamily: "var(--font-playfair)", color: "#fdf6e3" }}
        >
          Ready to Begin Your{" "}
          <span style={{ color: "#f5c842" }}>Artistic Journey?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto"
          style={{ color: "rgba(253,246,227,0.85)" }}
        >
          <p className="mb-6">Join Sri Kalavedika today and learn from expert Gurus from the comfort of your home.</p>
          
          <div className="flex flex-col items-center gap-3 text-base font-medium" style={{ fontFamily: "var(--font-sans)" }}>
            <div className="flex items-center gap-2">
              <span>📞</span> <span>+91 63027 49027</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📧</span> <span>skvonlinearts@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-center">
              <span>🌐</span> <span>Online Classes for India & Students Worldwide 🌍</span>
            </div>
          </div>
          
          <p className="mt-8 italic font-bold text-xl" style={{ fontFamily: "var(--font-playfair)", color: "#f5c842" }}>
            "Where Tradition Meets Talent."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/admissions">
            <button
              className="btn-shimmer text-base px-10 py-4 w-full sm:w-auto"
              style={{ color: "#1a0a2e", fontWeight: 800 }}
            >
              Book Free Demo Class
            </button>
          </Link>
          <Link href="/services">
            <button
              className="px-10 py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              style={{
                background: "transparent",
                border: "2px solid rgba(253,246,227,0.5)",
                color: "#fdf6e3",
              }}
            >
              Explore All Courses
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
