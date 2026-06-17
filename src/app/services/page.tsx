"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Music, Brain, Users, Sparkles, Globe, Clock, BookOpen, Paintbrush, ArrowRight } from "lucide-react";
import Link from "next/link";

const courseCategories = [
  {
    title: "Vocal Music",
    description: "Nurturing the voice through classical discipline, breath control, and contemporary genres.",
    icon: <Music className="w-6 h-6 text-blue-600" />,
    iconBg: "bg-blue-500/10 text-blue-600",
    courses: [
      "Carnatic Vocal",
      "Hindustani Classical Vocal",
      "Bhajans and Devotional Music",
      "Light Music",
      "Beat Boxing"
    ],
    bgGradient: "from-blue-500/20 to-indigo-500/10",
    glowColor: "rgba(59, 130, 246, 0.25)",
  },
  {
    title: "Dance",
    description: "Mastering body expressions, rhythms, and mudras across classical and modern choreography.",
    icon: <Sparkles className="w-6 h-6 text-rose-600" />,
    iconBg: "bg-rose-500/10 text-rose-600",
    courses: [
      "Bharatanatyam",
      "Kuchipudi",
      "Kathak",
      "Bollywood",
      "Semi-Classical Dance",
      "Hip-Hop, Locking, Voguing, Waacking, Popping"
    ],
    bgGradient: "from-rose-500/20 to-pink-500/10",
    glowColor: "rgba(244, 63, 94, 0.25)",
  },
  {
    title: "Instrumental Music",
    description: "Structured lessons for instruments with proper finger techniques, notations, and ragas.",
    icon: <Music className="w-6 h-6 text-amber-600" />,
    iconBg: "bg-amber-500/10 text-amber-600",
    courses: [
      "Violin",
      "Keyboard",
      "Mridangam",
      "Flute",
      "Guitar"
    ],
    bgGradient: "from-amber-500/20 to-orange-500/10",
    glowColor: "rgba(245, 158, 11, 0.25)",
  },
  {
    title: "Fine Arts",
    description: "Visual arts instruction covering sketching foundations, creative concepts, and colors.",
    icon: <Paintbrush className="w-6 h-6 text-emerald-600" />,
    iconBg: "bg-emerald-500/10 text-emerald-600",
    courses: [
      "Drawing",
      "Painting",
      "Creative Art"
    ],
    bgGradient: "from-emerald-500/20 to-teal-500/10",
    glowColor: "rgba(16, 185, 129, 0.25)",
  },
  {
    title: "Mind Games",
    description: "Cognitive development training focused on strategic depth and rapid calculation techniques.",
    icon: <Brain className="w-6 h-6 text-purple-600" />,
    iconBg: "bg-purple-500/10 text-purple-600",
    courses: [
      "Chess",
      "Rubiks' Cube (all levels)",
      "Vedik Maths"
    ],
    bgGradient: "from-purple-500/20 to-pink-500/10",
    glowColor: "rgba(139, 92, 246, 0.25)",
  },
  {
    title: "Cultural Programs & Workshops",
    description: "Seasonal intensive camps, masterclasses, and recitals to showcase student skills.",
    icon: <Globe className="w-6 h-6 text-cyan-600" />,
    iconBg: "bg-cyan-500/10 text-cyan-600",
    courses: [
      "Seasonal Art Camps",
      "Special Guru Masterclasses",
      "Art Recitals & Concerts",
      "Annual Day Showcases"
    ],
    bgGradient: "from-cyan-500/20 to-sky-500/10",
    glowColor: "rgba(6, 182, 212, 0.25)",
  },
];

const learningOptions = [
  {
    title: "Individual Classes",
    description: "Focused One-to-One mentoring sessions custom-tailored to the student's direct skill pace.",
    icon: <Users className="w-5 h-5 text-primary" />,
  },
  {
    title: "Group Classes",
    description: "Engaging interactive cohorts of students to encourage peer learning and collaboration.",
    icon: <Users className="w-5 h-5 text-primary" />,
  },
  {
    title: "Weekend Batches",
    description: "Flexible schedules allocated specifically during Saturdays and Sundays for busy students.",
    icon: <Clock className="w-5 h-5 text-secondary" />,
  },
  {
    title: "NRI-Friendly Timings",
    description: "Customized time slots scheduled to fit student zones in North America, Europe, Australia, and Middle East.",
    icon: <Globe className="w-5 h-5 text-primary" />,
  },
  {
    title: "Customized Learning Plans",
    description: "Bespoke curricula crafted dynamically by Gurus matching the student's targets.",
    icon: <BookOpen className="w-5 h-5" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden relative">
      {/* Background blobs */}
      <div className="absolute top-20 left-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] -z-10 animate-blob"></div>
      <div className="absolute bottom-20 right-0 w-[35vw] h-[35vw] bg-secondary/5 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: "3s" }}></div>

      <Header />
      
      <main className="flex-grow pt-32 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span>Our Curriculum</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6"
            >
              Explore Our <span className="text-secondary">Courses</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Sri Kalavedika offers a wide range of online courses designed for students of all ages and skill levels.
            </motion.p>
          </div>

          {/* Courses Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {courseCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative p-8 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white/50 shadow-sm hover:bg-white/90 transition-all duration-500 flex flex-col justify-between h-full group"
                style={{
                  // Dynamic ambient colored shadow on hover
                  '--hover-shadow': `0 35px 60px -15px ${category.glowColor}`,
                } as React.CSSProperties & Record<string, string>}
              >
                {/* CSS class mapping for custom dynamic shadow */}
                <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none transition-shadow duration-500 group-hover:shadow-[var(--hover-shadow)] border border-transparent group-hover:border-primary/10"></div>
                
                {/* Background soft color blur */}
                <div className={`absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br ${category.bgGradient} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 -z-10`}></div>

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${category.iconBg} flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-all duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-extrabold text-primary group-hover:text-secondary transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {category.description}
                  </p>

                  {/* Aesthetic Lists instead of badges */}
                  <div className="space-y-3 mb-8">
                    {category.courses.map((course, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-sm text-gray-700 font-medium tracking-tight">
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Admission call-to-action */}
                <Link
                  href="/admissions"
                  className="flex items-center text-primary font-bold text-sm mt-auto gap-2 group-hover:text-secondary transition-colors duration-300 border-t border-primary/5 pt-5 relative z-10"
                >
                  <span>Request Admissions Info</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Learning Options Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold text-primary mb-4"
            >
              Learning Options
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 text-base leading-relaxed"
            >
              We provide multiple structured formats tailored to fit global timezones and learning formats.
            </motion.p>
          </div>

          {/* Learning Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningOptions.map((option, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel border-white/40 p-8 rounded-[2rem] flex flex-col items-start relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(11,31,94,0.06)] transition-all duration-500 hover:-translate-y-1.5"
              >
                <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 w-20 h-20 bg-gradient-to-br from-secondary/5 to-primary/0 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {option.icon}
                </div>

                <h3 className="text-lg font-extrabold text-primary mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
