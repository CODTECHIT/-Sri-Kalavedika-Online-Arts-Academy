"use client";

import { motion } from "framer-motion";
import { Video, Award, Clock, Users, Trophy, GraduationCap, Sparkles } from "lucide-react";

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
      transition={{ duration: 0.8, delay, type: "spring", bounce: 0.2 }}
      className="glass-panel border-white/40 p-8 rounded-[2rem] flex flex-col items-start relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(11,31,94,0.08)] transition-all duration-500 hover:-translate-y-2"
    >
      {/* Background glow drop */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-secondary/10 to-primary/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

      <div className="w-14 h-14 rounded-2xl bg-secondary/5 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300 mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-extrabold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const features = [
    {
      title: "Live Online Classes",
      description: "Interactive, real-time sessions conducted on high-definition platforms with instant feedback from Gurus.",
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: "Experienced Gurus",
      description: "Learn from distinguished, certified artists and teachers dedicated to preserving authentic art forms.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Flexible Timings",
      description: "Convenient schedules customized for students residing in India as well as NRIs globally across timezones.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Personalized Sessions",
      description: "Choose between focused One-to-One mentoring or engaging group classes to suit your pace.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Performance Stages",
      description: "Regular online showcases and physical event opportunities to help you build confidence and shine.",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: "Certification Programs",
      description: "Structured academic curriculums culminating in recognized certifications and performance grading.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-bg-alt">
      {/* Background blobs */}
      <div className="absolute top-1/3 left-1/4 w-[35vw] h-[35vw] bg-primary/5 rounded-full blur-[120px] -z-10 animate-blob"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[30vw] h-[30vw] bg-accent/5 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: "3s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span>Why Choose Us</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-primary mb-6"
          >
            A Premium <span className="text-secondary">Learning</span> Ecosystem
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            We merge traditional pedagogical techniques with modern digital tools to ensure an enriching artistic journey.
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
