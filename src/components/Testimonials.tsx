"use client";

import { Star, Award, MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "Shri Kumar Kochu Krishnan",
    course: "Carnatic Vocal",
    rating: 5,
    text: "Chembai Srinivas is a great teacher who can impart lessons to any lay man without stressing out much. I was little weak in sticking to swara sthanas due to conceptual problems, but he cleared my queries easily. I am now in a position to sing ragas in the appropriate way.",
    image: "K",
    color: "bg-blue-100",
  },
  {
    name: "Amrita",
    course: "Dance Classes",
    rating: 5,
    text: "I am really happy with the dance classes, the way sir teaches small kids and even he makes difficult steps really easy for them. My little one looks forward to his dance class everyday.",
    image: "A",
    color: "bg-pink-100",
  },
  {
    name: "Praveen Ji",
    course: "Carnatic Music",
    rating: 5,
    text: "Guru Chembai Srinivas is a repository of knowledge with rich experience. He teaches patiently and keeps the students' spirits high by motivating them constantly. Students from ages 20 to 60 are treated with equal respect and dignity.",
    image: "P",
    color: "bg-yellow-100",
  },
  {
    name: "Swati Suresh",
    course: "Carnatic Vocal",
    rating: 5,
    text: "Chembai Srinivas sir is a wonderful and patient teacher. He has great in-depth knowledge about Carnatic music and his classes are a real joy to attend. I would highly recommend sir's classes to anyone exploring music.",
    image: "S",
    color: "bg-purple-100",
  },
  {
    name: "Smt. Siva Kalyani",
    course: "Carnatic Music",
    rating: 5,
    text: "A valuable teacher who makes us know what we should truly know before we can sing. Chembai sir has all the efficiencies in his teachings where a student is guided with his full potential.",
    image: "SK",
    color: "bg-orange-100",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-orange-50/30 to-white overflow-hidden" id="testimonials">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-[-5%] w-[110%] opacity-10 -z-0 pointer-events-none">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 100C100 160 300 40 500 100C700 160 900 40 1100 100C1300 160 1500 40 1700 100" stroke="#FF9933" strokeWidth="60" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Sri Kalavedika Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border-2 border-primary/20">
            <Award className="text-primary" size={20} />
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Sri Kalavedika Student Reviews</span>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="text-secondary" size={24} />
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Real Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-center max-w-2xl">
            Hear from our dedicated learners who have transformed their skills and passion through our expert-guided programs.
          </p>
        </div>

        {/* Testimonial Marquee */}
        <div className="relative mt-12 overflow-hidden py-10">
          <div className="animate-marquee gap-8 will-change-transform">
            {/* Double the testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[350px] md:w-[450px] bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-100 flex flex-col items-start gap-4 border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:border-secondary/20 transition-all duration-300 shrink-0"
              >
                {/* Course Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider rounded-full">
                    {t.course}
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <div className={`w-14 h-14 rounded-full ${t.color} flex items-center justify-center font-bold text-primary text-xl ring-4 ring-white shadow-lg`}>
                    {t.image}
                  </div>
                  <div>
                    <div className="flex mb-1">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={14} fill="#FFD700" color="#FFD700" />
                      ))}
                    </div>
                    <h4 className="font-bold text-primary">{t.name}</h4>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  &quot;{t.text}&quot;
                </p>

                {/* Sri Kalavedika Watermark */}
                <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-xs font-medium">Sri Kalavedika Academy</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-orange-50/30 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center mt-16">
          <p className="text-gray-500 mb-6 text-center">Join thousands of satisfied students worldwide</p>
          <a 
            href="/admissions"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl"
          >
            <Award size={20} />
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
