"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Shri Kumar Kochu Krishnan",
    course: "Carnatic Vocal",
    rating: 5,
    text: "Chembai Srinivas is a great teacher who can impart lessons to any lay man without stressing out much.",
    image: "K",
    color: "bg-blue-100",
  },
  {
    name: "Amrita",
    course: "Dance Classes",
    rating: 5,
    text: "I am really happy with the dance classes, the way sir teaches small kids and makes difficult steps really easy for them.",
    image: "A",
    color: "bg-pink-100",
  },
  {
    name: "Praveen Ji",
    course: "Carnatic Music",
    rating: 5,
    text: "Guru Chembai Srinivas is a repository of knowledge with rich experience. He teaches patiently and keeps students' spirits high.",
    image: "P",
    color: "bg-yellow-100",
  },
  {
    name: "Swati Suresh",
    course: "Carnatic Vocal",
    rating: 5,
    text: "Chembai Srinivas sir is a wonderful and patient teacher with great in-depth knowledge about Carnatic music.",
    image: "S",
    color: "bg-purple-100",
  },
  {
    name: "Smt. Siva Kalyani",
    course: "Carnatic Music",
    rating: 5,
    text: "A valuable teacher who makes us know what we should truly know before we can sing. Chembai sir guides students with his full potential.",
    image: "SK",
    color: "bg-orange-100",
  },
  {
    name: "Rahul Sukun",
    course: "Featured Artist",
    rating: 5,
    text: "India's Got Talent Season 11 performer. Crafting melodies that touch the soul through sincere and honest musical performances.",
    image: "RS",
    color: "bg-green-100",
  },
  {
    name: "Arnob Basak",
    course: "Guitar & Music",
    rating: 5,
    text: "M.Phil in Comparative Literature, Music Director with 16+ years experience. Anandalok Puraskar winner and Mirchi Music Awards nominee.",
    image: "AB",
    color: "bg-red-100",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="w-[350px] shrink-0 bg-white p-6 rounded-[2rem] shadow-xl shadow-gray-100 border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:border-secondary/20 transition-all duration-300 mx-4">
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider rounded-full">
          {t.course}
        </span>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center font-bold text-primary text-lg ring-4 ring-white shadow-lg`}>
          {t.image}
        </div>
        <div>
          <div className="flex mb-1">
            {[...Array(t.rating)].map((_, j) => (
              <Star key={j} size={12} fill="#FFD700" color="#FFD700" />
            ))}
          </div>
          <h4 className="font-bold text-primary text-sm">{t.name}</h4>
        </div>
      </div>

      <div className="relative">
        <Quote className="absolute -top-2 -left-1 text-primary/10" size={24} />
        <p className="text-gray-600 text-sm leading-relaxed italic pl-6">
          &quot;{t.text}&quot;
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-gray-400">
        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
        <span className="text-xs font-medium">Sri Kalavedika Academy</span>
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative py-16 bg-gradient-to-b from-orange-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border-2 border-primary/20 mb-4">
            <Star className="text-primary" size={16} />
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Student Reviews</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary text-center">
            What Our Students & Artists Say
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {duplicatedTestimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
