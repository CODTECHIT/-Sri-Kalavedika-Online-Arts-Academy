"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Music, Palette, User, Music2, Star } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 100]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
    show: { y: 0, opacity: 1, filter: "blur(0px)", transition: { type: "spring" as const, stiffness: 50, damping: 15 } },
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Mesh */}
      <div className="absolute inset-0 mesh-bg -z-20 opacity-60"></div>
      
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[100px] -z-10 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-secondary/20 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-[30vw] h-[30vw] bg-primary/10 rounded-full blur-[120px] -z-10 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Text */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0"
          >
            <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/50">
              <Star className="w-4 h-4 text-secondary" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Where Tradition Meets Creativity
              </span>
            </motion.div>

            <div className="space-y-2 mb-8">
              <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] text-primary">
                Nurturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#2a52be]">Talent</span>
              </motion.h1>
              <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] text-gray-800">
                Preserving <span className="text-secondary">Tradition</span>
              </motion.h1>
              <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] text-primary">
                Inspiring <span className="text-accent">Excellence</span>
              </motion.h1>
            </div>

            <motion.p variants={item} className="text-base md:text-lg lg:text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
              Experience India&apos;s rich cultural heritage through premium online education in music, dance, and fine arts. Connect with master Gurus for a personalized learning journey.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="relative group px-8 py-4 bg-primary text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_40px_-10px_rgba(11,31,94,0.5)]">
                <span className="relative z-10">Book Free Demo</span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
              </button>
              <button className="px-8 py-4 bg-white/50 backdrop-blur-md text-primary border border-primary/10 rounded-full font-bold text-lg hover:bg-white hover:shadow-lg transition-all hover:-translate-y-1">
                Explore Courses
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visuals */}
          <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center">
            {/* Parallax background elements */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 flex items-center justify-center">
              <div className="w-[120%] h-[120%] bg-gradient-to-tr from-secondary/20 to-primary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              style={{ y: y2 }}
              className="relative z-20 w-[85%] sm:w-[70%] lg:w-[80%] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20"
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000" 
                alt="Arts student" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-20"></div>
              <div className="absolute bottom-6 left-6 right-6 z-30">
                <div className="glass-panel rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center">
                    <Star className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Top Rated Academy</p>
                    <p className="text-xs text-gray-600">5000+ Happy Students</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Icons */}
            <motion.div style={{ y: y3 }} className="absolute -left-4 top-1/4 z-30 animate-float">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center shadow-xl text-primary">
                <Music size={24} />
              </div>
            </motion.div>
            
            <motion.div style={{ y: y1, animationDelay: '1s' }} className="absolute right-0 top-1/3 z-30 animate-float">
              <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center shadow-xl text-secondary">
                <Palette size={20} />
              </div>
            </motion.div>
            
            <motion.div style={{ y: y2, animationDelay: '2s' }} className="absolute left-10 bottom-1/4 z-30 animate-float">
              <div className="w-20 h-20 rounded-full glass-panel flex items-center justify-center shadow-xl text-accent">
                <User size={30} />
              </div>
            </motion.div>

            <motion.div style={{ y: y3, animationDelay: '3s' }} className="absolute -right-8 bottom-1/3 z-10 animate-float">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center shadow-xl text-primary opacity-80">
                <Music2 size={24} />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
      </motion.div>
    </section>
  );
}
