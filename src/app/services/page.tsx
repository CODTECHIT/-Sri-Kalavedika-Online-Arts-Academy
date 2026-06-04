import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Music, Brain, Users, Sparkles, Globe, ShieldCheck } from "lucide-react";

const categories = [
  {
    title: "Performing Arts",
    icon: <Music className="text-primary" size={32} />,
    bgColor: "bg-blue-50",
    programs: [
      { name: "Classical Vocal Music", desc: "Learn the fundamentals and advanced techniques of Indian classical music from experienced instructors through structured online sessions." },
      { name: "Light Music & Bhajans", desc: "Develop singing skills through devotional songs, light music, and performance-oriented training." },
      { name: "Keyboard Classes", desc: "Master keyboard playing techniques, music theory, rhythm, and performance skills suitable for beginners and advanced learners." },
      { name: "Flute Classes", desc: "Learn flute playing with proper fingering, breathing techniques, and classical compositions." },
      { name: "Guitar & Advanced Guitar", desc: "From basics to advanced solos, master the strings with our expert guitarists." },
      { name: "Violin", desc: "Learn the art of violin playing with focus on posture, bowing, and classical melodies." },
      { name: "Dance (Classical & Contemporary)", desc: "Training in various dance forms focusing on expression, rhythm, coordination, and stage performance." },
      { name: "Theatre & Acting", desc: "Develop acting skills, voice modulation, expression, improvisation, and performance techniques." },
    ]
  },
  {
    title: "Intellectual Skills",
    icon: <Brain className="text-secondary" size={32} />,
    bgColor: "bg-orange-50",
    programs: [
      { name: "Chess Coaching", desc: "Enhance strategic thinking, concentration, and problem-solving skills through professional chess training." },
      { name: "Vedic Mathematics", desc: "Learn fast and effective mathematical techniques to improve calculation speed and accuracy." },
      { name: "Rubik's Cube Training", desc: "Master solving methods, speed cubing techniques, and logical thinking skills." },
      { name: "Abacus", desc: "Improve mental arithmetic and calculation speed through traditional abacus techniques." },
      { name: "Logical Reasoning", desc: "Develop analytical and critical thinking skills for academic and life success." },
      { name: "Memory Techniques", desc: "Learn scientifically proven methods to enhance memory and information retention." },
    ]
  },
  {
    title: "Personality Development",
    icon: <Users className="text-primary" size={32} />,
    bgColor: "bg-blue-50",
    programs: [
      { name: "Storytelling & Public Speaking", desc: "Build communication skills, confidence, creativity, and stage presence through engaging storytelling sessions." },
      { name: "Personality Development Programs", desc: "Improve communication, confidence, leadership qualities, and overall personal growth." },
      { name: "Stage Confidence", desc: "Overcome stage fright and learn to present yourself with poise and confidence." },
      { name: "Leadership & Interview Skills", desc: "Prepare for the future with essential leadership qualities and professional interview techniques." },
    ]
  },
  {
    title: "Cultural & Online Services",
    icon: <Sparkles className="text-secondary" size={32} />,
    bgColor: "bg-orange-50",
    programs: [
      { name: "Festival Celebrations & Events", desc: "Join our vibrant community for festival celebrations, competitions, and annual day programs." },
      { name: "Live Online Classes", desc: "Interactive, real-time sessions with expert instructors from the comfort of your home." },
      { name: "One-on-One Training", desc: "Personalized attention with private sessions tailored to your specific goals." },
      { name: "Summer Camps & Workshops", desc: "Engaging short-term programs to explore new skills during vacations and weekends." },
      { name: "Certification Programs", desc: "Earn recognized certificates upon successful completion of our structured courses." },
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden relative">
      {/* Background Decorative Waves */}
      <div className="absolute top-40 right-[-10%] w-[40%] opacity-10 pointer-events-none animate-wave">
        <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100C100 20 200 180 300 100C400 20 500 180 600 100C700 20 800 180 900 100" stroke="#002366" strokeWidth="40" strokeLinecap="round"/>
        </svg>
      </div>
      
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              Our Programs & Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nurturing talent across the globe through expert-led online training in Performing Arts, Intellectual Skills, and Personal Growth.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-20">
            {categories.map((category, idx) => (
              <section key={idx}>
                <div className="flex items-center gap-4 mb-10">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-primary">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {category.programs.map((program, pIdx) => (
                    <div 
                      key={pIdx}
                      className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col"
                    >
                      <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4 group-hover:text-secondary transition-colors">
                        {program.name}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                        {program.desc}
                      </p>
                      <div className="mt-auto flex items-center text-secondary font-bold text-xs md:text-sm cursor-pointer hover:underline">
                        Learn More →
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Features */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 bg-primary rounded-[3rem] p-12 md:p-20 text-white">
            <div className="flex flex-col items-center text-center">
              <Globe size={48} className="text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-4">Global Reach</h3>
              <p className="text-blue-100 text-sm">Serving students worldwide from the cultural heart of India.</p>
            </div>
            <div className="flex flex-col items-center text-center border-y md:border-y-0 md:border-x border-white/10 py-12 md:py-0 md:px-12">
              <ShieldCheck size={48} className="text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-4">Certified Training</h3>
              <p className="text-blue-100 text-sm">Structured syllabus and recognized certifications for all programs.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users size={48} className="text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-4">Expert Faculty</h3>
              <p className="text-blue-100 text-sm">Highly experienced and passionate instructors for every discipline.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
