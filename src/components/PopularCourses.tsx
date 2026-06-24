"use client";

import Link from "next/link";

const courses = [
  {
    title: "Classical Vocal Music",
    description: "Learn fundamentals and advanced techniques of Indian classical music from expert instructors.",
    icon: "🎤",
    image: "https://images.unsplash.com/photo-1516280440502-d2fdaa0bf5e2?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
  },
  {
    title: "Keyboard & Piano",
    description: "Master playing techniques, music theory, and performance skills for all levels.",
    icon: "🎹",
    image: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
  },
  {
    title: "Light Music & Bhajans",
    description: "Master soulful melodies and devotional songs with our expert performance-oriented training.",
    icon: "🎶",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100",
  },
  {
    title: "Chess Coaching",
    description: "Enhance strategic thinking and problem-solving through professional chess training.",
    icon: "♟️",
    image: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-gray-50",
    iconBg: "bg-gray-100",
  },
  {
    title: "Vedic Mathematics",
    description: "Fast and effective mathematical techniques to improve calculation speed and accuracy.",
    icon: "🔢",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-100",
  },
  {
    title: "Dance (Classical & Contemporary)",
    description: "Training in various dance forms focusing on expression, rhythm, and coordination.",
    icon: "💃",
    image: "https://images.unsplash.com/photo-1542459458-7e3f4e24231b?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-100",
  },
  {
    title: "Theatre & Acting",
    description: "Develop acting skills, voice modulation, expression, and performance techniques.",
    icon: "🎭",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-indigo-50",
    iconBg: "bg-indigo-100",
  },
  {
    title: "Flute Classes",
    description: "Learn flute playing with proper fingering, breathing techniques, and classical compositions.",
    icon: "🪈",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-green-50",
    iconBg: "bg-green-100",
  },
  {
    title: "Guitar & Advanced Guitar",
    description: "Master guitar playing techniques from basics to advanced solos with our expert guitarists.",
    icon: "🎸",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
  },
  {
    title: "Rubik's Cube Training",
    description: "Master solving methods, speed cubing techniques, and logical thinking skills.",
    icon: "🧩",
    image: "https://images.unsplash.com/photo-1591991564021-0662a8573199?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-red-50",
    iconBg: "bg-red-100",
  },
  {
    title: "Storytelling & Public Speaking",
    description: "Build communication skills, confidence, and stage presence through engaging sessions.",
    icon: "🗣️",
    image: "https://images.unsplash.com/photo-1475721025505-c315f4206588?auto=format&fit=crop&q=80&w=800",
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
                course.title === "Light Music & Bhajans" ? "/services/bhajans" :
                course.title === "Keyboard & Piano" ? "/services/keyboard" :
                course.title === "Flute Classes" ? "/services/flute" :
                course.title === "Dance (Classical & Contemporary)" ? "/services/bharatanatyam" :
                course.title === "Theatre & Acting" ? "/services/recitals" :
                course.title === "Chess Coaching" ? "/services/chess" :
                course.title === "Vedic Mathematics" ? "/services/vedic-maths" :
                course.title === "Rubik's Cube Training" ? "/services/rubiks-cube" :
                course.title === "Storytelling & Public Speaking" ? "/services/creative-art" :
                "#"
              }
              className={`${course.bgColor} rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col items-center text-center group hover:scale-[1.02] transition-transform duration-300 shadow-sm hover:shadow-xl`}
            >
              <div className="w-full h-48 relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 w-10 h-10 ${course.iconBg} backdrop-blur-sm bg-opacity-90 rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                  {course.icon}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col items-center w-full flex-grow">
                <h3 className="text-lg md:text-xl font-extrabold text-primary mb-3 h-12 flex items-center">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-xs md:text-sm">
                  {course.description}
                </p>
                <button className="bg-white text-primary font-bold px-6 py-3 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all mt-auto group-hover:bg-primary group-hover:text-white group-hover:border-primary text-sm w-full">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link href="/services" className="border-2 border-primary text-primary font-bold px-10 py-4 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm">
            View All Courses & Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
