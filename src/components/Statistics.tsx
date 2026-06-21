"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Award, Users, BookOpen, Globe } from "lucide-react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

function StatCard({ value, suffix, label, description, icon }: StatItemProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 80 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
      className="flex flex-col justify-between relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 p-8 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(196,136,42,0.2)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"
        style={{ background: "rgba(196,136,42,0.15)", transform: "translate(30%, -30%)" }}
      />

      <div>
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
          style={{
            background: "rgba(196,136,42,0.15)",
            border: "1px solid rgba(196,136,42,0.3)",
            color: "#f5c842",
          }}
        >
          {icon}
        </div>

        {/* Number */}
        <h3
          className="text-4xl md:text-5xl font-extrabold mb-2 flex items-baseline tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span ref={ref} style={{ color: "#f5c842" }}>0</span>
          <span style={{ color: "#e8a020" }}>{suffix}</span>
        </h3>

        {/* Label */}
        <h4 className="text-lg font-bold mb-1" style={{ color: "#fdf6e3" }}>
          {label}
        </h4>
      </div>

      <p
        className="text-sm leading-relaxed mt-4 pt-4"
        style={{
          color: "rgba(253,246,227,0.55)",
          borderTop: "1px solid rgba(196,136,42,0.15)",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default function Statistics() {
  const stats: StatItemProps[] = [
    {
      value: 500,
      suffix: "+",
      label: "Learners",
      description: "Connecting students globally with Indian culture through structured online lessons.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      value: 25,
      suffix: "+",
      label: "Expert Gurus",
      description: "Learn directly from certified artists, domain masters, and experienced instructors.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      value: 15,
      suffix: "+",
      label: "Art Forms",
      description: "Explore Classical Vocal, Carnatic, Bharatanatyam, Kathak, Instrumentals, and Painting.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      value: 12,
      suffix: "+",
      label: "Countries Reached",
      description: "Inspiring students from India, US, UK, Canada, UAE, Australia, and beyond.",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: "#5c1a1a" }}
    >
      {/* Centered mandala watermark */}
      <div
        className="mandala-watermark left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px]"
        style={{ opacity: 0.08 }}
        aria-hidden="true"
      >
        <img
          src="/mandalas/hero-mandala.svg"
          alt=""
          className="w-full h-full"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Section label */}
      <div className="text-center mb-12">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase"
          style={{
            fontFamily: "var(--font-cinzel)",
            color: "#f5c842",
            background: "rgba(196,136,42,0.15)",
            border: "1px solid rgba(196,136,42,0.3)",
          }}
        >
          Our Impact in Numbers
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
