import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Music, Users, CheckCircle2, Award, Clock, Heart } from "lucide-react";

export default function ViolinPage() {
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
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">String Instruments</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
                Violin <br />
                <span className="text-secondary">Classes</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Master the art of violin playing under expert guidance. From posture and bowing techniques to expressive performances.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/admissions">
                  <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl w-full sm:w-auto">
                    Begin Your Journey
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
                  src="https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&fit=crop&q=80&w=800" 
                  alt="Violin Classes" 
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10 opacity-30 blur-2xl"></div>
            </div>
          </div>

          {/* About Violin Section */}
          <section className="bg-blue-50 rounded-[4rem] p-12 md:p-20 mb-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Heart className="text-primary" size={32} />
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">The Violin Experience</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The violin is often called the &quot;queen of instruments&quot; for its expressive capabilities. At Sri Kalavedika, we teach the violin with a blend of Carnatic and Western techniques, giving you a unique advantage.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Led by our expert guru from the lineage of legendary musicians, you&apos;ll learn not just techniques but the soul of violin playing.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Posture & Holding", desc: "Correct positioning for effortless playing." },
                    { title: "Bowing Techniques", desc: "Master the art of smooth bowing." },
                    { title: "Finger Placement", desc: "Precision intonation and scales." },
                    { title: "Raga Exploration", desc: "Dive deep into Carnatic ragas." },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                      <h4 className="text-xl font-bold text-primary mb-2">{stat.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Program Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              { icon: <Users />, label: "Target Age", value: "6 Years & Above" },
              { icon: <Clock />, label: "Duration", value: "6-12 Months" },
              { icon: <Award />, label: "Level", value: "Beginner to Advanced" },
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12">Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Holding the Violin & Bow",
                "Posture & Relaxation",
                "Basic Scales & Arpeggios",
                "Vibrato Techniques",
                "Shankarabharanam & Other Ragas",
                "Western Classical Pieces",
                "Gamaka Techniques",
                "Mannemittava Format",
                "Concert Performance"
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
