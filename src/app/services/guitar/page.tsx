import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Music, Award, BookOpen, Clock, Users, CheckCircle2, Star } from "lucide-react";

export default function GuitarPage() {
  const guitarTypes = [
    { name: "Acoustic Guitar", desc: "The classic steel-string guitar known for its bright, ringing tone. Perfect for folk, pop, and country music." },
    { name: "Acoustic-Electric Guitar", desc: "An acoustic guitar with a built-in pickup system, allowing it to be amplified for stage performances." },
    { name: "Classical Guitar", desc: "Features nylon strings and a wider neck, producing a warm, mellow sound essential for classical and flamenco styles." },
    { name: "Electric Guitar", desc: "Relies on external amplification to produce sound, offering endless possibilities with effects and sustain." },
    { name: "Flamenco Guitar", desc: "Similar to classical but built for a punchier, more percussive sound used in traditional Spanish dance music." },
    { name: "Fretless Guitar", desc: "Allows for smooth glissandos and microtonal play, offering a unique, voice-like expression." },
    { name: "Resonator Guitar", desc: "Uses metal cones to amplify sound, known for its distinctive loud and metallic tone often used in bluegrass and blues." },
    { name: "Bass Guitar", desc: "The rhythmic backbone of any band, providing the deep, low-end foundation across all genres." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden relative">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <Music className="text-secondary" size={24} />
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">Strings & Rhythm</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
                Guitar & <br />
                <span className="text-secondary">Advanced Guitar</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                From basic chords to advanced solos, master the most versatile instrument in the world with our expert-led global training program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/admissions">
                  <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl w-full sm:w-auto">
                    Enroll Now
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
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white animate-float">
                <img 
                  src="/Guitar & Advanced Guitar.jpeg" 
                  alt="Guitar & Advanced Guitar Learning" 
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10 opacity-30 blur-2xl"></div>
            </div>
          </div>

          {/* Guru Feature Section */}
          <section className="bg-primary/5 rounded-[4rem] p-12 md:p-20 mb-32 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-bold uppercase tracking-widest">
                  <Star size={16} />
                  <span>Advanced Guru</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Master Lucjan</h2>
                <p className="text-xl text-secondary font-bold italic">Expert Instructor from Poland</p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Learn from the best in the industry. Our Advanced Guitar program is led by <strong>Master Lucjan</strong> from Poland, bringing international expertise, unique techniques, and a global perspective to your musical journey.
                </p>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-secondary shadow-sm">
                  <p className="text-primary font-bold italic">
                    "Experience world-class guitar training that bridges cultural boundaries and elevates your musical expression."
                  </p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "Global Expertise", value: "Poland Roots" },
                  { label: "Level", value: "Basic to Advanced" },
                  { label: "Style", value: "Multi-Genre" },
                  { label: "Focus", value: "Technique & Performance" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <h4 className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">{stat.label}</h4>
                    <p className="text-xl font-bold text-primary">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Types of Guitars Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Explore the World of Guitars</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                There are mainly 8 types of guitars, each having their own unique sound and energy. Our program covers the nuances of each to help you find your voice.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guitarTypes.map((guitar, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <Music className="text-primary group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4">{guitar.name}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{guitar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              { icon: <Users />, label: "Target Age", value: "8 Years & Above" },
              { icon: <Clock />, label: "Duration", value: "Ongoing Mentorship" },
              { icon: <BookOpen />, label: "Sessions", value: "Personalized Batches" },
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

          {/* What You'll Learn */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12">Curriculum Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Basic Chord Progressions",
                "Advanced Soloing Techniques",
                "Music Theory & Notation",
                "Rhythm & Strumming Patterns",
                "Fingerstyle & Picking",
                "Scale Mastery",
                "Genre-Specific Styles",
                "Performance & Stage Presence",
                "Ear Training & Improvisation"
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
