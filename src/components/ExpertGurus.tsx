"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Award, Clock, Music } from "lucide-react";
import bgMandala from "../../background-template-with-mandala-designs/kvtx_cz5f_191104.jpg";

const GURUS = [
  { name: "Dr. Devagupthapu Sai Lahari", specialty: "Kuchipudi", src: "/photos/Dr. Devagupthapu Sai Lahari, Kuchipudi.jpeg", experience: "15+ Years", highlights: "National Awardee" },
  { name: "Kum. Pakhi", specialty: "Kathak", src: "/photos/Kum. Pakhi, Kathak.jpeg", experience: "8+ Years", highlights: "AIR Artist" },
  { name: "Kum. Pragya Tyagi", specialty: "Kathak", src: "/photos/Kum. Pragya Tyagi, Kathak.jpeg", experience: "10+ Years", highlights: "Senior Performer" },
  { name: "Kum. Riya", specialty: "Bollywood & Zumba", src: "/photos/Kum. Riya, Bollywood dance & Zumba.jpeg", experience: "7+ Years", highlights: "Certified Trainer" },
  { name: "Shri Chembai Srinivas", specialty: "Carnatic Violin", src: "/photos/Shri Chembai Srinivas, Carnatic Violin Keerthanams.jpeg", experience: "20+ Years", highlights: "A-Grade Artist" },
  { name: "Shri Dhruval Shah", specialty: "Chess", src: "/photos/Shri Dhruval Shah, Chess.jpeg", experience: "12+ Years", highlights: "FIDE Rated" },
  { name: "Shri Ganesh Singh", specialty: "Flute", src: "/photos/Shri Ganesh Singh, Flute.jpeg", experience: "15+ Years", highlights: "Sangeet Natak Akademi" },
  { name: "Shri Joel Mathew", specialty: "Hip-hop & Beatboxing", src: "/photos/Shri Joel Mathew, Bollywood dance Hip-hop Locking Beatboxing.jpeg", experience: "10+ Years", highlights: "Championship Winner" },
  { name: "Shri Venkat Narayana", specialty: "Carnatic Vocal & Keyboard", src: "/photos/Shri Venkat Narayana, Carnatic Vocal Keyboard.jpeg", experience: "18+ Years", highlights: "AIR Top Grade" },
  { name: "Shri. Rahul Sukun", specialty: "Guitar", src: "/photos/Shri. Rahul Sukun, Guitar.jpeg", experience: "10+ Years", highlights: "Trinity Grade 8" },
  { name: "Smt. Sandhya Saki", specialty: "Kuchipudi", src: "/photos/Smt. Sandhya Saki, Kuchipudi.jpeg", experience: "15+ Years", highlights: "Doordarshan Artist" },
  { name: "Smt. Shubha Dixit", specialty: "Hindustani Vocal", src: "/photos/Smt. Shubha Dixit, Hindustani Vocal.jpeg", experience: "25+ Years", highlights: "AIR A-Grade" },
  { name: "Smt. Vyshnavi Nambiar", specialty: "Kuchipudi", src: "/photos/Smt. Vyshnavi Nambiar, Kuchipudi.jpeg", experience: "12+ Years", highlights: "State Laureate" },
];

export default function ExpertGurus() {
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
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] text-sm font-bold uppercase tracking-widest mb-6"
          >
            <Star className="w-4 h-4" />
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
            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C89B3C] to-[#d6a94a]">Guru Gallery</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[#8B7355] max-w-3xl mx-auto text-lg md:text-xl font-medium"
          >
            Learn directly from passionate, highly trained masters of traditional Indian arts with decades of stage and teaching experience.
          </motion.p>
        </div>

        {/* Guru Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {GURUS.map((guru, idx) => (
            <motion.div
              key={guru.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col items-center bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-[0_15px_40px_-15px_rgba(45,20,54,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(200,155,60,0.15)] border border-white transition-all duration-500 relative overflow-hidden"
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
                className="text-xl md:text-2xl font-extrabold text-[#2D1436] text-center mb-5 group-hover:text-[#C89B3C] transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {guru.name}
              </h3>

              {/* Stats / Highlights */}
              <div className="w-full space-y-3 pt-4 border-t border-[#C89B3C]/10">
                <div className="flex items-center gap-3 text-sm text-[#5a4861] font-medium">
                  <div className="w-8 h-8 rounded-full bg-[#C89B3C]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#C89B3C]" />
                  </div>
                  <span>{guru.experience} Experience</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-[#5a4861] font-medium">
                  <div className="w-8 h-8 rounded-full bg-[#C89B3C]/10 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-[#C89B3C]" />
                  </div>
                  <span>{guru.highlights}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
