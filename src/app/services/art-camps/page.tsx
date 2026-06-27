import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sun, Users, BookOpen, Clock, CheckCircle2 } from "lucide-react";

export default function ArtCampsPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <Sun className="text-secondary" size={24} />
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">Seasonal Programs</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
                Seasonal Art <br />
                <span className="text-secondary">Camps</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Make your school holidays productive and fun! Our immersive seasonal art camps offer a crash course in multiple disciplines, from music to crafts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/admissions">
                  <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl w-full sm:w-auto">
                    Register for Camp
                  </button>
                </Link>
                <Link href="/services">
                  <button className="bg-white text-primary border-2 border-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-light-blue transition-all w-full sm:w-auto">
                    Explore Other Courses
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-xl">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-float bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1544391496-1ca7c974957e?auto=format&fit=crop&q=80&w=800" 
                  alt="Summer Art Camps" 
                  className="w-full h-auto block"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10 opacity-30 blur-2xl"></div>
            </div>
          </div>

          {/* About Section */}
          <section className="bg-blue-50 rounded-[4rem] p-12 md:p-20 mb-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Sun className="text-primary" size={32} />
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">An Immersive Experience</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our seasonal camps (Summer, Winter, and Spring breaks) are designed to provide students with a holistic exposure to various arts in a condensed, highly engaging format.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Instead of focusing on just one subject, campers get to try their hands at music, dance, crafts, and mind games, helping them discover hidden talents and new passions.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Exploration", desc: "Try multiple arts before committing to a long-term course." },
                    { title: "Socializing", desc: "Make new friends who share similar creative interests." },
                    { title: "Productive Break", desc: "Keep kids engaged away from screens during holidays." },
                    { title: "Showcase", desc: "Ends with a mini-showcase for parents." },
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
              { icon: <Users />, label: "Target Age", value: "4-15 Years" },
              { icon: <Clock />, label: "Duration", value: "2 to 4 Weeks" },
              { icon: <BookOpen />, label: "Format", value: "Intensive Daily Sessions" },
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12">Camp Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Introduction to Vocals & Rhythm",
                "Basic Dance Grooves",
                "Origami and Paper Crafts",
                "Intro to Rubik's Cube",
                "Storytelling and Enacting",
                "DIY Art Projects",
                "Fun Memory Games",
                "Team building exercises",
                "Grand Finale Performance"
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
