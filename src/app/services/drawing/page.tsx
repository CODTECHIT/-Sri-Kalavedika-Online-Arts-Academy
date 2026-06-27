import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Paintbrush, Users, BookOpen, Clock, CheckCircle2 } from "lucide-react";

export default function DrawingPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <Paintbrush className="text-secondary" size={24} />
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">Fine Arts</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
                Drawing & <br />
                <span className="text-secondary">Sketching</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Unlock your creative potential. Learn the foundational skills of drawing, from basic lines and shapes to realistic shading and perspective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/admissions">
                  <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl w-full sm:w-auto">
                    Book Free Demo
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
                  src="/drawing and sketching.jpeg" 
                  alt="Drawing and Sketching" 
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
                <Paintbrush className="text-primary" size={32} />
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">The Foundation of Art</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Drawing is the core foundation for all visual arts. Before you can paint a masterpiece or design a digital character, you must understand how to observe the world and translate it onto paper.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our drawing classes are designed for all levels, focusing on hand-eye coordination, understanding light and shadow, and developing a unique artistic style using pencils, charcoal, and ink.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Observation Skills", desc: "Learn to see the world like an artist." },
                    { title: "Motor Control", desc: "Improve fine motor skills and precision." },
                    { title: "Patience & Focus", desc: "Drawing requires concentration and calm." },
                    { title: "Creative Outlet", desc: "A healthy way to express emotions and ideas." },
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
              { icon: <Users />, label: "Target Age", value: "4 Years & Above" },
              { icon: <Clock />, label: "Duration", value: "Ongoing Batches" },
              { icon: <BookOpen />, label: "Format", value: "Interactive Group Classes" },
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
                "Holding the pencil and strokes",
                "Basic geometric shapes",
                "Understanding proportions",
                "Light, Shadow, and Shading techniques",
                "Still Life sketching",
                "One and Two-point perspective",
                "Human anatomy and portraits basics",
                "Nature and landscape sketching",
                "Charcoal and pen techniques"
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
