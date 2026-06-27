import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Music, BookOpen, Clock, Users, CheckCircle2, Star } from "lucide-react";

export default function KeyboardPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <Music className="text-secondary" size={24} />
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">Keyboard & Piano Classes</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
                Keyboard <br />
                <span className="text-secondary">& Piano Classes</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Embark on a musical journey with our comprehensive keyboard and piano training, from foundational scales to mesmerizing classical and contemporary performances.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/admissions">
                  <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl w-full sm:w-auto">
                    Book Demo Class
                  </button>
                </Link>
                <Link href="/services">
                  <button className="bg-white text-primary border-2 border-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-light-blue transition-all w-full sm:w-auto">
                    View All Courses
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-xl">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-float bg-white">
                <img 
                  src="/keyboard.jpeg" 
                  alt="Keyboard Classes" 
                  className="w-full h-auto block"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10 opacity-30 blur-2xl"></div>
            </div>
          </div>

          {/* Course Overview Section */}
          <section className="bg-primary/5 rounded-[4rem] p-12 md:p-20 mb-32 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-bold uppercase tracking-widest">
                  <Star size={16} />
                  <span>Course Focus</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Keyboard & Piano Classes</h2>
                <p className="text-xl text-secondary font-bold italic">Mastering Harmony and Rhythm</p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our Keyboard and Piano program is structured to build strong foundational playing habits. We focus on proper hand positioning, finger dexterity, rhythm synchronization, and sheet music sight-reading, bridging classical theory with modern compositions.
                </p>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-secondary shadow-sm">
                  <p className="text-primary font-bold italic">
                    &ldquo;Develop musical literacy, structural composition skills, and performance confidence with step-by-step guidance tailored for all skill levels.&rdquo;
                  </p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "All Skill Levels", value: "Beginner to Advanced" },
                  { label: "Instruction", value: "Interactive & Live" },
                  { label: "Core Method", value: "Western & Indian Fusion" },
                  { label: "Key Focus", value: "Technique & Notation" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <h4 className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">{stat.label}</h4>
                    <p className="text-xl font-bold text-primary">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Learn Keyboard & Piano */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Why Choose Keyboard & Piano?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                The keyboard is one of the most expressive and versatile instruments. It serves as the perfect foundation for learning music theory, developing motor coordination, and exploring diverse musical styles.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Cognitive Benefits", desc: "Playing the keyboard enhances spatial-temporal reasoning, concentration, and fine motor skills." },
                { title: "Western & Indian Fusion", desc: "Learn to read Western sheet music while also understanding Indian classical chord mappings." },
                { title: "Creative Composition", desc: "Gain the skills to arrange, compose, and improvise your own melodies and song backups." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                  <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              { icon: <Users />, label: "Target Age", value: "5 Years & Above" },
              { icon: <Clock />, label: "Duration", value: "6-12 Months" },
              { icon: <BookOpen />, label: "Format", value: "Online Live Classes" },
            ].map((detail, i) => (
              <div key={i} className="flex flex-col items-center p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  {detail.icon}
                </div>
                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2">{detail.label}</span>
                <h4 className="text-xl font-bold text-primary">{detail.value}</h4>
              </div>
            ))}
          </div>

          {/* Curriculum */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12">Curriculum Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Correct posture and finger positioning",
                "Basic scales (Major, Minor, and Pentatonic)",
                "Sight-reading Western music notation",
                "Chords and chord progressions",
                "Rhythm coordination and metronome training",
                "Playing by ear (Deconstructing songs)",
                "Keyboard arrangements and tone selection",
                "Accompanying vocalists or other instruments",
                "Performance confidence and repertoire building"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white border border-gray-50 rounded-2xl shadow-sm text-left">
                  <CheckCircle2 className="text-secondary shrink-0" size={20} />
                  <span className="font-bold text-primary text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
