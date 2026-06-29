"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Trophy, Image as ImageIcon, Sparkles, Calendar, Award } from "lucide-react";
import DecorativeDivider from "@/components/ui/DecorativeDivider";

const GALLERY_ITEMS = [
  {
    title: "Exploring the World of Bharatanatyam",
    description: "An introduction to one of India's most ancient and revered classical dance forms, showcasing mudras and traditional expressions.",
    category: "Dance",
    image: "/b1.jpeg",
  },
  {
    title: "The Joy of Painting: A Creative Journey",
    description: "Discover how painting and visual arts unlock a child's imagination, helping them express ideas through color and stroke.",
    category: "Arts",
    image: "/b2.jpeg",
  },
  {
    title: "Guitar Mastery: From Basics to Brilliance",
    description: "Capturing the dedication in chord practice, music theory application, and instrumental mastery during our live online classes.",
    category: "Music",
    image: "/b3.jpeg",
  },
  {
    title: "The Magic of Kathak Dance",
    description: "Experiencing the storytelling, swift spins, and rhythmic footwork of Kathak classical dance.",
    category: "Dance",
    image: "/b4.jpeg",
  },
  {
    title: "Developing Your Child's Creative Skills",
    description: "Interactive crafts and visual skills training designed to nurture early development and creative coordination.",
    category: "Education",
    image: "/b5.jpeg",
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] text-sm font-bold uppercase tracking-widest mb-6"
            >
              <ImageIcon className="w-4 h-4" />
              <span>Academy Gallery & Achievements</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-primary mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Visual Showcase & <span className="text-[#C89B3C]">Success Stories</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Explore moments of artistic dedication, musical discipline, and outstanding student achievements at Sri Kalavedika.
            </motion.p>
          </div>

          {/* Featured Achievement Section: Vihan Singh */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(45,20,54,0.06)] border border-[#C89B3C]/15 relative overflow-hidden"
            >
              {/* Decorative Glow blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C89B3C]/5 rounded-full blur-3xl -z-10"></div>
              
              <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                <div className="flex-1 w-full max-w-md lg:max-w-none">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
                    <img
                      src="/Screenshot 2026-06-27 192746.png"
                      alt="Vihan Singh - Chess Prodigy"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2D1436] to-[#4A1D5A] text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                    <Trophy className="w-4 h-4 text-[#C89B3C]" />
                    <span>Featured National Achievement</span>
                  </div>
                  
                  <h2 
                    className="text-3xl md:text-4xl font-extrabold text-[#2D1436]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Vihan Singh
                  </h2>
                  
                  <p className="text-lg text-[#C89B3C] font-bold">Seven-Year-Old Chess Prodigy & Rajasthan State Representative</p>
                  
                  <p className="text-gray-600 leading-relaxed text-base">
                    Vihan Singh, a seven-year-old chess prodigy from Udaipur, has earned recognition at the national level after learning the game during the COVID-19 lockdown. What began as an online activity to utilize time at home soon turned into a serious passion for chess.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed text-base">
                    Through consistent practice, dedication, and impressive performances in various tournaments, Vihan qualified to represent Rajasthan in the National Chess Championship. His achievement at such a young age highlights his talent, determination, and the support of his family and coaches. Vihan's journey serves as an inspiration for young learners, proving that challenges can be transformed into opportunities for success.
                  </p>
                  
                  <div className="flex gap-4 items-center pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#C89B3C]" />
                      <span className="text-sm font-bold text-[#2D1436]">National Level Qualifier</span>
                    </div>
                    <div className="w-1.5 h-1.5 bg-[#C89B3C] rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#C89B3C]" />
                      <span className="text-sm font-bold text-[#2D1436]">Representing Rajasthan</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Featured Achievement Section: Rishik Ganga Reddy */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(45,20,54,0.06)] border border-[#C89B3C]/15 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C89B3C]/5 rounded-full blur-3xl -z-10"></div>
              
              <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                <div className="flex-1 w-full max-w-md lg:max-w-none flex gap-4">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-100 flex-1">
                    <img
                      src="/student 1.jpg"
                      alt="Rishik Ganga Reddy - Chess Champ"
                      className="w-full h-auto block"
                    />
                  </div>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-100 flex-1 hidden md:block">
                    <img
                      src="/student1.1.jpg"
                      alt="Rishik Ganga Reddy - Chess Tournament"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2D1436] to-[#4A1D5A] text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                    <Trophy className="w-4 h-4 text-[#C89B3C]" />
                    <span>Featured Achievement</span>
                  </div>
                  
                  <h2 
                    className="text-3xl md:text-4xl font-extrabold text-[#2D1436]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Rishik Ganga Reddy
                  </h2>
                  
                  <p className="text-lg text-[#C89B3C] font-bold">Chess Champion ✨️🏆♟️</p>
                  
                  <p className="text-gray-600 leading-relaxed text-base">
                    And our New year started with Victories... Victory of our chess champs..
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed text-base">
                    Heartiest congratulations to Rishik Ganga Reddy for getting 4th position at open and children’s chess Tournament held in Hyderabad. Best best wishes keep shining always!
                  </p>
                  
                  <div className="flex gap-4 items-center pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#C89B3C]" />
                      <span className="text-sm font-bold text-[#2D1436]">4th Position</span>
                    </div>
                    <div className="w-1.5 h-1.5 bg-[#C89B3C] rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#C89B3C]" />
                      <span className="text-sm font-bold text-[#2D1436]">Hyderabad Tournament</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Gallery Grid */}
          <section>
            <div className="flex items-center gap-3 mb-10">
              <Sparkles className="text-[#C89B3C]" size={28} />
              <h2 
                className="text-3xl font-bold text-primary"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Disciplines Showcase
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {GALLERY_ITEMS.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(45,20,54,0.04)] border border-gray-100 transition-all duration-300"
                >
                  <div className="relative overflow-hidden bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto block transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#2D1436] text-[#f5c842] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#f5c842]/30">
                      {item.category}
                    </div>
                  </div>
                  

                </motion.div>
              ))}
            </div>
          </section>

          {/* Videos Grid */}
          <section className="mt-24">
            <div className="flex items-center gap-3 mb-10">
              <Sparkles className="text-[#C89B3C]" size={28} />
              <h2 
                className="text-3xl font-bold text-primary"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Student Learning
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "/student video 1.mp4",
                "/student learning video.mp4",
                "/student learning video 2.mp4",
                "/student learning video 3.mp4",
                "/student learning video 4.mp4"
              ].map((videoSrc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(45,20,54,0.04)] border border-gray-100 transition-all duration-300"
                >
                  <div className="relative overflow-hidden bg-black aspect-video flex items-center justify-center">
                    <video
                      src={videoSrc}
                      controls
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <DecorativeDivider />
      <Footer />
    </div>
  );
}
