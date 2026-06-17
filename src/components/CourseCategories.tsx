"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Award, Keyboard, Compass, Target, BookOpen, Mic2, Heart, Sparkles } from "lucide-react";

const categories = ["All", "Music", "Dance & Drama", "Cognitive & Speech"];

const courses = [
  {
    title: "Classical Vocal Music",
    category: "Music",
    description: "Learn fundamentals and advanced techniques of Indian classical vocal music from expert gurus.",
    icon: <Mic2 className="w-6 h-6" />,
    href: "/services/carnatic-vocal",
    bgGradient: "from-amber-500/10 to-orange-500/10",
    hoverGlow: "rgba(245, 158, 11, 0.15)",
  },
  {
    title: "Keyboard & Piano",
    category: "Music",
    description: "Master playing techniques, music theory, and western or classical notations.",
    icon: <Keyboard className="w-6 h-6" />,
    href: "/services/keyboard",
    bgGradient: "from-blue-500/10 to-indigo-500/10",
    hoverGlow: "rgba(59, 130, 246, 0.15)",
  },
  {
    title: "Light Music & Bhajans",
    category: "Music",
    description: "Master soulful melodies, semi-classical, and devotional songs with performance-oriented training.",
    icon: <Music className="w-6 h-6" />,
    href: "/services/light-music",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    hoverGlow: "rgba(168, 85, 247, 0.15)",
  },
  {
    title: "Chess Coaching",
    category: "Cognitive & Speech",
    description: "Enhance strategic thinking, focus, and tactical problem-solving through master coaching.",
    icon: <Target className="w-6 h-6" />,
    href: "/services/chess",
    bgGradient: "from-slate-500/10 to-zinc-500/10",
    hoverGlow: "rgba(100, 116, 139, 0.15)",
  },
  {
    title: "Vedic Mathematics",
    category: "Cognitive & Speech",
    description: "Learn ancient, rapid mathematical techniques to perform complex calculations in seconds.",
    icon: <BookOpen className="w-6 h-6" />,
    href: "/services/vedic-maths",
    bgGradient: "from-yellow-500/10 to-amber-500/10",
    hoverGlow: "rgba(234, 179, 8, 0.15)",
  },
  {
    title: "Dance (Classical & Contemporary)",
    category: "Dance & Drama",
    description: "Comprehensive training in Bharatanatyam, Kathak, or contemporary, focusing on expression & rhythm.",
    icon: <Sparkles className="w-6 h-6" />,
    href: "/services/dance",
    bgGradient: "from-pink-500/10 to-rose-500/10",
    hoverGlow: "rgba(236, 72, 153, 0.15)",
  },
  {
    title: "Theatre & Acting",
    category: "Dance & Drama",
    description: "Develop acting skills, expressions, voice modulation, and stage confidence.",
    icon: <Heart className="w-6 h-6" />,
    href: "/services/theatre",
    bgGradient: "from-red-500/10 to-orange-500/10",
    hoverGlow: "rgba(239, 68, 68, 0.15)",
  },
  {
    title: "Flute Classes",
    category: "Music",
    description: "Learn classical flute playing with proper breathing, finger control, and beautiful ragas.",
    icon: <Compass className="w-6 h-6" />,
    href: "/services/flute",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    hoverGlow: "rgba(16, 185, 129, 0.15)",
  },
  {
    title: "Guitar & Advanced Guitar",
    category: "Music",
    description: "Master acoustic or electric guitar from basic chords to advanced solos and composition.",
    icon: <Music className="w-6 h-6" />,
    href: "/services/guitar",
    bgGradient: "from-orange-500/10 to-red-500/10",
    hoverGlow: "rgba(249, 115, 22, 0.15)",
  },
  {
    title: "Rubik's Cube Training",
    category: "Cognitive & Speech",
    description: "Boost spatial memory and logical reflexes by mastering speed cubing techniques.",
    icon: <Award className="w-6 h-6" />,
    href: "/services/rubiks-cube",
    bgGradient: "from-cyan-500/10 to-sky-500/10",
    hoverGlow: "rgba(6, 182, 212, 0.15)",
  },
  {
    title: "Storytelling & Public Speaking",
    category: "Cognitive & Speech",
    description: "Build exceptional communication skills, clear articulation, and compelling presentation skills.",
    icon: <Sparkles className="w-6 h-6" />,
    href: "/services/storytelling",
    bgGradient: "from-violet-500/10 to-indigo-500/10",
    hoverGlow: "rgba(139, 92, 246, 0.15)",
  },
];

export default function CourseCategories() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCourses = activeTab === "All"
    ? courses
    : courses.filter(c => c.category === activeTab);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-1/4 right-0 w-[45vw] h-[45vw] bg-accent/5 rounded-full blur-[120px] -z-10 animate-blob"></div>
      <div className="absolute bottom-1/4 left-0 w-[35vw] h-[35vw] bg-secondary/5 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span>Our Curriculum</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-primary mb-6"
          >
            Explore Our <span className="text-secondary">Expert-Led</span> Programs
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Select a learning track tailored to your interest. Learn structured courses at your own pace from certified Gurus.
          </motion.p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? "text-white shadow-lg shadow-primary/20"
                  : "text-gray-700 bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-white hover:text-primary hover:shadow-sm"
              }`}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="activeCategoryTab"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={course.title}
                className="group"
              >
                <Link
                  href={course.href}
                  className="block h-full relative glass-panel border-white/45 rounded-[2.2rem] p-8 overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(11,31,94,0.1)] transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Subtle Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-500 pointer-events-none"></div>
                  
                  {/* Color Glow blob */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${course.bgGradient} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>

                  {/* Header: Icon & Category */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {course.icon}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-extrabold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {course.description}
                  </p>

                  {/* Footer CTA */}
                  <div className="flex items-center text-primary font-bold text-sm mt-auto gap-2 group-hover:text-secondary transition-colors duration-300">
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Programs Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center mt-20"
        >
          <Link
            href="/services"
            className="group relative px-10 py-4 bg-white border border-primary/10 rounded-full font-bold text-primary hover:text-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="relative z-10">View All Courses & Programs</span>
            <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-350 ease-out -z-0"></div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

