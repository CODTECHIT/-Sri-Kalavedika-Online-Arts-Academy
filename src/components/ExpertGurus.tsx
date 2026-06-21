"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import bgMandala from "../../background-template-with-mandala-designs/kvtx_cz5f_191104.jpg";

const PHOTOS = [
  { src: "/photos/Dr. Devagupthapu Sai Lahari, Kuchipudi.jpeg", name: "Dr. Devagupthapu Sai Lahari, Kuchipudi" },
  { src: "/photos/Kum. Pakhi, Kathak.jpeg", name: "Kum. Pakhi, Kathak" },
  { src: "/photos/Kum. Pragya Tyagi, Kathak.jpeg", name: "Kum. Pragya Tyagi, Kathak" },
  { src: "/photos/Kum. Riya, Bollywood dance & Zumba.jpeg", name: "Kum. Riya, Bollywood dance & Zumba" },
  { src: "/photos/Shri Chembai Srinivas, Carnatic Violin Keerthanams.jpeg", name: "Shri Chembai Srinivas, Carnatic Violin Keerthanams" },
  { src: "/photos/Shri Dhruval Shah, Chess.jpeg", name: "Shri Dhruval Shah, Chess" },
  { src: "/photos/Shri Ganesh Singh, Flute.jpeg", name: "Shri Ganesh Singh, Flute" },
  { src: "/photos/Shri Joel Mathew, Bollywood dance Hip-hop Locking Beatboxing.jpeg", name: "Shri Joel Mathew, Bollywood dance Hip-hop Locking Beatboxing" },
  { src: "/photos/Shri Venkat Narayana, Carnatic Vocal Keyboard.jpeg", name: "Shri Venkat Narayana, Carnatic Vocal Keyboard" },
  { src: "/photos/Shri. Rahul Sukun, Guitar.jpeg", name: "Shri. Rahul Sukun, Guitar" },
  { src: "/photos/Smt. Sandhya Saki, Kuchipudi.jpeg", name: "Smt. Sandhya Saki, Kuchipudi" },
  { src: "/photos/Smt. Shubha Dixit, Hindustani Vocal.jpeg", name: "Smt. Shubha Dixit, Hindustani Vocal" },
  { src: "/photos/Smt. Vyshnavi Nambiar, Kuchipudi.jpeg", name: "Smt. Vyshnavi Nambiar, Kuchipudi" },
];

const LotusPedestal = () => (
  <svg viewBox="0 0 600 300" className="w-[380px] md:w-[560px] h-[190px] md:h-[280px] overflow-visible drop-shadow-[0_15px_30px_rgba(233,30,99,0.2)]">
    <defs>
      <linearGradient id="petal-back" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e91e63" />
        <stop offset="100%" stopColor="#880e4f" />
      </linearGradient>
      <linearGradient id="petal-mid" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f06292" />
        <stop offset="100%" stopColor="#c2185b" />
      </linearGradient>
      <linearGradient id="petal-front" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f8bbd0" />
        <stop offset="100%" stopColor="#e91e63" />
      </linearGradient>
      <linearGradient id="leaf-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="100%" stopColor="#14532d" />
      </linearGradient>
      
      {/* Slender, elegant pointed petals */}
      <path id="petal-b" d="M 300 250 C 255 160, 275 60, 300 10 C 325 60, 345 160, 300 250 Z" />
      <path id="petal-m" d="M 300 250 C 240 170, 265 70, 300 20 C 335 70, 360 170, 300 250 Z" />
      <path id="petal-f" d="M 300 250 C 235 180, 265 90, 300 40 C 335 90, 365 180, 300 250 Z" />
      
      {/* Wide, realistically curved lotus leaf */}
      <path id="leaf" d="M 50 220 Q 300 310, 550 220 Q 300 260, 50 220 Z" />
      <path id="leaf-side" d="M 150 210 Q 300 270, 450 210 Q 300 240, 150 210 Z" />
    </defs>

    {/* Realistic Leaves */}
    <g>
      <use href="#leaf-side" fill="url(#leaf-grad)" style={{ transform: "rotate(-18deg) translate(-100px, -20px)", transformOrigin: "300px 250px" }} />
      <use href="#leaf-side" fill="url(#leaf-grad)" style={{ transform: "rotate(18deg) translate(100px, -20px)", transformOrigin: "300px 250px" }} />
      <use href="#leaf" fill="url(#leaf-grad)" style={{ transform: "translateY(15px) scale(1.05)", transformOrigin: "300px 250px" }} />
    </g>

    {/* Back Petals - Wide Opening */}
    <g className="origin-[300px_250px]">
      {[-85, 85, -70, 70, -50, 50, -30, 30, -10, 10].map((angle, i) => (
        <use 
          key={`back-${i}`} 
          href="#petal-b" 
          fill="url(#petal-back)" 
          style={{ transform: `rotate(${angle}deg) scale(1.05)`, transformOrigin: "300px 250px" }} 
        />
      ))}
    </g>

    {/* Middle Petals */}
    <g className="origin-[300px_250px]">
      {[-75, 75, -55, 55, -35, 35, -15, 15].map((angle, i) => (
        <use 
          key={`mid-${i}`} 
          href="#petal-m" 
          fill="url(#petal-mid)" 
          style={{ transform: `rotate(${angle}deg) scale(0.9)`, transformOrigin: "300px 250px" }} 
        />
      ))}
    </g>

    {/* Front Petals */}
    <g className="origin-[300px_250px]">
      {[-60, 60, -40, 40, -20, 20, 0].map((angle, i) => (
        <use 
          key={`front-${i}`} 
          href="#petal-f" 
          fill="url(#petal-front)" 
          style={{ transform: `rotate(${angle}deg) scale(0.75)`, transformOrigin: "300px 250px" }} 
        />
      ))}
    </g>
  </svg>
);

export default function ExpertGurus() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentPhoto = PHOTOS[currentIndex];
  const parts = currentPhoto.name.split(", ");
  const guruName = parts[0];
  const specialtyStr = parts.slice(1).join(", ");

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#FAF3E7] to-[#ffffff] overflow-hidden">
      {/* Background Mandala */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]" 
        style={{ 
          backgroundImage: `url(${bgMandala.src})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          mixBlendMode: "multiply",
          filter: "grayscale(30%)"
        }} 
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[52px] font-extrabold text-[#2D1436] leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C89B3C] to-[#d6a94a]">Gurus</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[#8B7355] max-w-2xl mx-auto text-lg font-sans"
          >
            Learn directly from passionate, highly trained masters of traditional Indian arts.
          </motion.p>
        </div>

        {/* Goddess Pedestal Layout */}
        <div className="relative flex flex-col items-center w-full max-w-[600px] group mt-8">
          
          {/* Top Radial Glow for the image */}
          <div className="absolute top-[40px] w-[300px] h-[300px] bg-[#C89B3C] opacity-[0.15] rounded-full blur-[80px] transition-all duration-500 group-hover:opacity-[0.25] group-hover:scale-110 z-0 pointer-events-none" />

          {/* Layer 2: Circular Photo (Top Priority) */}
          <div className="relative z-10 w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full p-1 bg-gradient-to-br from-[#C89B3C] to-[#e91e63] shadow-[0_10px_30px_rgba(200,155,60,0.3)] group-hover:shadow-[0_15px_40px_rgba(200,155,60,0.5)] transition-all duration-500 group-hover:-translate-y-2">
            <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentPhoto.src}
                    alt={guruName}
                    fill
                    className="object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Layer 1: Lotus Pedestal (Behind image) */}
          <div className="relative z-0 mt-[-120px] md:mt-[-160px] transition-transform duration-500 group-hover:scale-[1.03] origin-bottom pointer-events-none">
            <LotusPedestal />
          </div>

          {/* Guru Details Badge */}
          <motion.div 
            className="relative z-30 mt-6 md:mt-10 flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-2"
          >
            <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 md:px-8 md:py-3.5 rounded-full shadow-xl border border-pink-100 flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-lg font-bold bg-gradient-to-br from-[#db2777] to-[#C89B3C] text-white shadow-inner flex-shrink-0">
                ॐ
              </div>
              <div className="text-center md:text-left flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.h3 
                    key={currentIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-[#2D1436] font-bold text-base md:text-xl whitespace-nowrap" 
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {guruName}
                  </motion.h3>
                </AnimatePresence>
                <p className="text-[9px] md:text-[10px] text-[#C89B3C] uppercase tracking-[0.2em] font-bold mt-0.5">
                  Expert Guru {specialtyStr && <span className="text-[#8B7355]">• {specialtyStr}</span>}
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Carousel controls */}
        <div className="flex justify-center gap-4 mt-12 relative z-40">
          <button 
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? PHOTOS.length - 1 : prev - 1))}
            className="w-12 h-12 rounded-full border-2 border-[#C89B3C]/30 flex items-center justify-center text-[#2D1436] hover:bg-[#C89B3C] hover:text-white hover:border-transparent hover:shadow-lg transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % PHOTOS.length)}
            className="w-12 h-12 rounded-full border-2 border-[#C89B3C]/30 flex items-center justify-center text-[#2D1436] hover:bg-[#C89B3C] hover:text-white hover:border-transparent hover:shadow-lg transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
