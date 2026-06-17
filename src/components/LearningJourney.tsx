"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, UserCheck, BookOpen, Trophy, GraduationCap } from "lucide-react";

interface JourneyStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  alignLeft?: boolean;
}

function JourneyStep({ number, title, description, icon, alignLeft = false }: JourneyStepProps) {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-16 last:mb-0 ${
        alignLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Spacer for Desktop */}
      <div className="hidden md:block w-[45%]" />

      {/* Step Number Circle */}
      <div
        className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-14 h-14 rounded-full"
        style={{
          background: "linear-gradient(135deg, #c4882a, #e8a020)",
          boxShadow: "0 0 0 4px rgba(196,136,42,0.25), 0 4px 16px rgba(0,0,0,0.2)",
        }}
      >
        <div className="flex items-center justify-center text-white">
          {icon}
        </div>
        <span
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold"
          style={{
            background: "#1a0a2e",
            color: "#f5c842",
            border: "2px solid #c4882a",
            fontFamily: "var(--font-cinzel)",
          }}
        >
          {number}
        </span>
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: alignLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", stiffness: 45 }}
        className="w-full md:w-[45%] pl-16 md:pl-0"
      >
        <div
          className="p-8 rounded-2xl transition-all duration-400 group hover:-translate-y-1"
          style={{
            background: "rgba(255,255,255,0.92)",
            border: "1px solid rgba(196,136,42,0.2)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}
        >
          {/* Big step number watermark */}
          <div
            className="absolute top-4 right-6 text-5xl font-black select-none"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "rgba(196,136,42,0.08)",
            }}
          >
            {number}
          </div>

          <h3
            className="text-xl font-extrabold mb-3"
            style={{ fontFamily: "var(--font-playfair)", color: "#1a0a2e" }}
          >
            {title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(26,10,46,0.65)" }}>
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function LearningJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const steps = [
    {
      number: "01",
      title: "Discover Your Passion",
      description:
        "Explore our diverse curriculum of classical vocal, instrumentals, dance forms, or chess, and schedule a free live demo session.",
      icon: <Search className="w-5 h-5" />,
    },
    {
      number: "02",
      title: "Find Your Perfect Guru",
      description:
        "Get matched with an experienced, certified guru who aligns with your skill level, background, and learning objectives.",
      icon: <UserCheck className="w-5 h-5" />,
    },
    {
      number: "03",
      title: "Structured Learning Track",
      description:
        "Participate in live online courses featuring individualized mentoring, comprehensive notes, and homework review logs.",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      number: "04",
      title: "Performance & Showcases",
      description:
        "Present your skills in seasonal online recitals, community workshops, and physical performance spaces to build stage presence.",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      number: "05",
      title: "Certification & Beyond",
      description:
        "Acquire recognized academy diplomas upon completing structured grading levels and unlock global opportunities.",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #c4882a 0%, #e8a020 50%, #c4882a 100%)",
      }}
    >
      {/* Mandala tile pattern overlay */}
      <div
        className="mandala-watermark inset-0 w-full h-full"
        style={{ opacity: 0.06 }}
        aria-hidden="true"
      >
        <img
          src="/mandalas/tile-mandala.svg"
          alt=""
          className="w-full h-full"
          style={{
            filter: "brightness(0)",
            objectFit: "cover",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
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
                color: "#1a0a2e",
                background: "rgba(26,10,46,0.12)",
                border: "1px solid rgba(26,10,46,0.2)",
              }}
            >
              ✦ Learning Timeline
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "#1a0a2e" }}
          >
            Your Artistic{" "}
            <span style={{ color: "#fff" }}>Evolution</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed"
            style={{ color: "rgba(26,10,46,0.75)" }}
          >
            From your very first demo class to earning recognized credentials,
            we support and guide you through every milestone.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">

          {/* Central Line Base */}
          <div
            className="absolute left-10 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 -z-10"
            style={{ background: "rgba(255,255,255,0.3)" }}
          />

          {/* Scrolling Filled Line */}
          <motion.div
            style={{
              scaleY,
              originY: 0,
              background: "linear-gradient(to bottom, #1a0a2e, rgba(26,10,46,0.3))",
            }}
            className="absolute left-10 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 -z-10"
          />

          {/* Steps */}
          <div className="relative z-10 flex flex-col items-center">
            {steps.map((step, idx) => (
              <JourneyStep
                key={idx}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                alignLeft={idx % 2 !== 0}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
