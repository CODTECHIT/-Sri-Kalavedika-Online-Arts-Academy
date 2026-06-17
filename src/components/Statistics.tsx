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
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 80,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
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
      className="glass-panel border-white/40 p-8 rounded-[2rem] flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(11,31,94,0.08)] transition-all duration-500 hover:-translate-y-2"
    >
      <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 w-24 h-24 bg-gradient-to-br from-secondary/10 to-primary/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      
      <div>
        <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
          {icon}
        </div>
        
        <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-2 flex items-baseline tracking-tight">
          <span ref={ref}>0</span>
          <span className="text-secondary">{suffix}</span>
        </h3>
        
        <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors duration-300">
          {label}
        </h4>
      </div>
      
      <p className="text-sm text-gray-500 leading-relaxed mt-4 border-t border-primary/5 pt-4">
        {description}
      </p>
    </motion.div>
  );
}

export default function Statistics() {
  const stats: StatItemProps[] = [
    {
      value: 5000,
      suffix: "+",
      label: "Active Learners",
      description: "Connecting students globally with Indian culture through structured online lessons.",
      icon: <Users className="w-7 h-7" />,
    },
    {
      value: 50,
      suffix: "+",
      label: "Expert Gurus",
      description: "Learn directly from certified artists, domain masters, and experienced instructors.",
      icon: <Award className="w-7 h-7" />,
    },
    {
      value: 20,
      suffix: "+",
      label: "Art Forms",
      description: "Explore Classical Vocal, Carnatic, Bharatanatyam, Kathak, Instrumentals, and Painting.",
      icon: <BookOpen className="w-7 h-7" />,
    },
    {
      value: 12,
      suffix: "+",
      label: "Countries Reached",
      description: "Inspiring students from India, US, UK, Canada, UAE, Australia, and beyond.",
      icon: <Globe className="w-7 h-7" />,
    },
  ];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-background">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30vw] h-[30vw] bg-secondary/5 rounded-full blur-[100px] -z-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[25vw] h-[25vw] bg-primary/5 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
