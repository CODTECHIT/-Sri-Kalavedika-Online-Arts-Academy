"use client";

import Link from "next/link";

const courses = [
  {
    title: "Classical Vocal Music",
    description: "Learn fundamentals and advanced techniques of Indian classical music from expert instructors.",
    icon: "🎤",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
  },
  {
    title: "Keyboard & Piano",
    description: "Master playing techniques, music theory, and performance skills for all levels.",
    icon: "🎹",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
  },
  {
    title: "Light Music & Bhajans",
    description: "Master soulful melodies and devotional songs with our expert performance-oriented training.",
    icon: "🎶",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100",
  },
  {
    title: "Chess Coaching",
    description: "Enhance strategic thinking and problem-solving through professional chess training.",
    icon: "♟️",
    bgColor: "bg-gray-50",
    iconBg: "bg-gray-100",
  },
  {
    title: "Vedic Mathematics",
    description: "Fast and effective mathematical techniques to improve calculation speed and accuracy.",
    icon: "🔢",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-100",
  },
  {
    title: "Dance (Classical & Contemporary)",
    description: "Training in various dance forms focusing on expression, rhythm, and coordination.",
    icon: "💃",
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-100",
  },
  {
    title: "Theatre & Acting",
    description: "Develop acting skills, voice modulation, expression, and performance techniques.",
    icon: "🎭",
    bgColor: "bg-indigo-50",
    iconBg: "bg-indigo-100",
  },
  {
    title: "Flute Classes",
    description: "Learn flute playing with proper fingering, breathing techniques, and classical compositions.",
    icon: "🪈",
    bgColor: "bg-green-50",
    iconBg: "bg-green-100",
  },
  {
    title: "Guitar & Advanced Guitar",
    description: "Master guitar playing techniques from basics to advanced solos with our expert guitarists.",
    icon: "🎸",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
  },
  {
    title: "Rubik's Cube Training",
    description: "Master solving methods, speed cubing techniques, and logical thinking skills.",
    icon: "🧊",
    bgColor: "bg-red-50",
    iconBg: "bg-red-100",
  },
  {
    title: "Storytelling & Public Speaking",
    description: "Build communication skills, confidence, and stage presence through engaging sessions.",
    icon: "🗣️",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100",
  },
];

export default function PopularCourses() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-16">
          Explore Our Expert-Led Programs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, i) => (
            <Link
              key={i}
              href={
                course.title === "Classical Vocal Music" ? "/services/carnatic-vocal" :
                course.title === "Guitar & Advanced Guitar" ? "/services/guitar" :
                course.title === "Light Music & Bhajans" ? "/services/light-music" :
                course.title === "Keyboard & Piano" ? "/services/keyboard" :
                course.title === "Flute Classes" ? "/services/flute" :
                course.title === "Dance (Classical & Contemporary)" ? "/services/dance" :
                course.title === "Theatre & Acting" ? "/services/theatre" :
                course.title === "Chess Coaching" ? "/services/chess" :
                course.title === "Vedic Mathematics" ? "/services/vedic-maths" :
                course.title === "Rubik's Cube Training" ? "/services/rubiks-cube" :
                course.title === "Storytelling & Public Speaking" ? "/services/storytelling" :
                "#"
              }
              className={`${course.bgColor} rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300 shadow-sm`}
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${course.iconBg} rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 shadow-inner`}>
                {course.icon}
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-primary mb-3 md:mb-4 h-12 md:h-14 flex items-center">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-xs md:text-sm">
                {course.description}
              </p>
              <button className="bg-white text-primary font-bold px-6 md:px-8 py-2 md:py-3 rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-all mt-auto group-hover:bg-primary group-hover:text-white text-sm md:text-base">
                View Details
              </button>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a href="/services" className="border-2 border-primary text-primary font-bold px-10 py-4 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm">
            View All Services & Programs
          </a>
        </div>
      </div>
    </section>
  );
}
