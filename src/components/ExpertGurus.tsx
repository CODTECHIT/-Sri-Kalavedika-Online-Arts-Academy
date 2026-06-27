"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Music, ChevronLeft, ChevronRight } from "lucide-react";
import bgMandala from "../../background-template-with-mandala-designs/kvtx_cz5f_191104.jpg";

const GURUS = [
  { name: "Dr. Devagupthapu Sai Lahari", specialty: "Kuchipudi", src: "/photos/Dr. Devagupthapu Sai Lahari, Kuchipudi.jpeg" },
  { name: "Kum. Pakhi", specialty: "Kathak", src: "/photos/Kum. Pakhi, Kathak.jpeg" },
  { name: "Kum. Pragya Tyagi", specialty: "Kathak", src: "/photos/Kum. Pragya Tyagi, Kathak.jpeg" },
  { name: "Kum. Riya", specialty: "Bollywood & Zumba", src: "/photos/Kum. Riya, Bollywood dance & Zumba.jpeg" },
  { name: "Shri Chembai Srinivas", specialty: "Carnatic Violin", src: "/photos/Shri Chembai Srinivas, Carnatic Violin Keerthanams.jpeg" },
  { name: "Shri Dhruval Shah", specialty: "Chess", src: "/photos/Shri Dhruval Shah, Chess.jpeg" },
  { name: "Shri Ganesh Singh", specialty: "Flute", src: "/photos/Shri Ganesh Singh, Flute.jpeg" },
  { name: "Shri Joel Mathew", specialty: "Hip-hop & Beatboxing", src: "/photos/Shri Joel Mathew, Bollywood dance Hip-hop Locking Beatboxing.jpeg" },
  { name: "Shri Venkat Narayana", specialty: "Carnatic Vocal & Keyboard", src: "/photos/Shri Venkat Narayana, Carnatic Vocal Keyboard.jpeg" },
  { name: "Shri. Rahul Sukun", specialty: "Guitar", src: "/photos/Shri. Rahul Sukun, Guitar.jpeg" },
  { name: "Smt. Sandhya Saki", specialty: "Kuchipudi", src: "/photos/Smt. Sandhya Saki, Kuchipudi.jpeg" },
  { name: "Smt. Shubha Dixit", specialty: "Hindustani Vocal", src: "/photos/Smt. Shubha Dixit, Hindustani Vocal.jpeg" },
  { name: "Smt. Vyshnavi Nambiar", specialty: "Kuchipudi", src: "/photos/Smt. Vyshnavi Nambiar, Kuchipudi.jpeg" },
  { name: "Kum. Aditi Saha", specialty: "Bharatanatyam", src: "/photos/kum aditi saha , bharatnatyam.jpeg" },
  { name: "Nilanjana Malkhandi", specialty: "Bharatanatyam", src: "/photos/Nilanjana Malkhandi, Bharatnatyam.jpeg" },
  { name: "Shri Arnab Basak", specialty: "Guitar", src: "/photos/Shri Arnab Basak, Guitar.jpeg" },
  { name: "Shri Lucjan (Poland)", specialty: "Advanced Guitar", src: "/photos/Shri Lucjan, Poland - Adcanced Guitar.jpeg" },
];

// Triplicate the list for seamless infinite marquee scrolling
const DISPLAY_GURUS = [...GURUS, ...GURUS, ...GURUS];

export default function ExpertGurus() {
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isScrollingRef = useRef(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Pause marquee auto-scroll during manual navigation
      isScrollingRef.current = true;
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
      // Resume auto-scroll 2 seconds after the manual navigation is triggered
      pauseTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 2000);

      const scrollAmount = direction === "left" ? -352 : 352; // Scroll exactly by one card width (320px + 32px gap)
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    let hasInitialized = false;
    const scrollSpeed = 0.7; // Gentle auto-scroll speed (pixels per frame)

    const animate = () => {
      const singleSetWidth = container.scrollWidth / 3;

      // Initialize starting position to the middle set
      if (!hasInitialized && singleSetWidth > 0) {
        container.scrollLeft = singleSetWidth;
        hasInitialized = true;
      }

      if (hasInitialized) {
        const isPaused = isHoveredRef.current || isScrollingRef.current;
        if (!isPaused) {
          container.scrollLeft += scrollSpeed;
        }

        // Infinite loop wrap check:
        // If we scroll past the middle set (exceeding singleSetWidth * 2), wrap back by subtracting singleSetWidth.
        // If we scroll left past the middle set (going below singleSetWidth / 2), wrap forward by adding singleSetWidth.
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= singleSetWidth / 2) {
          container.scrollLeft += singleSetWidth;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [mounted]);

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

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] text-sm font-bold uppercase tracking-widest mb-6"
            >
              <Star className="w-4 h-4 text-[#C89B3C]" />
              <span>Master Teachers</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[40px] md:text-[56px] font-extrabold text-[#2D1436] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Eminent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C89B3C] to-[#d6a94a]">Gurus</span>
            </motion.h2>
          </div>

          {/* Navigation Buttons for Desktop */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-[#C89B3C]/30 flex items-center justify-center text-[#2D1436] hover:bg-[#C89B3C] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm bg-white/50 backdrop-blur-sm z-20 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-inherit" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-[#C89B3C]/30 flex items-center justify-center text-[#2D1436] hover:bg-[#C89B3C] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm bg-white/50 backdrop-blur-sm z-20 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-inherit" />
            </button>
          </div>
        </div>

        {/* CSS for hiding scrollbar while preserving scroll functionality */}
        <style dangerouslySetInnerHTML={{ __html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />

        {/* Guru Slider */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
          className="no-scrollbar flex gap-6 md:gap-8 overflow-x-auto pb-10 pt-4 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 scroll-smooth"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none' 
          }}
        >
          {DISPLAY_GURUS.map((guru, idx) => (
            <motion.div
              key={`${guru.name}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % GURUS.length) * 0.05 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col items-center bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 pb-8 shadow-[0_15px_40px_-15px_rgba(45,20,54,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(200,155,60,0.15)] border border-white transition-all duration-500 relative overflow-hidden min-w-[280px] md:min-w-[320px] max-w-[320px] shrink-0"
            >
              {/* Subtle hover glow inside card */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#C89B3C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"></div>

              {/* Circular Portrait */}
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1.5 mb-2 bg-gradient-to-br from-[#C89B3C] to-[#2D1436] shadow-[0_10px_25px_rgba(200,155,60,0.3)] group-hover:shadow-[0_15px_35px_rgba(200,155,60,0.5)] transition-all duration-500 group-hover:scale-105">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                  <Image
                    src={guru.src}
                    alt={guru.name}
                    fill
                    sizes="(max-width: 768px) 144px, 176px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Discipline Badge (Overlapping) */}
              <div className="relative z-10 -mt-5 mb-6 bg-gradient-to-r from-[#2D1436] to-[#4A1D5A] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg border border-[#C89B3C]/30 flex items-center gap-2">
                <Music className="w-3.5 h-3.5 text-[#C89B3C]" />
                {guru.specialty}
              </div>

              {/* Name */}
              <h3 
                className="text-xl md:text-2xl font-extrabold text-[#2D1436] text-center group-hover:text-[#C89B3C] transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {guru.name}
              </h3>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
