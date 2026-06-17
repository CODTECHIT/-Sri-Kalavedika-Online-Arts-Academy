"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, UserCheck, BookOpen, Trophy, GraduationCap, Sparkles } from "lucide-react";

interface JourneyStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  alignLeft?: boolean;
}

function JourneyStep({ number, title, description, icon, alignLeft = false }: JourneyStepProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={ref} 
      className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-16 last:mb-0 ${
        alignLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Spacer for Desktop */}
      <div className="hidden md:block w-[45%]" />

      {/* Circle Icon Indicator */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-primary shadow-lg group">
        <div className="w-6 h-6 flex items-center justify-center text-primary group-hover:scale-115 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: alignLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", stiffness: 45 }}
        className="w-full md:w-[45%] pl-16 md:pl-0"
      >
        <div className="glass-panel border-white/40 p-8 rounded-[2rem] hover:shadow-[0_20px_50px_rgba(11,31,94,0.06)] transition-shadow duration-500 relative group">
          {/* Subtle line index indicator */}
          <div className="absolute top-6 right-6 font-outfit text-5xl font-black text-primary/5 select-none transition-colors group-hover:text-secondary/10">
            {number}
          </div>
          
          <h3 className="text-xl font-extrabold text-primary mb-3">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
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
      description: "Explore our diverse curriculum of classical vocal, instrumentals, dance forms, or chess, and schedule a free live demo session.",
      icon: <Search className="w-4 h-4" />,
    },
    {
      number: "02",
      title: "Find Your Perfect Guru",
      description: "Get matched with an experienced, certified guru who aligns with your skill level, background, and learning objectives.",
      icon: <UserCheck className="w-4 h-4" />,
    },
    {
      number: "03",
      title: "Structured Learning Track",
      description: "Participate in live online courses featuring individualized mentoring, comprehensive notes, and homework review logs.",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      number: "04",
      title: "Performance & Showcases",
      description: "Present your skills in seasonal online recitals, community workshops, and physical performance spaces to build stage presence.",
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      number: "05",
      title: "Certification & Beyond",
      description: "Acquire recognized academy diplomas upon completing structured grading levels and unlock global opportunities.",
      icon: <GraduationCap className="w-4 h-4" />,
    },
  ];

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-10 w-[30vw] h-[30vw] bg-secondary/5 rounded-full blur-[100px] -z-10 animate-blob"></div>
      <div className="absolute bottom-1/4 right-10 w-[25vw] h-[25vw] bg-accent/5 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: "4s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span>Learning Timeline</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-primary mb-6"
          >
            Your Artistic <span className="text-secondary">Evolution</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            From your very first demo class to earning recognized credentials, we support and guide you through every milestone.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Line Base */}
          <div className="absolute left-10 md:left-1/2 top-4 bottom-4 w-[2px] bg-primary/10 -translate-x-1/2 -z-10" />

          {/* Scrolling Filled Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-10 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2 -z-10 shadow-[0_0_12px_rgba(255,159,67,0.3)]"
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
