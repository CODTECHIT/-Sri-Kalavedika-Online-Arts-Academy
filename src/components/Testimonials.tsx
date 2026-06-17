"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Shri Kumar Kochu Krishnan",
    course: "Carnatic Vocal",
    rating: 5,
    text: "Chembai Srinivas is a great teacher who can impart lessons to any lay man without stressing out much. I was little weak in sticking to swara sthanas due to conceptual problems, but he cleared my queries easily. I am now in a position to sing ragas in the appropriate way.",
    image: "K",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Amrita",
    course: "Dance Classes",
    rating: 5,
    text: "I am really happy with the dance classes, the way sir teaches small kids and even he makes difficult steps really easy for them. My little one looks forward to his dance class everyday.",
    image: "A",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Praveen Ji",
    course: "Carnatic Music",
    rating: 5,
    text: "Guru Chembai Srinivas is a repository of knowledge with rich experience. He teaches patiently and keeps the students' spirits high by motivating them constantly. Students from ages 20 to 60 are treated with equal respect.",
    image: "P",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Swati Suresh",
    course: "Carnatic Vocal",
    rating: 5,
    text: "Chembai Srinivas sir is a wonderful and patient teacher. He has great in-depth knowledge about Carnatic music and his classes are a real joy to attend. I would highly recommend sir's classes to anyone exploring music.",
    image: "S",
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "Smt. Siva Kalyani",
    course: "Carnatic Music",
    rating: 5,
    text: "A valuable teacher who makes us know what we should truly know before we can sing. Chembai sir has all the efficiencies in his teachings where a student is guided with his full potential.",
    image: "SK",
    color: "from-teal-500 to-emerald-600",
  },
  {
    name: "Rahul Sukun",
    course: "Featured Guitarist",
    rating: 5,
    text: "India's Got Talent Season 11 performer. Crafting melodies that touch the soul through sincere and honest musical performances. The academy has been instrumental in refining my craft.",
    image: "RS",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Arnob Basak",
    course: "Guitar & Music Director",
    rating: 5,
    text: "M.Phil in Comparative Literature, Music Director with 16+ years experience. Anandalok Puraskar winner and Mirchi Music Awards nominee. Kalavedika's teaching methodology is world-class.",
    image: "AB",
    color: "from-red-500 to-pink-600",
  },
];

export default function Testimonials() {
  const [positionIdx, setPositionIdx] = useState(0);

  const handleNext = () => {
    setPositionIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setPositionIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-bg-alt">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-secondary/5 rounded-full blur-[120px] -z-10 animate-blob"></div>
      <div className="absolute bottom-1/4 left-0 w-[35vw] h-[35vw] bg-primary/5 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: "2s" }}></div>

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
            <span>Testimonials</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-primary mb-6"
          >
            Stories of <span className="text-secondary">Artistic</span> Growth
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Hear from our passionate learners who are exploring Indian classical music, instruments, dance, and cognitive crafts.
          </motion.p>
        </div>

        {/* 3D Carousel Stage */}
        <div className="relative h-[480px] md:h-[420px] flex flex-col items-center justify-center">
          <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
            
            {testimonials.map((t, idx) => {
              // Calculate offset relative to positionIdx
              let offset = idx - positionIdx;
              
              // Handle wrap-around for circular carousel behavior
              if (offset < -Math.floor(testimonials.length / 2)) {
                offset += testimonials.length;
              } else if (offset > Math.floor(testimonials.length / 2)) {
                offset -= testimonials.length;
              }

              const isActive = offset === 0;
              const isRight = offset === 1;
              const isLeft = offset === -1;
              const isVisible = isActive || isRight || isLeft;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={t.name}
                  style={{ originY: 0.5 }}
                  animate={{
                    x: isActive ? 0 : isRight ? "40%" : "-40%",
                    scale: isActive ? 1 : 0.85,
                    zIndex: isActive ? 30 : 20,
                    opacity: isActive ? 1 : 0.4,
                    rotateY: isActive ? 0 : isRight ? -15 : 15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                  }}
                  className="absolute w-[90%] md:w-[60%] lg:w-[50%] p-8 md:p-10 rounded-[2.5rem] bg-white border border-white/50 shadow-[0_30px_60px_-15px_rgba(11,31,94,0.06)] flex flex-col justify-between h-[360px] md:h-[320px] cursor-pointer select-none"
                  onClick={() => {
                    if (isRight) handleNext();
                    if (isLeft) handlePrev();
                  }}
                >
                  {/* Quote watermark */}
                  <Quote className="absolute top-8 right-8 text-primary/5 w-16 h-16 pointer-events-none" />

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>

                  {/* Body Text */}
                  <p className="text-gray-600 text-sm md:text-base italic leading-relaxed flex-grow">
                    &quot;{t.text}&quot;
                  </p>

                  {/* Profile & Course */}
                  <div className="flex items-center gap-4 border-t border-primary/5 pt-6 mt-6 shrink-0">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${t.color} text-white flex items-center justify-center font-bold font-outfit text-base shadow-md`}>
                      {t.image}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-primary text-sm md:text-base leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-xs text-secondary font-bold uppercase tracking-wider mt-0.5">
                        {t.course}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 mt-6">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary bg-white shadow-md hover:bg-primary hover:text-white transition-all cursor-pointer active:scale-90"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPositionIdx(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    positionIdx === idx ? "w-6 bg-primary" : "w-2.5 bg-primary/20"
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary bg-white shadow-md hover:bg-primary hover:text-white transition-all cursor-pointer active:scale-90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
