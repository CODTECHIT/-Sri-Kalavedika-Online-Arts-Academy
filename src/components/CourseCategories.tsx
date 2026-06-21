"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Award, Keyboard, Compass, Target, BookOpen, Mic2, Heart, Sparkles, ArrowRight } from "lucide-react";

const categories = ["All", "Music", "Dance & Drama", "Cognitive & Speech"];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Music": { bg: "rgba(196,136,42,0.12)", text: "#f5c842", border: "rgba(196,136,42,0.3)" },
  "Dance & Drama": { bg: "rgba(92,26,26,0.15)", text: "#e8a020", border: "rgba(92,26,26,0.3)" },
  "Cognitive & Speech": { bg: "rgba(26,10,46,0.12)", text: "#c4882a", border: "rgba(26,10,46,0.2)" },
};

const categorySubheadings: Record<string, string> = {
  "All": "Vocal • Instrumental • Dance • Drama • Cognitive • Speech",
  "Music": "Classical Vocal • Instrumental • Light Music",
  "Dance & Drama": "Classical Dance • Contemporary • Theatre & Acting",
  "Cognitive & Speech": "Vedic Maths • Chess • Speed Cubing • Public Speaking"
};

const courses = [
  {
    title: "Classical Vocal Music",
    category: "Music",
    description: "Learn fundamentals and advanced techniques of Indian classical vocal music from expert gurus.",
    icon: <Mic2 className="w-6 h-6" />,
    href: "/services/carnatic-vocal",
  },
  {
    title: "Keyboard & Piano",
    category: "Music",
    description: "Master playing techniques, music theory, and western or classical notations.",
    icon: <Keyboard className="w-6 h-6" />,
    href: "/services/keyboard",
  },
  {
    title: "Light Music & Bhajans",
    category: "Music",
    description: "Master soulful melodies, semi-classical, and devotional songs with performance-oriented training.",
    icon: <Music className="w-6 h-6" />,
    href: "/services/light-music",
  },
  {
    title: "Chess Coaching",
    category: "Cognitive & Speech",
    description: "Enhance strategic thinking, focus, and tactical problem-solving through master coaching.",
    icon: <Target className="w-6 h-6" />,
    href: "/services/chess",
  },
  {
    title: "Vedic Mathematics",
    category: "Cognitive & Speech",
    description: "Learn ancient, rapid mathematical techniques to perform complex calculations in seconds.",
    icon: <BookOpen className="w-6 h-6" />,
    href: "/services/vedic-maths",
  },
  {
    title: "Dance (Classical & Contemporary)",
    category: "Dance & Drama",
    description: "Comprehensive training in Bharatanatyam, Kathak, or contemporary, focusing on expression & rhythm.",
    icon: <Sparkles className="w-6 h-6" />,
    href: "/services/dance",
  },
  {
    title: "Theatre & Acting",
    category: "Dance & Drama",
    description: "Develop acting skills, expressions, voice modulation, and stage confidence.",
    icon: <Heart className="w-6 h-6" />,
    href: "/services/theatre",
  },
  {
    title: "Flute Classes",
    category: "Music",
    description: "Learn classical flute playing with proper breathing, finger control, and beautiful ragas.",
    icon: <Compass className="w-6 h-6" />,
    href: "/services/flute",
  },
  {
    title: "Guitar & Advanced Guitar",
    category: "Music",
    description: "Master acoustic or electric guitar from basic chords to advanced solos and composition.",
    icon: <Music className="w-6 h-6" />,
    href: "/services/guitar",
  },
  {
    title: "Rubik's Cube Training",
    category: "Cognitive & Speech",
    description: "Boost spatial memory and logical reflexes by mastering speed cubing techniques.",
    icon: <Award className="w-6 h-6" />,
    href: "/services/rubiks-cube",
  },
  {
    title: "Storytelling & Public Speaking",
    category: "Cognitive & Speech",
    description: "Build exceptional communication skills, clear articulation, and compelling presentation skills.",
    icon: <Sparkles className="w-6 h-6" />,
    href: "/services/storytelling",
  },
];

export default function CourseCategories() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCourses =
    activeTab === "All" ? courses : courses.filter((c) => c.category === activeTab);

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#fdf6e3" }}
    >
      {/* Right-edge mandala ornament */}
      <div
        className="mandala-watermark right-[-80px] top-0 h-full w-[300px]"
        style={{ opacity: 0.07 }}
        aria-hidden="true"
      >
        <img
          src="/mandalas/tile-mandala.svg"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "sepia(1) saturate(3) hue-rotate(15deg)" }}
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
                color: "#c4882a",
                background: "rgba(196,136,42,0.1)",
                border: "1px solid rgba(196,136,42,0.25)",
              }}
            >
              ✦ Our Curriculum
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
            Explore Our{" "}
            <span style={{ color: "#c4882a" }}>Expert-Led</span> Programs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed"
            style={{ color: "rgba(26,10,46,0.65)" }}
          >
            Select a learning track tailored to your interest. Learn structured
            courses at your own pace from certified Gurus.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="relative px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 cursor-pointer"
              style={
                activeTab === cat
                  ? {
                      color: "#fff",
                      background: "linear-gradient(135deg, #c4882a, #e8a020)",
                      boxShadow: "0 4px 16px rgba(196,136,42,0.35)",
                      border: "none",
                    }
                  : {
                      color: "#5c1a1a",
                      background: "rgba(255,255,255,0.7)",
                      border: "1px solid rgba(196,136,42,0.25)",
                      backdropFilter: "blur(8px)",
                    }
              }
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="activeCategoryGold"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ background: "linear-gradient(135deg, #c4882a, #e8a020)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Subheadings */}
        <div className="text-center mb-16 h-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="text-sm md:text-base font-bold tracking-wider uppercase"
              style={{ color: "#c4882a", fontFamily: "var(--font-cinzel)" }}
            >
              {categorySubheadings[activeTab]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Courses Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => {
              const catColors = CATEGORY_COLORS[course.category] || CATEGORY_COLORS["Music"];
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  key={course.title}
                  className="group"
                >
                  <Link
                    href={course.href}
                    className="block h-full course-card-gold p-8 overflow-hidden relative"
                  >
                    {/* Top gold accent already in .course-card-gold */}

                    {/* Header: Icon & Category */}
                    <div className="flex justify-between items-start mb-7">
                      <div
                        className="w-13 h-13 w-[52px] h-[52px] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: "rgba(196,136,42,0.1)",
                          border: "1px solid rgba(196,136,42,0.25)",
                          color: "#c4882a",
                        }}
                      >
                        {course.icon}
                      </div>
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{
                          background: catColors.bg,
                          color: catColors.text,
                          border: `1px solid ${catColors.border}`,
                        }}
                      >
                        {course.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3
                      className="text-xl font-extrabold mb-3 transition-colors duration-300 group-hover:text-[#c4882a]"
                      style={{ fontFamily: "var(--font-playfair)", color: "#1a0a2e" }}
                    >
                      {course.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-7"
                      style={{ color: "rgba(26,10,46,0.6)" }}
                    >
                      {course.description}
                    </p>

                    {/* CTA */}
                    <div
                      className="flex items-center font-bold text-sm gap-2 transition-colors duration-300 group-hover:text-[#c4882a]"
                      style={{ color: "#5c1a1a" }}
                    >
                      <span>Learn More</span>
                      <ArrowRight
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center mt-20"
        >
          <Link href="/services">
            <button
              className="relative px-10 py-4 font-bold rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
              style={{
                border: "2px solid #c4882a",
                color: "#c4882a",
                background: "transparent",
              }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                View All Courses & Programs
              </span>
              <div
                className="absolute inset-0 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out"
                style={{ background: "linear-gradient(135deg, #c4882a, #e8a020)" }}
              />
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
