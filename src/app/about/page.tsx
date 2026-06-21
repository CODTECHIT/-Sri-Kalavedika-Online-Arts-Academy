"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, Shield, Users, History, Globe, Sparkles, BookOpen, Youtube, Instagram, Star, Music } from "lucide-react";
import pageBgImage from "../../../background-template-with-mandala-pattern-design/43584.jpg";

export default function AboutPage() {
  const values = [
    {
      title: "Excellence in Teaching",
      description: "Delivering high-quality arts instruction through experienced and passionate Gurus.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Respect for Tradition",
      description: "Honoring traditional Guru-Shishya values while adapting to contemporary digital platforms.",
      icon: <History className="w-6 h-6" />,
    },
    {
      title: "Student-Centered Learning",
      description: "Fostering individualized learning speeds and personal artistic pathways.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Cultural Preservation",
      description: "Nurturing classical and cultural roots to pass India's rich heritage down to future generations.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Inclusivity & Global Reach",
      description: "Providing seamless global access to traditional Indian arts training for learners worldwide.",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  return (
    <div 
      className="min-h-screen flex flex-col overflow-x-hidden relative"
      style={{ 
        backgroundImage: `linear-gradient(rgba(253, 246, 227, 0.85), rgba(253, 246, 227, 0.95)), url(${pageBgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Background blobs for premium depth */}
      <div className="absolute top-20 right-0 w-[40vw] h-[40vw] bg-secondary/5 rounded-full blur-[120px] -z-10 animate-blob"></div>
      <div className="absolute top-1/2 left-0 w-[35vw] h-[35vw] bg-primary/5 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: "2s" }}></div>

      <Header />
      
      <main className="flex-grow pt-32 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span>Who We Are</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary"
            >
              About <span className="text-secondary">Us</span>
            </motion.h1>
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-extrabold text-primary relative inline-block">
                Our Story
                <span className="absolute bottom-[-6px] left-0 w-12 h-1 bg-secondary rounded-full" />
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-medium pt-2">
                Founded with a vision to make Indian arts accessible to learners across the globe, Sri Kalavedika has been nurturing talent and fostering artistic excellence for the past five years.
              </p>
              <p className="text-gray-655 text-base leading-relaxed">
                Our academy serves as a bridge between traditional Guru-Shishya learning and modern online education, enabling students to learn from accomplished teachers regardless of geographical boundaries.
              </p>
              <p className="text-gray-655 text-base leading-relaxed">
                We believe that Indian classical and cultural arts are not merely skills but a way of life that enriches character, creativity, and cultural understanding. Through dedicated mentorship and structured training, we strive to inspire a lifelong appreciation for the arts.
              </p>
            </motion.div>

            {/* Premium visual container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md mx-auto lg:max-w-none"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(11,31,94,0.15)] border-8 border-white bg-white aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800" 
                  alt="Traditional Indian Arts Learning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full -z-10 animate-float opacity-30 blur-xl"></div>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
            
            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel border-white/40 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(11,31,94,0.06)] transition-all duration-500"
            >
              <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-extrabold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-655 text-base leading-relaxed">
                To become a globally recognized platform for Indian arts education, preserving cultural traditions while empowering future generations of artists and enthusiasts.
              </p>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass-panel border-white/40 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(11,31,94,0.06)] transition-all duration-500"
            >
              <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 w-24 h-24 bg-gradient-to-br from-secondary/10 to-primary/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="w-12 h-12 rounded-xl bg-secondary/5 text-secondary flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-extrabold text-primary mb-4">Our Mission</h3>
              <ul className="space-y-4">
                {[
                  "To provide quality arts education through experienced and passionate Gurus.",
                  "To make Indian cultural learning accessible to students worldwide.",
                  "To nurture confidence, creativity, discipline, and artistic excellence.",
                  "To preserve and promote India's rich artistic heritage."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-655 text-sm md:text-base leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* Meet the Founder Section */}
          <div className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/15 text-secondary text-xs font-bold uppercase tracking-wider mb-4"
              >
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                <span>Leadership</span>
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
                Meet the Founder
              </h2>
            </div>

            {/* Founder Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel border-white/40 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(11,31,94,0.08)] transition-all duration-500 mb-10"
            >
              <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -z-10 animate-blob"></div>

              <div className="flex flex-col lg:flex-row gap-12 items-start">
                
                {/* Founder Info & Narrative */}
                <div className="flex-grow space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-2">
                      Mrs. Praveen Mehera
                    </h3>
                    <p className="text-secondary font-bold text-sm uppercase tracking-wider">
                      Founder, Sri Kalavedika • Devotional Singer • Public Figure
                    </p>
                  </div>

                  <p className="text-gray-750 text-base md:text-lg leading-relaxed font-medium">
                    Mrs. Praveen Mehera is the Founder of Sri Kalavedika, an initiative dedicated to promoting Indian arts and culture among learners across the world. A Consultant with the Government and a Cyber Law enthusiast, she is also a passionate learner of Carnatic Music and an active participant in cultural and artistic activities.
                  </p>

                  <div className="pt-4 space-y-4">
                    <p className="text-sm text-gray-655 leading-relaxed">
                      She has performed as a devotional singer during Ugadi and Sri Rama Navami celebrations at AP Bhavan in 2026 and portrayed DSP Sheetal Batra in the Cyber Crime Ki Duniya. She is actively associated with various cultural and community organizations as a singer, anchor, voice-over artist, and cultural coordinator.
                    </p>
                    <p className="text-sm text-gray-655 leading-relaxed">
                      Fluent in Telugu, Hindi, and English, she enjoys connecting with people through art, culture, and education. Through Sri Kalavedika, she aims to create a platform where students and Gurus come together to learn, preserve, and celebrate India's rich artistic heritage.
                    </p>
                  </div>

                  {/* YouTube & Instagram Handles */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-primary/5">
                    <span className="text-sm font-bold text-primary">Connect with the Founder:</span>
                    <a
                      href="https://youtube.com/@goodvibesbypraveenmehera"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 hover:bg-red-100 px-4 py-2.5 rounded-full transition-colors cursor-pointer"
                    >
                      <Youtube className="w-4 h-4" />
                      <span>YouTube</span>
                    </a>
                    <a
                      href="https://instagram.com/goodvibesbypraveenmehera"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pink-650 bg-pink-50 hover:bg-pink-100 px-4 py-2.5 rounded-full transition-colors cursor-pointer"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Husband Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-secondary/5 border border-secondary/10 p-8 rounded-[2rem] relative overflow-hidden group hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h4 className="text-lg font-extrabold text-primary mb-1">
                    Family & Musical Foundation
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
                    Mrs. Praveen Mehera is supported by her husband, <span className="text-primary font-bold">Ivaturi Veerendranadha Kasyap</span>, an Advocate practicing before the Supreme Court of India and a State-Level Gold Medalist in Mridangam. Their shared passion for culture and excellence continues to inspire the vision of Sri Kalavedika.
                  </p>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-2 bg-secondary text-white rounded-full text-xs font-bold uppercase tracking-widest shrink-0 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  <span>Mridangam Gold Medalist</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Our Values */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-extrabold text-primary mb-4"
              >
                Our Values
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-650 text-base leading-relaxed"
              >
                These core principles shape our teaching methodologies, Guru selections, and student mentoring guidelines.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, idx) => (
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
                    {value.icon}
                  </div>

                  <h3 className="text-lg font-extrabold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
