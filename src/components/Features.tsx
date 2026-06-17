"use client";

import { motion } from "framer-motion";
import { Video, Award, Clock, Users, Trophy, GraduationCap } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function FeatureCard({ title, description, icon, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, type: "spring", bounce: 0.2 }}
      className="flex flex-col items-start relative overflow-hidden group p-8 rounded-2xl transition-all duration-400 cursor-default"
      style={{
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(196,136,42,0.15)",
        borderLeft: "3px solid transparent",
        backdropFilter: "blur(8px)",
        boxShadow: "0 4px 20px rgba(26,10,46,0.05)",
        transition: "all 0.4s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderLeft = "3px solid #c4882a";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(196,136,42,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderLeft = "3px solid transparent";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(26,10,46,0.05)";
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-0 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "rgba(196,136,42,0.08)", transform: "translate(-40%, -40%)" }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
        style={{
          background: "rgba(196,136,42,0.1)",
          border: "1px solid rgba(196,136,42,0.25)",
          color: "#c4882a",
        }}
      >
        {icon}
      </div>

      <h3
        className="text-xl font-extrabold mb-3 transition-colors duration-300 group-hover:text-[#c4882a]"
        style={{ fontFamily: "var(--font-playfair)", color: "#1a0a2e" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(26,10,46,0.6)" }}>
        {description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const features = [
    {
      title: "Live Online Classes",
      description:
        "Interactive, real-time sessions conducted on high-definition platforms with instant feedback from Gurus.",
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: "Experienced Gurus",
      description:
        "Learn from distinguished, certified artists and teachers dedicated to preserving authentic art forms.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Flexible Timings",
      description:
        "Convenient schedules customized for students residing in India as well as NRIs globally across timezones.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Personalized Sessions",
      description:
        "Choose between focused One-to-One mentoring or engaging group classes to suit your pace.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Performance Stages",
      description:
        "Regular online showcases and physical event opportunities to help you build confidence and shine.",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: "Certification Programs",
      description:
        "Structured academic curriculums culminating in recognized certifications and performance grading.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#fdf6e3" }}
    >
      {/* Right-edge mandala ornament */}
      <div
        className="mandala-watermark right-[-80px] top-0 h-full w-[350px]"
        style={{ opacity: 0.10 }}
        aria-hidden="true"
      >
        <img
          src="/mandalas/hero-mandala.svg"
          alt=""
          className="w-full h-full object-contain object-right"
          style={{ filter: "sepia(1) saturate(3) hue-rotate(15deg)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
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
                color: "#c4882a",
                background: "rgba(196,136,42,0.1)",
                border: "1px solid rgba(196,136,42,0.25)",
              }}
            >
              ✦ Why Choose Us
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
            A Premium{" "}
            <span style={{ color: "#c4882a" }}>Learning</span> Ecosystem
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed"
            style={{ color: "rgba(26,10,46,0.65)" }}
          >
            We merge traditional pedagogical techniques with modern digital
            tools to ensure an enriching artistic journey.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
