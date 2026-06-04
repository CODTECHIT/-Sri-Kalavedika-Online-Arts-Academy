"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ariana",
    rating: 5,
    text: "After joining on TalentGum my daughter is confident about dancing and is able to perform well.",
    image: "A",
    color: "bg-pink-100",
  },
  {
    name: "Abhin Papuai",
    rating: 5,
    text: "We are extremely satisfied with the TalentGum's extra-curricular activity classes. TalentGum's classes have brought a change in my child's life. He is more confident in all school activities, dance & public speaking.",
    image: "B",
    color: "bg-yellow-100",
  },
  {
    name: "Athira Pradeep",
    rating: 5,
    text: "Our daughter Athira is learning Bollywood dance for the first time and she really likes it. Her teacher is doing a great job!",
    image: "C",
    color: "bg-purple-100",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-gray-50/50 overflow-hidden">
      {/* Background Decorative Wave */}
      <div className="absolute top-20 left-[-5%] w-[110%] opacity-5 -z-0 pointer-events-none animate-wave">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 100C100 160 300 40 500 100C700 160 900 40 1100 100C1300 160 1500 40 1700 100" stroke="#FF9933" strokeWidth="60" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Google Rating */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </div>
            <span className="font-bold text-gray-800">4.4/5</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
              ))}
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy text-center">
            Trusted by 10,000+ parents across 50 countries
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-100 flex flex-col items-start gap-4 border border-gray-50 relative overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full ${t.color} flex items-center justify-center font-bold text-navy text-xl`}>
                  {t.image}
                </div>
                <div>
                  <div className="flex mb-1">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={14} fill="#FFD700" color="#FFD700" />
                    ))}
                  </div>
                  <h4 className="font-bold text-navy">{t.name}</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                &quot;{t.text}&quot;
              </p>
              {/* Decorative wave */}
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <path d="M0 20 Q10 10 20 20 T40 20" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <div className="w-3 h-3 rounded-full bg-gray-200"></div>
          <div className="w-3 h-3 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
}
