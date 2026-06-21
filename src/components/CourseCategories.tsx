"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Award, Keyboard, Compass, Target, BookOpen, Mic2, Heart, Sparkles, ArrowRight, Palette, Brush, BrainCircuit, Users, Activity, Play, Image as ImageIcon } from "lucide-react";

const categories = ["All", "Vocal Music", "Dance", "Instrumental Music", "Fine Arts", "Mind games", "Cultural Programs"];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Vocal Music": { bg: "rgba(196,136,42,0.12)", text: "#c4882a", border: "rgba(196,136,42,0.3)" },
  "Dance": { bg: "rgba(92,26,26,0.15)", text: "#e8a020", border: "rgba(92,26,26,0.3)" },
  "Instrumental Music": { bg: "rgba(26,10,46,0.12)", text: "#1a0a2e", border: "rgba(26,10,46,0.2)" },
  "Fine Arts": { bg: "rgba(34,139,34,0.12)", text: "#228B22", border: "rgba(34,139,34,0.3)" },
  "Mind games": { bg: "rgba(70,130,180,0.12)", text: "#4682B4", border: "rgba(70,130,180,0.3)" },
  "Cultural Programs": { bg: "rgba(255,140,0,0.12)", text: "#FF8C00", border: "rgba(255,140,0,0.3)" },
};

const categorySubheadings: Record<string, string> = {
  "All": "Vocal Music • Dance • Instrumental Music • Fine Arts • Mind games • Cultural Programs",
  "Vocal Music": "Carnatic Vocal • Hindustani Classical Vocal • Bhajans and Devotional Music • Light Music • Beat Boxing",
  "Dance": "Bharatanatyam • Kuchipudi • Kathak • Bollywood • Semi-Classical Dance • Hip-Hop, Locking, Voguing, Waacking, Popping",
  "Instrumental Music": "Violin • Keyboard • Mridangam • Flute • Guitar",
  "Fine Arts": "Drawing • Painting • Creative Art",
  "Mind games": "Chess • Rubiks' Cube (all levels) • Vedik Maths",
  "Cultural Programs": "Cultural Programs and Workshops"
};

const courses = [
  // Vocal Music
  {
    title: "Carnatic Vocal",
    category: "Vocal Music",
    description: "Learn the traditional, structured, and deeply devotional Carnatic vocal music from expert gurus.",
    icon: <Mic2 className="w-6 h-6" />,
    href: "/services/carnatic-vocal",
  },
  {
    title: "Hindustani Classical Vocal",
    category: "Vocal Music",
    description: "Master the soulful melodies and ragas of North Indian Hindustani classical vocal.",
    icon: <Music className="w-6 h-6" />,
    href: "/services/hindustani-vocal",
  },
  {
    title: "Bhajans and Devotional Music",
    category: "Vocal Music",
    description: "Sing divine and spiritually uplifting bhajans and devotional songs.",
    icon: <Heart className="w-6 h-6" />,
    href: "/services/bhajans",
  },
  {
    title: "Light Music",
    category: "Vocal Music",
    description: "Learn popular melodies, cinematic, and semi-classical songs with expressive singing.",
    icon: <Play className="w-6 h-6" />,
    href: "/services/light-music",
  },
  {
    title: "Beat Boxing",
    category: "Vocal Music",
    description: "Master vocal percussion, rhythms, and modern beatboxing techniques.",
    icon: <Activity className="w-6 h-6" />,
    href: "/services/beat-boxing",
  },

  // Dance
  {
    title: "Bharatanatyam",
    category: "Dance",
    description: "Learn the ancient and graceful classical dance form from South India, focusing on expression and rhythm.",
    icon: <Sparkles className="w-6 h-6" />,
    href: "/services/bharatanatyam",
  },
  {
    title: "Kuchipudi",
    category: "Dance",
    description: "Master Kuchipudi with its unique blend of expressive storytelling and vibrant footwork.",
    icon: <Sparkles className="w-6 h-6" />,
    href: "/services/kuchipudi",
  },
  {
    title: "Kathak",
    category: "Dance",
    description: "Explore the rhythmic footwork, rapid spins, and storytelling of North Indian Kathak.",
    icon: <Sparkles className="w-6 h-6" />,
    href: "/services/kathak",
  },
  {
    title: "Bollywood",
    category: "Dance",
    description: "Energetic and fun dance routines set to popular Bollywood tracks.",
    icon: <Users className="w-6 h-6" />,
    href: "/services/bollywood",
  },
  {
    title: "Semi-Classical Dance",
    category: "Dance",
    description: "A beautiful fusion of traditional classical movements with contemporary music.",
    icon: <Heart className="w-6 h-6" />,
    href: "/services/semi-classical-dance",
  },
  {
    title: "Hip-Hop & Urban Styles",
    category: "Dance",
    description: "Learn Hip-Hop, Locking, Voguing, Waacking, and Popping from dynamic instructors.",
    icon: <Activity className="w-6 h-6" />,
    href: "/services/hip-hop",
  },

  // Instrumental Music
  {
    title: "Violin",
    category: "Instrumental Music",
    description: "Learn bowing techniques and melodies on the violin, classical or western styles.",
    icon: <Music className="w-6 h-6" />,
    href: "/services/violin",
  },
  {
    title: "Keyboard",
    category: "Instrumental Music",
    description: "Master playing techniques, music theory, and notations on the keyboard.",
    icon: <Keyboard className="w-6 h-6" />,
    href: "/services/keyboard",
  },
  {
    title: "Mridangam",
    category: "Instrumental Music",
    description: "Learn traditional Carnatic percussion and complex rhythmic patterns.",
    icon: <Target className="w-6 h-6" />,
    href: "/services/mridangam",
  },
  {
    title: "Flute",
    category: "Instrumental Music",
    description: "Master breathing techniques, finger control, and beautiful ragas on the flute.",
    icon: <Compass className="w-6 h-6" />,
    href: "/services/flute",
  },
  {
    title: "Guitar",
    category: "Instrumental Music",
    description: "Learn acoustic or electric guitar, from basic chords to advanced solos.",
    icon: <Music className="w-6 h-6" />,
    href: "/services/guitar",
  },

  // Fine Arts
  {
    title: "Drawing",
    category: "Fine Arts",
    description: "Develop foundational drawing skills using various techniques and mediums.",
    icon: <Brush className="w-6 h-6" />,
    href: "/services/drawing",
  },
  {
    title: "Painting",
    category: "Fine Arts",
    description: "Explore color theory, acrylics, watercolors, and oil painting.",
    icon: <Palette className="w-6 h-6" />,
    href: "/services/painting",
  },
  {
    title: "Creative Art",
    category: "Fine Arts",
    description: "Unleash your creativity with mixed media, crafts, and expressive art forms.",
    icon: <ImageIcon className="w-6 h-6" />,
    href: "/services/creative-art",
  },

  // Mind games
  {
    title: "Chess",
    category: "Mind games",
    description: "Enhance strategic thinking, focus, and tactical problem-solving.",
    icon: <Target className="w-6 h-6" />,
    href: "/services/chess",
  },
  {
    title: "Rubiks' Cube (all levels)",
    category: "Mind games",
    description: "Boost spatial memory and logical reflexes by mastering speed cubing techniques.",
    icon: <Award className="w-6 h-6" />,
    href: "/services/rubiks-cube",
  },
  {
    title: "Vedik Maths",
    category: "Mind games",
    description: "Learn ancient, rapid mathematical techniques to perform complex calculations in seconds.",
    icon: <BrainCircuit className="w-6 h-6" />,
    href: "/services/vedik-maths",
  },

  // Cultural Programs
  {
    title: "Cultural Programs & Workshops",
    category: "Cultural Programs",
    description: "Participate in special workshops and cultural programs celebrating Indian arts.",
    icon: <Users className="w-6 h-6" />,
    href: "/services/cultural-programs",
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

        {/* Learning Options */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", color: "#1a0a2e" }}>
            Flexible <span style={{ color: "#c4882a" }}>Learning Options</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Individual Classes", "Group Classes", "Weekend Batches", "NRI-Friendly Timings", "Customized Learning Plans"].map((option, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 rounded-full font-semibold text-sm md:text-base flex items-center gap-2"
                style={{
                  background: "rgba(196,136,42,0.1)",
                  border: "1px solid rgba(196,136,42,0.25)",
                  color: "#5c1a1a",
                }}
              >
                <span style={{ color: "#c4882a" }}>✦</span> {option}
              </div>
            ))}
          </div>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center mt-12"
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
