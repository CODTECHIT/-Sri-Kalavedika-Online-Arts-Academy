"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

const heritageItems = [
  { 
    name: "Nataraja", 
    subtitle: "Cosmic Dance", 
    imagePath: "/Nataraja.jpg" 
  },
  { 
    name: "Veena", 
    subtitle: "Divine Strings", 
    imagePath: "/Veena.jpg" 
  },
  { 
    name: "Mridangam", 
    subtitle: "Ancient Rhythm", 
    imagePath: "/Mridangam.png" 
  },
  { 
    name: "Temple Bell", 
    subtitle: "Sacred Resonance", 
    imagePath: "/Temple Bell.png" 
  },
  { 
    name: "Lotus", 
    subtitle: "Purity & Grace", 
    imagePath: "/Lotus.png" 
  },
  { 
    name: "Mudras", 
    subtitle: "Soul Expressions", 
    imagePath: "/Mudras.png" 
  },
];

export default function CulturalHeritage() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#0d0520" }}>
      {/* Background Decorative Mandala */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full max-w-4xl" fill="none" stroke="#f5c842" strokeWidth="0.5">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="30" strokeDasharray="2 2" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2="50"
              y2="10"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "#f5c842", fontFamily: "var(--font-playfair)" }}
          >
            Our Heritage
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #c4882a)" }}></div>
            <span style={{ color: "#c4882a", fontFamily: "var(--font-cinzel)" }} className="tracking-[0.2em] uppercase text-sm">
              Rooted in Tradition
            </span>
            <div className="h-px w-12" style={{ background: "linear-gradient(270deg, transparent, #c4882a)" }}></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {heritageItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col items-center p-6 rounded-2xl border transition-all duration-500 overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                borderColor: "rgba(196,136,42,0.15)",
                backdropFilter: "blur(10px)"
              }}
            >
              {/* Hover Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, rgba(196,136,42,0.15) 0%, transparent 70%)"
                }}
              />

              {/* Icon Container */}
              <div 
                className="w-20 h-20 mb-5 rounded-full relative z-10 transition-transform duration-500 group-hover:scale-110 overflow-hidden"
                style={{
                  border: "2px solid rgba(196,136,42,0.4)",
                  boxShadow: "0 0 20px rgba(196,136,42,0.2), inset 0 0 15px rgba(196,136,42,0.3)"
                }}
              >
                <Image
                  src={item.imagePath}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>

              {/* Text */}
              <h3 
                className="text-lg font-bold mb-1 relative z-10 transition-colors duration-300"
                style={{ color: "#fdf6e3", fontFamily: "var(--font-playfair)" }}
              >
                {item.name}
              </h3>
              <p 
                className="text-xs text-center relative z-10"
                style={{ color: "rgba(253,246,227,0.5)", fontFamily: "var(--font-inter)" }}
              >
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
